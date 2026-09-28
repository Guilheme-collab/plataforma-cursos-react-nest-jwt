import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AssinaturaService } from '../services/assinatura.service';
import { PagamentoService } from '../services/pagamento.service';

interface Props {
  children: React.ReactNode;
}

export const PaywallGuard: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSubscription = async () => {
      // Se for Administrador, tem acesso irrestrito
      if (user?.role === 'ADMIN') {
        if (isMounted) {
          setHasSubscription(true);
          setLoading(false);
        }
        return;
      }

      if (!user?.id) {
        if (isMounted) {
          setHasSubscription(false);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const [assinaturas, pagamentos] = await Promise.all([
          AssinaturaService.findAll(),
          PagamentoService.findAll().catch(() => []),
        ]);

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        // Filtra assinaturas ativas do usuário
        const assinaturasUsuario = assinaturas.filter((a: any) => {
          if (a.usuarioId !== user.id) return false;
          const dataFim = new Date(a.dataFim);
          dataFim.setHours(23, 59, 59, 999);
          return dataFim >= hoje;
        });

        // Verifica se há pelo menos uma assinatura com pagamento correspondente (ou assinatura ativa)
        const ativa = assinaturasUsuario.length > 0;

        if (isMounted) {
          setHasSubscription(ativa);
        }
      } catch (error) {
        console.error('Erro ao verificar assinatura:', error);
        if (isMounted) {
          setHasSubscription(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkSubscription();

    return () => {
      isMounted = false;
    };
  }, [user]);

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary mb-3" role="status"></div>
        <p className="text-muted">Verificando permissões da sua assinatura...</p>
      </div>
    );
  }

  if (hasSubscription === false && user?.role !== 'ADMIN') {
    return (
      <div className="container py-4">
        <div className="card border-0 shadow-lg rounded-4 p-5 text-center" style={{ backgroundColor: '#ffffff', maxWidth: '820px', margin: '0 auto' }}>
          <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-sm" style={{ width: '90px', height: '90px', backgroundColor: '#fff3cd', color: '#d97706' }}>
            <i className="bi bi-lock-fill display-4"></i>
          </div>
          
          <h3 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Acesso Restrito ao Conteúdo</h3>
          
          <p className="text-muted fs-6 mb-4 mx-auto" style={{ maxWidth: '620px' }}>
            Você precisa de uma <strong>assinatura ativa e paga</strong> para desbloquear os módulos, assistir às aulas, registrar seu progresso e solicitar certificados.
          </p>

          <div className="p-4 bg-light rounded-4 mb-4 text-start border">
            <h6 className="fw-bold text-dark mb-3">
              <i className="bi bi-star-fill text-warning me-2"></i>
              O que está incluso na Assinatura:
            </h6>
            <div className="row g-2 text-secondary small">
              <div className="col-md-6"><i className="bi bi-check-circle-fill text-success me-2"></i>Acesso completo a todos os Cursos e Módulos</div>
              <div className="col-md-6"><i className="bi bi-check-circle-fill text-success me-2"></i>Vídeo-aulas, textos e questionários</div>
              <div className="col-md-6"><i className="bi bi-check-circle-fill text-success me-2"></i>Controle de progresso por aula concluída</div>
              <div className="col-md-6"><i className="bi bi-check-circle-fill text-success me-2"></i>Certificado de Conclusão com validação</div>
            </div>
          </div>

          <div>
            <Link to="/planos" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow">
              <i className="bi bi-bag-check-fill me-2"></i> Escolher Plano e Assinar Agora
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
