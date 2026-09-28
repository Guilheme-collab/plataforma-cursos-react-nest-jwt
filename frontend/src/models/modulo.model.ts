import { z } from 'zod';

export const ModuloSchema = z.object({
  id: z.number().optional(),
  cursoId: z.number({ error: 'Selecione um curso' }).min(1, 'Selecione um curso'),
  titulo: z.string({ error: 'Título do módulo é obrigatório' }).min(3, 'O título deve ter no mínimo 3 caracteres'),
  ordem: z.number({ error: 'A ordem é obrigatória' }).min(1, 'A ordem deve ser maior que 0'),
});

export type Modulo = z.infer<typeof ModuloSchema>;
