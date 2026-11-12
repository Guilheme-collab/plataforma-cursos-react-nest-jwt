import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Executando seed completo...');

  // 1. Cria usuário ADMIN se não existir
  let admin = await prisma.usuario.findFirst({
    where: { email: { equals: 'admin@plataforma.com', mode: 'insensitive' } },
  });

  if (!admin) {
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash('123456', salt);

    admin = await prisma.usuario.create({
      data: {
        nomeCompleto: 'Administrador do Sistema',
        email: 'admin@plataforma.com',
        senhaHash,
        role: 'ADMIN',
        ativo: true,
      },
    });
    console.log('✅ Usuário ADMIN criado: admin@plataforma.com (senha: 123456)');
  }

  // 2. Cria Categoria padrão
  let categoria = await prisma.categoria.findFirst({
    where: { nome: 'Desenvolvimento Web' },
  });

  if (!categoria) {
    categoria = await prisma.categoria.create({
      data: {
        nome: 'Desenvolvimento Web',
        descricao: 'Formação completa em tecnologias modernas de frontend e backend.',
      },
    });
    console.log('✅ Categoria padrão criada: Desenvolvimento Web');
  }

  // 3. Cria Curso padrão se não houver cursos
  let curso = await prisma.curso.findFirst({
    where: { titulo: 'Desenvolvimento Full Stack Moderno' },
  });

  if (!curso) {
    curso = await prisma.curso.create({
      data: {
        titulo: 'Desenvolvimento Full Stack Moderno',
        descricao: 'Aprenda React, NestJS, TypeScript e PostgreSQL do zero ao deploy em produção.',
        instrutorId: admin.id,
        categoriaId: categoria.id,
        nivel: 'Intermediário',
        totalAulas: 8,
        totalHoras: 12,
      },
    });
    console.log('✅ Curso padrão criado: Desenvolvimento Full Stack Moderno');
  }

  // 4. Cria Módulo padrão e Aulas
  let modulo = await prisma.modulo.findFirst({
    where: { cursoId: curso.id, titulo: 'Fundamentos e Arquitetura' },
  });

  if (!modulo) {
    modulo = await prisma.modulo.create({
      data: {
        cursoId: curso.id,
        titulo: 'Fundamentos e Arquitetura',
        ordem: 1,
      },
    });

    await prisma.aula.createMany({
      data: [
        {
          moduloId: modulo.id,
          titulo: 'Introdução ao Ecossistema React e Node.js',
          tipoConteudo: 'Vídeo',
          urlConteudo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duracaoMinutos: 15,
          ordem: 1,
        },
        {
          moduloId: modulo.id,
          titulo: 'Configuração do Ambiente e Docker',
          tipoConteudo: 'Vídeo',
          urlConteudo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          duracaoMinutos: 25,
          ordem: 2,
        },
      ],
    });
    console.log('✅ Módulo e Aulas criados com sucesso.');
  }

  // 5. Cria Trilha de Aprendizado e vincula ao curso
  let trilha = await prisma.trilha.findFirst({
    where: { titulo: 'Trilha Carreira Desenvolvedor Full Stack' },
  });

  if (!trilha) {
    trilha = await prisma.trilha.create({
      data: {
        titulo: 'Trilha Carreira Desenvolvedor Full Stack',
        descricao: 'Sequência guiada para dominar APIs, frontend reativo e arquitetura de microsserviços.',
        categoriaId: categoria.id,
      },
    });

    await prisma.trilhaCurso.create({
      data: {
        trilhaId: trilha.id,
        cursoId: curso.id,
        ordem: 1,
      },
    });
    console.log('✅ Trilha de Aprendizado criada e vinculada ao curso.');
  }

  // 6. Cria Plano padrão se não houver
  let plano = await prisma.plano.findFirst({
    where: { nome: 'Plano Pro Acesso Total' },
  });

  if (!plano) {
    plano = await prisma.plano.create({
      data: {
        nome: 'Plano Pro Acesso Total',
        descricao: 'Acesso irrestrito a todos os cursos, trilhas, módulos e emissão de certificados.',
        preco: 89.90,
        duracaoMeses: 12,
      },
    });
    console.log('✅ Plano padrão criado: Plano Pro Acesso Total');
  }

  // 7. Notificação inicial de boas-vindas do Kafka
  const notifExistente = await prisma.notificacao.findFirst({
    where: { tipo: 'BOAS_VINDAS' },
  });

  if (!notifExistente) {
    await prisma.notificacao.create({
      data: {
        usuarioId: null,
        roleDestino: 'TODOS',
        titulo: '🎉 Bem-vindo(a) à Plataforma EAD!',
        mensagem: 'Sistema de mensageria Apache Kafka ativo. Cursos, trilhas e módulos integrados em tempo real.',
        tipo: 'BOAS_VINDAS',
        lida: false,
      },
    });
    console.log('✅ Notificação inicial de boas-vindas do Kafka registrada.');
  }

  console.log('🌱 Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
