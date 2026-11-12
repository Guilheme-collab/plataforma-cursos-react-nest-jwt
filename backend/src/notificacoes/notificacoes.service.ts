import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Constrói o filtro estrito de notificações respeitando o isolamento entre usuários
   */
  private async getFiltroWhere(usuarioId: number, role: string) {
    if (role === 'ADMIN') {
      return {
        OR: [
          { usuarioId },
          {
            usuarioId: null,
            roleDestino: { in: ['ADMIN', 'TODOS'] },
          },
        ],
      };
    }

    // Para Aluno (USER) ou Instrutor:
    // Evita que o aluno receba notificações globais de sistema geradas antes de sua conta ser criada
    let dataMinima = new Date(0);
    if (usuarioId) {
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: usuarioId },
        select: { dataCadastro: true },
      });
      if (usuario?.dataCadastro) {
        // Tolerância de 1 minuto antes do cadastro do usuário para incluir o evento de boas-vindas dele
        dataMinima = new Date(usuario.dataCadastro.getTime() - 60000);
      }
    }

    return {
      OR: [
        { usuarioId },
        {
          usuarioId: null,
          roleDestino: { in: [role, 'TODOS'] },
          dataCriacao: { gte: dataMinima },
        },
      ],
    };
  }

  /**
   * Retorna as notificações específicas para o usuário e seu perfil (Role)
   */
  async listarParaUsuario(usuarioId: number, role: string) {
    const where = await this.getFiltroWhere(usuarioId, role);
    return this.prisma.notificacao.findMany({
      where,
      orderBy: { dataCriacao: 'desc' },
      take: 50,
    });
  }

  /**
   * Retorna a contagem de notificações não lidas
   */
  async contarNaoLidas(usuarioId: number, role: string) {
    const where = await this.getFiltroWhere(usuarioId, role);
    const total = await this.prisma.notificacao.count({
      where: {
        ...where,
        lida: false,
      },
    });
    return { naoLidas: total };
  }

  /**
   * Marca uma notificação individual como lida
   */
  async marcarComoLida(id: number) {
    const notif = await this.prisma.notificacao.findUnique({ where: { id } });
    if (!notif) {
      throw new NotFoundException('Notificação não encontrada.');
    }
    return this.prisma.notificacao.update({
      where: { id },
      data: { lida: true },
    });
  }

  /**
   * Marca todas as notificações do usuário como lidas
   */
  async marcarTodasComoLidas(usuarioId: number, role: string) {
    const where = await this.getFiltroWhere(usuarioId, role);
    await this.prisma.notificacao.updateMany({
      where: {
        ...where,
        lida: false,
      },
      data: { lida: true },
    });
    return { success: true, message: 'Todas as notificações foram marcadas como lidas.' };
  }
}
