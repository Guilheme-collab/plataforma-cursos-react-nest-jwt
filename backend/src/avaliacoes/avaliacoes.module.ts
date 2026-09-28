import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacoes.service';
import { AvaliacaoController } from './avaliacoes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
