import React, { useState } from 'react';
import { Matricula } from '../../models/matricula.model';

interface Props {
  lista: Matricula[];
  onEdit: (item: Matricula) => void;
  onDelete: (id: number) => void;
  isAdmin?: boolean;
}

export const MatriculaTable = ({ lista, onEdit, onDelete, isAdmin = true }: Props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-card-checklist text-primary fs-5 me-2"></i>
          <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
            Lista de Matrículas
          </h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill ms-2 px-3 py-1">
            {lista.length} {lista.length === 1 ? 'matrícula' : 'matrículas'}
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
            <h6 className="fw-bold text-secondary mb-1">Nenhuma matrícula cadastrada</h6>
            <p className="text-muted small mb-0">
              {isAdmin ? 'Cadastre a primeira matrícula utilizando o formulário ao lado.' : 'Você ainda não possui matrículas cadastradas.'}
            </p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: '80px' }}>ID</th>
                    <th>Aluno</th>
                    <th>Curso</th>
                    <th>Data Matrícula</th>
                    <th>Status</th>
                    {isAdmin && <th className="text-end pe-4" style={{ width: '120px' }}>Ações</th>}
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
                      <td className="text-muted small">
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(item.dataMatricula)}
                      </td>
                      <td>
                        {item.dataConclusao ? (
                          <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 rounded-pill">
                            <i className="bi bi-check-circle me-1"></i> Concluído
                          </span>
                        ) : (
                          <span className="badge bg-info-subtle text-info-emphasis border border-info-subtle px-2 py-1 rounded-pill">
                            <i className="bi bi-hourglass-split me-1"></i> Em Andamento
                          </span>
                        )}
                      </td>
                      {isAdmin && (
                        <td className="text-end pe-4">
                          <button
                            className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                            onClick={() => onEdit(item)}
                            title="Editar matrícula"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                            onClick={() => item.id && onDelete(item.id)}
                            title="Excluir matrícula"
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
