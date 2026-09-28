import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamentos.service';
import { PagamentoController } from './pagamentos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class PagamentoModule {}
