import { Module } from '@nestjs/common';
import { CertificadoService } from './certificados.service';
import { CertificadoController } from './certificados.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CertificadoController],
  providers: [CertificadoService],
})
export class CertificadoModule {}
