import { api } from './api';
import { Trilha } from '../models';

export class TrilhaService {
  static async findAll(): Promise<Trilha[]> {
    const response = await api.get('/trilhas');
    return response.data;
  }

  static async findOne(id: number): Promise<Trilha> {
    const response = await api.get(`/trilhas/${id}`);
    return response.data;
  }
}
