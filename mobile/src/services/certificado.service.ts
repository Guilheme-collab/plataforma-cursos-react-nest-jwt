import { api } from './api';
import { Certificado } from '../models';

export const CertificadoService = {
  findAll: async (): Promise<Certificado[]> => {
    const response = await api.get<Certificado[]>('/certificados');
    return response.data;
  },

  findOne: async (id: number): Promise<Certificado> => {
    const response = await api.get<Certificado>(`/certificados/${id}`);
    return response.data;
  },

  create: async (data: {
    usuarioId: number;
    cursoId: number;
    trilhaId?: number | null;
    codigoVerificacao?: string;
  }): Promise<Certificado> => {
    const response = await api.post<Certificado>('/certificados', data);
    return response.data;
  },
};
