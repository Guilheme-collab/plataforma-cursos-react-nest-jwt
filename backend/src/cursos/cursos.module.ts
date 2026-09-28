import { Module } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { CursoController } from './cursos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
