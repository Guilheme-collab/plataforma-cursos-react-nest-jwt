import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaDto } from './create-categorias.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {}
