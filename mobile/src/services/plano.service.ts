import { api } from './api';
import { Plano } from '../models';

export const PlanoService = {
  findAll: async (): Promise<Plano[]> => {
    const response = await api.get<Plano[]>('/planos');
    return response.data;
  },

  findOne: async (id: number): Promise<Plano> => {
    const response = await api.get<Plano>(`/planos/${id}`);
    return response.data;
  },
};
