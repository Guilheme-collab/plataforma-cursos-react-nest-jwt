import { api } from './api';
import { Assinatura } from '../models/assinatura.model';

export const AssinaturaService = {
  findAll: async () => (await api.get<Assinatura[]>('/assinaturas')).data,
  findOne: async (id: number) => (await api.get<Assinatura>(`/assinaturas/${id}`)).data,
  create: async (data: Assinatura) => (await api.post<Assinatura>('/assinaturas', data)).data,
  update: async (id: number, data: Assinatura) => (await api.patch<Assinatura>(`/assinaturas/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/assinaturas/${id}`)).data,
};
