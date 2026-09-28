import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateAssinaturaDto } from './dto/create-assinaturas.dto';
import { UpdateAssinaturaDto } from './dto/update-assinaturas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssinaturaService {
  constructor(private prisma: PrismaService) {}

  async create(createAssinaturaDto: CreateAssinaturaDto) {
    try {

      const data: any = { ...createAssinaturaDto };
      if (data.dataInicio) data.dataInicio = new Date(data.dataInicio);
      if (data.dataFim) data.dataFim = new Date(data.dataFim);
      return await this.prisma.assinatura.create({
        data,
        include: { usuario: true, plano: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a assinatura: o usuário ou plano selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma assinatura com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.assinatura.findMany({
      include: { usuario: true, plano: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.assinatura.findUnique({
      where: { id },
      include: { usuario: true, plano: true },
    });
    if (!record) {
      throw new NotFoundException('Assinatura não encontrada.');
    }
    return record;
  }

  async update(id: number, updateAssinaturaDto: UpdateAssinaturaDto) {
    try {
      const data: any = { ...updateAssinaturaDto };
      if (data.dataInicio) data.dataInicio = new Date(data.dataInicio);
      if (data.dataFim) data.dataFim = new Date(data.dataFim);
      return await this.prisma.assinatura.update({
        where: { id },
        data,
        include: { usuario: true, plano: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível salvar a assinatura: o usuário ou plano selecionado não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Assinatura não encontrada. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma assinatura com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.assinatura.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir esta assinatura pois ela possui pagamentos registrados.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Assinatura não encontrada. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
