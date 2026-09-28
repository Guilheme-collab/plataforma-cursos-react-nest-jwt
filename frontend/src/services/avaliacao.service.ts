import { api } from './api';
import { Avaliacao } from '../models/avaliacao.model';

export const AvaliacaoService = {
  findAll: async () => (await api.get<Avaliacao[]>('/avaliacoes')).data,
  findOne: async (id: number) => (await api.get<Avaliacao>(`/avaliacoes/${id}`)).data,
  create: async (data: Avaliacao) => (await api.post<Avaliacao>('/avaliacoes', data)).data,
  update: async (id: number, data: Avaliacao) => (await api.patch<Avaliacao>(`/avaliacoes/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/avaliacoes/${id}`)).data,
};
