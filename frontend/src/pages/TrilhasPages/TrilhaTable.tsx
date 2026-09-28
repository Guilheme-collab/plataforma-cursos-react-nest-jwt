import React from 'react';
import { Trilha } from '../../models/trilha.model';

interface Props {
  lista: Trilha[];
  onEdit: (item: Trilha) => void;
  onDelete: (id: number) => void;
}

export const TrilhaTable = ({ lista, onEdit, onDelete }: Props) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover mb-0 align-middle">
        <thead className="bg-light">
          <tr>
            <th className="border-0 rounded-start ps-4">ID</th>
            <th className="border-0">Título</th>
            <th className="border-0">Descrição</th>
            <th className="border-0">Categoria</th>
            <th className="border-0 rounded-end text-end pe-4">Ações</th>
          </tr>
        </thead>
        <tbody className="border-top-0">
          {lista.map(item => (
            <tr key={item.id}>
              <td className="ps-4 fw-bold text-muted">#{item.id}</td>
              <td className="fw-bold text-dark">{item.titulo}</td>
              <td>
                <span className="d-inline-block text-truncate text-muted" style={{ maxWidth: '250px' }}>
                  {item.descricao}
                </span>
              </td>
              <td>
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
                  <i className="bi bi-tag me-1"></i>
                  {(item as any).categoria?.nome || `Cat #${item.categoriaId}`}
                </span>
              </td>
              <td className="text-end pe-4">
                <button 
                  className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3" 
                  onClick={() => onEdit(item)}
                  title="Editar Trilha"
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <button 
                  className="btn btn-sm btn-light text-danger shadow-sm rounded-3" 
                  onClick={() => item.id && onDelete(item.id)}
                  title="Excluir Trilha"
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
