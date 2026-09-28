import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Programação', description: 'Nome da categoria' })
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'O nome da categoria é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
  nome: string;

  @ApiProperty({ example: 'Cursos de desenvolvimento e software', description: 'Descrição da categoria' })
  @IsString({ message: 'A descrição deve ser um texto' })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @MinLength(5, { message: 'A descrição deve ter no mínimo 5 caracteres' })
  descricao: string;
}
