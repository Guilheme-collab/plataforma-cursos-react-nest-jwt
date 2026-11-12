import { Controller, Get, Patch, Param, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NotificacoesService } from './notificacoes.service';

@ApiTags('notificacoes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notificacoes')
export class NotificacoesController {
  constructor(private readonly notificacoesService: NotificacoesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar notificações para o usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de notificações retornada com sucesso.' })
  listar(@Req() req: any) {
    const usuarioId = req.user?.id;
    const role = req.user?.role || 'USER';
    return this.notificacoesService.listarParaUsuario(usuarioId, role);
  }

  @Get('nao-lidas/count')
  @ApiOperation({ summary: 'Contar notificações não lidas para o usuário' })
  @ApiResponse({ status: 200, description: 'Total de não lidas retornado com sucesso.' })
  contarNaoLidas(@Req() req: any) {
    const usuarioId = req.user?.id;
    const role = req.user?.role || 'USER';
    return this.notificacoesService.contarNaoLidas(usuarioId, role);
  }

  @Patch('ler-todas')
  @ApiOperation({ summary: 'Marcar todas as notificações como lidas' })
  @ApiResponse({ status: 200, description: 'Notificações marcadas como lidas.' })
  marcarTodasComoLidas(@Req() req: any) {
    const usuarioId = req.user?.id;
    const role = req.user?.role || 'USER';
    return this.notificacoesService.marcarTodasComoLidas(usuarioId, role);
  }

  @Patch(':id/lida')
  @ApiOperation({ summary: 'Marcar notificação individual como lida' })
  @ApiResponse({ status: 200, description: 'Notificação marcada como lida.' })
  marcarComoLida(@Param('id') id: string) {
    return this.notificacoesService.marcarComoLida(+id);
  }
}
