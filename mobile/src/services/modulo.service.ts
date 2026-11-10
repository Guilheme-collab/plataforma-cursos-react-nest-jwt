import { api } from './api';
import { Modulo } from '../models';

export const ModuloService = {
  findAll: async (): Promise<Modulo[]> => {
    const response = await api.get<Modulo[]>('/modulos');
    return response.data;
  },

  findOne: async (id: number): Promise<Modulo> => {
    const response = await api.get<Modulo>(`/modulos/${id}`);
    return response.data;
  },
};
