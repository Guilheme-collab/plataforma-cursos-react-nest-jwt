import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursoDto } from './dto/update-cursos.dto';
import { PrismaService } from '../prisma/prisma.service';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class CursoService {
  constructor(
    private prisma: PrismaService,
    private kafkaService: KafkaService,
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    try {

      const data: any = { ...createCursoDto };

      const novoCurso = await this.prisma.curso.create({
        data,
        include: { instrutor: true, categoria: true },
      });

      // 📨 Publicar Evento de Novo Curso no Kafka
      await this.kafkaService.publicarNotificacao({
        usuarioId: null,
        roleDestino: 'USER',
        titulo: `✨ Novo Curso: ${novoCurso.titulo}`,
        mensagem: `O curso "${novoCurso.titulo}" acaba de ser publicado na plataforma. Venha conferir o conteúdo programático!`,
        tipo: 'NOVO_CURSO',
        dadosExtras: { cursoId: novoCurso.id, titulo: novoCurso.titulo },
      });

      return novoCurso;
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar o curso: instrutor ou categoria selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um curso cadastrado com este título.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.curso.findMany({
      include: {
        instrutor: true,
        categoria: true,
        modulos: {
          include: { aulas: true },
          orderBy: { ordem: 'asc' },
        },
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.curso.findUnique({
      where: { id },
      include: { instrutor: true, categoria: true },
    });
    if (!record) {
      throw new NotFoundException('Curso não encontrado.');
    }
    return record;
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    try {
      const data: any = { ...updateCursoDto };

      return await this.prisma.curso.update({
        where: { id },
        data,
        include: { instrutor: true, categoria: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar o curso: instrutor ou categoria selecionado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Curso não encontrado. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um curso cadastrado com este título.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.curso.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este curso pois ele possui módulos, aulas, matrículas ou avaliações vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Curso não encontrado. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
