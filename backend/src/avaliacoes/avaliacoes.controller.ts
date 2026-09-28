import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacoes.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoes.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('avaliacoes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Avaliacao' })
  @ApiResponse({ status: 201, description: 'Avaliacao criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos avaliacoes' })
  @ApiResponse({ status: 200, description: 'Lista de avaliacoes retornada com sucesso.' })
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Avaliacao por ID' })
  @ApiResponse({ status: 200, description: 'Avaliacao encontrado.' })
  @ApiResponse({ status: 404, description: 'Avaliacao não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Avaliacao' })
  @ApiResponse({ status: 200, description: 'Avaliacao atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Avaliacao não encontrado.' })
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Avaliacao' })
  @ApiResponse({ status: 200, description: 'Avaliacao removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Avaliacao não encontrado.' })
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}
