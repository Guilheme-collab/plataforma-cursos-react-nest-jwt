import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateTrilhaCursoDto {
  @ApiProperty({ example: 1, description: 'ID da trilha' })
  @IsInt()
    @IsNotEmpty()
  trilhaId: number;

  @ApiProperty({ example: 1, description: 'ID do curso' })
  @IsInt()
    @IsNotEmpty()
  cursoId: number;

  @ApiProperty({ example: 1, description: 'Ordem do curso na trilha' })
  @IsInt()
    @Min(1)
    @IsNotEmpty()
  ordem: number;
}
