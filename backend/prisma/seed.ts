import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Executando seed...');

  // Verifica se o admin já existe
  const adminExists = await prisma.usuario.findFirst({
    where: { email: { equals: 'admin@plataforma.com', mode: 'insensitive' } },
  });

  if (!adminExists) {
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash('123456', salt);

    await prisma.usuario.create({
      data: {
        nomeCompleto: 'Administrador do Sistema',
        email: 'admin@plataforma.com',
        senhaHash,
        role: 'ADMIN',
        ativo: true,
      },
    });
    console.log('✅ Usuário ADMIN criado: admin@plataforma.com (senha: 123456)');
  } else {
    // Garante que o admin existente tenha role ADMIN
    if (adminExists.role !== 'ADMIN') {
      await prisma.usuario.update({
        where: { id: adminExists.id },
        data: { role: 'ADMIN' },
      });
      console.log('✅ Usuário admin atualizado para role ADMIN');
    } else {
      console.log('ℹ️  Usuário ADMIN já existe, pulando...');
    }
  }

  console.log('🌱 Seed finalizado!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
