import React, { useState, useEffect } from 'react';
import { PagamentoForm } from './PagamentoForm';
import { PagamentoTable } from './PagamentoTable';
import { PagamentoService } from '../../services/pagamento.service';
import { Pagamento } from '../../models/pagamento.model';
import { toast } from 'react-toastify';

export const PagamentosPages = () => {
  const [lista, setLista] = useState<Pagamento[]>([]);
  const [item, setItem] = useState<Partial<Pagamento>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const data = await PagamentoService.findAll();
      setLista(data);
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
  }, []);

  const handleSave = async (data: Pagamento) => {
    try {
      if (data.id) {
        await PagamentoService.update(data.id, data);
        toast.success('Pagamento atualizado com sucesso!');
      } else {
        await PagamentoService.create(data);
        toast.success('Pagamento registrado com sucesso!');
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
        await PagamentoService.delete(id);
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
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Gestão de Pagamentos</h3>
          <p className="text-muted">Controle os pagamentos realizados</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <PagamentoForm item={item} onSave={handleSave} />
        </div>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary">
                <i className="bi bi-wallet2 me-2"></i> Pagamentos Registrados
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
                  <h5>Nenhum pagamento encontrado</h5>
                  <p>Cadastre o primeiro pagamento usando o formulário ao lado.</p>
                </div>
              ) : (
                <PagamentoTable lista={lista} onEdit={setItem} onDelete={handleDelete} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
