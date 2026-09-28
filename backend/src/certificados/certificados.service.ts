import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateCertificadoDto } from './dto/create-certificados.dto';
import { UpdateCertificadoDto } from './dto/update-certificados.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CertificadoService {
  constructor(private prisma: PrismaService) {}

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

      // 2. Atualizar a matrícula do aluno como concluída
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

      return await this.prisma.certificado.create({
        data,
        include: { usuario: true, curso: true, trilha: true },
      });
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
