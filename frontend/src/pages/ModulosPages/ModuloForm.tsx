import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Modulo, ModuloSchema } from '../../models/modulo.model';
import { Curso } from '../../models/curso.model';
import { CursoService } from '../../services/curso.service';

interface Props {
  item: Partial<Modulo>;
  onSave: (data: Modulo) => void;
  onCancel?: () => void;
}

export const ModuloForm = ({ item, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<Modulo>>({ ordem: 1 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    CursoService.findAll()
      .then(setCursos)
      .catch(err => console.error('Erro ao carregar cursos:', err));
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData(item);
    } else {
      setFormData({ ordem: 1 });
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number') {
      parsedValue = value === '' ? undefined : Number(value);
    } else if (name === 'cursoId') {
      parsedValue = value === '' ? undefined : Number(value);
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
    const result = ModuloSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.warning('Selecione o curso e preencha todos os campos obrigatórios.');
      return;
    }
    onSave(result.data as Modulo);
  };

  const handleCancel = () => {
    setFormData({ ordem: 1 });
    setErrors({});
    if (onCancel) {
      onCancel();
    }
  };

  const isEditing = Boolean(formData.id);

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div
            className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
              isEditing ? 'bg-warning-subtle text-warning' : 'bg-primary-subtle text-primary'
            }`}
            style={{ width: '40px', height: '40px' }}
          >
            <i className={`bi ${isEditing ? 'bi-pencil-square' : 'bi-plus-circle-fill'} fs-5`}></i>
          </div>
          <div>
            <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
              {isEditing ? 'Editar Módulo' : 'Novo Módulo'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Preencha os dados do módulo'}
            </small>
          </div>
        </div>
        {isEditing && (
          <span className="badge bg-warning text-dark rounded-pill px-3 py-1">
            Modo Edição
          </span>
        )}
      </div>

      <div className="card-body p-4">
        <form onSubmit={handleSubmit} noValidate>
          {isEditing && (
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary small">ID (Identificador)</label>
              <input
                type="text"
                className="form-control bg-light"
                value={`#${formData.id}`}
                readOnly
                disabled
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Curso Vinculado <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.cursoId ? 'is-invalid' : ''}`}
              name="cursoId"
              value={formData.cursoId ?? ''}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o Curso...</option>
              {cursos.map(c => (
                <option key={c.id} value={c.id}>
                  {c.titulo}
                </option>
              ))}
            </select>
            {errors.cursoId && <div className="invalid-feedback">{errors.cursoId}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Título do Módulo <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
              name="titulo"
              value={formData.titulo ?? ''}
              onChange={handleChange}
              placeholder="Ex: Fundamentos e Arquitetura"
              required
            />
            {errors.titulo && <div className="invalid-feedback">{errors.titulo}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Ordem de Exibição <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className={`form-control ${errors.ordem ? 'is-invalid' : ''}`}
              name="ordem"
              value={formData.ordem ?? ''}
              onChange={handleChange}
              placeholder="Ex: 1"
              min="1"
              required
            />
            {errors.ordem && <div className="invalid-feedback">{errors.ordem}</div>}
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-plus-lg'} me-2`}></i>
              {isEditing ? 'Atualizar Módulo' : 'Cadastrar Módulo'}
            </button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-outline-secondary rounded-3 px-3 d-flex align-items-center"
                onClick={handleCancel}
              >
                <i className="bi bi-x-lg me-1"></i> Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
