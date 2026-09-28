import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
