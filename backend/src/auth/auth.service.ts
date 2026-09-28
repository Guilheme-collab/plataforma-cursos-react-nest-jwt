import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuarios/usuarios.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usuarioService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (!user.ativo) {
      throw new UnauthorizedException('Usuário inativo ou excluído');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.senha, user.senhaHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        nomeCompleto: user.nomeCompleto,
        email: user.email,
        role: user.role,
      }
    };
  }

  async reactivate(loginDto: LoginDto) {
    const user = await this.usuarioService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.senha, user.senhaHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Reativa o usuário salvando no banco de dados
    const updatedUser = await this.prisma.usuario.update({
      where: { id: user.id },
      data: { ativo: true },
    });

    const payload = { sub: updatedUser.id, email: updatedUser.email, role: updatedUser.role };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: updatedUser.id,
        nomeCompleto: updatedUser.nomeCompleto,
        email: updatedUser.email,
        role: updatedUser.role,
      },
      message: 'Sua conta foi reativada com sucesso! Todo seu histórico foi restaurado.'
    };
  }
}
