import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário' })
  @IsString({ message: 'Nome deve ser um texto válido' })
  @IsNotEmpty({ message: 'Nome completo é obrigatório' })
  @MinLength(3, { message: 'Nome completo deve ter no mínimo 3 caracteres' })
  nomeCompleto: string;

  @ApiProperty({ example: 'joao@example.com', description: 'Email do usuário' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  @IsEmail({}, { message: 'Por favor, informe um e-mail com domínio válido (ex: usuario@gmail.com, nome@empresa.com.br)' })
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/, {
    message: 'Formato de e-mail inválido. Informe um e-mail com domínio válido (ex: usuario@gmail.com, nome@empresa.com.br)',
  })
  email: string;

  @ApiProperty({ example: 'senha123', description: 'Senha do usuário' })
  @IsString({ message: 'Senha deve ser um texto válido' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  senhaHash: string;
}
