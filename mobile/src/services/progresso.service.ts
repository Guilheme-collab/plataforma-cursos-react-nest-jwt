import { api } from './api';
import { ProgressoAula } from '../models';

export const ProgressoService = {
  findAll: async (): Promise<ProgressoAula[]> => {
    const response = await api.get<ProgressoAula[]>('/progresso-aulas');
    return response.data;
  },

  findOne: async (id: number): Promise<ProgressoAula> => {
    const response = await api.get<ProgressoAula>(`/progresso-aulas/${id}`);
    return response.data;
  },

  create: async (data: {
    usuarioId: number;
    aulaId: number;
    status: string;
    dataConclusao?: string;
  }): Promise<ProgressoAula> => {
    const response = await api.post<ProgressoAula>('/progresso-aulas', data);
    return response.data;
  },

  update: async (id: number, data: Partial<ProgressoAula>): Promise<ProgressoAula> => {
    const response = await api.patch<ProgressoAula>(`/progresso-aulas/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/progresso-aulas/${id}`);
  },
};
