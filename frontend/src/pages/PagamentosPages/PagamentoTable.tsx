import React, { useState } from 'react';
import { Pagamento } from '../../models/pagamento.model';

interface Props {
  lista: Pagamento[];
  onEdit: (item: Pagamento) => void;
  onDelete: (id: number) => void;
}

export const PagamentoTable = ({ lista, onEdit, onDelete }: Props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const formatCurrency = (val: number) => {
    return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('pt-BR');
  };

  const getMethodBadge = (metodo: string) => {
    switch (metodo) {
      case 'PIX':
        return 'bg-success-subtle text-success border border-success-subtle';
      case 'Cartão de Crédito':
        return 'bg-primary-subtle text-primary border border-primary-subtle';
      case 'Cartão de Débito':
        return 'bg-info-subtle text-info-emphasis border border-info-subtle';
      default:
        return 'bg-warning-subtle text-warning-emphasis border border-warning-subtle';
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-credit-card-fill text-primary fs-5 me-2"></i>
          <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
            Histórico de Pagamentos
          </h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill ms-2 px-3 py-1">
            {lista.length} {lista.length === 1 ? 'pagamento' : 'pagamentos'}
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
            <h6 className="fw-bold text-secondary mb-1">Nenhum pagamento registrado</h6>
            <p className="text-muted small mb-0">
              Registre o primeiro pagamento utilizando o formulário ao lado.
            </p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: '70px' }}>ID</th>
                    <th>Aluno / Plano</th>
                    <th>Valor</th>
                    <th>Método</th>
                    <th>Transação Gateway</th>
                    <th>Data</th>
                    <th className="text-end pe-4" style={{ width: '120px' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(item => {
                    const usuarioNome = (item as any).assinatura?.usuario?.nomeCompleto;
                    const planoNome = (item as any).assinatura?.plano?.nome;
                    return (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-muted">#{item.id}</td>
                        <td>
                          <div>
                            <span className="fw-semibold text-dark">
                              {usuarioNome || `Assinatura #${item.assinaturaId}`}
                            </span>
                          </div>
                          {planoNome && (
                            <small className="badge bg-light text-muted border">
                              Plano: {planoNome}
                            </small>
                          )}
                        </td>
                        <td>
                          <span className="fw-bold text-success">
                            {formatCurrency(item.valorPago)}
                          </span>
                        </td>
                        <td>
                          <span className={`badge px-3 py-1 rounded-pill ${getMethodBadge(item.metodoPagamento)}`}>
                            {item.metodoPagamento}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-secondary-subtle text-secondary font-monospace border px-2 py-1 rounded-3">
                            {item.idTransacaoGateway}
                          </span>
                        </td>
                        <td className="text-muted small">
                          <i className="bi bi-calendar3 me-1"></i>
                          {formatDate(item.dataPagamento)}
                        </td>
                        <td className="text-end pe-4">
                          <button
                            className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                            onClick={() => onEdit(item)}
                            title="Editar pagamento"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                            onClick={() => item.id && onDelete(item.id)}
                            title="Excluir pagamento"
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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
