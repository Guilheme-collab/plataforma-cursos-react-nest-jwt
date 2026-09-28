import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matriculas.dto';
import { UpdateMatriculaDto } from './dto/update-matriculas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatriculaService {
  constructor(private prisma: PrismaService) {}

  async create(createMatriculaDto: CreateMatriculaDto) {
    try {
      const existente = await this.prisma.matricula.findFirst({
        where: {
          usuarioId: createMatriculaDto.usuarioId,
          cursoId: createMatriculaDto.cursoId,
        },
      });
      if (existente) {
        throw new ConflictException('Este aluno já possui uma matrícula ativa neste curso.');
      }
      const data: any = { ...createMatriculaDto };
      if (data.dataMatricula) data.dataMatricula = new Date(data.dataMatricula);
      if (data.dataConclusao) data.dataConclusao = new Date(data.dataConclusao);
      return await this.prisma.matricula.create({
        data,
        include: { usuario: true, curso: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar a matrícula: o aluno ou curso selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Este aluno já possui uma matrícula ativa neste curso.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.matricula.findMany({
      include: { usuario: true, curso: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.matricula.findUnique({
      where: { id },
      include: { usuario: true, curso: true },
    });
    if (!record) {
      throw new NotFoundException('Matrícula não encontrada.');
    }
    return record;
  }

  async update(id: number, updateMatriculaDto: UpdateMatriculaDto) {
    try {
      const data: any = { ...updateMatriculaDto };
      if (data.dataMatricula) data.dataMatricula = new Date(data.dataMatricula);
      if (data.dataConclusao) data.dataConclusao = new Date(data.dataConclusao);
      return await this.prisma.matricula.update({
        where: { id },
        data,
        include: { usuario: true, curso: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar a matrícula: o aluno ou curso selecionado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Matrícula não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Este aluno já possui uma matrícula ativa neste curso.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.matricula.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta matrícula pois ela possui registros de progresso ou certificados vinculados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Matrícula não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
