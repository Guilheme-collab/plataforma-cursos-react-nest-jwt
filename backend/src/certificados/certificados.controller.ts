import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificadoService } from './certificados.service';
import { CreateCertificadoDto } from './dto/create-certificados.dto';
import { UpdateCertificadoDto } from './dto/update-certificados.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('certificados')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('certificados')
export class CertificadoController {
  constructor(private readonly certificadoService: CertificadoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Certificado' })
  @ApiResponse({ status: 201, description: 'Certificado criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createCertificadoDto: CreateCertificadoDto) {
    return this.certificadoService.create(createCertificadoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos certificados' })
  @ApiResponse({ status: 200, description: 'Lista de certificados retornada com sucesso.' })
  findAll() {
    return this.certificadoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Certificado por ID' })
  @ApiResponse({ status: 200, description: 'Certificado encontrado.' })
  @ApiResponse({ status: 404, description: 'Certificado não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.certificadoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Certificado' })
  @ApiResponse({ status: 200, description: 'Certificado atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Certificado não encontrado.' })
  update(@Param('id') id: string, @Body() updateCertificadoDto: UpdateCertificadoDto) {
    return this.certificadoService.update(+id, updateCertificadoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Certificado' })
  @ApiResponse({ status: 200, description: 'Certificado removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Certificado não encontrado.' })
  remove(@Param('id') id: string) {
    return this.certificadoService.remove(+id);
  }
}
