import { z } from 'zod';

export const MatriculaSchema = z.object({
  id: z.number().optional(),
  usuarioId: z.number({ error: 'Aluno é obrigatório' }).min(1, 'Selecione um aluno'),
  cursoId: z.number({ error: 'Curso é obrigatório' }).min(1, 'Selecione um curso'),
  dataMatricula: z.string({ error: 'Data da matrícula é obrigatória' }).min(1, 'Data da matrícula é obrigatória'),
  dataConclusao: z.string().optional().nullable(),
});

export type Matricula = z.infer<typeof MatriculaSchema>;
