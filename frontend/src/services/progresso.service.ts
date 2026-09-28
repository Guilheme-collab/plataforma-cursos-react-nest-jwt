import { api } from './api';
import { ProgressoAula } from '../models/progresso.model';

export const ProgressoAulaService = {
  findAll: async () => (await api.get<ProgressoAula[]>('/progresso-aulas')).data,
  findOne: async (id: number) => (await api.get<ProgressoAula>(`/progresso-aulas/${id}`)).data,
  create: async (data: ProgressoAula) => (await api.post<ProgressoAula>('/progresso-aulas', data)).data,
  update: async (id: number, data: ProgressoAula) => (await api.patch<ProgressoAula>(`/progresso-aulas/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/progresso-aulas/${id}`)).data,
};

export const ProgressoService = ProgressoAulaService;

