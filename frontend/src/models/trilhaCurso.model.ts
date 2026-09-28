import { z } from 'zod';

export const TrilhaCursoSchema = z.object({
  id: z.number().optional(),
  trilhaId: z.number({ error: 'Trilha é obrigatória' }).min(1, 'Selecione uma trilha'),
  cursoId: z.number({ error: 'Curso é obrigatório' }).min(1, 'Selecione um curso'),
  ordem: z.number({ error: 'Ordem é obrigatória' }).min(1, 'A ordem deve ser maior que 0'),
});

export type TrilhaCurso = z.infer<typeof TrilhaCursoSchema>;
