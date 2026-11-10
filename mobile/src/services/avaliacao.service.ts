import { api } from './api';
import { Avaliacao } from '../models';

export const AvaliacaoService = {
  findAll: async (): Promise<Avaliacao[]> => {
    const response = await api.get<Avaliacao[]>('/avaliacoes');
    return response.data;
  },

  findOne: async (id: number): Promise<Avaliacao> => {
    const response = await api.get<Avaliacao>(`/avaliacoes/${id}`);
    return response.data;
  },

  create: async (data: {
    usuarioId: number;
    cursoId: number;
    nota: number;
    comentario?: string | null;
  }): Promise<Avaliacao> => {
    const response = await api.post<Avaliacao>('/avaliacoes', data);
    return response.data;
  },

  update: async (id: number, data: Partial<Avaliacao>): Promise<Avaliacao> => {
    const response = await api.patch<Avaliacao>(`/avaliacoes/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/avaliacoes/${id}`);
  },
};
