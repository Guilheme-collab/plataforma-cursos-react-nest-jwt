import { api } from './api';
import { Notificacao } from '../models/notificacao.model';

export class NotificacaoService {
  static async findAll(): Promise<Notificacao[]> {
    const response = await api.get('/notificacoes');
    return response.data;
  }

  static async countUnread(): Promise<{ naoLidas: number }> {
    const response = await api.get('/notificacoes/nao-lidas/count');
    return response.data;
  }

  static async markAsRead(id: number): Promise<Notificacao> {
    const response = await api.patch(`/notificacoes/${id}/lida`);
    return response.data;
  }

  static async markAllAsRead(): Promise<{ success: boolean; message: string }> {
    const response = await api.patch('/notificacoes/ler-todas');
    return response.data;
  }
}
