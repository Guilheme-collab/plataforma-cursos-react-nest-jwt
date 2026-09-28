import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProgressoAulaDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsInt()
    @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID da aula' })
  @IsInt()
    @IsNotEmpty()
  aulaId: number;

  @ApiProperty({ example: 'concluida', description: 'Status do progresso' })
  @IsString()
    @IsNotEmpty()
  status: string;

  @ApiProperty({ example: '2023-12-01T00:00:00Z', description: 'Data de conclusão', required: false })
  @IsDateString()
    @IsOptional()
  dataConclusao?: Date | string;
}

