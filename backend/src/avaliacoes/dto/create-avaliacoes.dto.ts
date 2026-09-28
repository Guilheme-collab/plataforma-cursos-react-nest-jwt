import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateAvaliacaoDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsInt()
    @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID do curso' })
  @IsInt()
    @IsNotEmpty()
  cursoId: number;

  @ApiProperty({ example: 5, description: 'Nota de 1 a 5' })
  @IsInt()
    @Min(1)
    @Max(5)
    @IsNotEmpty()
  nota: number;

  @ApiProperty({ example: 'Excelente curso!', description: 'Comentário da avaliação', required: false })
  @IsString()
    @IsOptional()
  comentario?: string;
}
