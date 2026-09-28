import { api } from './api';
import { Pagamento } from '../models/pagamento.model';

export const PagamentoService = {
  findAll: async () => (await api.get<Pagamento[]>('/pagamentos')).data,
  findOne: async (id: number) => (await api.get<Pagamento>(`/pagamentos/${id}`)).data,
  create: async (data: Pagamento) => (await api.post<Pagamento>('/pagamentos', data)).data,
  update: async (id: number, data: Pagamento) => (await api.patch<Pagamento>(`/pagamentos/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/pagamentos/${id}`)).data,
};
