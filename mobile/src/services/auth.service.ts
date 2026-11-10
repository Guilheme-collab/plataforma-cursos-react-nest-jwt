import { api } from './api';
import { Usuario } from '../models';

export interface LoginResponse {
  access_token: string;
  user: Usuario;
  message?: string;
}

export const AuthService = {
  login: async (email: string, senha: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', { email, senha });
    return response.data;
  },

  register: async (nomeCompleto: string, email: string, senha: string): Promise<Usuario> => {
    const response = await api.post<Usuario>('/usuarios', {
      nomeCompleto,
      email,
      senhaHash: senha,
    });
    return response.data;
  },

  reactivate: async (email: string, senha: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/reactivate', { email, senha });
    return response.data;
  },
};
