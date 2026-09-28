import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTrilhaDto {
  @ApiProperty({ example: 'Trilha Backend', description: 'Título da trilha' })
  @IsString()
    @IsNotEmpty()
    @MinLength(3)
  titulo: string;

  @ApiProperty({ example: 'Formação completa em Backend', description: 'Descrição da trilha' })
  @IsString()
    @IsNotEmpty()
    @MinLength(5)
  descricao: string;

  @ApiProperty({ example: 1, description: 'ID da categoria' })
  @IsInt()
    @IsNotEmpty()
  categoriaId: number;
}
