import { PartialType } from '@nestjs/swagger';
import { CreateTrilhaDto } from './create-trilhas.dto';

export class UpdateTrilhaDto extends PartialType(CreateTrilhaDto) {}
