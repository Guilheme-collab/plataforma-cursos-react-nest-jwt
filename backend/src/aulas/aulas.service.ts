import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aulas.dto';
import { UpdateAulaDto } from './dto/update-aulas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AulaService {
  constructor(private prisma: PrismaService) {}

  async create(createAulaDto: CreateAulaDto) {
    try {

      const data: any = { ...createAulaDto };

      return await this.prisma.aula.create({
        data,
        include: { modulo: { include: { curso: true } } },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a aula: o módulo selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma aula com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.aula.findMany({
      include: { modulo: { include: { curso: true } } },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.aula.findUnique({
      where: { id },
      include: { modulo: { include: { curso: true } } },
    });
    if (!record) {
      throw new NotFoundException('Aula não encontrada.');
    }
    return record;
  }

  async update(id: number, updateAulaDto: UpdateAulaDto) {
    try {
      const data: any = { ...updateAulaDto };

      return await this.prisma.aula.update({
        where: { id },
        data,
        include: { modulo: { include: { curso: true } } },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a aula: o módulo selecionado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Aula não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma aula com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.aula.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta aula pois ela possui registros de progresso vinculados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Aula não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
