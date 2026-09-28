import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class CreateModuloDto {
  @ApiProperty({ example: 1, description: 'ID do curso' })
  @IsInt()
    @IsNotEmpty()
  cursoId: number;

  @ApiProperty({ example: 'Introdução', description: 'Título do módulo' })
  @IsString()
    @IsNotEmpty()
    @MinLength(3)
  titulo: string;

  @ApiProperty({ example: 1, description: 'Ordem do módulo no curso' })
  @IsInt()
    @Min(1)
    @IsNotEmpty()
  ordem: number;
}
