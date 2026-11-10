import { api } from './api';
import { Categoria } from '../models';

export const CategoriaService = {
  findAll: async (): Promise<Categoria[]> => {
    const response = await api.get<Categoria[]>('/categorias');
    return response.data;
  },

  findOne: async (id: number): Promise<Categoria> => {
    const response = await api.get<Categoria>(`/categorias/${id}`);
    return response.data;
  },
};
