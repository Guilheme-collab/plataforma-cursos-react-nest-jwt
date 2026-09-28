import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UsuarioService } from '../../services/usuario.service';
import { CursoService } from '../../services/curso.service';
import { MatriculaService } from '../../services/matricula.service';
import { PagamentoService } from '../../services/pagamento.service';
import { CertificadoService } from '../../services/certificado.service';
import { AvaliacaoService } from '../../services/avaliacao.service';
import { Usuario } from '../../models/usuario.model';
import { Curso } from '../../models/curso.model';
import { Matricula } from '../../models/matricula.model';
import { toast } from 'react-toastify';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  // State para ADMIN
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [totalMatriculas, setTotalMatriculas] = useState(0);
  const [totalFaturamento, setTotalFaturamento] = useState(0);

  // State para ALUNO
  const [minhasMatriculas, setMinhasMatriculas] = useState<Matricula[]>([]);
  const [meusCertificadosCount, setMeusCertificadosCount] = useState(0);
  const [minhasAvaliacoesCount, setMinhasAvaliacoesCount] = useState(0);
  const [matriculandoId, setMatriculandoId] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);

  const carregarDadosDoBanco = async () => {
    try {
      setLoading(true);
      if (isAdmin) {
        const [usersData, cursosData, matriculasData, pagamentosData] = await Promise.all([
          UsuarioService.findAll().catch(() => []),
          CursoService.findAll().catch(() => []),
          MatriculaService.findAll().catch(() => []),
          PagamentoService.findAll().catch(() => []),
        ]);

        setUsuarios(usersData);
        setCursos(cursosData);
        setTotalMatriculas(matriculasData.length);

        const faturamento = pagamentosData.reduce((acc: number, p: any) => acc + (Number(p.valorPago) || 0), 0);
        setTotalFaturamento(faturamento);
      } else {
        const [cursosData, matriculasData, certsData, avalsData] = await Promise.all([
          CursoService.findAll().catch(() => []),
          MatriculaService.findAll().catch(() => []),
          CertificadoService.findAll().catch(() => []),
          AvaliacaoService.findAll().catch(() => []),
        ]);

        setCursos(cursosData);
        
        // Filtrar dados do aluno logado
        const userMatriculas = matriculasData.filter((m: any) => m.usuarioId === user?.id);
        setMinhasMatriculas(userMatriculas);

        const userCerts = certsData.filter((c: any) => c.usuarioId === user?.id);
        setMeusCertificadosCount(userCerts.length);

        const userAvals = avalsData.filter((a: any) => a.usuarioId === user?.id);
        setMinhasAvaliacoesCount(userAvals.length);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do banco:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDadosDoBanco();
  }, [user]);

  const handleMatricular = async (cursoId: number) => {
    if (!user?.id) return;
    try {
      setMatriculandoId(cursoId);
      await MatriculaService.create({
        usuarioId: user.id,
        cursoId: cursoId,
        dataMatricula: new Date().toISOString().split('T')[0]
      } as any);
      toast.success('Matrícula realizada com sucesso!');
      carregarDadosDoBanco();
    } catch (error: any) {
      const msg = error.response?.data?.message;
      toast.error(Array.isArray(msg) ? msg[0] : msg || 'Erro ao realizar matrícula.');
    } finally {
      setMatriculandoId(null);
    }
  };

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatarData = (dataStr?: string) => {
    if (!dataStr) return '-';
    const d = new Date(dataStr);
    return isNaN(d.getTime()) ? dataStr : d.toLocaleDateString('pt-BR');
  };

  // Visão do Administrador
  if (isAdmin) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Painel Administrativo</h2>
            <p className="text-muted mb-0">Visão geral do sistema e métricas em tempo real</p>
          </div>
          <button 
            onClick={carregarDadosDoBanco} 
            disabled={loading}
            className="btn btn-outline-primary rounded-pill px-4 shadow-sm"
          >
            <i className={`bi bi-arrow-clockwise me-2 ${loading ? 'spin' : ''}`}></i>
            {loading ? 'Atualizando...' : 'Atualizar Dados'}
          </button>
        </div>

        {/* Cards de Métricas ADMIN */}
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#f4f7fe', color: '#4318ff' }}>
                <i className="bi bi-people-fill fs-2"></i>
              </div>
              <div>
                <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Usuários Cadastrados</p>
                <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : usuarios.length}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#e5faef', color: '#01b574' }}>
                <i className="bi bi-book-fill fs-2"></i>
              </div>
              <div>
                <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Cursos no Catálogo</p>
                <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : cursos.length}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff7eb', color: '#ffb547' }}>
                <i className="bi bi-card-checklist fs-2"></i>
              </div>
              <div>
                <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Total de Matrículas</p>
                <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : totalMatriculas}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fdefec', color: '#ee5d50' }}>
                <i className="bi bi-cash-stack fs-2"></i>
              </div>
              <div>
                <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Receita Confirmada</p>
                <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : formatarMoeda(totalFaturamento)}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 mb-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-header bg-white border-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-0 text-primary"><i className="bi bi-people me-2"></i> Usuários Registrados no Banco</h5>
                  <small className="text-muted">Lista atualizada diretamente da tabela 'usuarios'</small>
                </div>
                <Link to="/usuarios" className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  Ver Todos ({usuarios.length})
                </Link>
              </div>
              <div className="card-body p-0 mt-2">
                {loading ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status"></div>
                  </div>
                ) : usuarios.length === 0 ? (
                  <div className="text-center p-5 text-muted">
                    <i className="bi bi-person-x fs-1 mb-2 d-block"></i>
                    <p className="mb-0">Nenhum usuário cadastrado no momento.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0 align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th className="border-0 ps-4">ID</th>
                          <th className="border-0">Nome Completo</th>
                          <th className="border-0">E-mail</th>
                          <th className="border-0 text-end pe-4">Data Cadastro</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.slice(-5).reverse().map(u => (
                          <tr key={u.id}>
                            <td className="ps-4 fw-bold text-muted">#{u.id}</td>
                            <td className="fw-bold">
                              <span className="badge rounded-circle bg-primary text-white me-2 px-2 py-1">
                                {u.nomeCompleto?.charAt(0).toUpperCase()}
                              </span>
                              {u.nomeCompleto}
                            </td>
                            <td className="text-muted">{u.email}</td>
                            <td className="text-end pe-4 text-muted small">{formatarData(u.dataCadastro)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-header bg-white border-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-0 text-primary"><i className="bi bi-book me-2"></i> Cursos no Banco</h5>
                  <small className="text-muted">Cursos ativos na plataforma</small>
                </div>
                <Link to="/cursos" className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  Ver ({cursos.length})
                </Link>
              </div>
              <div className="card-body px-4 pt-2">
                {loading ? (
                  <div className="text-center p-4">
                    <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                  </div>
                ) : cursos.length === 0 ? (
                  <div className="text-center p-4 text-muted">
                    <i className="bi bi-journal-x fs-1 mb-2 d-block"></i>
                    <p className="mb-0">Nenhum curso cadastrado ainda.</p>
                  </div>
                ) : (
                  <div className="list-group list-group-flush">
                    {cursos.slice(-4).reverse().map(c => (
                      <div className="list-group-item px-0 py-3 border-bottom d-flex justify-content-between align-items-center" key={c.id}>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: '#2b3674' }}>{c.titulo}</h6>
                          <small className="text-muted">
                            <i className="bi bi-person me-1"></i>
                            {(c as any).instrutor?.nomeCompleto || `Instrutor #${c.instrutorId}`}
                            {' • '}
                            <i className="bi bi-tag me-1"></i>
                            {(c as any).categoria?.nome || `Cat #${c.categoriaId}`}
                          </small>
                        </div>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1">
                          {c.nivel || 'Geral'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Visão do Aluno / Usuário Comum
  return (
    <div>
      {/* Banner de Boas-vindas */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-white" style={{ background: 'linear-gradient(135deg, #4318ff 0%, #2b3674 100%)' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold mb-2">Olá, {user?.nomeCompleto}! 👋</h2>
            <p className="mb-0 opacity-75">Seja bem-vindo à sua área de estudos. Explore os cursos e continue aprendendo.</p>
          </div>
          <div className="d-none d-md-block text-end">
            <span className="badge bg-white text-primary rounded-pill px-4 py-2 fs-6 fw-bold shadow-sm">
              <i className="bi bi-mortarboard-fill me-2"></i> Perfil Aluno
            </span>
          </div>
        </div>
      </div>

      {/* Cards de Métricas do Aluno */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#f4f7fe', color: '#4318ff' }}>
              <i className="bi bi-card-checklist fs-2"></i>
            </div>
            <div>
              <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Minhas Matrículas</p>
              <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : minhasMatriculas.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#e5faef', color: '#01b574' }}>
              <i className="bi bi-award-fill fs-2"></i>
            </div>
            <div>
              <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Meus Certificados</p>
              <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : meusCertificadosCount}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 mb-0 d-flex flex-row align-items-center p-4 border-0 shadow-sm rounded-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#fff7eb', color: '#ffb547' }}>
              <i className="bi bi-star-fill fs-2"></i>
            </div>
            <div>
              <p className="text-muted fw-bold mb-1" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Minhas Avaliações</p>
              <h3 className="fw-bold m-0" style={{ color: '#2b3674' }}>{loading ? '...' : minhasAvaliacoesCount}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Cursos Disponíveis para Matrícula */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-bold mb-1" style={{ color: '#2b3674' }}>
              <i className="bi bi-journal-bookmark-fill text-primary me-2"></i> Cursos Disponíveis
            </h5>
            <small className="text-muted">Escolha um curso e matricule-se com um clique</small>
          </div>
          <Link to="/cursos" className="btn btn-sm btn-outline-primary rounded-pill px-3">
            Ver Catálogo ({cursos.length})
          </Link>
        </div>

        {loading ? (
          <div className="text-center p-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-2 text-muted">Carregando catálogo de cursos...</p>
          </div>
        ) : cursos.length === 0 ? (
          <div className="text-center p-5 text-muted">
            <i className="bi bi-inbox fs-1 mb-2 d-block"></i>
            <p className="mb-0">Nenhum curso disponível no momento.</p>
          </div>
        ) : (
          <div className="row">
            {cursos.map(c => {
              const estaMatriculado = minhasMatriculas.some(m => m.cursoId === c.id);

              return (
                <div key={c.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-bold">
                            {c.nivel || 'Geral'}
                          </span>
                          <small className="text-muted fw-bold">
                            <i className="bi bi-clock me-1"></i>{c.totalHoras || 0}h
                          </small>
                        </div>
                        <h5 className="fw-bold mb-2" style={{ color: '#2b3674' }}>{c.titulo}</h5>
                        <p className="text-muted small mb-3 text-truncate-3">{c.descricao}</p>
                      </div>

                      <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <i className="bi bi-book me-1"></i>{c.totalAulas || 0} aulas
                        </small>
                        {estaMatriculado ? (
                          <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2">
                            <i className="bi bi-check-circle-fill me-1"></i> Já Matriculado
                          </span>
                        ) : (
                          <button
                            onClick={() => c.id && handleMatricular(c.id)}
                            disabled={matriculandoId === c.id}
                            className="btn btn-sm btn-primary rounded-pill px-4 fw-bold shadow-sm"
                          >
                            {matriculandoId === c.id ? (
                              <span><span className="spinner-border spinner-border-sm me-1"></span> Processando...</span>
                            ) : (
                              <span><i className="bi bi-plus-circle me-1"></i> Matricular-se</span>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
