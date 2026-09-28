const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\GuilhermePoncianoSil\\Music\\crud-react-plataforma-de-cursos\\backend\\src';
const controllers = [
  'assinaturas/assinaturas.controller.ts',
  'aulas/aulas.controller.ts',
  'avaliacoes/avaliacoes.controller.ts',
  'categorias/categorias.controller.ts',
  'certificados/certificados.controller.ts',
  'cursos/cursos.controller.ts',
  'matriculas/matriculas.controller.ts',
  'modulos/modulos.controller.ts',
  'pagamentos/pagamentos.controller.ts',
  'planos/planos.controller.ts',
  'progresso-aulas/progresso-aulas.controller.ts',
  'trilhas/trilhas.controller.ts',
  'trilhas-cursos/trilhas-cursos.controller.ts',
  'usuarios/usuarios.controller.ts'
];

for (const file of controllers) {
  const fullPath = path.join(srcDir, file);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Add imports if they don't exist
  if (!content.includes('JwtAuthGuard')) {
    content = `import { UseGuards } from '@nestjs/common';\nimport { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';\nimport { RolesGuard } from '../auth/guards/roles.guard';\nimport { ApiBearerAuth } from '@nestjs/swagger';\n` + content;
  }
  
  if (file === 'usuarios/usuarios.controller.ts' && !content.includes('Public')) {
    content = `import { Public } from '../auth/decorators/public.decorator';\n` + content;
  }

  // Add @ApiBearerAuth() and @UseGuards() to the class
  if (!content.includes('@ApiBearerAuth()')) {
    content = content.replace(/@Controller\(/g, '@ApiBearerAuth()\n@UseGuards(JwtAuthGuard, RolesGuard)\n@Controller(');
  }

  // Add @Public() to POST /usuarios
  if (file === 'usuarios/usuarios.controller.ts') {
    content = content.replace(/(@Post\(\)\n  create)/g, '@Public()\n  $1');
    content = content.replace(/(@Post\(\)\n  @ApiOperation[^\n]+\n  @ApiResponse[^\n]+\n  create)/g, '@Public()\n  $1');
  }

  fs.writeFileSync(fullPath, content);
}

console.log('Done modifying controllers.');
