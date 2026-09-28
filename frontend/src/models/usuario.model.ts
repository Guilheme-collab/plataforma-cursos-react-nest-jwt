import { z } from 'zod';
import validator from 'validator';

const EMAIL_DOMAIN_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

export const UsuarioSchema = z.object({
  id: z.number().optional(),
  nomeCompleto: z.string({ error: 'Nome completo é obrigatório' })
    .min(3, 'Nome completo deve ter no mínimo 3 caracteres'),
  email: z.string({ error: 'E-mail é obrigatório' })
    .min(1, 'E-mail é obrigatório')
    .refine(
      val => validator.isEmail(val, { require_tld: true }) && EMAIL_DOMAIN_REGEX.test(val),
      'Por favor, informe um e-mail com domínio válido (ex: usuario@gmail.com, nome@empresa.com.br)'
    ),
  senhaHash: z.string({ error: 'Senha é obrigatória' })
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .refine(val => val.trim().length >= 6, 'A senha não pode conter apenas espaços em branco'),
  dataCadastro: z.string({ error: 'Data de cadastro é obrigatória' }).min(1, 'Data de cadastro é obrigatória'),
  role: z.string().optional(),
  ativo: z.boolean().optional(),
});

export type Usuario = z.infer<typeof UsuarioSchema>;
