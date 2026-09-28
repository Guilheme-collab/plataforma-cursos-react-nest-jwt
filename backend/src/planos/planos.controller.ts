import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanoService } from './planos.service';
import { CreatePlanoDto } from './dto/create-planos.dto';
import { UpdatePlanoDto } from './dto/update-planos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('planos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Plano' })
  @ApiResponse({ status: 201, description: 'Plano criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createPlanoDto: CreatePlanoDto) {
    return this.planoService.create(createPlanoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos planos' })
  @ApiResponse({ status: 200, description: 'Lista de planos retornada com sucesso.' })
  findAll() {
    return this.planoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Plano por ID' })
  @ApiResponse({ status: 200, description: 'Plano encontrado.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.planoService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Plano' })
  @ApiResponse({ status: 200, description: 'Plano atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  update(@Param('id') id: string, @Body() updatePlanoDto: UpdatePlanoDto) {
    return this.planoService.update(+id, updatePlanoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Plano' })
  @ApiResponse({ status: 200, description: 'Plano removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  remove(@Param('id') id: string) {
    return this.planoService.remove(+id);
  }
}
