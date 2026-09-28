import React, { useState, useEffect } from 'react';
import { Categoria, CategoriaSchema } from '../../models/categoria.model';

interface Props {
  item: Partial<Categoria>;
  onSave: (data: Categoria) => void;
  onCancel?: () => void;
}

export const CategoriaForm: React.FC<Props> = ({ item, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<Categoria>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData(item);
    } else {
      setFormData({});
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number') {
      parsedValue = value ? Number(value) : undefined;
    }
    setFormData(prev => ({ ...prev, [name]: parsedValue }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = CategoriaSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onSave(result.data as Categoria);
  };

  const handleCancel = () => {
    setFormData({});
    setErrors({});
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0 text-primary">
          <i className={`bi ${formData.id ? 'bi-pencil-square' : 'bi-tag-fill'} me-2`}></i>
          {formData.id ? 'Editar Categoria' : 'Formulário de Categoria'}
        </h5>
        {formData.id && (
          <span className="badge bg-warning text-dark rounded-pill">Editando #{formData.id}</span>
        )}
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} noValidate>
          {formData.id && (
            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">ID (apenas leitura)</label>
              <input
                type="text"
                className="form-control bg-light"
                value={formData.id}
                readOnly
                disabled
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Nome <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
              name="nome"
              placeholder="Ex: Desenvolvimento Web"
              value={formData.nome || ''}
              onChange={handleChange}
            />
            {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Descrição <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.descricao ? 'is-invalid' : ''}`}
              name="descricao"
              rows={4}
              placeholder="Descreva o propósito desta categoria de cursos..."
              value={formData.descricao || ''}
              onChange={handleChange}
            ></textarea>
            {errors.descricao && <div className="invalid-feedback">{errors.descricao}</div>}
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center">
              <i className="bi bi-check-circle-fill me-2"></i>
              {formData.id ? 'Salvar Alterações' : 'Cadastrar Categoria'}
            </button>
            {formData.id && (
              <button
                type="button"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                onClick={handleCancel}
              >
                <i className="bi bi-x-circle me-2"></i>
                Cancelar Edição
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
