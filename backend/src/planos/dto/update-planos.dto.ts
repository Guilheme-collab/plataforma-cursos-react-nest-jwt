import { PartialType } from '@nestjs/swagger';
import { CreatePlanoDto } from './create-planos.dto';

export class UpdatePlanoDto extends PartialType(CreatePlanoDto) {}
