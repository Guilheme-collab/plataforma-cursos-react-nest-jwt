import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { Avaliacao, AvaliacaoSchema } from '../../models/avaliacao.model';
import { Usuario } from '../../models/usuario.model';
import { Curso } from '../../models/curso.model';
import { Matricula } from '../../models/matricula.model';
import { UsuarioService } from '../../services/usuario.service';
import { CursoService } from '../../services/curso.service';
import { MatriculaService } from '../../services/matricula.service';

interface Props {
  item: Partial<Avaliacao>;
  onSave: (data: Avaliacao) => void;
  onCancel?: () => void;
}

export const AvaliacaoForm = ({ item, onSave, onCancel }: Props) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<Partial<Avaliacao>>({
    nota: 5,
    usuarioId: !isAdmin ? user?.id : undefined,
    dataAvaliacao: getTodayString(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);

  useEffect(() => {
    if (isAdmin) {
      // Admin só vê alunos comuns para avaliar/gerenciar (não admins)
      UsuarioService.findAll()
        .then(data => setUsuarios(data.filter(u => u.role !== 'ADMIN')))
        .catch(() => {});
    }
    CursoService.findAll().then(setCursos).catch(() => {});
    MatriculaService.findAll().then(setMatriculas).catch(() => {});
  }, [isAdmin]);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        nota: item.nota ?? 5,
        usuarioId: !isAdmin ? user?.id : (item.usuarioId || undefined),
        dataAvaliacao: item.dataAvaliacao
          ? (item.dataAvaliacao.includes('T') ? item.dataAvaliacao.split('T')[0] : item.dataAvaliacao)
          : getTodayString(),
      });
    } else {
      setFormData({
        nota: 5,
        usuarioId: !isAdmin ? user?.id : undefined,
        dataAvaliacao: getTodayString(),
      });
    }
    setErrors({});
  }, [item, isAdmin, user]);

  const currentUsuarioId = !isAdmin ? user?.id : formData.usuarioId;

  // Cursos nos quais o aluno selecionado está matriculado
  const cursosDoAluno = useMemo(() => {
    if (!currentUsuarioId) return [];
    const enrolledIds = matriculas
      .filter(m => m.usuarioId === Number(currentUsuarioId))
      .map(m => m.cursoId);
    return cursos.filter(c => enrolledIds.includes(c.id!));
  }, [currentUsuarioId, matriculas, cursos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'usuarioId' || name === 'cursoId' || name === 'nota') {
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
    const activeUserId = !isAdmin ? user?.id : formData.usuarioId;

    if (!activeUserId) {
      toast.warning('Selecione um aluno.');
      return;
    }
    if (cursosDoAluno.length === 0) {
      toast.error('Você não está matriculado em nenhum curso. Apenas alunos matriculados podem avaliar!');
      return;
    }
    if (!formData.cursoId) {
      toast.warning('Selecione o curso matriculado para avaliar.');
      return;
    }

    const dataToValidate = {
      ...formData,
      nota: Number(formData.nota ?? 5),
      usuarioId: Number(activeUserId),
      dataAvaliacao: formData.dataAvaliacao || getTodayString(),
    };

    const result = AvaliacaoSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as Avaliacao);
  };

  const handleCancel = () => {
    setFormData({ 
      nota: 5, 
      usuarioId: !isAdmin ? user?.id : undefined,
      dataAvaliacao: getTodayString() 
    });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temCursos = currentUsuarioId ? cursosDoAluno.length > 0 : true;

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
              {isEditing ? 'Editar Avaliação' : 'Nova Avaliação'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Avalie a qualidade de um curso matriculado'}
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
          {/* Se for Admin, mostra dropdown de Alunos (apenas role USER). Se for Aluno, trava no próprio usuário */}
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

          {currentUsuarioId && !temCursos && (
            <div className="alert alert-warning py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-exclamation-triangle-fill fs-5 me-2 text-warning"></i>
              <div>
                <strong>Atenção:</strong> {isAdmin ? 'Este aluno não está matriculado em nenhum curso.' : 'Você não está matriculado em nenhum curso ainda. Faça uma matrícula primeiro para poder avaliar!'}
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Curso Matriculado <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.cursoId ? 'is-invalid' : ''}`}
              name="cursoId"
              value={formData.cursoId ?? ''}
              onChange={handleChange}
              disabled={!currentUsuarioId || !temCursos}
              required
            >
              <option value="">
                {!currentUsuarioId
                  ? 'Selecione um aluno primeiro...'
                  : cursosDoAluno.length === 0
                  ? 'Nenhum curso matriculado'
                  : 'Selecione o Curso...'}
              </option>
              {cursosDoAluno.map(c => (
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
                Nota (1 a 5) <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.nota ? 'is-invalid' : ''}`}
                name="nota"
                value={String(formData.nota ?? 5)}
                onChange={handleChange}
                required
              >
                <option value="5">⭐⭐⭐⭐⭐ 5 - Excelente</option>
                <option value="4">⭐⭐⭐⭐ 4 - Muito Bom</option>
                <option value="3">⭐⭐⭐ 3 - Bom</option>
                <option value="2">⭐⭐ 2 - Regular</option>
                <option value="1">⭐ 1 - Ruim</option>
              </select>
              {errors.nota && <div className="invalid-feedback">{errors.nota}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Data da Avaliação <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="dataAvaliacao"
                value={formData.dataAvaliacao ?? ''}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Comentário (opcional)
            </label>
            <textarea
              className="form-control"
              name="comentario"
              value={formData.comentario ?? ''}
              onChange={handleChange}
              rows={3}
              placeholder="O que achou do curso?"
            />
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!currentUsuarioId || !temCursos}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-plus-lg'} me-2`}></i>
              {isEditing ? 'Atualizar Avaliação' : 'Enviar Avaliação'}
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
