import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { ProgressoAula, ProgressoAulaSchema } from '../../models/progresso.model';
import { Usuario } from '../../models/usuario.model';
import { Aula } from '../../models/aula.model';
import { Matricula } from '../../models/matricula.model';
import { UsuarioService } from '../../services/usuario.service';
import { AulaService } from '../../services/aula.service';
import { MatriculaService } from '../../services/matricula.service';

interface Props {
  item: Partial<ProgressoAula>;
  onSave: (data: ProgressoAula) => void;
  onCancel?: () => void;
}

export const ProgressoAulaForm = ({ item, onSave, onCancel }: Props) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<Partial<ProgressoAula>>({
    usuarioId: !isAdmin ? user?.id : undefined,
    dataConclusao: getTodayString(),
    status: 'Concluído',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);

  useEffect(() => {
    if (isAdmin) {
      UsuarioService.findAll()
        .then(data => setUsuarios(data.filter(u => u.role !== 'ADMIN')))
        .catch(() => {});
    }
    AulaService.findAll().then(setAulas).catch(() => {});
    MatriculaService.findAll().then(setMatriculas).catch(() => {});
  }, [isAdmin]);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        usuarioId: !isAdmin ? user?.id : (item.usuarioId || undefined),
        dataConclusao: item.dataConclusao
          ? (item.dataConclusao.includes('T') ? item.dataConclusao.split('T')[0] : item.dataConclusao)
          : getTodayString(),
        status: item.status || 'Concluído',
      });
    } else {
      setFormData({
        usuarioId: !isAdmin ? user?.id : undefined,
        dataConclusao: getTodayString(),
        status: 'Concluído',
      });
    }
    setErrors({});
  }, [item, isAdmin, user]);

  const currentUsuarioId = !isAdmin ? user?.id : formData.usuarioId;

  // Cursos nos quais o aluno selecionado está matriculado
  const cursosMatriculadosIds = useMemo(() => {
    if (!currentUsuarioId) return [];
    return matriculas
      .filter(m => m.usuarioId === Number(currentUsuarioId))
      .map(m => m.cursoId);
  }, [currentUsuarioId, matriculas]);

  // Aulas disponíveis apenas dos cursos que o aluno está matriculado
  const aulasDisponiveis = useMemo(() => {
    if (!currentUsuarioId) return [];
    return aulas.filter(a => {
      const cursoId = (a as any).modulo?.cursoId || (a as any).modulo?.curso?.id;
      return cursosMatriculadosIds.includes(cursoId);
    });
  }, [currentUsuarioId, aulas, cursosMatriculadosIds]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'usuarioId' || name === 'aulaId') {
      parsedValue = value === '' ? undefined : Number(value);
    }
    setFormData(prev => {
      const updated = { ...prev, [name]: parsedValue };
      if (name === 'usuarioId') {
        updated.aulaId = undefined;
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
    const activeUserId = !isAdmin ? user?.id : formData.usuarioId;

    if (!activeUserId) {
      toast.warning('Selecione um aluno.');
      return;
    }
    if (cursosMatriculadosIds.length === 0) {
      toast.error('Você não está matriculado em nenhum curso. Matricule-se em um curso primeiro!');
      return;
    }
    if (!formData.aulaId) {
      toast.warning('Selecione uma aula vinculada aos cursos matriculados.');
      return;
    }

    const dataToValidate = {
      ...formData,
      usuarioId: activeUserId,
      dataConclusao: formData.dataConclusao || getTodayString(),
      status: formData.status || 'Concluído',
    };

    const result = ProgressoAulaSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as ProgressoAula);
  };

  const handleCancel = () => {
    setFormData({ 
      usuarioId: !isAdmin ? user?.id : undefined,
      dataConclusao: getTodayString(), 
      status: 'Concluído' 
    });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temMatriculas = currentUsuarioId ? cursosMatriculadosIds.length > 0 : true;

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
              {isEditing ? 'Editar Progresso' : 'Marcar Aula Concluída'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Registre a conclusão da aula no curso'}
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
              Aluno <span className="text-danger">*</span>
            </label>
            {isAdmin ? (
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
            ) : (
              <input
                type="text"
                className="form-control bg-light fw-bold"
                value={user?.nomeCompleto || ''}
                readOnly
                disabled
              />
            )}
            {errors.usuarioId && <div className="invalid-feedback">{errors.usuarioId}</div>}
          </div>

          {currentUsuarioId && !temMatriculas && (
            <div className="alert alert-warning py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-exclamation-triangle-fill fs-5 me-2 text-warning"></i>
              <div>
                <strong>Atenção:</strong> {isAdmin ? 'Este aluno não está matriculado em nenhum curso.' : 'Você não está matriculado em nenhum curso ainda. Faça uma matrícula primeiro para registrar progresso!'}
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Aula Concluída <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.aulaId ? 'is-invalid' : ''}`}
              name="aulaId"
              value={formData.aulaId ?? ''}
              onChange={handleChange}
              disabled={!currentUsuarioId || !temMatriculas}
              required
            >
              <option value="">
                {!currentUsuarioId
                  ? 'Selecione um aluno primeiro...'
                  : aulasDisponiveis.length === 0
                  ? 'Nenhuma aula disponível (sem matrícula)'
                  : 'Selecione a Aula Concluída...'}
              </option>
              {aulasDisponiveis.map(a => {
                const cursoNome = (a as any).modulo?.curso?.titulo || 'Curso';
                const moduloNome = (a as any).modulo?.titulo || 'Módulo';
                return (
                  <option key={a.id} value={a.id}>
                    [{cursoNome}] {moduloNome} › {a.titulo}
                  </option>
                );
              })}
            </select>
            {errors.aulaId && <div className="invalid-feedback">{errors.aulaId}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Status <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.status ? 'is-invalid' : ''}`}
                name="status"
                value={formData.status ?? 'Concluído'}
                onChange={handleChange}
                required
              >
                <option value="Concluído">Concluído ("Fiz a aula")</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Não Iniciado">Não Iniciado</option>
              </select>
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold text-secondary small">
                Data de Conclusão <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.dataConclusao ? 'is-invalid' : ''}`}
                name="dataConclusao"
                value={formData.dataConclusao ?? ''}
                onChange={handleChange}
                required
              />
              {errors.dataConclusao && <div className="invalid-feedback">{errors.dataConclusao}</div>}
            </div>
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!currentUsuarioId || !temMatriculas}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-check2-circle'} me-2`}></i>
              {isEditing ? 'Atualizar Progresso' : 'Marcar Aula como Concluída'}
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
