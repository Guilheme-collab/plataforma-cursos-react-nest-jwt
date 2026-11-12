import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { PlanoForm } from './PlanoForm';
import { PlanoTable } from './PlanoTable';
import { ModalCheckoutPlano } from './ModalCheckoutPlano';
import { PlanoService } from '../../services/plano.service';
import { CursoService } from '../../services/curso.service';
import { Plano } from '../../models/plano.model';
import { Curso } from '../../models/curso.model';
import { toast } from 'react-toastify';

export const PlanosPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';
  const navigate = useNavigate();

  const [lista, setLista] = useState<Plano[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [item, setItem] = useState<Partial<Plano>>({});
  const [loading, setLoading] = useState(true);

  // Estado para controlar o modal de checkout
  const [planoCheckout, setPlanoCheckout] = useState<Plano | null>(null);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const [dataPlanos, dataCursos] = await Promise.all([
        PlanoService.findAll(),
        CursoService.findAll().catch(() => []),
      ]);
      setLista(dataPlanos);
      setCursos(dataCursos);
    } catch (error: any) {
      console.error(error);
      if (!silencioso) toast.error('Erro ao carregar planos!');
    } finally {
      if (!silencioso) setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleSync = () => loadData(true);
    window.addEventListener('plataforma:dados-atualizados', handleSync);

    const interval = setInterval(() => {
      loadData(true);
    }, 3500);

    return () => {
      window.removeEventListener('plataforma:dados-atualizados', handleSync);
      clearInterval(interval);
    };
  }, []);

  const handleSave = async (data: Plano) => {
    try {
      if (data.id) {
        await PlanoService.update(data.id, data);
        toast.success('Plano atualizado com sucesso!');
      } else {
        await PlanoService.create(data);
        toast.success('Plano criado com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg);
      } else {
        toast.error('Erro ao salvar os dados.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      try {
        await PlanoService.delete(id);
        toast.success('Registro excluído com sucesso!');
        loadData();
      } catch (error: any) {
        console.error(error);
        toast.error('Erro ao excluir registro. Pode estar em uso.');
      }
    }
  };

  const handleAbrirCheckout = (plano: Plano) => {
    setPlanoCheckout(plano);
  };

  const handleCheckoutSucesso = () => {
    setPlanoCheckout(null);
    navigate('/modulos');
  };

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>
            {isAdmin ? 'Gestão de Planos' : 'Planos de Assinatura'}
          </h3>
          <p className="text-muted mb-0">
            {isAdmin ? 'Configure os planos de assinatura disponíveis' : 'Escolha o plano ideal para liberar acesso completo às matérias, módulos e aulas'}
          </p>
        </div>
      </div>

      {isAdmin ? (
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <PlanoForm item={item} cursos={cursos} onSave={handleSave} onCancel={() => setItem({})} />
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0 text-primary">
                  <i className="bi bi-collection-fill me-2"></i> Planos Cadastrados
                </h5>
                <span className="badge bg-primary rounded-pill px-3 py-2">{lista.length} registros</span>
              </div>
              <div className="card-body p-0 mt-3">
                {loading ? (
                  <div className="text-center p-5 text-muted">
                    <div className="spinner-border text-primary mb-3" role="status"></div>
                    <p>Carregando dados...</p>
                  </div>
                ) : lista.length === 0 ? (
                  <div className="text-center p-5 text-muted">
                    <i className="bi bi-inbox fs-1 mb-3 d-block text-secondary"></i>
                    <h5>Nenhum plano encontrado</h5>
                    <p>Crie seu primeiro plano usando o formulário ao lado.</p>
                  </div>
                ) : (
                  <PlanoTable lista={lista} onEdit={(plano) => {
                    // Pre-fill cursosIds for editing based on the planosCursos relation
                    const cursosIds = plano.planosCursos?.map((pc: any) => pc.cursoId) || [];
                    setItem({ ...plano, cursosIds });
                  }} onDelete={handleDelete} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Visão de Catálogo de Planos para o Aluno */
        <div>
          {loading ? (
            <div className="text-center p-5">
              <div className="spinner-border text-primary mb-3" role="status"></div>
              <p className="text-muted">Carregando opções de planos...</p>
            </div>
          ) : lista.length === 0 ? (
            <div className="card border-0 shadow-sm rounded-4 text-center p-5 text-muted">
              <i className="bi bi-cash-stack fs-1 mb-3 d-block text-secondary"></i>
              <h5>Nenhum plano disponível no momento</h5>
              <p className="mb-0">Aguarde a disponibilização dos planos pelo administrador.</p>
            </div>
          ) : (
            <div className="row">
              {lista.map(p => (
                <div key={p.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden">
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-bold">
                        {p.duracaoMeses} {p.duracaoMeses === 1 ? 'mês' : 'meses'}
                      </span>
                    </div>

                    <div>
                      <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f4f7fe', color: '#4318ff' }}>
                        <i className="bi bi-gem fs-3"></i>
                      </div>

                      <h4 className="fw-bold mb-2" style={{ color: '#2b3674' }}>{p.nome}</h4>
                      <p className="text-muted small mb-4">{p.descricao}</p>

                      <div className="mb-4">
                        <span className="fs-2 fw-bold text-primary">{formatarMoeda(p.preco)}</span>
                        <span className="text-muted small"> / total</span>
                      </div>

                      <ul className="list-unstyled text-muted small mb-4">
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Acesso aos cursos selecionados neste pacote</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Aulas em vídeo, textos e questionários</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Acompanhamento do progresso de aulas</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Emissão de Certificados com código único</li>
                      </ul>
                    </div>

                    <button
                      onClick={() => handleAbrirCheckout(p)}
                      className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow-sm mt-3"
                    >
                      <i className="bi bi-bag-check-fill me-2"></i> Assinar Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal de Checkout */}
      {planoCheckout && (
        <ModalCheckoutPlano
          plano={planoCheckout}
          cursos={planoCheckout.planosCursos?.map((pc: any) => pc.curso) || []}
          onClose={() => setPlanoCheckout(null)}
          onSuccess={handleCheckoutSucesso}
        />
      )}
    </div>
  );
};
