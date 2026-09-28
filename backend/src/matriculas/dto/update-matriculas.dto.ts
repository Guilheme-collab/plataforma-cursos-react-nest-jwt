import { PartialType } from '@nestjs/swagger';
import { CreateMatriculaDto } from './create-matriculas.dto';

export class UpdateMatriculaDto extends PartialType(CreateMatriculaDto) {}
