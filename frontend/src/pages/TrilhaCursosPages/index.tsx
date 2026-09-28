import { useState, useEffect } from 'react';
import { TrilhaCursoForm } from './TrilhaCursoForm';
import { TrilhaCursoTable } from './TrilhaCursoTable';
import { TrilhaCursoService } from '../../services/trilhaCurso.service';
import { TrilhaCurso } from '../../models/trilhaCurso.model';
import { toast } from 'react-toastify';

export const TrilhaCursosPages = () => {
  const [lista, setLista] = useState<TrilhaCurso[]>([]);
  const [item, setItem] = useState<Partial<TrilhaCurso>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await TrilhaCursoService.findAll();
      setLista(data);
    } catch (error: any) {
      console.error(error);
      toast.error('Erro ao carregar associações de trilhas e cursos!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data: TrilhaCurso) => {
    try {
      if (data.id) {
        await TrilhaCursoService.update(data.id, data);
        toast.success('Associação atualizada com sucesso!');
      } else {
        await TrilhaCursoService.create(data);
        toast.success('Curso associado à trilha com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg);
      } else {
        toast.error('Erro ao salvar associação da trilha com o curso.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja desvincular este curso da trilha?')) {
      try {
        await TrilhaCursoService.delete(id);
        toast.success('Associação removida com sucesso!');
        loadData();
      } catch (error: any) {
        console.error(error);
        if (error.response && error.response.data && error.response.data.message) {
          const msg = error.response.data.message;
          toast.error(Array.isArray(msg) ? msg[0] : msg);
        } else {
          toast.error('Erro ao remover associação.');
        }
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Trilhas × Cursos</h3>
          <p className="text-muted mb-0">Associe cursos às trilhas de aprendizado</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <TrilhaCursoForm 
            item={item} 
            onSave={handleSave} 
            onCancel={() => setItem({})} 
          />
        </div>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary">
                <i className="bi bi-diagram-3 me-2"></i> Cursos Vinculados
              </h5>
              <span className="badge bg-primary rounded-pill px-3 py-2">
                {lista.length} {lista.length === 1 ? 'associação' : 'associações'}
              </span>
            </div>
            <div className="card-body p-0 mt-3">
              {loading ? (
                <div className="text-center p-5 text-muted">
                  <div className="spinner-border text-primary mb-3" role="status"></div>
                  <p className="mb-0">Carregando dados...</p>
                </div>
              ) : lista.length === 0 ? (
                <div className="text-center p-5 text-muted">
                  <i className="bi bi-inbox fs-1 mb-3 d-block text-secondary"></i>
                  <h5>Nenhuma associação encontrada</h5>
                  <p className="mb-0">Vincule o primeiro curso a uma trilha usando o formulário ao lado.</p>
                </div>
              ) : (
                <TrilhaCursoTable 
                  lista={lista} 
                  onEdit={setItem} 
                  onDelete={handleDelete} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Also export as TrilhasCursosPages for compatibility
export const TrilhasCursosPages = TrilhaCursosPages;
