import { api } from './api';
import { Aula } from '../models/aula.model';

export const AulaService = {
  findAll: async () => (await api.get<Aula[]>('/aulas')).data,
  findOne: async (id: number) => (await api.get<Aula>(`/aulas/${id}`)).data,
  create: async (data: Aula) => (await api.post<Aula>('/aulas', data)).data,
  update: async (id: number, data: Aula) => (await api.patch<Aula>(`/aulas/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/aulas/${id}`)).data,
};
