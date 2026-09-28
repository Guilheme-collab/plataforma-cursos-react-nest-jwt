import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Min, MinLength, IsOptional } from 'class-validator';

export class CreatePlanoDto {
  @ApiProperty({ example: 'Premium', description: 'Nome do plano' })
  @IsString()
    @IsNotEmpty()
    @MinLength(2)
  nome: string;

  @ApiProperty({ example: 'Acesso a todos os cursos', description: 'Descrição do plano' })
  @IsString()
    @IsNotEmpty()
    @MinLength(5)
  descricao: string;

  @ApiProperty({ example: 99.90, description: 'Preço do plano' })
  @IsNumber()
    @Min(0)
    @IsNotEmpty()
  preco: number;

  @ApiProperty({ example: 12, description: 'Duração do plano em meses' })
  @IsInt()
    @Min(1)
    @IsNotEmpty()
  duracaoMeses: number;

  @ApiProperty({ example: [1, 2, 3], description: 'Lista de IDs dos cursos incluídos neste plano', required: false })
  @IsInt({ each: true })
  @IsOptional()
  cursosIds?: number[];
}
