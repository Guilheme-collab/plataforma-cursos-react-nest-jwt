import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { AulaForm } from './AulaForm';
import { AulaTable } from './AulaTable';
import { AulaService } from '../../services/aula.service';
import { MatriculaService } from '../../services/matricula.service';
import { Aula } from '../../models/aula.model';

export const AulasPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const [lista, setLista] = useState<Aula[]>([]);
  const [item, setItem] = useState<Partial<Aula>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const extractErrorMessage = (error: any): string => {
    if (error?.response?.data?.message) {
      const msg = error.response.data.message;
      return Array.isArray(msg) ? msg.join(', ') : String(msg);
    }
    return error?.message || 'Ocorreu um erro inesperado na operação.';
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await AulaService.findAll();
      
      if (!isAdmin) {
        // Find courses the user is enrolled in
        const matriculas = await MatriculaService.findAll();
        const myCursosIds = matriculas
          .filter(m => m.usuarioId === user?.id)
          .map(m => m.cursoId);
        
        // Filter aulas to only show those from enrolled courses
        setLista(data.filter((a: any) => a.modulo && myCursosIds.includes(a.modulo.cursoId)));
      } else {
        setLista(data);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(extractErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data: Aula) => {
    try {
      if (data.id) {
        await AulaService.update(data.id, data);
        toast.success('Aula atualizada com sucesso!');
      } else {
        await AulaService.create(data);
        toast.success('Aula cadastrada com sucesso!');
      }
      setItem({});
      await loadData();
    } catch (error: any) {
      console.error(error);
      toast.error(extractErrorMessage(error));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir esta aula? Esta ação não pode ser desfeita.')) {
      return;
    }
    try {
      await AulaService.delete(id);
      toast.success('Aula excluída com sucesso!');
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
            {isAdmin ? 'Gestão de Aulas' : 'Aulas Disponíveis'}
          </h2>
          <p className="text-muted mb-0">
            {isAdmin ? 'Cadastre e gerencie as aulas dos módulos' : 'Consulte as aulas dos módulos dos cursos'}
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-white text-dark shadow-sm border py-2 px-3 rounded-pill">
            <i className="bi bi-play-circle-fill text-primary me-2"></i>
            Total: <strong>{lista.length}</strong>
          </span>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
            onClick={loadData}
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
            <h6 className="fw-semibold text-secondary">Carregando aulas...</h6>
            <p className="text-muted small mb-0">Aguarde enquanto as aulas são carregadas.</p>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {isAdmin && (
            <div className="col-lg-4">
              <AulaForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
            </div>
          )}
          <div className={isAdmin ? 'col-lg-8' : 'col-lg-12'}>
            <AulaTable lista={lista} onEdit={setItem} onDelete={handleDelete} isAdmin={isAdmin} />
          </div>
        </div>
      )}
    </div>
  );
};
