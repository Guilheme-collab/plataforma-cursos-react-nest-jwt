import { Module } from '@nestjs/common';
import { ModuloService } from './modulos.service';
import { ModuloController } from './modulos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ModuloController],
  providers: [ModuloService],
})
export class ModuloModule {}
