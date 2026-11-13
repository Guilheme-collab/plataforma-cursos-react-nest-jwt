import React, { useState, useEffect } from 'react';
import { UsuarioForm } from './UsuarioForm';
import { UsuarioTable } from './UsuarioTable';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { toast } from 'react-toastify';

export const UsuariosPages: React.FC = () => {
  const [lista, setLista] = useState<Usuario[]>([]);
  const [item, setItem] = useState<Partial<Usuario>>({});
  const [loading, setLoading] = useState(true);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const data = await UsuarioService.findAll();
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

  const handleSave = async (data: Usuario) => {
    try {
      if (data.id) {
        await UsuarioService.update(data.id, data);
        toast.success('Usuário atualizado com sucesso!');
      } else {
        await UsuarioService.create(data);
        toast.success('Usuário criado com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      if (error.response?.data?.message) {
        const msg = error.response.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg);
      } else {
        toast.error('Erro ao salvar os dados do usuário.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('⚠️ ATENÇÃO: Tem certeza que deseja DELETAR PARA SEMPRE este usuário?\n\nEsta ação removerá permanentemente a conta e todos os dados vinculados do banco de dados e NÃO poderá ser desfeita.')) {
      try {
        await UsuarioService.delete(id);
        toast.success('🎉 Usuário deletado para sempre com sucesso!');
        setItem({});
        loadData();
      } catch (error: any) {
        if (error.response?.data?.message) {
          const msg = error.response.data.message;
          toast.error(Array.isArray(msg) ? msg[0] : msg);
        } else {
          toast.error('Erro ao excluir usuário permanentemente.');
        }
      }
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>Gestão de Usuários</h3>
          <p className="text-muted mb-0">Cadastre, edite e gerencie ou exclua permanentemente os usuários da plataforma</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-white text-dark shadow-sm border py-2 px-3 rounded-pill">
            <i className="bi bi-people-fill text-primary me-2"></i>
            Total: <strong>{lista.length}</strong>
          </span>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm rounded-pill px-3 shadow-sm"
            onClick={() => loadData()}
            title="Recarregar dados agora"
          >
            <i className="bi bi-arrow-clockwise me-1"></i> Atualizar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <UsuarioForm item={item} onSave={handleSave} onCancel={() => setItem({})} />
        </div>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary"><i className="bi bi-people-fill me-2"></i> Usuários Cadastrados</h5>
              <span className="badge bg-primary rounded-pill px-3 py-2">{lista.length} registros</span>
            </div>
            <div className="card-body p-0 mt-3">
              {loading ? (
                <div className="text-center p-5"><div className="spinner-border text-primary"></div><p className="mt-3 text-muted">Carregando...</p></div>
              ) : lista.length === 0 ? (
                <div className="text-center p-5 text-muted"><i className="bi bi-inbox fs-1 mb-3 d-block"></i><h5>Nenhum usuário cadastrado</h5><p>Use o formulário ao lado.</p></div>
              ) : (
                <UsuarioTable lista={lista} onEdit={setItem} onDelete={handleDelete} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
