import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulos.dto';
import { UpdateModuloDto } from './dto/update-modulos.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ModuloService {
  constructor(private prisma: PrismaService) {}

  async create(createModuloDto: CreateModuloDto) {
    try {

      const data: any = { ...createModuloDto };

      return await this.prisma.modulo.create({
        data,
        include: { curso: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar o módulo: o curso selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um módulo com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.modulo.findMany({
      include: { curso: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.modulo.findUnique({
      where: { id },
      include: { curso: true },
    });
    if (!record) {
      throw new NotFoundException('Módulo não encontrado.');
    }
    return record;
  }

  async update(id: number, updateModuloDto: UpdateModuloDto) {
    try {
      const data: any = { ...updateModuloDto };

      return await this.prisma.modulo.update({
        where: { id },
        data,
        include: { curso: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar o módulo: o curso selecionado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Módulo não encontrado. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um módulo com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.modulo.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este módulo pois ele possui aulas vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Módulo não encontrado. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
