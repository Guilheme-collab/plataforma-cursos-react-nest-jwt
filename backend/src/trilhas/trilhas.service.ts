import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTrilhaDto } from './dto/create-trilhas.dto';
import { UpdateTrilhaDto } from './dto/update-trilhas.dto';
import { PrismaService } from '../prisma/prisma.service';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class TrilhaService {
  constructor(
    private prisma: PrismaService,
    private kafkaService: KafkaService,
  ) {}

  async create(createTrilhaDto: CreateTrilhaDto) {
    try {

      const data: any = { ...createTrilhaDto };

      const novaTrilha = await this.prisma.trilha.create({
        data,
        include: { categoria: true },
      });

      // 📨 Publicar Evento de Nova Trilha no Kafka
      await this.kafkaService.publicarNotificacao({
        usuarioId: null,
        roleDestino: 'USER',
        titulo: `🗺️ Nova Trilha: ${novaTrilha.titulo}`,
        mensagem: `Uma nova trilha de aprendizado ("${novaTrilha.titulo}") foi lançada. Siga a sequência recomendada de cursos!`,
        tipo: 'NOVA_TRILHA',
        dadosExtras: { trilhaId: novaTrilha.id, titulo: novaTrilha.titulo },
      });

      return novaTrilha;
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a trilha: a categoria selecionada não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma trilha cadastrada com este título.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.trilha.findMany({
      include: {
        categoria: true,
        trilhasCursos: {
          include: {
            curso: {
              include: {
                modulos: {
                  include: { aulas: true },
                },
              },
            },
          },
          orderBy: { ordem: 'asc' },
        },
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.trilha.findUnique({
      where: { id },
      include: { categoria: true },
    });
    if (!record) {
      throw new NotFoundException('Trilha não encontrada.');
    }
    return record;
  }

  async update(id: number, updateTrilhaDto: UpdateTrilhaDto) {
    try {
      const data: any = { ...updateTrilhaDto };

      return await this.prisma.trilha.update({
        where: { id },
        data,
        include: { categoria: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a trilha: a categoria selecionada não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Trilha não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma trilha cadastrada com este título.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.trilha.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta trilha pois ela possui cursos ou certificados vinculados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Trilha não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
