import React from 'react';
import { Plano } from '../../models/plano.model';

interface Props {
  lista: Plano[];
  onEdit: (item: Plano) => void;
  onDelete: (id: number) => void;
}

export const PlanoTable = ({ lista, onEdit, onDelete }: Props) => {
  const formatCurrency = (val?: number) => {
    if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover mb-0 align-middle">
        <thead className="bg-light">
          <tr>
            <th className="border-0 rounded-start ps-4">ID</th>
            <th className="border-0">Nome</th>
            <th className="border-0">Descrição</th>
            <th className="border-0">Preço</th>
            <th className="border-0">Duração</th>
            <th className="border-0 rounded-end text-end pe-4">Ações</th>
          </tr>
        </thead>
        <tbody className="border-top-0">
          {lista.map(item => (
            <tr key={item.id}>
              <td className="ps-4 fw-bold text-muted">#{item.id}</td>
              <td className="fw-bold text-dark">{item.nome}</td>
              <td>
                <span className="d-inline-block text-truncate" style={{ maxWidth: '240px' }} title={item.descricao}>
                  {item.descricao}
                </span>
              </td>
              <td>
                <span className="fw-bold text-success">
                  {formatCurrency(item.preco)}
                </span>
              </td>
              <td>
                <span className="badge bg-light text-primary border border-primary-subtle px-2 py-1 rounded-3">
                  <i className="bi bi-clock-history me-1"></i>
                  {item.duracaoMeses} {item.duracaoMeses === 1 ? 'mês' : 'meses'}
                </span>
              </td>
              <td className="text-end pe-4">
                <button
                  className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                  onClick={() => onEdit(item)}
                  title="Editar"
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button
                  className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                  onClick={() => item.id && onDelete(item.id)}
                  title="Excluir"
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
