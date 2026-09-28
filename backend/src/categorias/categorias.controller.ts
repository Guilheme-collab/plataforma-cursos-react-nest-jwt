import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categorias.dto';
import { UpdateCategoriaDto } from './dto/update-categorias.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categorias')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Categoria' })
  @ApiResponse({ status: 201, description: 'Categoria criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos categorias' })
  @ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso.' })
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Categoria por ID' })
  @ApiResponse({ status: 200, description: 'Categoria encontrado.' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Categoria' })
  @ApiResponse({ status: 200, description: 'Categoria atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrado.' })
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Categoria' })
  @ApiResponse({ status: 200, description: 'Categoria removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrado.' })
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
