import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Certificado, CertificadoSchema } from '../../models/certificado.model';
import { Usuario } from '../../models/usuario.model';
import { Curso } from '../../models/curso.model';
import { Trilha } from '../../models/trilha.model';
import { Matricula } from '../../models/matricula.model';
import { UsuarioService } from '../../services/usuario.service';
import { CursoService } from '../../services/curso.service';
import { TrilhaService } from '../../services/trilha.service';
import { MatriculaService } from '../../services/matricula.service';

interface Props {
  item: Partial<Certificado>;
  onSave: (data: Certificado) => void;
  onCancel?: () => void;
}

export const CertificadoForm = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];
  const generateCode = () => 'CERT-' + Math.random().toString(36).substring(2, 9).toUpperCase();

  const [formData, setFormData] = useState<Partial<Certificado>>({
    codigoVerificacao: generateCode(),
    dataEmissao: getTodayString(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);

  useEffect(() => {
    UsuarioService.findAll()
      .then(data => setUsuarios(data.filter(u => u.role !== 'ADMIN')))
      .catch(() => {});
    CursoService.findAll().then(setCursos).catch(() => {});
    TrilhaService.findAll().then(setTrilhas).catch(() => {});
    MatriculaService.findAll().then(setMatriculas).catch(() => {});
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        dataEmissao: item.dataEmissao
          ? (item.dataEmissao.includes('T') ? item.dataEmissao.split('T')[0] : item.dataEmissao)
          : getTodayString(),
      });
    } else {
      setFormData({
        codigoVerificacao: generateCode(),
        dataEmissao: getTodayString(),
      });
    }
    setErrors({});
  }, [item]);

  // Cursos nos quais o aluno selecionado ESTÁ MATRICULADO E COM STATUS CONCLUÍDO (dataConclusao preenchida)
  const matriculasDoAluno = useMemo(() => {
    if (!formData.usuarioId) return [];
    return matriculas.filter(m => m.usuarioId === Number(formData.usuarioId));
  }, [formData.usuarioId, matriculas]);

  const cursosConcluidosDoAluno = useMemo(() => {
    if (!formData.usuarioId) return [];
    // REGRA DE NEGÓCIO: Apenas cursos com data de conclusão registrada (Concluído)
    const concluidosIds = matriculasDoAluno
      .filter(m => m.dataConclusao !== null && m.dataConclusao !== undefined && m.dataConclusao !== '')
      .map(m => m.cursoId);
    return cursos.filter(c => concluidosIds.includes(c.id!));
  }, [formData.usuarioId, matriculasDoAluno, cursos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'usuarioId' || name === 'cursoId' || name === 'trilhaId') {
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

  const handleRegenerateCode = () => {
    setFormData(prev => ({ ...prev, codigoVerificacao: generateCode() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.usuarioId) {
      toast.warning('Selecione um aluno.');
      return;
    }
    if (cursosConcluidosDoAluno.length === 0) {
      toast.error('O aluno não possui nenhum curso concluído. Só é possível emitir certificado para cursos concluídos!');
      return;
    }
    if (!formData.cursoId) {
      toast.warning('Selecione o curso concluído pelo aluno.');
      return;
    }

    const dataToValidate = {
      ...formData,
      codigoVerificacao: formData.codigoVerificacao || generateCode(),
      dataEmissao: formData.dataEmissao || getTodayString(),
    };

    const result = CertificadoSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as Certificado);
  };

  const handleCancel = () => {
    setFormData({ codigoVerificacao: generateCode(), dataEmissao: getTodayString() });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temMatriculas = formData.usuarioId ? matriculasDoAluno.length > 0 : true;
  const temCursosConcluidos = formData.usuarioId ? cursosConcluidosDoAluno.length > 0 : true;

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
              {isEditing ? 'Editar Certificado' : 'Emitir Certificado'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Apenas para alunos com curso concluído'}
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

          {/* Avisos de Regra de Negócio */}
          {formData.usuarioId && !temMatriculas && (
            <div className="alert alert-warning py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-exclamation-triangle-fill fs-5 me-2 text-warning"></i>
              <div>
                <strong>Sem matrícula:</strong> Este aluno não está matriculado em nenhum curso.
              </div>
            </div>
          )}

          {formData.usuarioId && temMatriculas && !temCursosConcluidos && (
            <div className="alert alert-warning py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-clock-history fs-5 me-2 text-warning"></i>
              <div>
                <strong>Cursos em Andamento:</strong> O aluno possui matrícula ativa, mas nenhum curso com status <strong>Concluído</strong>. O certificado só pode ser emitido após o registro da data de conclusão na matrícula.
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Curso Concluído <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.cursoId ? 'is-invalid' : ''}`}
              name="cursoId"
              value={formData.cursoId ?? ''}
              onChange={handleChange}
              disabled={!formData.usuarioId || !temCursosConcluidos}
              required
            >
              <option value="">
                {!formData.usuarioId
                  ? 'Selecione um aluno primeiro...'
                  : !temCursosConcluidos
                  ? 'Nenhum curso concluído pelo aluno'
                  : 'Selecione o Curso Concluído...'}
              </option>
              {cursosConcluidosDoAluno.map(c => (
                <option key={c.id} value={c.id}>
                  ✓ {c.titulo} (Status: Concluído)
                </option>
              ))}
            </select>
            {errors.cursoId && <div className="invalid-feedback">{errors.cursoId}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Trilha de Conhecimento (opcional)
            </label>
            <select
              className="form-select"
              name="trilhaId"
              value={formData.trilhaId ?? ''}
              onChange={handleChange}
            >
              <option value="">Nenhuma trilha (Curso avulso)</option>
              {trilhas.map(t => (
                <option key={t.id} value={t.id}>
                  {t.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Código de Verificação <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <input
                type="text"
                className={`form-control font-monospace ${errors.codigoVerificacao ? 'is-invalid' : ''}`}
                name="codigoVerificacao"
                value={formData.codigoVerificacao ?? ''}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleRegenerateCode}
                title="Gerar novo código"
              >
                <i className="bi bi-arrow-repeat"></i>
              </button>
            </div>
            {errors.codigoVerificacao && <div className="invalid-feedback d-block">{errors.codigoVerificacao}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Data de Emissão <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.dataEmissao ? 'is-invalid' : ''}`}
              name="dataEmissao"
              value={formData.dataEmissao ?? ''}
              onChange={handleChange}
              required
            />
            {errors.dataEmissao && <div className="invalid-feedback">{errors.dataEmissao}</div>}
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!formData.usuarioId || !temCursosConcluidos}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-award-fill'} me-2`}></i>
              {isEditing ? 'Atualizar Certificado' : 'Emitir Certificado'}
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
