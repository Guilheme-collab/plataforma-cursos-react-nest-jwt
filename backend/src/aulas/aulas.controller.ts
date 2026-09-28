import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulaService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aulas.dto';
import { UpdateAulaDto } from './dto/update-aulas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('aulas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('aulas')
export class AulaController {
  constructor(private readonly aulaService: AulaService) {}

  @Roles('ADMIN')
  @Post()
  @ApiOperation({ summary: 'Criar Aula' })
  @ApiResponse({ status: 201, description: 'Aula criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulaService.create(createAulaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos aulas' })
  @ApiResponse({ status: 200, description: 'Lista de aulas retornada com sucesso.' })
  findAll() {
    return this.aulaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Aula por ID' })
  @ApiResponse({ status: 200, description: 'Aula encontrado.' })
  @ApiResponse({ status: 404, description: 'Aula não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.aulaService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Aula' })
  @ApiResponse({ status: 200, description: 'Aula atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aula não encontrado.' })
  update(@Param('id') id: string, @Body() updateAulaDto: UpdateAulaDto) {
    return this.aulaService.update(+id, updateAulaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Aula' })
  @ApiResponse({ status: 200, description: 'Aula removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Aula não encontrado.' })
  remove(@Param('id') id: string) {
    return this.aulaService.remove(+id);
  }
}
