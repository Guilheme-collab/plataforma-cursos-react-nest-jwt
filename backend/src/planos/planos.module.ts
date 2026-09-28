import { Module } from '@nestjs/common';
import { PlanoService } from './planos.service';
import { PlanoController } from './planos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
