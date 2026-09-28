import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCertificadoDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsInt()
    @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID do curso' })
  @IsInt()
    @IsNotEmpty()
  cursoId: number;

  @ApiProperty({ example: 1, description: 'ID da trilha', required: false })
  @IsInt()
    @IsOptional()
  trilhaId?: number;

  @ApiProperty({ example: 'CERT123456', description: 'Código único de verificação' })
  @IsString()
    @IsNotEmpty()
  codigoVerificacao: string;
}
