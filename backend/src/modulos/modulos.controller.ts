import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModuloService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulos.dto';
import { UpdateModuloDto } from './dto/update-modulos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('modulos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('modulos')
export class ModuloController {
  constructor(private readonly moduloService: ModuloService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Modulo' })
  @ApiResponse({ status: 201, description: 'Modulo criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createModuloDto: CreateModuloDto) {
    return this.moduloService.create(createModuloDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos modulos' })
  @ApiResponse({ status: 200, description: 'Lista de modulos retornada com sucesso.' })
  findAll() {
    return this.moduloService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Modulo por ID' })
  @ApiResponse({ status: 200, description: 'Modulo encontrado.' })
  @ApiResponse({ status: 404, description: 'Modulo não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.moduloService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Modulo' })
  @ApiResponse({ status: 200, description: 'Modulo atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Modulo não encontrado.' })
  update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
    return this.moduloService.update(+id, updateModuloDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Modulo' })
  @ApiResponse({ status: 200, description: 'Modulo removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Modulo não encontrado.' })
  remove(@Param('id') id: string) {
    return this.moduloService.remove(+id);
  }
}
