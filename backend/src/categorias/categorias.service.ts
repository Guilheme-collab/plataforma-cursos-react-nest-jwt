import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categorias.dto';
import { UpdateCategoriaDto } from './dto/update-categorias.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {

      const data: any = { ...createCategoriaDto };

      return await this.prisma.categoria.create({
        data,
        
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar esta operação: dados vinculados não foram encontrados.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma categoria cadastrada com este nome.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.categoria.findMany({
      
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.categoria.findUnique({
      where: { id },
      
    });
    if (!record) {
      throw new NotFoundException('Categoria não encontrada.');
    }
    return record;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    try {
      const data: any = { ...updateCategoriaDto };

      return await this.prisma.categoria.update({
        where: { id },
        data,
        
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar esta operação: dados vinculados não foram encontrados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Categoria não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma categoria cadastrada com este nome.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.categoria.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta categoria pois ela possui cursos ou trilhas vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Categoria não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
