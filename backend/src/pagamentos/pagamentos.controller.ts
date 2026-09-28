import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagamentoService } from './pagamentos.service';
import { CreatePagamentoDto } from './dto/create-pagamentos.dto';
import { UpdatePagamentoDto } from './dto/update-pagamentos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('pagamentos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('pagamentos')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Pagamento' })
  @ApiResponse({ status: 201, description: 'Pagamento criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentoService.create(createPagamentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos pagamentos' })
  @ApiResponse({ status: 200, description: 'Lista de pagamentos retornada com sucesso.' })
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Pagamento por ID' })
  @ApiResponse({ status: 200, description: 'Pagamento encontrado.' })
  @ApiResponse({ status: 404, description: 'Pagamento não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.pagamentoService.findOne(+id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Pagamento' })
  @ApiResponse({ status: 200, description: 'Pagamento atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pagamento não encontrado.' })
  update(@Param('id') id: string, @Body() updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentoService.update(+id, updatePagamentoDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  @ApiOperation({ summary: 'Remover Pagamento' })
  @ApiResponse({ status: 200, description: 'Pagamento removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pagamento não encontrado.' })
  remove(@Param('id') id: string) {
    return this.pagamentoService.remove(+id);
  }
}
