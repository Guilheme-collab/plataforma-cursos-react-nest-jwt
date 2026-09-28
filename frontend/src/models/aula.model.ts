import { z } from 'zod';

export const AulaSchema = z.object({
  id: z.number().optional(),
  moduloId: z.number({ error: 'Selecione um módulo' }).min(1, 'Selecione um módulo'),
  titulo: z.string({ error: 'Título da aula é obrigatório' }).min(3, 'O título deve ter no mínimo 3 caracteres'),
  tipoConteudo: z.string({ error: 'Selecione o tipo de conteúdo' }).min(1, 'Tipo de conteúdo é obrigatório'),
  urlConteudo: z.string({ error: 'URL do conteúdo é obrigatória' }).min(1, 'URL do conteúdo é obrigatória'),
  duracaoMinutos: z.number({ error: 'A duração é obrigatória' }).min(1, 'Duração deve ser maior que 0'),
  ordem: z.number({ error: 'A ordem é obrigatória' }).min(1, 'A ordem deve ser maior que 0'),
});

export type Aula = z.infer<typeof AulaSchema>;
