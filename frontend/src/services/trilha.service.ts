import { api } from './api';
import { Trilha } from '../models/trilha.model';

export const TrilhaService = {
  findAll: async () => (await api.get<Trilha[]>('/trilhas')).data,
  findOne: async (id: number) => (await api.get<Trilha>(`/trilhas/${id}`)).data,
  create: async (data: Trilha) => (await api.post<Trilha>('/trilhas', data)).data,
  update: async (id: number, data: Trilha) => (await api.patch<Trilha>(`/trilhas/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/trilhas/${id}`)).data,
};
