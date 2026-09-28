import React, { useState } from 'react';
import { TrilhaCurso } from '../../models/trilhaCurso.model';

interface Props {
  lista: TrilhaCurso[];
  onEdit: (item: TrilhaCurso) => void;
  onDelete: (id: number) => void;
}

export const TrilhaCursoTable = ({ lista, onEdit, onDelete }: Props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-diagram-3-fill text-primary fs-5 me-2"></i>
          <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
            Cursos nas Trilhas
          </h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill ms-2 px-3 py-1">
            {lista.length} {lista.length === 1 ? 'associação' : 'associações'}
          </span>
        </div>
      </div>

      <div className="card-body p-0">
        {lista.length === 0 ? (
          <div className="text-center py-5 px-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: '70px', height: '70px' }}
            >
              <i className="bi bi-inbox text-muted fs-1"></i>
            </div>
            <h6 className="fw-bold text-secondary mb-1">Nenhum curso vinculado a trilhas</h6>
            <p className="text-muted small mb-0">
              Vincule o primeiro curso a uma trilha utilizando o formulário ao lado.
            </p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: '70px' }}>ID</th>
                    <th>Trilha</th>
                    <th>Curso Vinculado</th>
                    <th>Ordem</th>
                    <th className="text-end pe-4" style={{ width: '120px' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(item => (
                    <tr key={item.id}>
                      <td className="ps-4 fw-bold text-muted">#{item.id}</td>
                      <td>
                        <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                          <i className="bi bi-signpost me-1 text-primary"></i>
                          {(item as any).trilha?.titulo || `Trilha #${item.trilhaId}`}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
                          <i className="bi bi-book me-1"></i>
                          {(item as any).curso?.titulo || `Curso #${item.cursoId}`}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-secondary-subtle text-secondary border px-2 py-1 rounded-3">
                          Passo {item.ordem}
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <button
                          className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                          onClick={() => onEdit(item)}
                          title="Editar associação"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                          onClick={() => item.id && onDelete(item.id)}
                          title="Excluir associação"
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
              <div className="d-flex justify-content-between align-items-center p-3 border-top">
                <small className="text-muted">
                  Página {page} de {totalPages}
                </small>
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    disabled={page === 1}
                  >
                    Anterior
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                  >
                    Próxima
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
