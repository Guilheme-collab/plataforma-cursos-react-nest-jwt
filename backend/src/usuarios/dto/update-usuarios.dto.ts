import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuarios.dto';
import { IsString, IsOptional, IsBoolean, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiPropertyOptional({ example: 'ADMIN', description: 'Role do usuário (USER ou ADMIN)' })
  @IsOptional()
  @IsString()
  @IsIn(['USER', 'ADMIN', 'INSTRUTOR'], { message: 'Role deve ser USER, ADMIN ou INSTRUTOR' })
  role?: string;

  @ApiPropertyOptional({ example: true, description: 'Status ativo do usuário' })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
