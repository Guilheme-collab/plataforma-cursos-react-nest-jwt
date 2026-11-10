import { api } from './api';
import { Matricula } from '../models';

export const MatriculaService = {
  findAll: async (): Promise<Matricula[]> => {
    const response = await api.get<Matricula[]>('/matriculas');
    return response.data;
  },

  findOne: async (id: number): Promise<Matricula> => {
    const response = await api.get<Matricula>(`/matriculas/${id}`);
    return response.data;
  },

  create: async (data: { usuarioId: number; cursoId: number; dataMatricula?: string }): Promise<Matricula> => {
    const response = await api.post<Matricula>('/matriculas', data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/matriculas/${id}`);
  },
};
