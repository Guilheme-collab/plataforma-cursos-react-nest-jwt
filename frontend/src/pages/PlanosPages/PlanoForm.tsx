import React, { useState, useEffect } from 'react';
import { Plano, PlanoSchema } from '../../models/plano.model';
import { Curso } from '../../models/curso.model';
import { toast } from 'react-toastify';

interface Props {
  item: Partial<Plano>;
  cursos?: Curso[];
  onSave: (data: Plano) => void;
  onCancel?: () => void;
}

export const PlanoForm = ({ item, cursos, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<Plano>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(item);
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number') {
      parsedValue = value === '' ? undefined : Number(value);
    }
    setFormData(prev => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = PlanoSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast.warning('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    onSave(result.data as Plano);
  };

  const handleCancel = () => {
    setFormData({});
    setErrors({});
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
        <h5 className="fw-bold mb-0 text-primary">
          <i className="bi bi-pencil-square me-2"></i> Formulário de Plano
        </h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {formData.id && (
            <div className="mb-4">
              <label className="form-label">ID (apenas leitura)</label>
              <input
                type="number"
                name="id"
                className="form-control bg-light"
                value={formData.id || ''}
                readOnly
              />
            </div>
          )}

          <div className="mb-4">
            <label className="form-label">
              Nome do Plano <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nome"
              className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
              value={formData.nome || ''}
              onChange={handleChange}
              placeholder="Ex: Plano Anual Premium"
            />
            {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label">
              Descrição <span className="text-danger">*</span>
            </label>
            <textarea
              name="descricao"
              className={`form-control ${errors.descricao ? 'is-invalid' : ''}`}
              value={formData.descricao || ''}
              onChange={handleChange}
              rows={3}
              placeholder="Descreva os benefícios e recursos incluídos no plano..."
            />
            {errors.descricao && <div className="invalid-feedback">{errors.descricao}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label">
              Preço (R$) <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">R$</span>
              <input
                type="number"
                step="0.01"
                min="0"
                name="preco"
                className={`form-control ${errors.preco ? 'is-invalid' : ''}`}
                value={formData.preco !== undefined ? formData.preco : ''}
                onChange={handleChange}
                placeholder="Ex: 49.90"
              />
              {errors.preco && <div className="invalid-feedback">{errors.preco}</div>}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Duração (em meses) <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              min="1"
              name="duracaoMeses"
              className={`form-control ${errors.duracaoMeses ? 'is-invalid' : ''}`}
              value={formData.duracaoMeses !== undefined ? formData.duracaoMeses : ''}
              onChange={handleChange}
              placeholder="Ex: 12"
            />
            {errors.duracaoMeses && <div className="invalid-feedback">{errors.duracaoMeses}</div>}
            <small className="text-muted">
              <i className="bi bi-info-circle me-1"></i>Tempo de vigência da assinatura.
            </small>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Cursos Inclusos neste Plano <span className="text-danger">*</span>
            </label>
            <div className="border rounded-3 p-3 bg-light" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {cursos && cursos.length > 0 ? (
                cursos.map(curso => (
                  <div className="form-check mb-2" key={curso.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`curso-${curso.id}`}
                      checked={formData.cursosIds?.includes(curso.id!) || false}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setFormData(prev => {
                          const currIds = prev.cursosIds || [];
                          if (checked) {
                            return { ...prev, cursosIds: [...currIds, curso.id!] };
                          } else {
                            return { ...prev, cursosIds: currIds.filter(id => id !== curso.id) };
                          }
                        });
                      }}
                    />
                    <label className="form-check-label small" htmlFor={`curso-${curso.id}`}>
                      {curso.titulo}
                    </label>
                  </div>
                ))
              ) : (
                <small className="text-muted">Nenhum curso cadastrado na plataforma.</small>
              )}
            </div>
            {errors.cursosIds && <div className="text-danger small mt-1">{errors.cursosIds}</div>}
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary py-2 fw-bold shadow-sm">
              <i className="bi bi-save me-2"></i>
              {formData.id ? 'Atualizar Plano' : 'Salvar Novo Plano'}
            </button>
            {formData.id && (
              <button type="button" className="btn btn-light mt-2" onClick={handleCancel}>
                Cancelar Edição
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
