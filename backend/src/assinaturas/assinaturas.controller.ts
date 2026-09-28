import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssinaturaService } from './assinaturas.service';
import { CreateAssinaturaDto } from './dto/create-assinaturas.dto';
import { UpdateAssinaturaDto } from './dto/update-assinaturas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('assinaturas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('assinaturas')
export class AssinaturaController {
  constructor(private readonly assinaturaService: AssinaturaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Assinatura' })
  @ApiResponse({ status: 201, description: 'Assinatura criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createAssinaturaDto: CreateAssinaturaDto) {
    return this.assinaturaService.create(createAssinaturaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos assinaturas' })
  @ApiResponse({ status: 200, description: 'Lista de assinaturas retornada com sucesso.' })
  findAll() {
    return this.assinaturaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Assinatura por ID' })
  @ApiResponse({ status: 200, description: 'Assinatura encontrado.' })
  @ApiResponse({ status: 404, description: 'Assinatura não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.assinaturaService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Assinatura' })
  @ApiResponse({ status: 200, description: 'Assinatura atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Assinatura não encontrado.' })
  update(@Param('id') id: string, @Body() updateAssinaturaDto: UpdateAssinaturaDto) {
    return this.assinaturaService.update(+id, updateAssinaturaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Assinatura' })
  @ApiResponse({ status: 200, description: 'Assinatura removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Assinatura não encontrado.' })
  remove(@Param('id') id: string) {
    return this.assinaturaService.remove(+id);
  }
}
