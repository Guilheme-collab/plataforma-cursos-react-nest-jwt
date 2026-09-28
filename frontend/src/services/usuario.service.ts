import { api } from './api';
import { Usuario } from '../models/usuario.model';

export const UsuarioService = {
  findAll: async () => (await api.get<Usuario[]>('/usuarios')).data,
  findOne: async (id: number) => (await api.get<Usuario>(`/usuarios/${id}`)).data,
  create: async (data: Usuario) => (await api.post<Usuario>('/usuarios', data)).data,
  update: async (id: number, data: Usuario) => (await api.patch<Usuario>(`/usuarios/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/usuarios/${id}`)).data,
};
