import { Module } from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { CategoriaController } from './categorias.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
