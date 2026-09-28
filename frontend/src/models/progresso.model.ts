import { z } from 'zod';

export const ProgressoAulaSchema = z.object({
  id: z.number().optional(),
  usuarioId: z.number({ error: 'Aluno é obrigatório' }).min(1, 'Selecione um aluno'),
  aulaId: z.number({ error: 'Aula é obrigatória' }).min(1, 'Selecione uma aula'),
  dataConclusao: z.string({ error: 'Data é obrigatória' }).min(1, 'Data é obrigatória'),
  status: z.string({ error: 'Status é obrigatório' }).min(1, 'Status é obrigatório'),
});

export type ProgressoAula = z.infer<typeof ProgressoAulaSchema>;
