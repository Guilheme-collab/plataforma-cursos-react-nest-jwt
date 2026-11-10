import { api } from './api';
import { Assinatura } from '../models';

export const AssinaturaService = {
  findAll: async (): Promise<Assinatura[]> => {
    const response = await api.get<Assinatura[]>('/assinaturas');
    return response.data;
  },

  findOne: async (id: number): Promise<Assinatura> => {
    const response = await api.get<Assinatura>(`/assinaturas/${id}`);
    return response.data;
  },

  create: async (data: {
    usuarioId: number;
    planoId: number;
    dataInicio: string;
    dataFim: string;
  }): Promise<Assinatura> => {
    const response = await api.post<Assinatura>('/assinaturas', data);
    return response.data;
  },
};
