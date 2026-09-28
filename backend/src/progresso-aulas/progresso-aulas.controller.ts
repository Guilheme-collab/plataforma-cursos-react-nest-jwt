import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressoAulaService } from './progresso-aulas.service';
import { CreateProgressoAulaDto } from './dto/create-progresso-aulas.dto';
import { UpdateProgressoAulaDto } from './dto/update-progresso-aulas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('progresso-aulas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('progresso-aulas')
export class ProgressoAulaController {
  constructor(private readonly progressoAulaService: ProgressoAulaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar ProgressoAula' })
  @ApiResponse({ status: 201, description: 'ProgressoAula criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createProgressoAulaDto: CreateProgressoAulaDto) {
    return this.progressoAulaService.create(createProgressoAulaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos progressoAulas' })
  @ApiResponse({ status: 200, description: 'Lista de progressoAulas retornada com sucesso.' })
  findAll() {
    return this.progressoAulaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter ProgressoAula por ID' })
  @ApiResponse({ status: 200, description: 'ProgressoAula encontrado.' })
  @ApiResponse({ status: 404, description: 'ProgressoAula não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.progressoAulaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar ProgressoAula' })
  @ApiResponse({ status: 200, description: 'ProgressoAula atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'ProgressoAula não encontrado.' })
  update(@Param('id') id: string, @Body() updateProgressoAulaDto: UpdateProgressoAulaDto) {
    return this.progressoAulaService.update(+id, updateProgressoAulaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover ProgressoAula' })
  @ApiResponse({ status: 200, description: 'ProgressoAula removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'ProgressoAula não encontrado.' })
  remove(@Param('id') id: string) {
    return this.progressoAulaService.remove(+id);
  }
}
