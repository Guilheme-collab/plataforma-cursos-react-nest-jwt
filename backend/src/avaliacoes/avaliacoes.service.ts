import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacoes.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoes.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

  async create(createAvaliacaoDto: CreateAvaliacaoDto) {
    try {
      const matricula = await this.prisma.matricula.findFirst({
        where: {
          usuarioId: createAvaliacaoDto.usuarioId,
          cursoId: createAvaliacaoDto.cursoId,
        },
      });
      if (!matricula) {
        throw new ConflictException('Não é possível avaliar: o aluno deve estar matriculado no curso para poder avaliá-lo.');
      }
      const avaliacaoExistente = await this.prisma.avaliacao.findFirst({
        where: {
          usuarioId: createAvaliacaoDto.usuarioId,
          cursoId: createAvaliacaoDto.cursoId,
        },
      });
      if (avaliacaoExistente) {
        throw new ConflictException('Este aluno já avaliou este curso anteriormente. Utilize a edição para alterar a sua nota.');
      }
      const data: any = { ...createAvaliacaoDto };
      if (data.dataAvaliacao) data.dataAvaliacao = new Date(data.dataAvaliacao);
      return await this.prisma.avaliacao.create({
        data,
        include: { usuario: true, curso: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível registrar a avaliação: o aluno ou curso informado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma avaliação deste aluno para este curso.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.avaliacao.findMany({
      include: { usuario: true, curso: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.avaliacao.findUnique({
      where: { id },
      include: { usuario: true, curso: true },
    });
    if (!record) {
      throw new NotFoundException('Avaliação não encontrada.');
    }
    return record;
  }

  async update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    try {
      const data: any = { ...updateAvaliacaoDto };
      if (data.dataAvaliacao) data.dataAvaliacao = new Date(data.dataAvaliacao);
      return await this.prisma.avaliacao.update({
        where: { id },
        data,
        include: { usuario: true, curso: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível registrar a avaliação: o aluno ou curso informado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Avaliação não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma avaliação deste aluno para este curso.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.avaliacao.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta avaliação pois existem registros dependentes.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Avaliação não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
