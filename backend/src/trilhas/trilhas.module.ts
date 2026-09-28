import { Module } from '@nestjs/common';
import { TrilhaService } from './trilhas.service';
import { TrilhaController } from './trilhas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrilhaController],
  providers: [TrilhaService],
})
export class TrilhaModule {}
