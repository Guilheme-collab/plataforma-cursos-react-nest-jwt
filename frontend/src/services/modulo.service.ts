import { api } from './api';
import { Modulo } from '../models/modulo.model';

export const ModuloService = {
  findAll: async () => (await api.get<Modulo[]>('/modulos')).data,
  findOne: async (id: number) => (await api.get<Modulo>(`/modulos/${id}`)).data,
  create: async (data: Modulo) => (await api.post<Modulo>('/modulos', data)).data,
  update: async (id: number, data: Modulo) => (await api.patch<Modulo>(`/modulos/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/modulos/${id}`)).data,
};
