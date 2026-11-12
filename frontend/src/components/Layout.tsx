import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { NotificacaoService } from '../services/notificacao.service';
import { Notificacao } from '../models/notificacao.model';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [naoLidasCount, setNaoLidasCount] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const ultimoIdRef = useRef<number | null>(null);

  const carregarNotificacoes = useCallback(async () => {
    if (!user) return;
    try {
      const [lista, contagem] = await Promise.all([
        NotificacaoService.findAll(),
        NotificacaoService.countUnread(),
      ]);

      // Detecta notificações para alertar com Toast instantâneo
      if (lista.length > 0) {
        if (ultimoIdRef.current !== null) {
          const novas = lista.filter((n) => n.id > (ultimoIdRef.current || 0) && !n.lida);
          novas.forEach((nova) => {
            toast.info(
              <div>
                <strong className="d-block mb-1">{nova.titulo}</strong>
                <small className="text-white-50">{nova.mensagem}</small>
              </div>,
              {
                icon: () => <span>🔔</span>,
                autoClose: 4000,
              }
            );
          });
        } else {
          // No primeiro carregamento, se houver notificação não lida recente, exibe Toast de boas-vindas
          const naoLidas = lista.filter((n) => !n.lida);
          if (naoLidas.length > 0) {
            const primeira = naoLidas[0];
            toast.info(
              <div>
                <strong className="d-block mb-1">{primeira.titulo}</strong>
                <small className="text-white-50">{primeira.mensagem}</small>
              </div>,
              {
                icon: () => <span>🔔</span>,
                autoClose: 4500,
              }
            );
          }
        }
        ultimoIdRef.current = Math.max(...lista.map((n) => n.id));
      } else {
        ultimoIdRef.current = 0;
      }

      setNotificacoes(lista);
      setNaoLidasCount(contagem.naoLidas);
    } catch (err) {
      // Ignora silenciosamente em caso de erro transitório de rede
    }
  }, [user]);

  useEffect(() => {
    carregarNotificacoes();
    // Polling ultrarrápido a cada 1.5 segundos para entrega instantânea
    const interval = setInterval(carregarNotificacoes, 1500);
    return () => clearInterval(interval);
  }, [carregarNotificacoes]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarcarComoLida = async (id: number) => {
    try {
      await NotificacaoService.markAsRead(id);
      carregarNotificacoes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarcarTodasComoLidas = async () => {
    try {
      await NotificacaoService.markAllAsRead();
      carregarNotificacoes();
    } catch (err) {
      console.error(err);
    }
  };

  const getIconeNotificacao = (tipo: string) => {
    switch (tipo) {
      case 'BOAS_VINDAS':
        return 'bi-stars text-success';
      case 'PAGAMENTO':
        return 'bi-credit-card-fill text-primary';
      case 'MATRICULA':
        return 'bi-mortarboard-fill text-info';
      case 'NOVO_CURSO':
        return 'bi-book-half text-warning';
      case 'NOVO_MODULO':
        return 'bi-collection-play-fill text-info';
      case 'NOVA_TRILHA':
        return 'bi-signpost-split-fill text-danger';
      case 'CERTIFICADO':
        return 'bi-award-fill text-warning';
      default:
        return 'bi-bell-fill text-secondary';
    }
  };

  const getLinkClass = (path: string) => {
    return `nav-link ${location.pathname === path ? 'active' : ''}`;
  };

  const handleExcluirConta = async () => {
    setMenuOpen(false);
    if (!user?.id) return;
    const confirm = window.confirm(
      'ATENÇÃO: Você tem certeza de que deseja desativar sua conta e encerrar seu acesso?\n\n' +
      'Sua conta ficará inativa e a exclusão definitiva poderá ser realizada pelo Administrador do sistema.'
    );
    if (confirm) {
      try {
        const { UsuarioService } = await import('../services/usuario.service');
        await UsuarioService.delete(user.id);
        alert('Sua conta foi desativada com sucesso. A exclusão definitiva será gerida pelo Administrador.');
        logout();
      } catch (error: any) {
        alert(error.response?.data?.message || 'Erro ao desativar conta.');
      }
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2" style={{ zIndex: 10 }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" style={{ color: '#4318ff' }} to="/">
            <i className="bi bi-mortarboard-fill fs-3 me-2"></i>
            <span>Plataforma de Cursos</span>
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle ms-3 fw-normal" style={{ fontSize: '11px' }}>v2.0</span>
          </Link>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill d-none d-sm-inline-flex align-items-center">
              <i className="bi bi-database-check me-2 fs-6"></i>
              PostgreSQL Conectado
            </span>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold text-secondary me-2">
                {user?.nomeCompleto} ({user?.role === 'ADMIN' ? 'Admin' : user?.role === 'INSTRUTOR' ? 'Instrutor' : 'Aluno'})
              </span>

              {/* Sino de Notificações (Kafka Mensageria) */}
              <div className="dropdown position-relative" ref={notifRef}>
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="btn btn-sm btn-light rounded-circle position-relative"
                  type="button"
                  style={{ width: '36px', height: '36px' }}
                  title="Notificações via Kafka"
                >
                  <i className="bi bi-bell-fill text-secondary"></i>
                  {naoLidasCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white"
                      style={{ fontSize: '10px' }}
                    >
                      {naoLidasCount > 9 ? '9+' : naoLidasCount}
                    </span>
                  )}
                </button>

                {notifOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-0 show"
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      width: '360px',
                      maxHeight: '440px',
                      overflowY: 'auto',
                      borderRadius: '12px',
                    }}
                  >
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light rounded-top">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-broadcast text-primary"></i>
                        <span className="fw-bold fs-6">Notificações (Kafka)</span>
                      </div>
                      {naoLidasCount > 0 && (
                        <button
                          onClick={handleMarcarTodasComoLidas}
                          className="btn btn-link btn-sm text-decoration-none p-0 text-primary fw-semibold"
                          style={{ fontSize: '12px' }}
                        >
                          Ler todas
                        </button>
                      )}
                    </div>

                    <div className="list-group list-group-flush">
                      {notificacoes.length === 0 ? (
                        <div className="p-4 text-center text-muted">
                          <i className="bi bi-bell-slash fs-2 d-block mb-2"></i>
                          <p className="mb-0 fs-6">Nenhuma notificação no momento.</p>
                        </div>
                      ) : (
                        notificacoes.map((n) => (
                          <div
                            key={n.id}
                            onClick={() => handleMarcarComoLida(n.id)}
                            className={`list-group-item list-group-item-action p-3 d-flex gap-3 align-items-start ${
                              !n.lida ? 'bg-primary-subtle bg-opacity-25' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                          >
                            <i className={`bi ${getIconeNotificacao(n.tipo)} fs-4 mt-1`}></i>
                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className={`fw-bold ${!n.lida ? 'text-primary' : 'text-dark'}`} style={{ fontSize: '13px' }}>
                                  {n.titulo}
                                </span>
                                {!n.lida && (
                                  <span className="badge bg-primary rounded-pill" style={{ fontSize: '8px' }}>
                                    Nova
                                  </span>
                                )}
                              </div>
                              <p className="mb-1 text-secondary" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                                {n.mensagem}
                              </p>
                              <span className="text-muted" style={{ fontSize: '10px' }}>
                                {new Date(n.dataCriacao).toLocaleString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Menu de Conta */}
              <div className="dropdown position-relative" ref={menuRef}>
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="btn btn-sm btn-light rounded-circle" 
                  type="button" 
                  style={{ width: '36px', height: '36px' }}
                >
                  <i className="bi bi-person-fill"></i>
                </button>
                
                {menuOpen && (
                  <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 show" style={{ position: 'absolute', right: 0, top: '100%' }}>
                    <li>
                      <button onClick={logout} className="dropdown-item d-flex align-items-center py-2">
                        <i className="bi bi-box-arrow-right me-2 text-muted"></i> Sair do sistema
                      </button>
                    </li>
                    {user?.role === 'USER' && (
                      <>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button onClick={handleExcluirConta} className="dropdown-item d-flex align-items-center py-2 text-danger">
                            <i className="bi bi-trash3-fill me-2"></i> Excluir minha conta
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar-modern p-3 d-flex flex-column overflow-auto" style={{ width: '280px' }}>
          <ul className="nav nav-pills flex-column mb-auto mt-2">
            <li className="nav-item">
              <Link to="/" className={getLinkClass('/')}><i className="bi bi-grid-1x2-fill me-3"></i>Dashboard</Link>
            </li>
            
            {user?.role === 'ADMIN' && (
              <>
                <li className="mt-4 mb-2"><span className="ms-3 text-uppercase fw-bold" style={{ fontSize: '11px', color: '#8f9bba', letterSpacing: '1px' }}>Core</span></li>
                <li><Link to="/usuarios" className={getLinkClass('/usuarios')}><i className="bi bi-people-fill me-3"></i>Usuários</Link></li>
                <li><Link to="/categorias" className={getLinkClass('/categorias')}><i className="bi bi-tags-fill me-3"></i>Categorias</Link></li>
              </>
            )}
            
            <li className="mt-4 mb-2"><span className="ms-3 text-uppercase fw-bold" style={{ fontSize: '11px', color: '#8f9bba', letterSpacing: '1px' }}>Conteúdo do Curso</span></li>
            <li><Link to="/cursos" className={getLinkClass('/cursos')}><i className="bi bi-book-fill me-3"></i>Cursos</Link></li>
            <li><Link to="/modulos" className={getLinkClass('/modulos')}><i className="bi bi-collection-fill me-3"></i>Módulos</Link></li>
            <li><Link to="/aulas" className={getLinkClass('/aulas')}><i className="bi bi-play-circle-fill me-3"></i>Aulas</Link></li>
            
            {user?.role !== 'INSTRUTOR' && (
              <>
                <li className="mt-4 mb-2"><span className="ms-3 text-uppercase fw-bold" style={{ fontSize: '11px', color: '#8f9bba', letterSpacing: '1px' }}>Planos & Assinaturas</span></li>
                <li><Link to="/planos" className={getLinkClass('/planos')}><i className="bi bi-cash-stack me-3"></i>Planos da Plataforma</Link></li>
                <li><Link to="/assinaturas" className={getLinkClass('/assinaturas')}><i className="bi bi-calendar-check-fill me-3"></i>{user?.role === 'ADMIN' ? 'Gestão de Assinaturas' : 'Minha Assinatura'}</Link></li>

                <li className="mt-4 mb-2"><span className="ms-3 text-uppercase fw-bold" style={{ fontSize: '11px', color: '#8f9bba', letterSpacing: '1px' }}>Minha Área</span></li>
                <li><Link to="/matriculas" className={getLinkClass('/matriculas')}><i className="bi bi-card-checklist me-3"></i>Matrículas</Link></li>
                <li><Link to="/progresso-aulas" className={getLinkClass('/progresso-aulas')}><i className="bi bi-bar-chart-fill me-3"></i>Progresso</Link></li>
                <li><Link to="/avaliacoes" className={getLinkClass('/avaliacoes')}><i className="bi bi-star-fill me-3"></i>Avaliações</Link></li>
                <li><Link to="/certificados" className={getLinkClass('/certificados')}><i className="bi bi-award-fill me-3"></i>Certificados</Link></li>
              </>
            )}
            
            {user?.role === 'ADMIN' && (
              <>
                <li className="mt-4 mb-2"><span className="ms-3 text-uppercase fw-bold" style={{ fontSize: '11px', color: '#8f9bba', letterSpacing: '1px' }}>Curadoria & Gestão</span></li>
                <li><Link to="/trilhas" className={getLinkClass('/trilhas')}><i className="bi bi-signpost-split-fill me-3"></i>Trilhas</Link></li>
                <li><Link to="/trilhas-cursos" className={getLinkClass('/trilhas-cursos')}><i className="bi bi-diagram-3-fill me-3"></i>Trilhas-Cursos</Link></li>
                <li><Link to="/pagamentos" className={getLinkClass('/pagamentos')}><i className="bi bi-credit-card-fill me-3"></i>Pagamentos Globais</Link></li>
              </>
            )}
          </ul>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-grow-1 p-5 overflow-auto">
          {children}
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick rtl={false} draggable pauseOnHover theme="colored" />
    </div>
  );
};
