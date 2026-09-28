import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Pagamento, PagamentoSchema } from '../../models/pagamento.model';
import { Assinatura } from '../../models/assinatura.model';
import { AssinaturaService } from '../../services/assinatura.service';
import { PagamentoService } from '../../services/pagamento.service';

interface Props {
  item: Partial<Pagamento>;
  onSave: (data: Pagamento) => void;
  onCancel?: () => void;
}

export const PagamentoForm = ({ item, onSave, onCancel }: Props) => {
  const getTodayString = () => new Date().toISOString().split('T')[0];
  const generateTxnId = () => 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase();

  const [formData, setFormData] = useState<Partial<Pagamento>>({
    dataPagamento: getTodayString(),
    metodoPagamento: 'PIX',
    idTransacaoGateway: generateTxnId(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [assinaturas, setAssinaturas] = useState<Assinatura[]>([]);
  const [pagamentosExistentes, setPagamentosExistentes] = useState<Pagamento[]>([]);

  const carregarDados = () => {
    AssinaturaService.findAll().then(setAssinaturas).catch(() => {});
    PagamentoService.findAll().then(setPagamentosExistentes).catch(() => {});
  };

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData({
        ...item,
        dataPagamento: item.dataPagamento
          ? (item.dataPagamento.includes('T') ? item.dataPagamento.split('T')[0] : item.dataPagamento)
          : getTodayString(),
      });
    } else {
      setFormData({
        dataPagamento: getTodayString(),
        metodoPagamento: 'PIX',
        idTransacaoGateway: generateTxnId(),
      });
    }
    setErrors({});
  }, [item]);

  // REGRA DE NEGÓCIO: Apenas assinaturas PENDENTES de pagamento (que ainda não foram pagas)
  const assinaturasPendentes = useMemo(() => {
    const idsAssinaturasPagas = pagamentosExistentes
      .filter(p => p.id !== formData.id) // se estiver editando o próprio pagamento, permite manter
      .map(p => p.assinaturaId);

    return assinaturas.filter(a => !idsAssinaturasPagas.includes(a.id!));
  }, [assinaturas, pagamentosExistentes, formData.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: any = value;
    if (type === 'number' || name === 'assinaturaId' || name === 'valorPago') {
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

  const handleSelectAssinatura = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const assId = e.target.value === '' ? undefined : Number(e.target.value);
    const ass = assinaturas.find(a => a.id === assId);
    setFormData(prev => ({
      ...prev,
      assinaturaId: assId,
      valorPago: ass && (ass as any).plano?.preco ? Number((ass as any).plano.preco) : prev.valorPago,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.assinaturaId) {
      toast.warning('Selecione uma assinatura pendente para pagamento.');
      return;
    }

    const dataToValidate = {
      ...formData,
      dataPagamento: formData.dataPagamento || getTodayString(),
      idTransacaoGateway: formData.idTransacaoGateway || generateTxnId(),
    };

    const result = PagamentoSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    onSave(result.data as Pagamento);
  };

  const handleCancel = () => {
    setFormData({ dataPagamento: getTodayString(), metodoPagamento: 'PIX', idTransacaoGateway: generateTxnId() });
    setErrors({});
    if (onCancel) onCancel();
  };

  const isEditing = Boolean(formData.id);
  const temAssinaturasPendentes = assinaturasPendentes.length > 0;

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
              {isEditing ? 'Editar Pagamento' : 'Registrar Pagamento'}
            </h5>
            <small className="text-muted">
              {isEditing ? `Atualizando registro #${formData.id}` : 'Quitar assinatura pendente'}
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
              Assinatura Pendente <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.assinaturaId ? 'is-invalid' : ''}`}
              name="assinaturaId"
              value={formData.assinaturaId ?? ''}
              onChange={handleSelectAssinatura}
              required
            >
              <option value="">
                {temAssinaturasPendentes
                  ? 'Selecione a Assinatura Pendente...'
                  : 'Nenhuma assinatura pendente de pagamento'}
              </option>
              {assinaturasPendentes.map(a => (
                <option key={a.id} value={a.id}>
                  #{a.id} - Aluno: {(a as any).usuario?.nomeCompleto || a.usuarioId} (Plano: {(a as any).plano?.nome || a.planoId})
                </option>
              ))}
            </select>
            {errors.assinaturaId && <div className="invalid-feedback">{errors.assinaturaId}</div>}
          </div>

          {!temAssinaturasPendentes && !isEditing && (
            <div className="alert alert-success py-2 px-3 small rounded-3 d-flex align-items-center mb-3">
              <i className="bi bi-check-circle-fill fs-5 me-2 text-success"></i>
              <div>
                <strong>Tudo em dia:</strong> Todas as assinaturas cadastradas já possuem pagamento registrado e estão ativas. Para um novo período, crie uma nova assinatura.
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Valor Pago (R$) <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">R$</span>
                <input
                  type="number"
                  step="0.01"
                  className={`form-control border-start-0 ${errors.valorPago ? 'is-invalid' : ''}`}
                  name="valorPago"
                  value={formData.valorPago ?? ''}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  required
                />
              </div>
              {errors.valorPago && <div className="invalid-feedback d-block">{errors.valorPago}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary small">
                Método de Pagamento <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.metodoPagamento ? 'is-invalid' : ''}`}
                name="metodoPagamento"
                value={formData.metodoPagamento ?? 'PIX'}
                onChange={handleChange}
                required
              >
                <option value="PIX">PIX</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Boleto">Boleto Bancário</option>
              </select>
              {errors.metodoPagamento && <div className="invalid-feedback">{errors.metodoPagamento}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">
              ID Transação (Gateway) <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control font-monospace ${errors.idTransacaoGateway ? 'is-invalid' : ''}`}
              name="idTransacaoGateway"
              value={formData.idTransacaoGateway ?? ''}
              onChange={handleChange}
              placeholder="Ex: TXN-998822"
              required
            />
            {errors.idTransacaoGateway && <div className="invalid-feedback">{errors.idTransacaoGateway}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">
              Data do Pagamento <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.dataPagamento ? 'is-invalid' : ''}`}
              name="dataPagamento"
              value={formData.dataPagamento ?? ''}
              onChange={handleChange}
              required
            />
            {errors.dataPagamento && <div className="invalid-feedback">{errors.dataPagamento}</div>}
          </div>

          <div className="d-flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!temAssinaturasPendentes && !isEditing}
              className="btn btn-primary rounded-3 px-4 d-flex align-items-center justify-content-center flex-grow-1"
            >
              <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-credit-card-fill'} me-2`}></i>
              {isEditing ? 'Atualizar Pagamento' : 'Confirmar Pagamento'}
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
