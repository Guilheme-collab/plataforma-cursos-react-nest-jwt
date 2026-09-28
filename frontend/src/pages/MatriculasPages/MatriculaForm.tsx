import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Matricula, MatriculaSchema } from '../../models/matricula.model';
import { Usuario } from '../../models/usuario.model';
import { Curso } from '../../models/curso.model';
import { UsuarioService } from '../../services/usuario.service';
import { CursoService } from '../../services/curso.service';
import { MatriculaService } from '../../services/matricula.service';

interface Props {
  item: Partial<Matricula>;
  onSave: (data: Matricula) => void;
  onCancel?: () => void;
}

export const MatriculaForm = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<Partial<Matricula>>({
    dataMatricula: getTodayString(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [matriculasExistentes, setMatriculasExistentes] = useState<Matricula[]>([]);

  const carregarDados = () => {
    UsuarioService.findAll().then(setUsuarios).catch(() => {});
    CursoService.findAll().then(setCursos).catch(() => {});
    MatriculaService.findAll().then(setMatriculasExistentes).catch(() => {});
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        dataMatricula: item.dataMatricula
          ? (item.dataMatricula.includes('T') ? item.dataMatricula.split('T')[0] : item.dataMatricula)
          : getTodayString(),
        dataConclusao: item.dataConclusao
          ? (item.dataConclusao.includes('T') ? item.dataConclusao.split('T')[0] : item.dataConclusao)
          : undefined,
      });
    } else {
      setFormData({
        dataMatricula: getTodayString(),
      });
    }
    setErrors({});
  }, [item]);

  // Cursos nos quais o aluno selecionado já está matriculado
  const idsCursosJaMatriculado = useMemo(() => {
    if (!formData.usuarioId) return [];
    return matriculasExistentes
      .filter(m => m.usuarioId === Number(formData.usuarioId) && m.id !== formData.id)
      .map(m => m.cursoId);
  }, [formData.usuarioId, matriculasExistentes, formData.id]);

  // Cursos disponíveis para este aluno se matricular (impede duplicar matrícula no mesmo curso)
  const cursosDisponiveis = useMemo(() => {
    if (!formData.usuarioId) return cursos;
    return cursos.filter(c => !idsCursosJaMatriculado.includes(c.id!));
  }, [formData.usuarioId, cursos, idsCursosJaMatriculado]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'usuarioId' || name === 'cursoId') {
      parsedValue = value === '' ? undefined : Number(value);
    }
    setFormData(prev => {
      const updated = { ...prev, [name]: parsedValue };
      if (name === 'usuarioId') {
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
    if (!formData.usuarioId) {
      toast.warning('Selecione um aluno.');
      return;
    }
    if (!formData.cursoId) {
      toast.warning('Selecione um curso.');
      return;
    }

    const dataToValidate = {
      ...formData,
      dataMatricula: formData.dataMatricula || getTodayString(),
      dataConclusao: formData.dataConclusao ? formData.dataConclusao : undefined,
    };

    const result = MatriculaSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as Matricula);
  };

  const handleCancel = () => {
    setFormData({ dataMatricula: getTodayString() });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temCursosDisponiveis = formData.usuarioId ? cursosDisponiveis.length > 0 : true;

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
              {isEditing ? 'Editar Matrícula' : 'Nova Matrícula'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Matricular aluno em um curso'}
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
              Aluno (Usuário) <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.usuarioId ? 'is-invalid' : ''}`}
              name="usuarioId"
              value={formData.usuarioId ?? ''}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o Aluno...</option>
              {usuarios.map(u => (
                <option key={u.id} value={u.id}>
                  {u.nomeCompleto} ({u.email})
                </option>
              ))}
            </select>
            {errors.usuarioId && <div className="invalid-feedback">{errors.usuarioId}</div>}
          </div>

          {formData.usuarioId && !temCursosDisponiveis && !isEditing && (
            <div className="alert alert-info py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-info-circle-fill fs-5 me-2 text-info"></i>
              <div>
                Este aluno já está matriculado em todos os cursos disponíveis.
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Curso <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.cursoId ? 'is-invalid' : ''}`}
              name="cursoId"
              value={formData.cursoId ?? ''}
              onChange={handleChange}
              disabled={!formData.usuarioId || (!temCursosDisponiveis && !isEditing)}
              required
            >
              <option value="">
                {!formData.usuarioId
                  ? 'Selecione um aluno primeiro...'
                  : !temCursosDisponiveis && !isEditing
                  ? 'Aluno já matriculado em todos os cursos'
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

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Data da Matrícula <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.dataMatricula ? 'is-invalid' : ''}`}
                name="dataMatricula"
                value={formData.dataMatricula ?? ''}
                onChange={handleChange}
                required
              />
              {errors.dataMatricula && <div className="invalid-feedback">{errors.dataMatricula}</div>}
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold text-secondary small">
                Data de Conclusão (Opcional)
              </label>
              <input
                type="date"
                className="form-control"
                name="dataConclusao"
                value={formData.dataConclusao ?? ''}
                onChange={handleChange}
              />
              <small className="text-muted" style={{ fontSize: '11px' }}>
                Preencha quando o aluno concluir o curso (necessário para emissão do certificado).
              </small>
            </div>
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!formData.usuarioId || (!temCursosDisponiveis && !isEditing)}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-plus-lg'} me-2`}></i>
              {isEditing ? 'Atualizar Matrícula' : 'Confirmar Matrícula'}
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
