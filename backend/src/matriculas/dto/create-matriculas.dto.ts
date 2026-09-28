import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMatriculaDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsInt()
    @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID do curso' })
  @IsInt()
    @IsNotEmpty()
  cursoId: number;

  @ApiProperty({ example: '2023-12-01T00:00:00Z', description: 'Data de conclusão', required: false })
  @IsDateString()
    @IsOptional()
  dataConclusao?: Date;
}
