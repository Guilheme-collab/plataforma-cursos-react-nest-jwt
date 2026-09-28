import { api } from './api';
import { Plano } from '../models/plano.model';

export const PlanoService = {
  findAll: async () => (await api.get<Plano[]>('/planos')).data,
  findOne: async (id: number) => (await api.get<Plano>(`/planos/${id}`)).data,
  create: async (data: Plano) => (await api.post<Plano>('/planos', data)).data,
  update: async (id: number, data: Plano) => (await api.patch<Plano>(`/planos/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/planos/${id}`)).data,
};
