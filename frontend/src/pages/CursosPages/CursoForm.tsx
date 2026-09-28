import React, { useState, useEffect } from 'react';
import { Curso, CursoSchema } from '../../models/curso.model';
import { Usuario } from '../../models/usuario.model';
import { Categoria } from '../../models/categoria.model';
import { UsuarioService } from '../../services/usuario.service';
import { CategoriaService } from '../../services/categoria.service';

interface Props {
  item: Partial<Curso>;
  onSave: (data: Curso) => void;
  onCancel?: () => void;
}

export const CursoForm: React.FC<Props> = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const initialValues: Partial<Curso> = {
    nivel: 'Iniciante',
    dataPublicacao: getTodayString(),
    totalAulas: 0,
    totalHoras: 0,
  };

  const [formData, setFormData] = useState<Partial<Curso>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [instrutores, setInstrutores] = useState<Usuario[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    UsuarioService.findAll()
      .then(setInstrutores)
      .catch(err => console.error('Erro ao buscar instrutores:', err));
    CategoriaService.findAll()
      .then(setCategorias)
      .catch(err => console.error('Erro ao buscar categorias:', err));
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        dataPublicacao: item.dataPublicacao
          ? (item.dataPublicacao.includes('T') ? item.dataPublicacao.split('T')[0] : item.dataPublicacao)
          : getTodayString(),
        totalAulas: item.totalAulas ?? 0,
        totalHoras: item.totalHoras ?? 0,
      });
    } else {
      setFormData(initialValues);
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'instrutorId' || name === 'categoriaId' || name === 'totalAulas' || name === 'totalHoras') {
      parsedValue = value !== '' ? Number(value) : undefined;
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
    const dataToValidate = {
      ...formData,
      dataPublicacao: formData.dataPublicacao || getTodayString(),
      totalAulas: Number(formData.totalAulas ?? 0),
      totalHoras: Number(formData.totalHoras ?? 0),
    };

    const result = CursoSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onSave(result.data as Curso);
  };

  const handleCancel = () => {
    setFormData(initialValues);
    setErrors({});
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0 text-primary">
          <i className={`bi ${formData.id ? 'bi-pencil-square' : 'bi-book-half'} me-2`}></i>
          {formData.id ? 'Editar Curso' : 'Formulário de Curso'}
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
              Título <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
              name="titulo"
              placeholder="Ex: Desenvolvimento Web com React e Node"
              value={formData.titulo || ''}
              onChange={handleChange}
            />
            {errors.titulo && <div className="invalid-feedback">{errors.titulo}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Descrição <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.descricao ? 'is-invalid' : ''}`}
              name="descricao"
              rows={3}
              placeholder="Descreva a ementa e objetivos do curso..."
              value={formData.descricao || ''}
              onChange={handleChange}
            ></textarea>
            {errors.descricao && <div className="invalid-feedback">{errors.descricao}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Instrutor <span className="text-danger">*</span>
              </label>
              {instrutores.length > 0 ? (
                <select
                  className={`form-select ${errors.instrutorId ? 'is-invalid' : ''}`}
                  name="instrutorId"
                  value={formData.instrutorId ?? ''}
                  onChange={handleChange}
                >
                  <option value="">Selecione um instrutor...</option>
                  {instrutores.map(inst => (
                    <option key={inst.id} value={inst.id}>
                      {inst.nomeCompleto}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  className={`form-control ${errors.instrutorId ? 'is-invalid' : ''}`}
                  name="instrutorId"
                  placeholder="ID do instrutor"
                  value={formData.instrutorId ?? ''}
                  onChange={handleChange}
                />
              )}
              {errors.instrutorId && <div className="invalid-feedback">{errors.instrutorId}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Categoria <span className="text-danger">*</span>
              </label>
              {categorias.length > 0 ? (
                <select
                  className={`form-select ${errors.categoriaId ? 'is-invalid' : ''}`}
                  name="categoriaId"
                  value={formData.categoriaId ?? ''}
                  onChange={handleChange}
                >
                  <option value="">Selecione uma categoria...</option>
                  {categorias.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nome}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  className={`form-control ${errors.categoriaId ? 'is-invalid' : ''}`}
                  name="categoriaId"
                  placeholder="ID da categoria"
                  value={formData.categoriaId ?? ''}
                  onChange={handleChange}
                />
              )}
              {errors.categoriaId && <div className="invalid-feedback">{errors.categoriaId}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Nível <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.nivel ? 'is-invalid' : ''}`}
                name="nivel"
                value={formData.nivel || ''}
                onChange={handleChange}
              >
                <option value="">Selecione o nível...</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.nivel && <div className="invalid-feedback">{errors.nivel}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Data de Publicação <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.dataPublicacao ? 'is-invalid' : ''}`}
                name="dataPublicacao"
                value={formData.dataPublicacao || ''}
                onChange={handleChange}
              />
              {errors.dataPublicacao && <div className="invalid-feedback">{errors.dataPublicacao}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Total de Aulas</label>
              <input
                type="number"
                min="0"
                className={`form-control ${errors.totalAulas ? 'is-invalid' : ''}`}
                name="totalAulas"
                placeholder="0"
                value={formData.totalAulas ?? 0}
                onChange={handleChange}
              />
              {errors.totalAulas && <div className="invalid-feedback">{errors.totalAulas}</div>}
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Total de Horas</label>
              <input
                type="number"
                min="0"
                step="0.5"
                className={`form-control ${errors.totalHoras ? 'is-invalid' : ''}`}
                name="totalHoras"
                placeholder="0"
                value={formData.totalHoras ?? 0}
                onChange={handleChange}
              />
              {errors.totalHoras && <div className="invalid-feedback">{errors.totalHoras}</div>}
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center">
              <i className="bi bi-check-circle-fill me-2"></i>
              {formData.id ? 'Salvar Alterações' : 'Cadastrar Curso'}
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
