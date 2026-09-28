import React, { useState, useEffect } from 'react';
import { TrilhaForm } from './TrilhaForm';
import { TrilhaTable } from './TrilhaTable';
import { TrilhaService } from '../../services/trilha.service';
import { Trilha } from '../../models/trilha.model';
import { toast } from 'react-toastify';

export const TrilhasPages = () => {
  const [lista, setLista] = useState<Trilha[]>([]);
  const [item, setItem] = useState<Partial<Trilha>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await TrilhaService.findAll();
      setLista(data);
    } catch (error: any) {
      console.error(error);
      toast.error('Erro ao carregar dados do servidor!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSave = async (data: Trilha) => {
    try {
      if (data.id) {
        await TrilhaService.update(data.id, data);
        toast.success('Trilha atualizada com sucesso!');
      } else {
        await TrilhaService.create(data);
        toast.success('Trilha criada com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      console.error(error);
      // Extrai mensagens de validação do NestJS (erro 400)
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
        await TrilhaService.delete(id);
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
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Gestão de Trilhas</h3>
          <p className="text-muted">Crie e gerencie as trilhas de aprendizado</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-4">
          <TrilhaForm item={item} onSave={handleSave} />
        </div>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary"><i className="bi bi-list-ul me-2"></i> Trilhas Cadastradas</h5>
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
                  <h5>Nenhuma trilha encontrada</h5>
                  <p>Crie sua primeira trilha usando o formulário ao lado.</p>
                </div>
              ) : (
                <TrilhaTable lista={lista} onEdit={setItem} onDelete={handleDelete} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
