import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateCertificadoDto } from './dto/create-certificados.dto';
import { UpdateCertificadoDto } from './dto/update-certificados.dto';
import { PrismaService } from '../prisma/prisma.service';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class CertificadoService {
  constructor(
    private prisma: PrismaService,
    private kafkaService: KafkaService,
  ) {}

  async create(createCertificadoDto: CreateCertificadoDto) {
    try {
      const { usuarioId, cursoId } = createCertificadoDto;

      // 1. Buscar o curso e suas aulas
      const curso = await this.prisma.curso.findUnique({
        where: { id: cursoId },
        include: {
          modulos: {
            include: {
              aulas: true,
            },
          },
        },
      });

      if (!curso) {
        throw new NotFoundException('Curso informado não foi encontrado.');
      }

      // Buscar o usuário
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: usuarioId },
        select: { id: true, role: true, nomeCompleto: true },
      });

      if (!usuario) {
        throw new NotFoundException('Aluno informado não foi encontrado.');
      }

      // Extrair IDs de todas as aulas do curso
      const todasAulas = curso.modulos.flatMap(m => m.aulas);
      const totalAulas = todasAulas.length;

      if (totalAulas > 0) {
        const idsAulas = todasAulas.map(a => a.id);

        // Contar quantas aulas o aluno marcou como "Concluído"
        const aulasConcluidas = await this.prisma.progressoAula.count({
          where: {
            usuarioId,
            aulaId: { in: idsAulas },
            status: 'Concluído',
          },
        });

        if (aulasConcluidas < totalAulas) {
          const porcentagem = Math.round((aulasConcluidas / totalAulas) * 100);
          throw new ConflictException(
            `Não é possível emitir o certificado do curso "${curso.titulo}". Você concluiu ${aulasConcluidas} de ${totalAulas} aulas (${porcentagem}%). Conclua todas as aulas para liberar seu certificado!`
          );
        }
      }

      // 2. Regra Estrita de Cotas de Certificado por Assinatura de Plano:
      // Cada assinatura de um plano dá direito à emissão de 1 certificado por curso daquele plano.
      // Ao esgotar os certificados dos cursos daquela assinatura, só é possível tirar mais assinando novamente.
      if (usuario.role !== 'ADMIN') {
        const assinaturasDoAluno = await this.prisma.assinatura.findMany({
          where: { usuarioId },
          include: {
            plano: {
              include: {
                planosCursos: true,
              },
            },
          },
          orderBy: { id: 'asc' },
        });

        // Filtra as assinaturas cujos planos cobrem este curso
        const assinaturasComEsseCurso = assinaturasDoAluno.filter((ass) => {
          if (!ass.plano) return false;
          const cursosDoPlano = ass.plano.planosCursos || [];
          if (cursosDoPlano.length === 0) {
            // Planos com acesso irrestrito/global cobrem todos os cursos
            return true;
          }
          return cursosDoPlano.some((pc) => pc.cursoId === cursoId);
        });

        if (assinaturasComEsseCurso.length === 0) {
          throw new ConflictException(
            `Não é possível emitir o certificado. Você não possui nenhuma assinatura para um plano que inclua o curso "${curso.titulo}". Assine um plano para liberar seus certificados!`
          );
        }

        // Quantos certificados este aluno já emitiu para este curso?
        const certificadosJaEmitidos = await this.prisma.certificado.count({
          where: {
            usuarioId,
            cursoId,
          },
        });

        if (certificadosJaEmitidos >= assinaturasComEsseCurso.length) {
          throw new ConflictException(
            `Você já emitiu o certificado do curso "${curso.titulo}" para a sua assinatura atual (${certificadosJaEmitidos}/${assinaturasComEsseCurso.length}). Para emitir um novo certificado deste curso, é necessário realizar uma nova assinatura do plano.`
          );
        }
      }

      // 3. Atualizar a matrícula do aluno como concluída
      await this.prisma.matricula.updateMany({
        where: { usuarioId, cursoId },
        data: { dataConclusao: new Date() },
      });

      // 3. Gerar código de verificação único caso não fornecido
      const codigoVerificacao =
        createCertificadoDto.codigoVerificacao || `CERT-${Date.now()}-${usuarioId}-${cursoId}`;

      const data: any = {
        ...createCertificadoDto,
        codigoVerificacao,
        dataEmissao: (createCertificadoDto as any).dataEmissao ? new Date((createCertificadoDto as any).dataEmissao) : new Date(),
      };

      const novoCertificado = await this.prisma.certificado.create({
        data,
        include: { usuario: true, curso: true, trilha: true },
      });

      // 📨 Publicar Notificação de Certificado Emitido via Kafka
      await this.kafkaService.publicarNotificacao({
        usuarioId: novoCertificado.usuarioId,
        roleDestino: 'USER',
        titulo: '🏆 Certificado Oficial Conquistado!',
        mensagem: `Parabéns! Você concluiu com sucesso o curso "${novoCertificado.curso?.titulo || ''}". Seu certificado (${novoCertificado.codigoVerificacao}) já está emitido!`,
        tipo: 'CERTIFICADO',
        dadosExtras: {
          certificadoId: novoCertificado.id,
          codigoVerificacao: novoCertificado.codigoVerificacao,
        },
      });

      // Notificação para a Administração
      await this.kafkaService.publicarNotificacao({
        usuarioId: null,
        roleDestino: 'ADMIN',
        titulo: '📜 Novo Certificado Conquistado',
        mensagem: `O aluno "${novoCertificado.usuario?.nomeCompleto || ''}" concluiu o curso "${novoCertificado.curso?.titulo || ''}" e emitiu o certificado (${novoCertificado.codigoVerificacao}).`,
        tipo: 'CERTIFICADO',
        dadosExtras: {
          certificadoId: novoCertificado.id,
          usuarioId: novoCertificado.usuarioId,
          codigoVerificacao: novoCertificado.codigoVerificacao,
        },
      });

      return novoCertificado;
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível emitir o certificado: aluno ou curso informado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um certificado emitido com este código de verificação ou para este curso.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.certificado.findMany({
      orderBy: { id: 'desc' },
      include: { usuario: true, curso: true, trilha: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.certificado.findUnique({
      where: { id },
      include: { usuario: true, curso: true, trilha: true },
    });
    if (!record) {
      throw new NotFoundException('Certificado não encontrado.');
    }
    return record;
  }

  async update(id: number, updateCertificadoDto: UpdateCertificadoDto) {
    try {
      const data: any = { ...updateCertificadoDto };
      if (data.dataEmissao) data.dataEmissao = new Date(data.dataEmissao);
      return await this.prisma.certificado.update({
        where: { id },
        data,
        include: { usuario: true, curso: true, trilha: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível emitir o certificado: aluno, curso ou trilha informado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Certificado não encontrado para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um certificado cadastrado com este código de verificação.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.certificado.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este certificado pois existem outros registros vinculados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Certificado não encontrado para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
