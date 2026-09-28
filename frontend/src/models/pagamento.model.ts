import { z } from 'zod';

export const PagamentoSchema = z.object({
  id: z.number().optional(),
  assinaturaId: z.number({ error: 'Assinatura é obrigatória' }).min(1, 'Selecione uma assinatura'),
  valorPago: z.number({ error: 'Valor é obrigatório' }).min(0, 'Valor não pode ser negativo'),
  dataPagamento: z.string({ error: 'Data do pagamento é obrigatória' }).min(1, 'Data do pagamento é obrigatória'),
  metodoPagamento: z.string({ error: 'Método de pagamento é obrigatório' }).min(1, 'Método de pagamento é obrigatório'),
  idTransacaoGateway: z.string({ error: 'ID da transação é obrigatório' }).min(1, 'ID da transação é obrigatório'),
});

export type Pagamento = z.infer<typeof PagamentoSchema>;
