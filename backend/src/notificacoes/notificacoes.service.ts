import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retorna as notificações específicas para o usuário e seu perfil (Role)
   */
  async listarParaUsuario(usuarioId: number, role: string) {
    return this.prisma.notificacao.findMany({
      where: {
        OR: [
          { usuarioId },
          {
            usuarioId: null,
            roleDestino: { in: [role, 'TODOS'] },
          },
        ],
      },
      orderBy: { dataCriacao: 'desc' },
      take: 50,
    });
  }

  /**
   * Retorna a contagem de notificações não lidas
   */
  async contarNaoLidas(usuarioId: number, role: string) {
    const total = await this.prisma.notificacao.count({
      where: {
        lida: false,
        OR: [
          { usuarioId },
          {
            usuarioId: null,
            roleDestino: { in: [role, 'TODOS'] },
          },
        ],
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
    await this.prisma.notificacao.updateMany({
      where: {
        lida: false,
        OR: [
          { usuarioId },
          {
            usuarioId: null,
            roleDestino: { in: [role, 'TODOS'] },
          },
        ],
      },
      data: { lida: true },
    });
    return { success: true, message: 'Todas as notificações foram marcadas como lidas.' };
  }
}
