import { z } from 'zod';

export const CursoSchema = z.object({
  id: z.number().optional(),
  titulo: z.string({ error: 'Título do curso é obrigatório' }).min(3, 'Título deve ter no mínimo 3 caracteres'),
  descricao: z.string({ error: 'Descrição é obrigatória' }).min(5, 'Descrição deve ter no mínimo 5 caracteres'),
  instrutorId: z.number({ error: 'Selecione um instrutor' }).min(1, 'Instrutor é obrigatório'),
  categoriaId: z.number({ error: 'Selecione uma categoria' }).min(1, 'Categoria é obrigatória'),
  nivel: z.string({ error: 'Selecione o nível do curso' }).min(1, 'Nível é obrigatório'),
  dataPublicacao: z.string({ error: 'Data de publicação é obrigatória' }).min(1, 'Data de publicação é obrigatória'),
  totalAulas: z.number({ error: 'Total de aulas deve ser um número' }).min(0, 'Total de aulas não pode ser negativo').default(0),
  totalHoras: z.number({ error: 'Total de horas deve ser um número' }).min(0, 'Total de horas não pode ser negativo').default(0),
});

export type Curso = z.infer<typeof CursoSchema> & {
  instrutor?: { id?: number; nomeCompleto?: string; email?: string };
  categoria?: { id?: number; nome?: string; descricao?: string };
};
