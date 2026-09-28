import { z } from 'zod';

export const CategoriaSchema = z.object({
  id: z.number().optional(),
  nome: z.string({ error: 'O nome da categoria é obrigatório' }).min(3, 'O nome deve ter no mínimo 3 caracteres'),
  descricao: z.string({ error: 'A descrição da categoria é obrigatória' }).min(5, 'A descrição deve ter no mínimo 5 caracteres'),
});

export type Categoria = z.infer<typeof CategoriaSchema>;
