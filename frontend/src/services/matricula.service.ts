import { api } from './api';
import { Matricula } from '../models/matricula.model';

export const MatriculaService = {
  findAll: async () => (await api.get<Matricula[]>('/matriculas')).data,
  findOne: async (id: number) => (await api.get<Matricula>(`/matriculas/${id}`)).data,
  create: async (data: Matricula) => (await api.post<Matricula>('/matriculas', data)).data,
  update: async (id: number, data: Matricula) => (await api.patch<Matricula>(`/matriculas/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/matriculas/${id}`)).data,
};
