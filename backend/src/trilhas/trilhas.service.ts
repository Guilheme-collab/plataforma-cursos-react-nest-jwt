import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateTrilhaDto } from './dto/create-trilhas.dto';
import { UpdateTrilhaDto } from './dto/update-trilhas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrilhaService {
  constructor(private prisma: PrismaService) {}

  async create(createTrilhaDto: CreateTrilhaDto) {
    try {

      const data: any = { ...createTrilhaDto };

      return await this.prisma.trilha.create({
        data,
        include: { categoria: true },
      });
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
      include: { categoria: true },
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
