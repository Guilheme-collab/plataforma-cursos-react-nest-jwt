import { z } from 'zod';

export const TrilhaSchema = z.object({
  id: z.number().optional(),
  titulo: z.string({ error: 'Título é obrigatório' }).min(1, 'Título é obrigatório'),
  descricao: z.string({ error: 'Descrição é obrigatória' }).min(1, 'Descrição é obrigatória'),
  categoriaId: z.number({ error: 'Categoria é obrigatória' }).min(1, 'Selecione uma categoria'),
});

export type Trilha = z.infer<typeof TrilhaSchema>;
