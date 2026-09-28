import { api } from './api';
import { Categoria } from '../models/categoria.model';

export const CategoriaService = {
  findAll: async () => (await api.get<Categoria[]>('/categorias')).data,
  findOne: async (id: number) => (await api.get<Categoria>(`/categorias/${id}`)).data,
  create: async (data: Categoria) => (await api.post<Categoria>('/categorias', data)).data,
  update: async (id: number, data: Categoria) => (await api.patch<Categoria>(`/categorias/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/categorias/${id}`)).data,
};
