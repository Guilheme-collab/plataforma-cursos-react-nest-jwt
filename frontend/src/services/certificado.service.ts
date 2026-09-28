import { api } from './api';
import { Certificado } from '../models/certificado.model';

export const CertificadoService = {
  findAll: async () => (await api.get<Certificado[]>('/certificados')).data,
  findOne: async (id: number) => (await api.get<Certificado>(`/certificados/${id}`)).data,
  create: async (data: Certificado) => (await api.post<Certificado>('/certificados', data)).data,
  update: async (id: number, data: Certificado) => (await api.patch<Certificado>(`/certificados/${id}`, data)).data,
  delete: async (id: number) => (await api.delete(`/certificados/${id}`)).data,
};
