import { PartialType } from '@nestjs/swagger';
import { CreateAvaliacaoDto } from './create-avaliacoes.dto';

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {}
