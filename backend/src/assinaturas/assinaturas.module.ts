import { Module } from '@nestjs/common';
import { AssinaturaService } from './assinaturas.service';
import { AssinaturaController } from './assinaturas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssinaturaController],
  providers: [AssinaturaService],
})
export class AssinaturaModule {}
