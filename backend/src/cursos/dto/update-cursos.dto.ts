import { PartialType } from '@nestjs/swagger';
import { CreateCursoDto } from './create-cursos.dto';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {}
