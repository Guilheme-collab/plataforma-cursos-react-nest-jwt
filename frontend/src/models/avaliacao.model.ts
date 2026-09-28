import { z } from 'zod';

export const AvaliacaoSchema = z.object({
  id: z.number().optional(),
  usuarioId: z.number({ error: 'Aluno é obrigatório' }).min(1, 'Selecione um aluno'),
  cursoId: z.number({ error: 'Curso é obrigatório' }).min(1, 'Selecione um curso'),
  nota: z.number({ error: 'Nota é obrigatória' }).min(1, 'Nota mínima é 1').max(5, 'Nota máxima é 5'),
  comentario: z.string().optional().nullable(),
  dataAvaliacao: z.string({ error: 'Data da avaliação é obrigatória' }).min(1, 'Data da avaliação é obrigatória'),
});

export type Avaliacao = z.infer<typeof AvaliacaoSchema>;
