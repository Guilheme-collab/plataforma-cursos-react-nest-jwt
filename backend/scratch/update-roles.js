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

  if (!content.includes('Roles(')) {
    content = `import { Roles } from '../auth/decorators/roles.decorator';\n` + content;
  }
  
  content = content.replace(/@Delete\(':id'\)/g, "@Roles('ADMIN')\n  @Delete(':id')");

  fs.writeFileSync(fullPath, content);
}

console.log('Done modifying DELETE endpoints.');
