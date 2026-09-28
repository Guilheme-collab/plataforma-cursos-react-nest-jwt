import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { UseGuards, ForbiddenException, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuarios.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('usuarios')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Criar Usuario' })
  @ApiResponse({ status: 201, description: 'Usuario criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'Conflito de dados.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios retornada com sucesso.' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Usuario' })
  @ApiResponse({ status: 200, description: 'Usuario atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuario não encontrado.' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto, @Req() req: any) {
    // Somente ADMIN pode alterar role ou status ativo
    if ((updateUsuarioDto.role !== undefined || updateUsuarioDto.ativo !== undefined) && req.user?.role !== 'ADMIN') {
      throw new ForbiddenException('Somente administradores podem alterar role ou status de ativação');
    }
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Patch(':id/desativar')
  @ApiOperation({ summary: 'Desativar temporariamente Usuario (soft delete)' })
  @ApiResponse({ status: 200, description: 'Usuario desativado com sucesso.' })
  desativar(@Param('id') id: string, @Req() req: any) {
    if (req.user?.role !== 'ADMIN' && req.user?.id !== +id) {
      throw new ForbiddenException('Você não tem permissão para desativar esta conta.');
    }
    return this.usuarioService.desativar(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir ou desativar Usuario' })
  @ApiResponse({ status: 200, description: 'Usuario desativado (aluno) ou excluido permanentemente (admin).' })
  async remove(@Param('id') id: string, @Req() req: any) {
    const targetId = +id;
    const isOwner = req.user?.id === targetId;
    const isAdmin = req.user?.role === 'ADMIN';

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('Você não tem permissão para excluir esta conta.');
    }

    if (isAdmin) {
      return this.usuarioService.remove(targetId);
    } else {
      return this.usuarioService.desativar(targetId);
    }
  }
}
