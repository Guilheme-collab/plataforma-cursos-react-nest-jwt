const axios = require('axios');

const API_URL = 'http://localhost:3000';

async function runTests() {
  console.log('🚀 Iniciando bateria completa de testes de API Mobile...');
  let totalPass = 0;
  let totalFail = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  ✅ PASS: ${testName}`);
      totalPass++;
    } else {
      console.error(`  ❌ FAIL: ${testName}`);
      totalFail++;
    }
  }

  try {
    // 1. Teste de Autenticação Admin (Login é o primeiro passo no Mobile)
    console.log('\n--- 1. Testes de Autenticação Admin & Token JWT ---');
    const loginAdminRes = await axios.post(`${API_URL}/auth/login`, {
      email: 'admin@plataforma.com',
      senha: '123456',
    });
    assert(!!loginAdminRes.data.access_token, 'Login do Administrador gerou access_token JWT');
    assert(loginAdminRes.data.user.role === 'ADMIN', 'Usuário autenticado possui role ADMIN');
    const adminToken = loginAdminRes.data.access_token;

    const adminClient = axios.create({
      baseURL: API_URL,
      headers: { Authorization: `Bearer ${adminToken}` },
    });

    // 2. Teste de Catálogo e Cursos com Usuário Autenticado
    console.log('\n--- 2. Testes de Catálogo, Cursos e Categorias (Home & Catálogo Mobile) ---');
    const cursosRes = await adminClient.get('/cursos');
    assert(Array.isArray(cursosRes.data) && cursosRes.data.length > 0, `Listagem de cursos retornou ${cursosRes.data.length} cursos`);

    const categoriasRes = await adminClient.get('/categorias');
    assert(Array.isArray(categoriasRes.data) && categoriasRes.data.length > 0, `Listagem de categorias retornou ${categoriasRes.data.length} categorias`);

    const curso1 = cursosRes.data[0];
    const cursoDetalhesRes = await adminClient.get(`/cursos/${curso1.id}`);
    assert(cursoDetalhesRes.data.id === curso1.id, `Detalhes do curso #${curso1.id} ("${curso1.titulo}") carregados`);

    const modulosRes = await adminClient.get('/modulos');
    assert(Array.isArray(modulosRes.data) && modulosRes.data.length > 0, `Listagem de módulos retornou ${modulosRes.data.length} módulos`);

    const aulasRes = await adminClient.get('/aulas');
    assert(Array.isArray(aulasRes.data) && aulasRes.data.length > 0, `Listagem de aulas retornou ${aulasRes.data.length} aulas`);

    const planosRes = await adminClient.get('/planos');
    assert(Array.isArray(planosRes.data), `Listagem de planos retornou ${planosRes.data.length} planos`);

    // 3. Teste de Cadastro de Novo Usuário (RegisterScreen no Mobile)
    console.log('\n--- 3. Teste de Cadastro e Login de Novo Aluno (RegisterScreen Mobile) ---');
    const randomId = Math.floor(Math.random() * 100000);
    const testEmail = `aluno.mobile${randomId}@plataforma.com`;
    const testSenha = 'senhaSegura123';
    const testNome = `Aluno Mobile ${randomId}`;

    const registroRes = await axios.post(`${API_URL}/usuarios`, {
      nomeCompleto: testNome,
      email: testEmail,
      senhaHash: testSenha,
    });
    assert(registroRes.data.id && registroRes.data.email === testEmail, `Cadastro de novo aluno via POST /usuarios realizado (ID ${registroRes.data.id})`);

    const loginAlunoRes = await axios.post(`${API_URL}/auth/login`, {
      email: testEmail,
      senha: testSenha,
    });
    assert(!!loginAlunoRes.data.access_token, 'Login com novo aluno gerou token JWT com sucesso');
    const alunoToken = loginAlunoRes.data.access_token;
    const alunoUser = loginAlunoRes.data.user;

    const alunoClient = axios.create({
      baseURL: API_URL,
      headers: { Authorization: `Bearer ${alunoToken}` },
    });

    // 4. Teste de Matrícula (CursoDetalhesScreen -> Matricular)
    console.log('\n--- 4. Teste de Matrícula e Persistência Banco Mobile <-> Web ---');
    const hoje = new Date().toISOString().split('T')[0];
    const matriculaRes = await alunoClient.post('/matriculas', {
      usuarioId: alunoUser.id,
      cursoId: curso1.id,
      dataMatricula: hoje,
    });
    assert(matriculaRes.data.id > 0, `Matrícula efetuada com sucesso (Matrícula ID ${matriculaRes.data.id})`);

    const minhasMatriculasRes = await alunoClient.get('/matriculas');
    const matriculaEncontrada = minhasMatriculasRes.data.find(m => m.usuarioId === alunoUser.id && m.cursoId === curso1.id);
    assert(!!matriculaEncontrada, 'Matrícula listada com sucesso no backend compartilhado');

    // 5. Teste de Progresso de Aula (AulaPlayerScreen -> Concluir Aula)
    console.log('\n--- 5. Teste de Progresso da Aula e Toggle ---');
    const aulasDoCurso = aulasRes.data.filter(a => {
      const mod = modulosRes.data.find(m => m.id === a.moduloId);
      return mod && mod.cursoId === curso1.id;
    });

    let progressoId = null;
    if (aulasDoCurso.length > 0) {
      const primeiraAula = aulasDoCurso[0];
      const progressoRes = await alunoClient.post('/progresso-aulas', {
        usuarioId: alunoUser.id,
        aulaId: primeiraAula.id,
        status: 'Concluído',
        dataConclusao: hoje,
      });
      assert(progressoRes.data.id > 0, `Aula ID ${primeiraAula.id} marcada como Concluída (Progresso ID ${progressoRes.data.id})`);
      progressoId = progressoRes.data.id;

      // Buscar progresso
      const allProg = await alunoClient.get('/progresso-aulas');
      const progEncontrado = allProg.data.find(p => p.id === progressoId);
      assert(progEncontrado && progEncontrado.status === 'Concluído', 'Progresso confirmado na base de dados PostgreSQL');

      // Teste de desmarcar aula (toggle status para Em Andamento)
      const patchProg = await alunoClient.patch(`/progresso-aulas/${progressoId}`, {
        status: 'Em Andamento',
      });
      assert(patchProg.data.status === 'Em Andamento', 'Aula desmarcada com sucesso (PATCH status: Em Andamento)');

      // Remarcar para Concluído (upsert)
      await alunoClient.post('/progresso-aulas', {
        usuarioId: alunoUser.id,
        aulaId: primeiraAula.id,
        status: 'Concluído',
        dataConclusao: hoje,
      });
    }

    // 6. Teste de Avaliação de Curso (CursoDetalhesScreen -> Avaliar)
    console.log('\n--- 6. Teste de Avaliação de Curso ---');
    const avaliacaoRes = await alunoClient.post('/avaliacoes', {
      usuarioId: alunoUser.id,
      cursoId: curso1.id,
      nota: 5,
      comentario: 'Excelente experiência mobile e conteúdo de alta qualidade!',
    });
    assert(avaliacaoRes.data.id > 0, `Avaliação registrada com nota 5 (Avaliação ID ${avaliacaoRes.data.id})`);

    const avaliacoesCurso = await alunoClient.get('/avaliacoes');
    const avEncontrada = avaliacoesCurso.data.find(av => av.id === avaliacaoRes.data.id);
    assert(avEncontrada && avEncontrada.nota === 5, 'Avaliação confirmada na listagem de avaliações do curso');

    // 7. Teste de Emissão de Certificado (CertificadosScreen)
    console.log('\n--- 7. Teste de Emissão e Consulta de Certificado ---');
    const certCodigo = `CERT-MOB-${Date.now().toString(36).toUpperCase()}`;
    const certRes = await alunoClient.post('/certificados', {
      usuarioId: alunoUser.id,
      cursoId: curso1.id,
      codigoVerificacao: certCodigo,
    });
    assert(certRes.data.id > 0 && certRes.data.codigoVerificacao === certCodigo, `Certificado gerado com sucesso: ${certCodigo}`);

    const certListRes = await alunoClient.get('/certificados');
    const certEncontrado = certListRes.data.find(c => c.codigoVerificacao === certCodigo);
    assert(!!certEncontrado, 'Certificado recuperado com sucesso na listagem de certificados');

    // 8. Teste de Assinatura e Pagamento (PlanosScreen -> Checkout Modal)
    console.log('\n--- 8. Teste de Assinatura de Plano e Pagamento (Checkout) ---');
    if (planosRes.data.length > 0) {
      const plano1 = planosRes.data[0];
      const dataInicio = new Date();
      const dataFim = new Date();
      dataFim.setMonth(dataFim.getMonth() + (plano1.duracaoMeses || 1));

      const assinaturaRes = await alunoClient.post('/assinaturas', {
        usuarioId: alunoUser.id,
        planoId: plano1.id,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: dataFim.toISOString().split('T')[0],
      });
      assert(assinaturaRes.data.id > 0, `Assinatura de plano criada com ID ${assinaturaRes.data.id}`);

      const pagRes = await alunoClient.post('/pagamentos', {
        assinaturaId: assinaturaRes.data.id,
        valorPago: plano1.preco,
        dataPagamento: hoje,
        metodoPagamento: 'PIX',
        idTransacaoGateway: `PIX-TX-${Date.now()}`,
      });
      assert(pagRes.data.id > 0, `Pagamento PIX registrado com ID ${pagRes.data.id}`);
    }

    // 9. Teste de Desativação e Reativação de Conta (PerfilScreen)
    console.log('\n--- 9. Teste de Desativação e Reativação (PerfilScreen) ---');
    const desativarRes = await alunoClient.patch(`/usuarios/${alunoUser.id}/desativar`);
    assert(desativarRes.data.ativo === false, 'Conta de aluno desativada com sucesso via /usuarios/:id/desativar');

    // Tentativa de login deve alertar conta inativa
    try {
      await axios.post(`${API_URL}/auth/login`, { email: testEmail, senha: testSenha });
      assert(false, 'Login com conta desativada deveria ter sido rejeitado');
    } catch (err) {
      assert(err.response?.status === 401 || err.response?.status === 403, 'Login com conta inativa corretamente bloqueado (HTTP 401/403)');
    }

    // Reativação na tela de login
    const reativarRes = await axios.post(`${API_URL}/auth/reactivate`, { email: testEmail, senha: testSenha });
    assert(!!reativarRes.data.access_token, 'Conta reativada com sucesso via /auth/reactivate e novo JWT obtido');

    console.log(`\n========================================`);
    console.log(`🎉 RESULTADO FINAL DOS TESTES DE INTEGRAÇÃO:`);
    console.log(`Total Sucessos: ${totalPass}`);
    console.log(`Total Falhas:   ${totalFail}`);
    console.log(`========================================\n`);

    if (totalFail > 0) process.exit(1);
  } catch (error) {
    console.error('❌ Erro inesperado durante execução dos testes:', error.response?.data || error.message);
    process.exit(1);
  }
}

runTests();
