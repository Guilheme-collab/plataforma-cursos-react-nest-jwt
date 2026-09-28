import { PartialType } from '@nestjs/swagger';
import { CreateCertificadoDto } from './create-certificados.dto';

export class UpdateCertificadoDto extends PartialType(CreateCertificadoDto) {}
