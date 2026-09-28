import { PartialType } from '@nestjs/swagger';
import { CreateAssinaturaDto } from './create-assinaturas.dto';

export class UpdateAssinaturaDto extends PartialType(CreateAssinaturaDto) {}
