import React, { useState, useEffect } from 'react';
import { Usuario, UsuarioSchema } from '../../models/usuario.model';

interface Props {
  item: Partial<Usuario>;
  onSave: (data: Usuario) => void;
  onCancel?: () => void;
}

export const UsuarioForm: React.FC<Props> = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<Partial<Usuario>>({
    dataCadastro: getTodayString(),
    role: 'USER',
    ativo: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        senhaHash: '', // Mantém o campo de senha vazio durante edição para não re-criptografar o hash atual
        dataCadastro: item.dataCadastro
          ? (item.dataCadastro.includes('T') ? item.dataCadastro.split('T')[0] : item.dataCadastro)
          : getTodayString(),
        role: item.role || 'USER',
        ativo: item.ativo !== undefined ? item.ativo : true,
      });
    } else {
      setFormData({
        senhaHash: '',
        dataCadastro: getTodayString(),
        role: 'USER',
        ativo: true,
      });
    }
    setErrors({});
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number') {
      parsedValue = value ? Number(value) : undefined;
    } else if (name === 'ativo') {
      parsedValue = value === 'true';
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
      dataCadastro: formData.dataCadastro || getTodayString(),
    };

    // Para edição, se a senha estiver vazia, não validamos a senha
    let result;
    if (formData.id && (!formData.senhaHash || formData.senhaHash.trim() === '')) {
      const { senhaHash, ...dataWithoutSenha } = dataToValidate;
      result = UsuarioSchema.partial({ senhaHash: true }).safeParse(dataWithoutSenha);
    } else {
      result = UsuarioSchema.safeParse(dataToValidate);
    }

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const payload: any = { ...result.data };
    if (formData.id && (!payload.senhaHash || payload.senhaHash.trim() === '')) {
      delete payload.senhaHash;
    }
    onSave(payload as Usuario);
  };

  const handleCancel = () => {
    setFormData({
      dataCadastro: getTodayString(),
      role: 'USER',
      ativo: true,
    });
    setErrors({});
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0 text-primary">
          <i className={`bi ${formData.id ? 'bi-pencil-square' : 'bi-person-plus-fill'} me-2`}></i>
          {formData.id ? 'Editar Usuário' : 'Formulário de Usuário'}
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
              Nome Completo <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.nomeCompleto ? 'is-invalid' : ''}`}
              name="nomeCompleto"
              placeholder="Digite o nome completo"
              value={formData.nomeCompleto || ''}
              onChange={handleChange}
            />
            {errors.nomeCompleto && <div className="invalid-feedback">{errors.nomeCompleto}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              E-mail <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              placeholder="exemplo@email.com"
              value={formData.email || ''}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Senha {formData.id ? <small className="text-muted">(deixe em branco para não alterar)</small> : <span className="text-danger">*</span>}
            </label>
            <input
              type="password"
              className={`form-control ${errors.senhaHash ? 'is-invalid' : ''}`}
              name="senhaHash"
              placeholder={formData.id ? 'Preencha para alterar a senha' : 'Mínimo 6 caracteres'}
              value={formData.senhaHash || ''}
              onChange={handleChange}
            />
            {errors.senhaHash && <div className="invalid-feedback">{errors.senhaHash}</div>}
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label fw-semibold">Nível de Permissão (Role)</label>
              <select
                className="form-select"
                name="role"
                value={formData.role || 'USER'}
                onChange={handleChange}
              >
                <option value="USER">Usuário (Aluno)</option>
                <option value="INSTRUTOR">Instrutor</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Status de Ativação</label>
              <select
                className="form-select"
                name="ativo"
                value={formData.ativo ? 'true' : 'false'}
                onChange={handleChange}
              >
                <option value="true">Ativo</option>
                <option value="false">Inativo / Desativado</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Data de Cadastro <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.dataCadastro ? 'is-invalid' : ''}`}
              name="dataCadastro"
              value={formData.dataCadastro || ''}
              onChange={handleChange}
            />
            {errors.dataCadastro && <div className="invalid-feedback">{errors.dataCadastro}</div>}
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center">
              <i className="bi bi-check-circle-fill me-2"></i>
              {formData.id ? 'Salvar Alterações' : 'Cadastrar Usuário'}
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
