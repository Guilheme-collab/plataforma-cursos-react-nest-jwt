import { api } from './api';
import { Curso } from '../models';

export const CursoService = {
  findAll: async (): Promise<Curso[]> => {
    const response = await api.get<Curso[]>('/cursos');
    return response.data;
  },

  findOne: async (id: number): Promise<Curso> => {
    const response = await api.get<Curso>(`/cursos/${id}`);
    return response.data;
  },
};
