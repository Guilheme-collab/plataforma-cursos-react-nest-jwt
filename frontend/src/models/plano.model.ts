import { z } from 'zod';

export const PlanoSchema = z.object({
  id: z.number().optional(),
  nome: z.string({ error: 'Nome do plano é obrigatório' }).min(1, 'Nome do plano é obrigatório'),
  descricao: z.string({ error: 'Descrição do plano é obrigatória' }).min(1, 'Descrição do plano é obrigatória'),
  preco: z.number({ error: 'Preço é obrigatório' }).min(0, 'Preço não pode ser negativo'),
  duracaoMeses: z.number({ error: 'Duração é obrigatória' }).min(1, 'Duração deve ser de pelo menos 1 mês'),
  cursosIds: z.array(z.number()).optional(),
  planosCursos: z.any().optional(),
});

export type Plano = z.infer<typeof PlanoSchema>;
