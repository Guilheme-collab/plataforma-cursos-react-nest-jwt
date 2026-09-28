import React, { useState } from 'react';
import { Avaliacao } from '../../models/avaliacao.model';

interface Props {
  lista: Avaliacao[];
  onEdit: (item: Avaliacao) => void;
  onDelete: (id: number) => void;
}

export const AvaliacaoTable = ({ lista, onEdit, onDelete }: Props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('pt-BR');
  };

  const renderStars = (nota: number) => {
    return (
      <div className="text-warning">
        {[1, 2, 3, 4, 5].map(star => (
          <i
            key={star}
            className={`bi ${star <= nota ? 'bi-star-fill' : 'bi-star'} me-1`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-star-fill text-warning fs-5 me-2"></i>
          <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
            Lista de Avaliações
          </h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill ms-2 px-3 py-1">
            {lista.length} {lista.length === 1 ? 'avaliação' : 'avaliações'}
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
            <h6 className="fw-bold text-secondary mb-1">Nenhuma avaliação cadastrada</h6>
            <p className="text-muted small mb-0">
              Cadastre a primeira avaliação utilizando o formulário ao lado.
            </p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: '70px' }}>ID</th>
                    <th>Aluno</th>
                    <th>Curso Avaliado</th>
                    <th>Nota</th>
                    <th>Comentário</th>
                    <th>Data</th>
                    <th className="text-end pe-4" style={{ width: '120px' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(item => (
                    <tr key={item.id}>
                      <td className="ps-4 fw-bold text-muted">#{item.id}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center me-2"
                            style={{ width: '32px', height: '32px', fontSize: '12px' }}
                          >
                            {((item as any).usuario?.nomeCompleto?.charAt(0) || 'A').toUpperCase()}
                          </div>
                          <div>
                            <div className="fw-semibold text-dark">
                              {(item as any).usuario?.nomeCompleto || `Aluno #${item.usuarioId}`}
                            </div>
                            <small className="text-muted">{(item as any).usuario?.email || ''}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                          <i className="bi bi-book me-1 text-primary"></i>
                          {(item as any).curso?.titulo || `Curso #${item.cursoId}`}
                        </span>
                      </td>
                      <td>{renderStars(item.nota)}</td>
                      <td>
                        <span className="d-inline-block text-truncate text-muted" style={{ maxWidth: '180px' }}>
                          {item.comentario || <em className="text-secondary small">Sem comentário</em>}
                        </span>
                      </td>
                      <td className="text-muted small">
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(item.dataAvaliacao)}
                      </td>
                      <td className="text-end pe-4">
                        <button
                          className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                          onClick={() => onEdit(item)}
                          title="Editar avaliação"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                          onClick={() => item.id && onDelete(item.id)}
                          title="Excluir avaliação"
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
