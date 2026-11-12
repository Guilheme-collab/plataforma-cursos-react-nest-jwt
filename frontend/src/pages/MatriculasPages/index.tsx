import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { MatriculaForm } from './MatriculaForm';
import { MatriculaTable } from './MatriculaTable';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';

export const MatriculasPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const [lista, setLista] = useState<Matricula[]>([]);
  const [item, setItem] = useState<Partial<Matricula>>({});
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
      const data = await MatriculaService.findAll();
      // Se não for admin, filtra apenas as matrículas do usuário logado
      const filtered = isAdmin ? data : data.filter((m: any) => m.usuarioId === user?.id);
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

  const handleSave = async (data: Matricula) => {
    try {
      if (data.id) {
        await MatriculaService.update(data.id, data);
        toast.success('Matrícula atualizada com sucesso!');
      } else {
        await MatriculaService.create(data);
        toast.success('Matrícula cadastrada com sucesso!');
      }
      setItem({});
      await loadData();
    } catch (error: any) {
      console.error(error);
      toast.error(extractErrorMessage(error));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir esta matrícula? Esta ação não pode ser desfeita.')) {
      return;
    }
    try {
      await MatriculaService.delete(id);
      toast.success('Matrícula excluída com sucesso!');
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
            {isAdmin ? 'Gestão de Matrículas' : 'Minhas Matrículas'}
          </h2>
          <p className="text-muted mb-0">
            {isAdmin ? 'Gerencie as matrículas de todos os alunos' : 'Acompanhe seus cursos nos quais você está matriculado'}
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-white text-dark shadow-sm border py-2 px-3 rounded-pill">
            <i className="bi bi-card-checklist text-primary me-2"></i>
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
            <h6 className="fw-semibold text-secondary">Carregando matrículas...</h6>
            <p className="text-muted small mb-0">Aguarde enquanto os registros são obtidos.</p>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {isAdmin && (
            <div className="col-lg-4">
              <MatriculaForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
            </div>
          )}
          <div className={isAdmin ? 'col-lg-8' : 'col-lg-12'}>
            <MatriculaTable lista={lista} onEdit={setItem} onDelete={handleDelete} isAdmin={isAdmin} />
          </div>
        </div>
      )}
    </div>
  );
};
