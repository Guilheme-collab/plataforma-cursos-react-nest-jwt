import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuarios/usuarios.module';
import { CategoriaModule } from './categorias/categorias.module';
import { CursoModule } from './cursos/cursos.module';
import { ModuloModule } from './modulos/modulos.module';
import { AulaModule } from './aulas/aulas.module';
import { MatriculaModule } from './matriculas/matriculas.module';
import { ProgressoAulaModule } from './progresso-aulas/progresso-aulas.module';
import { AvaliacaoModule } from './avaliacoes/avaliacoes.module';
import { TrilhaModule } from './trilhas/trilhas.module';
import { TrilhaCursoModule } from './trilhas-cursos/trilhas-cursos.module';
import { CertificadoModule } from './certificados/certificados.module';
import { PlanoModule } from './planos/planos.module';
import { AssinaturaModule } from './assinaturas/assinaturas.module';
import { PagamentoModule } from './pagamentos/pagamentos.module';
import { KafkaModule } from './kafka/kafka.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';

@Module({
  imports: [
    KafkaModule,
    NotificacoesModule,
    AuthModule,
    PrismaModule,
    UsuarioModule,
    CategoriaModule,
    CursoModule,
    ModuloModule,
    AulaModule,
    MatriculaModule,
    ProgressoAulaModule,
    AvaliacaoModule,
    TrilhaModule,
    TrilhaCursoModule,
    CertificadoModule,
    PlanoModule,
    AssinaturaModule,
    PagamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
