import { z } from 'zod';

export const CertificadoSchema = z.object({
  id: z.number().optional(),
  usuarioId: z.number({ error: 'Aluno é obrigatório' }).min(1, 'Selecione um aluno'),
  cursoId: z.number({ error: 'Curso é obrigatório' }).min(1, 'Selecione um curso'),
  trilhaId: z.number().optional().nullable(),
  codigoVerificacao: z.string({ error: 'Código de verificação é obrigatório' }).min(1, 'Código de verificação é obrigatório'),
  dataEmissao: z.string({ error: 'Data de emissão é obrigatória' }).min(1, 'Data de emissão é obrigatória'),
});

export type Certificado = z.infer<typeof CertificadoSchema>;
