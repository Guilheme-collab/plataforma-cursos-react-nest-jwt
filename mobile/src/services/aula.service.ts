import { api } from './api';
import { Aula } from '../models';

export const AulaService = {
  findAll: async (): Promise<Aula[]> => {
    const response = await api.get<Aula[]>('/aulas');
    return response.data;
  },

  findOne: async (id: number): Promise<Aula> => {
    const response = await api.get<Aula>(`/aulas/${id}`);
    return response.data;
  },
};
