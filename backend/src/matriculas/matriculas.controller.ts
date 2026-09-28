import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatriculaService } from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matriculas.dto';
import { UpdateMatriculaDto } from './dto/update-matriculas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('matriculas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Matricula' })
  @ApiResponse({ status: 201, description: 'Matricula criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createMatriculaDto: CreateMatriculaDto) {
    return this.matriculaService.create(createMatriculaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos matriculas' })
  @ApiResponse({ status: 200, description: 'Lista de matriculas retornada com sucesso.' })
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Matricula por ID' })
  @ApiResponse({ status: 200, description: 'Matricula encontrado.' })
  @ApiResponse({ status: 404, description: 'Matricula não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.matriculaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Matricula' })
  @ApiResponse({ status: 200, description: 'Matricula atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Matricula não encontrado.' })
  update(@Param('id') id: string, @Body() updateMatriculaDto: UpdateMatriculaDto) {
    return this.matriculaService.update(+id, updateMatriculaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Matricula' })
  @ApiResponse({ status: 200, description: 'Matricula removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Matricula não encontrado.' })
  remove(@Param('id') id: string) {
    return this.matriculaService.remove(+id);
  }
}
