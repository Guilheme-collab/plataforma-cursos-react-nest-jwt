import { Module } from '@nestjs/common';
import { AssinaturaService } from './assinaturas.service';
import { AssinaturaController } from './assinaturas.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [PrismaModule, KafkaModule],
  controllers: [AssinaturaController],
  providers: [AssinaturaService],
})
export class AssinaturaModule {}
