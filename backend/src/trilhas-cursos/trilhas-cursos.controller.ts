import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrilhaCursoService } from './trilhas-cursos.service';
import { CreateTrilhaCursoDto } from './dto/create-trilhas-cursos.dto';
import { UpdateTrilhaCursoDto } from './dto/update-trilhas-cursos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('trilhas-cursos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('trilhas-cursos')
export class TrilhaCursoController {
  constructor(private readonly trilhaCursoService: TrilhaCursoService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar TrilhaCurso' })
  @ApiResponse({ status: 201, description: 'TrilhaCurso criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createTrilhaCursoDto: CreateTrilhaCursoDto) {
    return this.trilhaCursoService.create(createTrilhaCursoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos trilhaCursos' })
  @ApiResponse({ status: 200, description: 'Lista de trilhaCursos retornada com sucesso.' })
  findAll() {
    return this.trilhaCursoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter TrilhaCurso por ID' })
  @ApiResponse({ status: 200, description: 'TrilhaCurso encontrado.' })
  @ApiResponse({ status: 404, description: 'TrilhaCurso não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.trilhaCursoService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar TrilhaCurso' })
  @ApiResponse({ status: 200, description: 'TrilhaCurso atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'TrilhaCurso não encontrado.' })
  update(@Param('id') id: string, @Body() updateTrilhaCursoDto: UpdateTrilhaCursoDto) {
    return this.trilhaCursoService.update(+id, updateTrilhaCursoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover TrilhaCurso' })
  @ApiResponse({ status: 200, description: 'TrilhaCurso removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'TrilhaCurso não encontrado.' })
  remove(@Param('id') id: string) {
    return this.trilhaCursoService.remove(+id);
  }
}
