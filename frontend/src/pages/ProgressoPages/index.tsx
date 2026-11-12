import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { ProgressoAulaForm } from './ProgressoAulaForm';
import { ProgressoAulaTable } from './ProgressoAulaTable';
import { ProgressoService } from '../../services/progresso.service';
import { ProgressoAula } from '../../models/progresso.model';

export const ProgressoPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const [lista, setLista] = useState<ProgressoAula[]>([]);
  const [item, setItem] = useState<Partial<ProgressoAula>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const extractErrorMessage = (error: any): string => {
    if (error?.response?.data?.message) {
      const msg = error.response.data.message;
      return Array.isArray(msg) ? msg.join(', ') : String(msg);
    }
    return error?.message || 'Ocorreu um erro inesperado na operação.';
  };

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const data = await ProgressoService.findAll();
      const filtered = isAdmin ? data : data.filter((p: any) => p.usuarioId === user?.id);
      setLista(filtered);
    } catch (error: any) {
      console.error(error);
      if (!silencioso) toast.error(extractErrorMessage(error));
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
  }, [user, isAdmin]);

  const handleSave = async (data: ProgressoAula) => {
    try {
      if (data.id) {
        await ProgressoService.update(data.id, data);
        toast.success('Progresso atualizado com sucesso!');
      } else {
        await ProgressoService.create(data);
        toast.success('Progresso registrado com sucesso!');
      }
      setItem({});
      await loadData();
    } catch (error: any) {
      console.error(error);
      toast.error(extractErrorMessage(error));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir este registro de progresso? Esta ação não pode ser desfeita.')) {
      return;
    }
    try {
      await ProgressoService.delete(id);
      toast.success('Progresso excluído com sucesso!');
      if (item.id === id) {
        setItem({});
      }
      await loadData();
    } catch (error: any) {
      console.error(error);
      toast.error(extractErrorMessage(error));
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: '#2b3674' }}>
            {isAdmin ? 'Controle de Progresso' : 'Meu Progresso'}
          </h2>
          <p className="text-muted mb-0">
            {isAdmin ? 'Acompanhe o progresso dos alunos nas aulas' : 'Acompanhe as aulas que você concluiu ou está assistindo'}
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-white text-dark shadow-sm border py-2 px-3 rounded-pill">
            <i className="bi bi-bar-chart-fill text-primary me-2"></i>
            Total: <strong>{lista.length}</strong>
          </span>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
            onClick={() => loadData()}
            title="Recarregar dados"
          >
            <i className="bi bi-arrow-clockwise me-1"></i> Atualizar
          </button>
        </div>
      </div>

      {loading ? (
        <div className="card shadow-sm border-0 rounded-4 py-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
            <h6 className="fw-semibold text-secondary">Carregando progresso...</h6>
            <p className="text-muted small mb-0">Aguarde enquanto os dados são obtidos do servidor.</p>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          <div className={isAdmin ? 'col-lg-4' : 'd-none'}>
            <ProgressoAulaForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
          </div>
          <div className={isAdmin ? 'col-lg-8' : 'col-lg-12'}>
            <ProgressoAulaTable lista={lista} onEdit={setItem} onDelete={handleDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export const ProgressoAulasPages = ProgressoPages;
