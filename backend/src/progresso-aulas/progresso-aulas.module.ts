import { Module } from '@nestjs/common';
import { ProgressoAulaService } from './progresso-aulas.service';
import { ProgressoAulaController } from './progresso-aulas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProgressoAulaController],
  providers: [ProgressoAulaService],
})
export class ProgressoAulaModule {}
