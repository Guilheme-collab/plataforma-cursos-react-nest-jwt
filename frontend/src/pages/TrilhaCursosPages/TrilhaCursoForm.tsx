import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { TrilhaCurso, TrilhaCursoSchema } from '../../models/trilhaCurso.model';
import { Trilha } from '../../models/trilha.model';
import { Curso } from '../../models/curso.model';
import { TrilhaService } from '../../services/trilha.service';
import { CursoService } from '../../services/curso.service';
import { TrilhaCursoService } from '../../services/trilhaCurso.service';

interface Props {
  item: Partial<TrilhaCurso>;
  onSave: (data: TrilhaCurso) => void;
  onCancel?: () => void;
}

export const TrilhaCursoForm = ({ item, onSave, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<TrilhaCurso>>({ ordem: 1 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [associacoes, setAssociacoes] = useState<TrilhaCurso[]>([]);

  const carregarDados = () => {
    TrilhaService.findAll().then(setTrilhas).catch(() => {});
    CursoService.findAll().then(setCursos).catch(() => {});
    TrilhaCursoService.findAll().then(setAssociacoes).catch(() => {});
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData(item);
    } else {
      setFormData({ ordem: 1 });
    }
    setErrors({});
  }, [item]);

  // Cursos que já pertencem à trilha selecionada
  const cursosJaNaTrilha = useMemo(() => {
    if (!formData.trilhaId) return [];
    return associacoes
      .filter(tc => tc.trilhaId === Number(formData.trilhaId) && tc.id !== formData.id)
      .map(tc => tc.cursoId);
  }, [formData.trilhaId, associacoes, formData.id]);

  // Cursos elegíveis para vincular (não duplicados na mesma trilha)
  const cursosDisponiveis = useMemo(() => {
    if (!formData.trilhaId) return [];
    return cursos.filter(c => !cursosJaNaTrilha.includes(c.id!));
  }, [formData.trilhaId, cursos, cursosJaNaTrilha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'trilhaId' || name === 'cursoId' || name === 'ordem') {
      parsedValue = value === '' ? undefined : Number(value);
    }

    setFormData(prev => {
      const updated = { ...prev, [name]: parsedValue };
      // Se trocou de trilha, sugere automaticamente a próxima ordem sequencial
      if (name === 'trilhaId') {
        const associadasDestaTrilha = associacoes.filter(tc => tc.trilhaId === Number(value));
        updated.ordem = associadasDestaTrilha.length + 1;
        updated.cursoId = undefined;
      }
      return updated;
    });

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
    if (!formData.trilhaId) {
      toast.warning('Selecione uma trilha.');
      return;
    }
    if (!formData.cursoId) {
      toast.warning('Selecione um curso para vincular.');
      return;
    }

    const result = TrilhaCursoSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as TrilhaCurso);
  };

  const handleCancel = () => {
    setFormData({ ordem: 1 });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temCursosDisponiveis = formData.trilhaId ? cursosDisponiveis.length > 0 : true;

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
              {isEditing ? 'Editar Associação' : 'Vincular Curso à Trilha'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Sequencie cursos de forma única na trilha'}
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
              Trilha de Aprendizado <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.trilhaId ? 'is-invalid' : ''}`}
              name="trilhaId"
              value={formData.trilhaId ?? ''}
              onChange={handleChange}
              required
            >
              <option value="">Selecione a Trilha...</option>
              {trilhas.map(t => (
                <option key={t.id} value={t.id}>
                  {t.titulo}
                </option>
              ))}
            </select>
            {errors.trilhaId && <div className="invalid-feedback">{errors.trilhaId}</div>}
          </div>

          {formData.trilhaId && !temCursosDisponiveis && !isEditing && (
            <div className="alert alert-info py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-info-circle-fill fs-5 me-2 text-info"></i>
              <div>
                Todos os cursos disponíveis já estão vinculados a esta trilha.
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Curso a Vincular <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.cursoId ? 'is-invalid' : ''}`}
              name="cursoId"
              value={formData.cursoId ?? ''}
              onChange={handleChange}
              disabled={!formData.trilhaId || (!temCursosDisponiveis && !isEditing)}
              required
            >
              <option value="">
                {!formData.trilhaId
                  ? 'Selecione uma trilha primeiro...'
                  : !temCursosDisponiveis && !isEditing
                  ? 'Nenhum curso restante para vincular'
                  : 'Selecione o Curso...'}
              </option>
              {cursosDisponiveis.map(c => (
                <option key={c.id} value={c.id}>
                  {c.titulo}
                </option>
              ))}
            </select>
            {errors.cursoId && <div className="invalid-feedback">{errors.cursoId}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Ordem na Sequência da Trilha (Passo) <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className={`form-control ${errors.ordem ? 'is-invalid' : ''}`}
              name="ordem"
              value={formData.ordem ?? 1}
              onChange={handleChange}
              min="1"
              required
            />
            {errors.ordem && <div className="invalid-feedback">{errors.ordem}</div>}
            <small className="text-muted">Ordem sequencial automática na trilha.</small>
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!formData.trilhaId || (!temCursosDisponiveis && !isEditing)}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-plus-lg'} me-2`}></i>
              {isEditing ? 'Atualizar Associação' : 'Salvar Associação'}
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
