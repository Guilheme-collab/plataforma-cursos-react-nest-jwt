import { PartialType } from '@nestjs/swagger';
import { CreatePagamentoDto } from './create-pagamentos.dto';

export class UpdatePagamentoDto extends PartialType(CreatePagamentoDto) {}
