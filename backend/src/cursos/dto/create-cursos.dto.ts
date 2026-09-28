import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateCursoDto {
  @ApiProperty({ example: 'Curso de NestJS', description: 'Título do curso' })
  @IsString()
    @IsNotEmpty()
    @MinLength(5)
  titulo: string;

  @ApiProperty({ example: 'Aprenda a construir APIs com NestJS', description: 'Descrição do curso' })
  @IsString()
    @IsNotEmpty()
    @MinLength(10)
  descricao: string;

  @ApiProperty({ example: 1, description: 'ID do instrutor' })
  @IsInt()
    @IsNotEmpty()
  instrutorId: number;

  @ApiProperty({ example: 1, description: 'ID da categoria' })
  @IsInt()
    @IsNotEmpty()
  categoriaId: number;

  @ApiProperty({ example: 'Intermediário', description: 'Nível do curso (Iniciante, Intermediário, Avançado)' })
  @IsString()
    @IsNotEmpty()
  nivel: string;

  @ApiProperty({ example: 20, description: 'Total de aulas', required: false })
  @IsInt()
    @Min(0)
    @IsOptional()
  totalAulas?: number;

  @ApiProperty({ example: 15.5, description: 'Total de horas', required: false })
  @IsNumber()
    @Min(0)
    @IsOptional()
  totalHoras?: number;
}
