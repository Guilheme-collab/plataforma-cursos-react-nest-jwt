import { api } from './api';
import { Pagamento } from '../models';

export const PagamentoService = {
  findAll: async (): Promise<Pagamento[]> => {
    const response = await api.get<Pagamento[]>('/pagamentos');
    return response.data;
  },

  create: async (data: {
    assinaturaId: number;
    valorPago: number;
    dataPagamento: string;
    metodoPagamento: string;
    idTransacaoGateway: string;
  }): Promise<Pagamento> => {
    const response = await api.post<Pagamento>('/pagamentos', data);
    return response.data;
  },
};
