import { PartialType } from '@nestjs/swagger';
import { CreateProgressoAulaDto } from './create-progresso-aulas.dto';

export class UpdateProgressoAulaDto extends PartialType(CreateProgressoAulaDto) {}
