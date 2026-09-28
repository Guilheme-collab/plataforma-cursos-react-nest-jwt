import { Module } from '@nestjs/common';
import { AulaService } from './aulas.service';
import { AulaController } from './aulas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AulaController],
  providers: [AulaService],
})
export class AulaModule {}
