import { Module } from '@nestjs/common';
import { TrilhaCursoService } from './trilhas-cursos.service';
import { TrilhaCursoController } from './trilhas-cursos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrilhaCursoController],
  providers: [TrilhaCursoService],
})
export class TrilhaCursoModule {}
