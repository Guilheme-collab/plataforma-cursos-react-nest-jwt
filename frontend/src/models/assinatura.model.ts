import { z } from 'zod';

export const AssinaturaSchema = z.object({
  id: z.number().optional(),
  usuarioId: z.number({ error: 'Usuário é obrigatório' }).min(1, 'Selecione um usuário'),
  planoId: z.number({ error: 'Plano é obrigatório' }).min(1, 'Selecione um plano'),
  dataInicio: z.string({ error: 'Data de início é obrigatória' }).min(1, 'Data de início é obrigatória'),
  dataFim: z.string({ error: 'Data de fim é obrigatória' }).min(1, 'Data de fim é obrigatória'),
});

export type Assinatura = z.infer<typeof AssinaturaSchema>;
