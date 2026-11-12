import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { PrismaService } from '../prisma/prisma.service';
import { KafkaService } from '../kafka/kafka.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    private prisma: PrismaService,
    private kafkaService: KafkaService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const data: any = { ...createUsuarioDto };
      if (data.email) {
        data.email = data.email.trim().toLowerCase();
        const existing = await this.prisma.usuario.findFirst({
          where: { email: { equals: data.email, mode: 'insensitive' } },
        });
        if (existing) {
          throw new ConflictException('Já existe um usuário cadastrado com este e-mail.');
        }
      }

      if (data.senhaHash) {
        const salt = await bcrypt.genSalt();
        data.senhaHash = await bcrypt.hash(data.senhaHash, salt);
      }

      const novoUsuario = await this.prisma.usuario.create({
        data,
      });

      // 📨 Publicar Notificação de Boas-Vindas via Kafka (20% da Nota de N2)
      await this.kafkaService.publicarNotificacao({
        usuarioId: novoUsuario.id,
        roleDestino: 'USER',
        titulo: '🎉 Bem-vindo(a) à Plataforma EAD!',
        mensagem: `Olá, ${novoUsuario.nomeCompleto}! Sua conta foi criada com sucesso via mensageria Kafka. Explore nossos cursos e trilhas para começar seus estudos!`,
        tipo: 'BOAS_VINDAS',
        dadosExtras: { usuarioId: novoUsuario.id, email: novoUsuario.email },
      });

      // Notificação para o Administrador
      await this.kafkaService.publicarNotificacao({
        usuarioId: null,
        roleDestino: 'ADMIN',
        titulo: '👤 Novo Aluno Cadastrado',
        mensagem: `O usuário ${novoUsuario.nomeCompleto} (${novoUsuario.email}) acabou de se cadastrar na plataforma.`,
        tipo: 'BOAS_VINDAS',
        dadosExtras: { usuarioId: novoUsuario.id, email: novoUsuario.email },
      });

      return novoUsuario;
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar esta operação: dados vinculados não foram encontrados.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um usuário cadastrado com este e-mail.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.usuario.findMany({});
  }

  async findByEmail(email: string) {
    if (!email) return null;
    const normalizedEmail = email.trim().toLowerCase();
    return this.prisma.usuario.findFirst({
      where: { email: { equals: normalizedEmail, mode: 'insensitive' } },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    return record;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const data: any = { ...updateUsuarioDto };

      if (data.email) {
        data.email = data.email.trim().toLowerCase();
        const existing = await this.prisma.usuario.findFirst({
          where: {
            email: { equals: data.email, mode: 'insensitive' },
            id: { not: id },
          },
        });
        if (existing) {
          throw new ConflictException('Já existe um usuário cadastrado com este e-mail.');
        }
      }

      if (data.senhaHash && typeof data.senhaHash === 'string' && data.senhaHash.trim() !== '') {
        // Evita duplo hash se a string já for um hash bcrypt válido
        if (!data.senhaHash.startsWith('$2b$') && !data.senhaHash.startsWith('$2a$')) {
          const salt = await bcrypt.genSalt();
          data.senhaHash = await bcrypt.hash(data.senhaHash, salt);
        }
      } else {
        // Se a senha não foi fornecida ou foi enviada vazia no update, preserva a senha atual do banco
        delete data.senhaHash;
      }

      return await this.prisma.usuario.update({
        where: { id },
        data,
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar esta operação: dados vinculados não foram encontrados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Usuário não encontrado para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um usuário cadastrado com este e-mail.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  // EXCLUSÃO PERMANENTE (HARD DELETE PARA SEMPRE)
  async remove(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuário não encontrado.');

    if (user.role === 'ADMIN') {
      throw new ConflictException('Não é possível excluir permanentemente a conta de um administrador do sistema.');
    }

    try {
      // Limpeza em transação de todos os relacionamentos para garantir exclusão sem erros de chave estrangeira
      return await this.prisma.$transaction(async (tx) => {
        await tx.certificado.deleteMany({ where: { usuarioId: id } });
        await tx.progressoAula.deleteMany({ where: { usuarioId: id } });
        await tx.matricula.deleteMany({ where: { usuarioId: id } });
        await tx.avaliacao.deleteMany({ where: { usuarioId: id } });
        await tx.pagamento.deleteMany({ where: { assinatura: { usuarioId: id } } });
        await tx.assinatura.deleteMany({ where: { usuarioId: id } });

        // Se o usuário for instrutor de algum curso, remove ou atualiza
        await tx.curso.deleteMany({ where: { instrutorId: id } });

        return await tx.usuario.delete({
          where: { id },
        });
      });
    } catch (error: any) {
      console.error('Erro ao excluir usuário permanentemente:', error);
      throw new InternalServerErrorException('Erro ao excluir conta do usuário permanentemente.');
    }
  }

  // DESATIVAÇÃO (SOFT DELETE) PARA QUANDO O PRÓPRIO ALUNO DESATIVA
  async desativar(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuário não encontrado.');
    return this.prisma.usuario.update({
      where: { id },
      data: { ativo: false },
    });
  }
}
