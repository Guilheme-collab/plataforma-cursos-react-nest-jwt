import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Assinatura, AssinaturaSchema } from '../../models/assinatura.model';
import { Usuario } from '../../models/usuario.model';
import { Plano } from '../../models/plano.model';
import { UsuarioService } from '../../services/usuario.service';
import { PlanoService } from '../../services/plano.service';

interface Props {
  item: Partial<Assinatura>;
  onSave: (data: Assinatura) => void;
  onCancel?: () => void;
}

export const AssinaturaForm = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];
  const getNextYearString = () => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<Partial<Assinatura>>({
    dataInicio: getTodayString(),
    dataFim: getNextYearString(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [planos, setPlanos] = useState<Plano[]>([]);

  useEffect(() => {
    UsuarioService.findAll().then(setUsuarios).catch(() => {});
    PlanoService.findAll().then(setPlanos).catch(() => {});
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        dataInicio: item.dataInicio
          ? (item.dataInicio.includes('T') ? item.dataInicio.split('T')[0] : item.dataInicio)
          : getTodayString(),
        dataFim: item.dataFim
          ? (item.dataFim.includes('T') ? item.dataFim.split('T')[0] : item.dataFim)
          : getNextYearString(),
      });
    } else {
      setFormData({
        dataInicio: getTodayString(),
        dataFim: getNextYearString(),
      });
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'usuarioId' || name === 'planoId') {
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
    const dataToValidate = {
      ...formData,
      dataInicio: formData.dataInicio || getTodayString(),
    };

    const result = AssinaturaSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast.warning('Selecione o aluno e o plano.');
      return;
    }
    onSave(result.data as Assinatura);
  };

  const handleCancel = () => {
    setFormData({ dataInicio: getTodayString(), dataFim: getNextYearString() });
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
              {isEditing ? 'Editar Assinatura' : 'Nova Assinatura'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Vincule um aluno a um plano'}
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

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              Plano Escolhido <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.planoId ? 'is-invalid' : ''}`}
              name="planoId"
              value={formData.planoId ?? ''}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o Plano...</option>
              {planos.map(p => (
                <option key={p.id} value={p.id}>
                  {p.nome} - R$ {Number(p.preco).toFixed(2)} ({p.duracaoMeses} meses)
                </option>
              ))}
            </select>
            {errors.planoId && <div className="invalid-feedback">{errors.planoId}</div>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Data de Início <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.dataInicio ? 'is-invalid' : ''}`}
                name="dataInicio"
                value={formData.dataInicio ?? ''}
                onChange={handleChange}
                required
              />
              {errors.dataInicio && <div className="invalid-feedback">{errors.dataInicio}</div>}
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold text-secondary small">
                Data de Término <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.dataFim ? 'is-invalid' : ''}`}
                name="dataFim"
                value={formData.dataFim ?? ''}
                onChange={handleChange}
                required
              />
              {errors.dataFim && <div className="invalid-feedback">{errors.dataFim}</div>}
            </div>
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-plus-lg'} me-2`}></i>
              {isEditing ? 'Atualizar Assinatura' : 'Criar Assinatura'}
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
