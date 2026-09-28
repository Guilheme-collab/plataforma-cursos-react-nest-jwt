import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PaywallGuard } from './components/PaywallGuard';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { UsuariosPages } from './pages/UsuariosPages';
import { CategoriasPages } from './pages/CategoriasPages';
import { CursosPages } from './pages/CursosPages';
import { ModulosPages } from './pages/ModulosPages';
import { AulasPages } from './pages/AulasPages';
import { MatriculasPages } from './pages/MatriculasPages';
import { ProgressoPages } from './pages/ProgressoPages';
import { AvaliacoesPages } from './pages/AvaliacoesPages';
import { TrilhasPages } from './pages/TrilhasPages';
import { TrilhaCursosPages } from './pages/TrilhaCursosPages';
import { CertificadosPages } from './pages/CertificadosPages';
import { PlanosPages } from './pages/PlanosPages';
import { AssinaturasPages } from './pages/AssinaturasPages';
import { PagamentosPages } from './pages/PagamentosPages';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, loading } = useAuth();
  if (loading) return <div className="d-flex justify-content-center align-items-center vh-100">Carregando...</div>;
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="d-flex justify-content-center align-items-center vh-100">Carregando...</div>;
  return user?.role === 'ADMIN' ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  {/* Rotas de Acesso Aberto / Catálogo */}
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/cursos" element={<CursosPages />} />
                  <Route path="/planos" element={<PlanosPages />} />
                  <Route path="/assinaturas" element={<AssinaturasPages />} />
                  <Route path="/avaliacoes" element={<AvaliacoesPages />} />

                  {/* Rotas Protegidas por Assinatura Paga (Paywall) */}
                  <Route path="/modulos" element={<PaywallGuard><ModulosPages /></PaywallGuard>} />
                  <Route path="/aulas" element={<PaywallGuard><AulasPages /></PaywallGuard>} />
                  <Route path="/matriculas" element={<PaywallGuard><MatriculasPages /></PaywallGuard>} />
                  <Route path="/progresso-aulas" element={<PaywallGuard><ProgressoPages /></PaywallGuard>} />
                  <Route path="/certificados" element={<PaywallGuard><CertificadosPages /></PaywallGuard>} />

                  {/* Rotas Exclusivas do Administrador */}
                  <Route path="/usuarios" element={<AdminRoute><UsuariosPages /></AdminRoute>} />
                  <Route path="/categorias" element={<AdminRoute><CategoriasPages /></AdminRoute>} />
                  <Route path="/trilhas" element={<AdminRoute><TrilhasPages /></AdminRoute>} />
                  <Route path="/trilhas-cursos" element={<AdminRoute><TrilhaCursosPages /></AdminRoute>} />
                  <Route path="/pagamentos" element={<AdminRoute><PagamentosPages /></AdminRoute>} />
                </Routes>
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
