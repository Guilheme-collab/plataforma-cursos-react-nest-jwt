import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class CreateAulaDto {
  @ApiProperty({ example: 1, description: 'ID do módulo' })
  @IsInt()
    @IsNotEmpty()
  moduloId: number;

  @ApiProperty({ example: 'Configurando o ambiente', description: 'Título da aula' })
  @IsString()
    @IsNotEmpty()
    @MinLength(3)
  titulo: string;

  @ApiProperty({ example: 'video', description: 'Tipo do conteúdo (video, texto, etc)' })
  @IsString()
    @IsNotEmpty()
  tipoConteudo: string;

  @ApiProperty({ example: 'https://youtube.com/...', description: 'URL do conteúdo' })
  @IsString()
    @IsNotEmpty()
  urlConteudo: string;

  @ApiProperty({ example: 15, description: 'Duração em minutos' })
  @IsInt()
    @Min(1)
    @IsNotEmpty()
  duracaoMinutos: number;

  @ApiProperty({ example: 1, description: 'Ordem da aula no módulo' })
  @IsInt()
    @Min(1)
    @IsNotEmpty()
  ordem: number;
}
