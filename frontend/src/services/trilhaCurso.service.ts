import { api } from './api';
import { TrilhaCurso } from '../models/trilhaCurso.model';

export const TrilhaCursoService = {
  findAll: async () => (await api.get<TrilhaCurso[]>('/trilhas-cursos')).data,
  findOne: async (id: number) => (await api.get<TrilhaCurso>(`/trilhas-cursos/${id}`)).data,
  create: async (data: TrilhaCurso) => (await api.post<TrilhaCurso>('/trilhas-cursos', data)).data,
  update: async (id: number, data: TrilhaCurso) => (await api.patch<TrilhaCurso>(`/trilhas-cursos/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/trilhas-cursos/${id}`)).data,
};
