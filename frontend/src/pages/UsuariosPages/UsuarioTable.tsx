import React, { useState } from 'react';
import { Usuario } from '../../models/usuario.model';

interface Props {
  lista: Usuario[];
  onEdit: (item: Usuario) => void;
  onDelete: (id: number) => void;
}

export const UsuarioTable: React.FC<Props> = ({ lista, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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
            {paginated.map(item => (
              <tr key={item.id}>
                <td className="ps-4">
                  <span className="badge bg-light text-primary border rounded-pill px-3 py-1 fw-bold">
                    #{item.id}
                  </span>
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
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center p-3 border-top bg-light-subtle">
          <small className="text-muted">
            Página <strong>{page}</strong> de <strong>{totalPages}</strong> ({lista.length} registros)
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
