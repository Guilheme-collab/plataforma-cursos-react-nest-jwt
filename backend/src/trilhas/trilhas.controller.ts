import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrilhaService } from './trilhas.service';
import { CreateTrilhaDto } from './dto/create-trilhas.dto';
import { UpdateTrilhaDto } from './dto/update-trilhas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('trilhas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('trilhas')
export class TrilhaController {
  constructor(private readonly trilhaService: TrilhaService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Trilha' })
  @ApiResponse({ status: 201, description: 'Trilha criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createTrilhaDto: CreateTrilhaDto) {
    return this.trilhaService.create(createTrilhaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos trilhas' })
  @ApiResponse({ status: 200, description: 'Lista de trilhas retornada com sucesso.' })
  findAll() {
    return this.trilhaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Trilha por ID' })
  @ApiResponse({ status: 200, description: 'Trilha encontrado.' })
  @ApiResponse({ status: 404, description: 'Trilha não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.trilhaService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Trilha' })
  @ApiResponse({ status: 200, description: 'Trilha atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Trilha não encontrado.' })
  update(@Param('id') id: string, @Body() updateTrilhaDto: UpdateTrilhaDto) {
    return this.trilhaService.update(+id, updateTrilhaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Trilha' })
  @ApiResponse({ status: 200, description: 'Trilha removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Trilha não encontrado.' })
  remove(@Param('id') id: string) {
    return this.trilhaService.remove(+id);
  }
}
