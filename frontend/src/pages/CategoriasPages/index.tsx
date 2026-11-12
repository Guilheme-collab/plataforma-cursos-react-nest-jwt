import React, { useState, useEffect } from 'react';
import { CategoriaForm } from './CategoriaForm';
import { CategoriaTable } from './CategoriaTable';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria.model';
import { toast } from 'react-toastify';

export const CategoriasPages: React.FC = () => {
  const [lista, setLista] = useState<Categoria[]>([]);
  const [item, setItem] = useState<Partial<Categoria>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const data = await CategoriaService.findAll();
      setLista(data);
    } catch (error: any) {
      console.error(error);
      if (!silencioso) toast.error('Erro ao carregar dados!');
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

  const handleSave = async (data: Categoria) => {
    try {
      if (data.id) {
        await CategoriaService.update(data.id, data);
        toast.success('Registro atualizado com sucesso!');
      } else {
        await CategoriaService.create(data);
        toast.success('Registro criado com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      if (error.response?.data?.message) {
        const msg = error.response.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg);
      } else {
        toast.error('Erro ao salvar.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      try {
        await CategoriaService.delete(id);
        toast.success('Excluído com sucesso!');
        loadData();
      } catch (error: any) {
        if (error.response?.data?.message) {
          const msg = error.response.data.message;
          toast.error(Array.isArray(msg) ? msg[0] : msg);
        } else {
          toast.error('Erro ao excluir. Pode estar em uso.');
        }
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Gestão de Categorias</h3>
          <p className="text-muted">Organize os cursos por categorias</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <CategoriaForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
        </div>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary"><i className="bi bi-list-ul me-2"></i> Registros</h5>
              <span className="badge bg-primary rounded-pill px-3 py-2">{lista.length} registros</span>
            </div>
            <div className="card-body p-0 mt-3">
              {loading ? (
                <div className="text-center p-5"><div className="spinner-border text-primary"></div><p className="mt-3 text-muted">Carregando...</p></div>
              ) : lista.length === 0 ? (
                <div className="text-center p-5 text-muted"><i className="bi bi-inbox fs-1 mb-3 d-block"></i><h5>Nenhum registro</h5><p>Use o formulário ao lado.</p></div>
              ) : (
                <CategoriaTable lista={lista} onEdit={setItem} onDelete={handleDelete} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
