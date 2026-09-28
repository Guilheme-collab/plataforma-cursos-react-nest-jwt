import React, { useState, useEffect } from 'react';
import { Trilha, TrilhaSchema } from '../../models/trilha.model';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../services/categoria.service';
import { toast } from 'react-toastify';

interface Props {
  item: Partial<Trilha>;
  onSave: (data: Trilha) => void;
  onCancel?: () => void;
}

export const TrilhaForm = ({ item, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<Trilha>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    CategoriaService.findAll()
      .then(setCategorias)
      .catch(err => console.error('Erro ao carregar categorias:', err));
  }, []);

  useEffect(() => {
    setFormData(item);
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'categoriaId') {
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
    const result = TrilhaSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast.warning('Selecione uma categoria e preencha todos os campos obrigatórios.');
      return;
    }
    
    onSave(result.data as Trilha);
  };

  const handleCancel = () => {
    setFormData({});
    setErrors({});
    if (onCancel) onCancel();
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
        <h5 className="fw-bold mb-0 text-primary">
          <i className="bi bi-pencil-square me-2"></i>
          {formData.id ? 'Editar Trilha' : 'Nova Trilha'}
        </h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {formData.id && (
            <div className="mb-3">
              <label className="form-label text-muted small">ID (apenas leitura)</label>
              <input type="text" className="form-control bg-light" value={`#${formData.id}`} readOnly disabled />
            </div>
          )}
          
          <div className="mb-3">
            <label className="form-label">Título da Trilha <span className="text-danger">*</span></label>
            <input 
              type="text" 
              name="titulo" 
              className={`form-control ${errors.titulo ? 'is-invalid' : ''}`} 
              value={formData.titulo || ''} 
              onChange={handleChange} 
              placeholder="Ex: Trilha Front-end Completa" 
            />
            {errors.titulo && <div className="invalid-feedback">{errors.titulo}</div>}
          </div>
          
          <div className="mb-3">
            <label className="form-label">Descrição <span className="text-danger">*</span></label>
            <textarea 
              name="descricao" 
              className={`form-control ${errors.descricao ? 'is-invalid' : ''}`} 
              value={formData.descricao || ''} 
              onChange={handleChange} 
              rows={3}
              placeholder="O que os alunos vão aprender nesta trilha de conhecimento?"
            />
            {errors.descricao && <div className="invalid-feedback">{errors.descricao}</div>}
          </div>
          
          <div className="mb-4">
            <label className="form-label">Categoria da Trilha <span className="text-danger">*</span></label>
            <select 
              name="categoriaId" 
              className={`form-select ${errors.categoriaId ? 'is-invalid' : ''}`} 
              value={formData.categoriaId ?? ''} 
              onChange={handleChange}
            >
              <option value="">Selecione a Categoria...</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
            {errors.categoriaId && <div className="invalid-feedback">{errors.categoriaId}</div>}
          </div>
          
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary py-2 fw-bold shadow-sm flex-grow-1">
              <i className="bi bi-save me-2"></i>
              {formData.id ? 'Atualizar Trilha' : 'Salvar Nova Trilha'}
            </button>
            {formData.id && (
              <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
