import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursoDto } from './dto/update-cursos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('cursos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Curso' })
  @ApiResponse({ status: 201, description: 'Curso criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos cursos' })
  @ApiResponse({ status: 200, description: 'Lista de cursos retornada com sucesso.' })
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Curso por ID' })
  @ApiResponse({ status: 200, description: 'Curso encontrado.' })
  @ApiResponse({ status: 404, description: 'Curso não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Curso' })
  @ApiResponse({ status: 200, description: 'Curso atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Curso não encontrado.' })
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Curso' })
  @ApiResponse({ status: 200, description: 'Curso removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Curso não encontrado.' })
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
