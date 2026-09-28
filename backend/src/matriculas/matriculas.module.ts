import { Module } from '@nestjs/common';
import { MatriculaService } from './matriculas.service';
import { MatriculaController } from './matriculas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MatriculaController],
  providers: [MatriculaService],
})
export class MatriculaModule {}
