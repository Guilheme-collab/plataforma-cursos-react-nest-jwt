import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAssinaturaDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsInt()
    @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID do plano' })
  @IsInt()
    @IsNotEmpty()
  planoId: number;

  @ApiProperty({ example: '2023-01-01T00:00:00Z', description: 'Data de início', required: false })
  @IsDateString()
    @IsOptional()
  dataInicio?: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00Z', description: 'Data de fim' })
  @IsDateString()
    @IsNotEmpty()
  dataFim: Date;
}
