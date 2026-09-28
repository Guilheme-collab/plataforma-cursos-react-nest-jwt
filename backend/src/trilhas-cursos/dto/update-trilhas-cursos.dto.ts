import { PartialType } from '@nestjs/swagger';
import { CreateTrilhaCursoDto } from './create-trilhas-cursos.dto';

export class UpdateTrilhaCursoDto extends PartialType(CreateTrilhaCursoDto) {}
