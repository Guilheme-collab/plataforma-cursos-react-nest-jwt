import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamentos.dto';
import { UpdatePagamentoDto } from './dto/update-pagamentos.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PagamentoService {
  constructor(private prisma: PrismaService) {}

  async create(createPagamentoDto: CreatePagamentoDto) {
    try {
      const pagamentoExistente = await this.prisma.pagamento.findFirst({
        where: { assinaturaId: createPagamentoDto.assinaturaId },
      });
      if (pagamentoExistente) {
        throw new ConflictException(
          'Esta assinatura já possui um pagamento registrado e está ativa. Para um novo período ou plano, realize uma nova assinatura.'
        );
      }
      const data: any = { ...createPagamentoDto };
      if (data.dataPagamento) data.dataPagamento = new Date(data.dataPagamento);
      return await this.prisma.pagamento.create({
        data,
        include: { assinatura: { include: { usuario: true, plano: true } } },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível registrar o pagamento: a assinatura selecionada não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um pagamento com este identificador de transação.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.pagamento.findMany({
      include: { assinatura: { include: { usuario: true, plano: true } } },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.pagamento.findUnique({
      where: { id },
      include: { assinatura: { include: { usuario: true, plano: true } } },
    });
    if (!record) {
      throw new NotFoundException('Pagamento não encontrado.');
    }
    return record;
  }

  async update(id: number, updatePagamentoDto: UpdatePagamentoDto) {
    try {
      const data: any = { ...updatePagamentoDto };
      if (data.dataPagamento) data.dataPagamento = new Date(data.dataPagamento);
      return await this.prisma.pagamento.update({
        where: { id },
        data,
        include: { assinatura: { include: { usuario: true, plano: true } } },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível registrar o pagamento: a assinatura selecionada não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Pagamento não encontrado. para atualizar.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe um pagamento com este identificador de transação.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.pagamento.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este pagamento pois existem registros fiscais ou auditorias vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Pagamento não encontrado. para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
