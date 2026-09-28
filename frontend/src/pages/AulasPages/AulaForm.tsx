import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Aula, AulaSchema } from '../../models/aula.model';
import { Modulo } from '../../models/modulo.model';
import { ModuloService } from '../../services/modulo.service';

interface Props {
  item: Partial<Aula>;
  onSave: (data: Aula) => void;
  onCancel?: () => void;
}

export const AulaForm = ({ item, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<Aula>>({
    tipoConteudo: 'Vídeo',
    duracaoMinutos: 10,
    ordem: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [modulos, setModulos] = useState<Modulo[]>([]);

  useEffect(() => {
    ModuloService.findAll()
      .then(setModulos)
      .catch(err => console.error('Erro ao carregar módulos:', err));
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData(item);
    } else {
      setFormData({
        tipoConteudo: 'Vídeo',
        duracaoMinutos: 10,
        ordem: 1,
      });
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number') {
      parsedValue = value === '' ? undefined : Number(value);
    } else if (name === 'moduloId') {
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
    const result = AulaSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.warning('Selecione o módulo e preencha todos os campos obrigatórios.');
      return;
    }
    onSave(result.data as Aula);
  };

  const handleCancel = () => {
    setFormData({ tipoConteudo: 'Vídeo', duracaoMinutos: 10, ordem: 1 });
    setErrors({});
    if (onCancel) onCancel();
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
              {isEditing ? 'Editar Aula' : 'Nova Aula'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Preencha os dados da aula'}
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
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Módulo Vinculado <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.moduloId ? 'is-invalid' : ''}`}
              name="moduloId"
              value={formData.moduloId ?? ''}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o Módulo...</option>
              {modulos.map(m => (
                <option key={m.id} value={m.id}>
                  {m.titulo} {(m as any).curso?.titulo ? `(${((m as any).curso.titulo)})` : ''}
                </option>
              ))}
            </select>
            {errors.moduloId && <div className="invalid-feedback">{errors.moduloId}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Título da Aula <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
              name="titulo"
              value={formData.titulo ?? ''}
              onChange={handleChange}
              placeholder="Ex: Introdução ao Módulo"
              required
            />
            {errors.titulo && <div className="invalid-feedback">{errors.titulo}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Tipo de Conteúdo <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.tipoConteudo ? 'is-invalid' : ''}`}
                name="tipoConteudo"
                value={formData.tipoConteudo ?? 'Vídeo'}
                onChange={handleChange}
              >
                <option value="Vídeo">Vídeo</option>
                <option value="Texto">Texto</option>
                <option value="Quiz">Quiz</option>
              </select>
              {errors.tipoConteudo && <div className="invalid-feedback">{errors.tipoConteudo}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Duração (minutos) <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${errors.duracaoMinutos ? 'is-invalid' : ''}`}
                name="duracaoMinutos"
                value={formData.duracaoMinutos ?? ''}
                onChange={handleChange}
                min="1"
                required
              />
              {errors.duracaoMinutos && <div className="invalid-feedback">{errors.duracaoMinutos}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              URL do Conteúdo <span className="text-danger">*</span>
            </label>
            <input
              type="url"
              className={`form-control ${errors.urlConteudo ? 'is-invalid' : ''}`}
              name="urlConteudo"
              value={formData.urlConteudo ?? ''}
              onChange={handleChange}
              placeholder="https://exemplo.com/aula"
              required
            />
            {errors.urlConteudo && <div className="invalid-feedback">{errors.urlConteudo}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Ordem na Sequência <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className={`form-control ${errors.ordem ? 'is-invalid' : ''}`}
              name="ordem"
              value={formData.ordem ?? ''}
              onChange={handleChange}
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
              {isEditing ? 'Atualizar Aula' : 'Cadastrar Aula'}
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
