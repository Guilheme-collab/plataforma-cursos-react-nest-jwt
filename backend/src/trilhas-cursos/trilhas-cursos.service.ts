import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTrilhaCursoDto } from './dto/create-trilhas-cursos.dto';
import { UpdateTrilhaCursoDto } from './dto/update-trilhas-cursos.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrilhaCursoService {
  constructor(private prisma: PrismaService) {}

  async create(createTrilhaCursoDto: CreateTrilhaCursoDto) {
    try {
      const existente = await this.prisma.trilhaCurso.findUnique({
        where: {
          trilhaId_cursoId: {
            trilhaId: createTrilhaCursoDto.trilhaId,
            cursoId: createTrilhaCursoDto.cursoId,
          },
        },
      });
      if (existente) {
        throw new ConflictException('Este curso já está associado a esta trilha de aprendizado.');
      }
      const data: any = { ...createTrilhaCursoDto };

      return await this.prisma.trilhaCurso.create({
        data,
        include: { trilha: true, curso: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível associar: a trilha ou o curso informado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Este curso já está associado a esta trilha.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.trilhaCurso.findMany({
      include: { trilha: true, curso: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.trilhaCurso.findUnique({
      where: { id },
      include: { trilha: true, curso: true },
    });
    if (!record) {
      throw new NotFoundException('Associação de trilha e curso não encontrada.');
    }
    return record;
  }

  async update(id: number, updateTrilhaCursoDto: UpdateTrilhaCursoDto) {
    try {
      const data: any = { ...updateTrilhaCursoDto };

      return await this.prisma.trilhaCurso.update({
        where: { id },
        data,
        include: { trilha: true, curso: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível associar: a trilha ou o curso informado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Associação de trilha e curso não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Este curso já está associado a esta trilha.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.trilhaCurso.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível desvincular este curso desta trilha pois existem dependências ativas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Associação de trilha e curso não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
