import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Realiza login e retorna o token JWT' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('reactivate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reativa uma conta desativada/excluída e faz login' })
  @ApiResponse({ status: 200, description: 'Conta reativada com sucesso' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async reactivate(@Body() loginDto: LoginDto) {
    return this.authService.reactivate(loginDto);
  }
}
