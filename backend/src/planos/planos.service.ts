import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreatePlanoDto } from './dto/create-planos.dto';
import { UpdatePlanoDto } from './dto/update-planos.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanoService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanoDto: CreatePlanoDto) {
    try {
      const { cursosIds, ...planoData } = createPlanoDto;
      const data: any = { ...planoData };

      if (cursosIds && cursosIds.length > 0) {
        data.planosCursos = {
          create: cursosIds.map(id => ({ cursoId: id }))
        };
      }

      return await this.prisma.plano.create({
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
        throw new ConflictException('Já existe um plano cadastrado com este nome.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.plano.findMany({
      include: {
        planosCursos: {
          include: {
            curso: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.plano.findUnique({
      where: { id },
      include: {
        planosCursos: {
          include: {
            curso: true
          }
        }
      }
    });
    if (!record) {
      throw new NotFoundException('Plano não encontrado.');
    }
    return record;
  }

  async update(id: number, updatePlanoDto: UpdatePlanoDto) {
    try {
      const { cursosIds, ...planoData } = updatePlanoDto;
      const data: any = { ...planoData };

      if (cursosIds !== undefined) {
        // Apaga relacionamentos antigos e recria os novos (overwrite)
        await this.prisma.planoCurso.deleteMany({ where: { planoId: id } });
        
        if (cursosIds.length > 0) {
          data.planosCursos = {
            create: cursosIds.map(cursoId => ({ cursoId }))
          };
        }
      }

      return await this.prisma.plano.update({
        where: { id },
        data,
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível realizar esta operação: dados vinculados não foram encontrados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Plano não encontrado. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um plano cadastrado com este nome.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.plano.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este plano pois ele possui assinaturas ativas vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Plano não encontrado. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
