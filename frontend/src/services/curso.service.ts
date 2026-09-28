import { api } from './api';
import { Curso } from '../models/curso.model';

export const CursoService = {
  findAll: async () => (await api.get<Curso[]>('/cursos')).data,
  findOne: async (id: number) => (await api.get<Curso>(`/cursos/${id}`)).data,
  create: async (data: Curso) => (await api.post<Curso>('/cursos', data)).data,
  update: async (id: number, data: Curso) => (await api.patch<Curso>(`/cursos/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/cursos/${id}`)).data,
};
