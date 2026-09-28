import { PartialType } from '@nestjs/swagger';
import { CreateModuloDto } from './create-modulos.dto';

export class UpdateModuloDto extends PartialType(CreateModuloDto) {}
