import React, { useState } from 'react';
import { Categoria } from '../../models/categoria.model';

interface Props {
  lista: Categoria[];
  onEdit: (item: Categoria) => void;
  onDelete: (id: number) => void;
}

export const CategoriaTable: React.FC<Props> = ({ lista, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-hover mb-0 align-middle">
          <thead className="bg-light">
            <tr>
              <th className="ps-4">ID</th>
              <th>Nome</th>
              <th>Descrição</th>
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
                        backgroundColor: '#01b574',
                        fontSize: '14px',
                      }}
                    >
                      <i className="bi bi-tag-fill"></i>
                    </div>
                    <div>
                      <span className="fw-semibold text-dark">{item.nome}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-muted d-inline-block text-truncate" style={{ maxWidth: '300px' }} title={item.descricao}>
                    {item.descricao}
                  </span>
                </td>
                <td className="text-end pe-4">
                  <button
                    type="button"
                    className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-circle"
                    style={{ width: '34px', height: '34px', padding: 0 }}
                    title="Editar categoria"
                    onClick={() => onEdit(item)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-light text-danger shadow-sm rounded-circle"
                    style={{ width: '34px', height: '34px', padding: 0 }}
                    title="Excluir categoria"
                    onClick={() => item.id && onDelete(item.id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
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
