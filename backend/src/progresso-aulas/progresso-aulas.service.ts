import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateProgressoAulaDto } from './dto/create-progresso-aulas.dto';
import { UpdateProgressoAulaDto } from './dto/update-progresso-aulas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgressoAulaService {
  constructor(private prisma: PrismaService) {}

  async create(createProgressoAulaDto: CreateProgressoAulaDto) {
    try {
      // 1. Busca a aula e o curso ao qual ela pertence
      const aula = await this.prisma.aula.findUnique({
        where: { id: createProgressoAulaDto.aulaId },
        include: { modulo: true },
      });

      if (!aula) {
        throw new NotFoundException('Aula não encontrada.');
      }

      // 2. Regra de Negócio: O aluno DEVE estar matriculado no curso desta aula
      const matricula = await this.prisma.matricula.findFirst({
        where: {
          usuarioId: createProgressoAulaDto.usuarioId,
          cursoId: aula.modulo.cursoId,
        },
      });

      if (!matricula) {
        throw new ConflictException(
          'Não é possível registrar progresso: o aluno não está matriculado no curso desta aula.'
        );
      }

      const dataConclusao = createProgressoAulaDto.dataConclusao
        ? new Date(createProgressoAulaDto.dataConclusao)
        : new Date();

      // 3. Upsert: Se já existir progresso desta aula para este aluno, atualiza o status em vez de quebrar
      return await this.prisma.progressoAula.upsert({
        where: {
          usuarioId_aulaId: {
            usuarioId: createProgressoAulaDto.usuarioId,
            aulaId: createProgressoAulaDto.aulaId,
          },
        },
        create: {
          usuarioId: createProgressoAulaDto.usuarioId,
          aulaId: createProgressoAulaDto.aulaId,
          status: createProgressoAulaDto.status || 'Concluído',
          dataConclusao,
        },
        update: {
          status: createProgressoAulaDto.status || 'Concluído',
          dataConclusao,
        },
        include: { usuario: true, aula: true },
      });
    } catch (error: any) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível registrar o progresso: o aluno ou a aula selecionada não existe.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.prisma.progressoAula.findMany({
      include: { usuario: true, aula: true },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.progressoAula.findUnique({
      where: { id },
      include: { usuario: true, aula: true },
    });
    if (!record) {
      throw new NotFoundException('Registro de progresso não encontrado.');
    }
    return record;
  }

  async update(id: number, updateProgressoAulaDto: UpdateProgressoAulaDto) {
    try {
      const data: any = { ...updateProgressoAulaDto };
      if (data.dataConclusao !== undefined) {
        data.dataConclusao = data.dataConclusao ? new Date(data.dataConclusao) : new Date();
      }

      return await this.prisma.progressoAula.update({
        where: { id },
        data,
        include: { usuario: true, aula: true },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não foi possível atualizar o progresso: o aluno ou a aula selecionada não existe.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Registro de progresso não encontrado para atualizar.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.progressoAula.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new ConflictException('Não é possível excluir este registro de progresso pois existem dependências vinculadas.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Registro de progresso não encontrado para remoção.');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
