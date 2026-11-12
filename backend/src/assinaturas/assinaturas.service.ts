import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateAssinaturaDto } from './dto/create-assinaturas.dto';
import { UpdateAssinaturaDto } from './dto/update-assinaturas.dto';
import { PrismaService } from '../prisma/prisma.service';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class AssinaturaService {
  constructor(
    private prisma: PrismaService,
    private kafkaService: KafkaService,
  ) {}

  async create(createAssinaturaDto: CreateAssinaturaDto) {
    try {
      const data: any = { ...createAssinaturaDto };
      if (data.dataInicio) data.dataInicio = new Date(data.dataInicio);
      if (data.dataFim) data.dataFim = new Date(data.dataFim);

      const novaAssinatura = await this.prisma.assinatura.create({
        data,
        include: { usuario: true, plano: true },
      });

      // 📨 Publicar Notificação de Assinatura via Kafka
      if (novaAssinatura.usuarioId) {
        // Para o Aluno
        await this.kafkaService.publicarNotificacao({
          usuarioId: novaAssinatura.usuarioId,
          roleDestino: 'USER',
          titulo: '🎉 Assinatura Ativada com Sucesso!',
          mensagem: `Seu plano "${novaAssinatura.plano?.nome || 'Plano'}" foi ativado! Aproveite acesso ilimitado a todos os cursos da plataforma.`,
          tipo: 'PAGAMENTO',
          dadosExtras: { assinaturaId: novaAssinatura.id, planoId: novaAssinatura.planoId },
        });

        // Para a Administração
        await this.kafkaService.publicarNotificacao({
          usuarioId: null,
          roleDestino: 'ADMIN',
          titulo: '💼 Nova Assinatura de Plano',
          mensagem: `O usuário "${novaAssinatura.usuario?.nomeCompleto || ''}" assinou o plano "${novaAssinatura.plano?.nome || 'Plano'}".`,
          tipo: 'PAGAMENTO',
          dadosExtras: { assinaturaId: novaAssinatura.id, usuarioId: novaAssinatura.usuarioId },
        });
      }

      return novaAssinatura;
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
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível atualizar a assinatura: o usuário ou plano selecionado não existe.');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Já existe uma assinatura com estes dados.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.assinatura.delete({
      where: { id },
    });
  }
}
