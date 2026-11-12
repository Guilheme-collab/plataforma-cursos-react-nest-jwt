import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AssinaturaForm } from './AssinaturaForm';
import { AssinaturaTable } from './AssinaturaTable';
import { AssinaturaService } from '../../services/assinatura.service';
import { Assinatura } from '../../models/assinatura.model';
import { toast } from 'react-toastify';

export const AssinaturasPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const [lista, setLista] = useState<Assinatura[]>([]);
  const [item, setItem] = useState<Partial<Assinatura>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const data = await AssinaturaService.findAll();
      const filtered = isAdmin ? data : data.filter((a: any) => a.usuarioId === user?.id);
      setLista(filtered);
    } catch (error: any) {
      console.error(error);
      if (!silencioso) toast.error('Erro ao carregar dados do servidor!');
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
  }, [user]);

  const handleSave = async (data: Assinatura) => {
    try {
      if (data.id) {
        await AssinaturaService.update(data.id, data);
        toast.success('Assinatura atualizada com sucesso!');
      } else {
        await AssinaturaService.create(data);
        toast.success('Assinatura criada com sucesso!');
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
        await AssinaturaService.delete(id);
        toast.success('Registro excluído com sucesso!');
        loadData();
      } catch (error: any) {
        console.error(error);
        toast.error('Erro ao excluir registro. Pode estar em uso.');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>
            {isAdmin ? 'Gestão de Assinaturas' : 'Minha Assinatura'}
          </h3>
          <p className="text-muted mb-0">
            {isAdmin ? 'Gerencie as assinaturas de todos os usuários' : 'Acompanhe o status e a validade da sua assinatura'}
          </p>
        </div>
      </div>

      <div className="row">
        {isAdmin && (
          <div className="col-lg-4 mb-4 mb-lg-0">
            <AssinaturaForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
          </div>
        )}
        <div className={isAdmin ? 'col-lg-8' : 'col-lg-12'}>
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary">
                <i className="bi bi-card-checklist me-2"></i> Assinaturas
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
                  <h5>Nenhuma assinatura ativa</h5>
                  <p>{isAdmin ? 'Crie a primeira assinatura usando o formulário ao lado.' : 'Você ainda não possui uma assinatura. Vá na aba "Planos" para assinar!'}</p>
                </div>
              ) : (
                <AssinaturaTable lista={lista} onEdit={setItem} onDelete={handleDelete} isAdmin={isAdmin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
