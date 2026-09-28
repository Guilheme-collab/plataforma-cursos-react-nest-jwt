import React, { useState } from 'react';
import { Curso } from '../../models/curso.model';

interface Props {
  lista: Curso[];
  onEdit: (item: Curso) => void;
  onDelete: (id: number) => void;
  isAdmin?: boolean;
}

export const CursoTable: React.FC<Props> = ({ lista, onEdit, onDelete, isAdmin = true }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const getNivelBadge = (nivel: string) => {
    switch (nivel?.toLowerCase()) {
      case 'iniciante':
        return <span className="badge bg-success rounded-pill px-3 py-2">Iniciante</span>;
      case 'intermediário':
      case 'intermediario':
        return <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Intermediário</span>;
      case 'avançado':
      case 'avancado':
        return <span className="badge bg-danger rounded-pill px-3 py-2">Avançado</span>;
      default:
        return <span className="badge bg-secondary rounded-pill px-3 py-2">{nivel || 'N/A'}</span>;
    }
  };

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-hover mb-0 align-middle">
          <thead className="bg-light">
            <tr>
              <th className="ps-4">ID</th>
              <th>Título</th>
              <th>Nível</th>
              <th>Instrutor</th>
              <th>Categoria</th>
              {isAdmin && <th className="text-end pe-4">Ações</th>}
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
                        backgroundColor: '#4318ff',
                        fontSize: '14px',
                      }}
                    >
                      <i className="bi bi-book-fill"></i>
                    </div>
                    <div>
                      <span className="fw-semibold text-dark d-block">{item.titulo}</span>
                      <small className="text-muted">
                        {item.totalAulas ? `${item.totalAulas} aulas` : '0 aulas'} •{' '}
                        {item.totalHoras ? `${item.totalHoras}h` : '0h'}
                      </small>
                    </div>
                  </div>
                </td>
                <td>{getNivelBadge(item.nivel)}</td>
                <td>
                  {item.instrutor?.nomeCompleto ? (
                    <div>
                      <span className="fw-semibold text-dark d-block">{item.instrutor.nomeCompleto}</span>
                      <small className="text-muted">ID #{item.instrutorId}</small>
                    </div>
                  ) : (
                    <span className="badge bg-light text-secondary border rounded-pill px-3 py-1">
                      ID #{item.instrutorId}
                    </span>
                  )}
                </td>
                <td>
                  {item.categoria?.nome ? (
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 fw-semibold">
                      {item.categoria.nome}
                    </span>
                  ) : (
                    <span className="badge bg-light text-secondary border rounded-pill px-3 py-1">
                      ID #{item.categoriaId}
                    </span>
                  )}
                </td>
                {isAdmin && (
                  <td className="text-end pe-4">
                    <button
                      type="button"
                      className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-circle"
                      style={{ width: '34px', height: '34px', padding: 0 }}
                      title="Editar curso"
                      onClick={() => onEdit(item)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light text-danger shadow-sm rounded-circle"
                      style={{ width: '34px', height: '34px', padding: 0 }}
                      title="Excluir curso"
                      onClick={() => item.id && onDelete(item.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                )}
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
