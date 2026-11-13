import React, { useState, useMemo } from 'react';
import { Usuario } from '../../models/usuario.model';

interface Props {
  lista: Usuario[];
  onEdit: (item: Usuario) => void;
  onDelete: (id: number) => void;
}

export const UsuarioTable: React.FC<Props> = ({ lista, onEdit, onDelete }) => {
  const [busca, setBusca] = useState('');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  // Ordena SEMPRE os mais novos no topo por padrão
  const listaOrdenada = useMemo(() => {
    return [...lista].sort((a, b) => (b.id || 0) - (a.id || 0));
  }, [lista]);

  // ID do usuário mais recente para destaque visual
  const maiorId = useMemo(() => {
    return listaOrdenada.length > 0 ? listaOrdenada[0].id : null;
  }, [listaOrdenada]);

  // Filtro de busca por nome ou e-mail
  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return listaOrdenada;
    return listaOrdenada.filter(
      u =>
        u.nomeCompleto?.toLowerCase().includes(termo) ||
        u.email?.toLowerCase().includes(termo) ||
        String(u.id).includes(termo)
    );
  }, [listaOrdenada, busca]);

  const totalPages = Math.ceil(filtrados.length / itemsPerPage) || 1;
  const paginated = useMemo(() => {
    return filtrados.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [filtrados, page, itemsPerPage]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '-';
    try {
      const datePart = dateStr.includes('T') ? dateStr.split('T')[0] : dateStr;
      const [year, month, day] = datePart.split('-');
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
      return new Date(dateStr).toLocaleDateString('pt-BR');
    } catch {
      return dateStr;
    }
  };

  return (
    <div>
      {/* Barra de Filtro e Controles Superiores */}
      <div className="p-3 bg-light border-bottom d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
        <div className="input-group input-group-sm" style={{ maxWidth: '320px' }}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="Buscar por nome, email ou ID..."
            value={busca}
            onChange={e => {
              setBusca(e.target.value);
              setPage(1);
            }}
          />
          {busca && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                setBusca('');
                setPage(1);
              }}
            >
              <i className="bi bi-x"></i>
            </button>
          )}
        </div>

        <div className="d-flex align-items-center gap-2">
          <label className="small text-muted mb-0">Exibir:</label>
          <select
            className="form-select form-select-sm"
            style={{ width: '80px' }}
            value={itemsPerPage}
            onChange={e => {
              setItemsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <small className="text-muted ms-1">
            Total: <strong>{filtrados.length}</strong> {filtrados.length === 1 ? 'usuário' : 'usuários'}
          </small>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover mb-0 align-middle">
          <thead className="bg-light">
            <tr>
              <th className="ps-4">ID</th>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Permissão</th>
              <th>Status</th>
              <th>Data Cadastro</th>
              <th className="text-end pe-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-5 text-muted">
                  <i className="bi bi-search fs-2 d-block mb-2 text-muted"></i>
                  Nenhum usuário encontrado com o termo "{busca}".
                </td>
              </tr>
            ) : (
              paginated.map(item => {
                const isMaisRecente = item.id === maiorId;
                return (
                  <tr key={item.id} className={isMaisRecente ? 'table-primary-subtle' : ''}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-1">
                        <span className="badge bg-light text-primary border rounded-pill px-3 py-1 fw-bold">
                          #{item.id}
                        </span>
                        {isMaisRecente && (
                          <span className="badge bg-success rounded-pill px-2 py-1 small" style={{ fontSize: '10px' }}>
                            Novo
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold text-white shadow-sm flex-shrink-0"
                          style={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: item.role === 'ADMIN' ? '#7000ff' : '#4318ff',
                            fontSize: '14px',
                          }}
                        >
                          {item.nomeCompleto ? item.nomeCompleto.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <span className="fw-semibold text-dark">{item.nomeCompleto}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-muted">{item.email}</span>
                    </td>
                    <td>
                      {item.role === 'ADMIN' ? (
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-bold">
                          <i className="bi bi-shield-lock-fill me-1"></i> ADMIN
                        </span>
                      ) : item.role === 'INSTRUTOR' ? (
                        <span className="badge bg-warning-subtle text-warning border border-warning-subtle rounded-pill px-3 py-1 fw-bold">
                          <i className="bi bi-person-video3 me-1"></i> INSTRUTOR
                        </span>
                      ) : (
                        <span className="badge bg-light text-secondary border rounded-pill px-3 py-1 fw-semibold">
                          USER
                        </span>
                      )}
                    </td>
                    <td>
                      {item.ativo !== false ? (
                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1">
                          <i className="bi bi-check-circle-fill me-1"></i> Ativo
                        </span>
                      ) : (
                        <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1">
                          <i className="bi bi-x-circle-fill me-1"></i> Inativo
                        </span>
                      )}
                    </td>
                    <td>
                      <span className="badge bg-light text-secondary border rounded-pill px-3 py-1">
                        <i className="bi bi-calendar-event me-1"></i>
                        {formatDate(item.dataCadastro)}
                      </span>
                    </td>
                    <td className="text-end pe-4">
                      <button
                        type="button"
                        className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-circle"
                        style={{ width: '34px', height: '34px', padding: 0 }}
                        title="Editar usuário"
                        onClick={() => onEdit(item)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      {item.role !== 'ADMIN' && (
                        <button
                          type="button"
                          className="btn btn-sm btn-light text-danger shadow-sm rounded-circle"
                          style={{ width: '34px', height: '34px', padding: 0 }}
                          title="Excluir usuário"
                          onClick={() => item.id && onDelete(item.id)}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center p-3 border-top bg-light-subtle">
          <small className="text-muted">
            Exibindo página <strong>{page}</strong> de <strong>{totalPages}</strong> ({filtrados.length} usuários)
          </small>
          <div className="btn-group btn-group-sm">
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              <i className="bi bi-chevron-left me-1"></i> Anterior
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled={page >= totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            >
              Próxima <i className="bi bi-chevron-right ms-1"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
