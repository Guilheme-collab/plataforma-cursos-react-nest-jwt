import { api } from './api';
import { Usuario } from '../models';

export const UsuarioService = {
  getProfile: async (id: number): Promise<Usuario> => {
    const response = await api.get<Usuario>(`/usuarios/${id}`);
    return response.data;
  },

  updateProfile: async (id: number, data: Partial<Usuario>): Promise<Usuario> => {
    const response = await api.patch<Usuario>(`/usuarios/${id}`, data);
    return response.data;
  },

  desativarConta: async (id: number): Promise<Usuario> => {
    const response = await api.patch<Usuario>(`/usuarios/${id}/desativar`);
    return response.data;
  },
};
