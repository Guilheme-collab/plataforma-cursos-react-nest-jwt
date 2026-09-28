import React, { useState } from 'react';
import { Plano } from '../../models/plano.model';
import { Curso } from '../../models/curso.model';
import { useAuth } from '../../contexts/AuthContext';
import { AssinaturaService } from '../../services/assinatura.service';
import { PagamentoService } from '../../services/pagamento.service';
import { MatriculaService } from '../../services/matricula.service';
import { toast } from 'react-toastify';

interface Props {
  plano: Plano;
  cursos: Curso[];
  onClose: () => void;
  onSuccess: () => void;
}

export const ModalCheckoutPlano: React.FC<Props> = ({ plano, cursos, onClose, onSuccess }: Props) => {
  const { user } = useAuth();
  const [metodoPagamento, setMetodoPagamento] = useState<'Cartão de Crédito' | 'PIX' | 'Boleto'>('Cartão de Crédito');
  const [cartaoNumero, setCartaoNumero] = useState('4532 8912 3456 7890');
  const [cartaoNome, setCartaoNome] = useState(user?.nomeCompleto?.toUpperCase() || 'TITULAR DO CARTAO');
  const [cartaoValidade, setCartaoValidade] = useState('12/28');
  const [cartaoCvv, setCartaoCvv] = useState('888');
  
  const [pixCopied, setPixCopied] = useState(false);
  const [boletoCopied, setBoletoCopied] = useState(false);
  const [processing, setProcessing] = useState(false);

  const pixKeySimulada = `00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266141740005204000053039865405${plano.preco.toFixed(2)}5802BR5925PLATAFORMA DE CURSOS SAO PAULO6009SAO PAULO62070503***6304E2CA`;
  const linhaDigitavelSimulada = `34191.79001 01043.510047 91020.150008 8 91230000050000`;

  const formatarMoeda = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleCopiarPix = () => {
    navigator.clipboard.writeText(pixKeySimulada);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 3000);
    toast.info('Chave PIX copiada para a área de transferência!');
  };

  const handleCopiarBoleto = () => {
    navigator.clipboard.writeText(linhaDigitavelSimulada);
    setBoletoCopied(true);
    setTimeout(() => setBoletoCopied(false), 3000);
    toast.info('Linha digitável do boleto copiada!');
  };

  const handleFinalizarPagamento = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || !plano.id) return;

    try {
      setProcessing(true);

      const hoje = new Date();
      const dataInicio = hoje.toISOString().split('T')[0];

      const dataFimObj = new Date(hoje);
      dataFimObj.setMonth(dataFimObj.getMonth() + (plano.duracaoMeses || 1));
      const dataFim = dataFimObj.toISOString().split('T')[0];

      // 1. Criar Assinatura no banco
      const novaAssinatura = await AssinaturaService.create({
        usuarioId: user.id,
        planoId: plano.id,
        dataInicio,
        dataFim,
      });

      // 2. Criar registro de Pagamento no banco
      if (novaAssinatura?.id) {
        await PagamentoService.create({
          assinaturaId: novaAssinatura.id,
          valorPago: plano.preco,
          metodoPagamento,
          dataPagamento: dataInicio,
          idTransacaoGateway: `PAY_${metodoPagamento === 'PIX' ? 'PIX' : metodoPagamento === 'Boleto' ? 'BOL' : 'CC'}_${Date.now()}`,
        } as any);
      }

      // 3. Matricular o aluno nos cursos da plataforma automaticamente
      if (cursos && cursos.length > 0) {
        for (const curso of cursos) {
          if (curso.id) {
            try {
              await MatriculaService.create({
                usuarioId: user.id,
                cursoId: curso.id,
                dataMatricula: dataInicio,
              });
            } catch {
              // Se já estiver matriculado, ignora conflito
            }
          }
        }
      }

      toast.success(`🎉 Pagamento de ${formatarMoeda(plano.preco)} confirmado via ${metodoPagamento}! Acesso aos cursos e aulas liberado.`);
      onSuccess();
    } catch (error: any) {
      console.error('Erro no pagamento:', error);
      const msg = error.response?.data?.message;
      toast.error(Array.isArray(msg) ? msg[0] : msg || 'Erro ao processar pagamento.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="modal show d-block tab-modal-backdrop" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', zIndex: 1050 }}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          
          {/* Cabeçalho do Modal */}
          <div className="modal-header bg-primary text-white p-4 border-0">
            <div>
              <h4 className="modal-title fw-bold mb-1 d-flex align-items-center">
                <i className="bi bi-shield-lock-fill me-2 fs-3"></i> Checkout Seguro - Plano {plano.nome}
              </h4>
              <p className="mb-0 text-white-50 small">Finalize o pagamento para desbloquear seu acesso completo a todo o conteúdo</p>
            </div>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} disabled={processing}></button>
          </div>

          <div className="modal-body p-4 p-lg-5 bg-light">
            <div className="row g-4">
              
              {/* Coluna Esquerda: Resumo do Conteúdo Liberado pelo Plano */}
              <div className="col-lg-5">
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-bold">
                      Validade: {plano.duracaoMeses} {plano.duracaoMeses === 1 ? 'mês' : 'meses'}
                    </span>
                    <span className="text-muted small"><i className="bi bi-check-circle-fill text-success me-1"></i> Acesso Imediato</span>
                  </div>

                  <h3 className="fw-bold text-dark mb-1">{plano.nome}</h3>
                  <p className="text-muted small mb-4">{plano.descricao}</p>

                  <div className="p-3 bg-light rounded-4 mb-4 border">
                    <div className="text-muted small">Valor Total da Assinatura</div>
                    <div className="fs-2 fw-bold text-primary">{formatarMoeda(plano.preco)}</div>
                  </div>

                  <h6 className="fw-bold text-dark mb-3">
                    <i className="bi bi-journal-bookmark-fill me-2 text-primary"></i>
                    Conteúdo & Cursos Inclusos neste Plano:
                  </h6>

                  <div className="overflow-auto pe-1" style={{ maxHeight: '280px' }}>
                    {cursos.length === 0 ? (
                      <div className="text-muted small p-3 text-center bg-light rounded-3">
                        <i className="bi bi-info-circle me-1"></i> Nenhum curso específico está vinculado a este plano.
                      </div>
                    ) : (
                      cursos.map(c => (
                        <div key={c.id} className="p-3 border rounded-3 mb-2 bg-light d-flex align-items-center justify-content-between">
                          <div>
                            <div className="fw-bold text-dark small">{c.titulo}</div>
                            <div className="text-muted style-small" style={{ fontSize: '12px' }}>
                              <span className="badge bg-secondary-subtle text-secondary me-2">{c.nivel}</span>
                              {c.totalAulas || 0} aulas • {c.totalHoras || 0} horas
                            </div>
                          </div>
                          <i className="bi bi-unlock-fill text-success fs-5"></i>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Seleção do Método de Pagamento e Formulário */}
              <div className="col-lg-7">
                <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h5 className="fw-bold text-dark mb-3">Forma de Pagamento</h5>

                  {/* Abas de Seleção de Pagamento */}
                  <div className="row g-2 mb-4">
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setMetodoPagamento('Cartão de Crédito')}
                        className={`btn w-100 p-3 rounded-4 d-flex flex-column align-items-center justify-content-center border transition-all ${
                          metodoPagamento === 'Cartão de Crédito'
                            ? 'btn-primary border-primary shadow-sm'
                            : 'btn-outline-light text-dark border-secondary-subtle'
                        }`}
                      >
                        <i className="bi bi-credit-card-2-front fs-3 mb-1"></i>
                        <span className="fw-bold small">Cartão</span>
                      </button>
                    </div>

                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setMetodoPagamento('PIX')}
                        className={`btn w-100 p-3 rounded-4 d-flex flex-column align-items-center justify-content-center border transition-all ${
                          metodoPagamento === 'PIX'
                            ? 'btn-success border-success shadow-sm text-white'
                            : 'btn-outline-light text-dark border-secondary-subtle'
                        }`}
                      >
                        <i className="bi bi-qr-code-scan fs-3 mb-1"></i>
                        <span className="fw-bold small">PIX</span>
                      </button>
                    </div>

                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setMetodoPagamento('Boleto')}
                        className={`btn w-100 p-3 rounded-4 d-flex flex-column align-items-center justify-content-center border transition-all ${
                          metodoPagamento === 'Boleto'
                            ? 'btn-dark border-dark shadow-sm text-white'
                            : 'btn-outline-light text-dark border-secondary-subtle'
                        }`}
                      >
                        <i className="bi bi-barcode fs-3 mb-1"></i>
                        <span className="fw-bold small">Boleto</span>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleFinalizarPagamento}>
                    {/* Formulário de Cartão de Crédito */}
                    {metodoPagamento === 'Cartão de Crédito' && (
                      <div className="p-3 bg-light rounded-4 border mb-4">
                        <div className="mb-3">
                          <label className="form-label fw-semibold small text-muted">Número do Cartão</label>
                          <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><i className="bi bi-credit-card text-muted"></i></span>
                            <input
                              type="text"
                              className="form-control border-start-0"
                              value={cartaoNumero}
                              onChange={e => setCartaoNumero(e.target.value)}
                              placeholder="0000 0000 0000 0000"
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-semibold small text-muted">Nome Impresso no Cartão</label>
                          <input
                            type="text"
                            className="form-control text-uppercase"
                            value={cartaoNome}
                            onChange={e => setCartaoNome(e.target.value)}
                            placeholder="NOME COMPLETO DO TITULAR"
                            required
                          />
                        </div>

                        <div className="row g-3">
                          <div className="col-6">
                            <label className="form-label fw-semibold small text-muted">Validade</label>
                            <input
                              type="text"
                              className="form-control text-center"
                              value={cartaoValidade}
                              onChange={e => setCartaoValidade(e.target.value)}
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <label className="form-label fw-semibold small text-muted">CVV</label>
                            <input
                              type="text"
                              className="form-control text-center"
                              value={cartaoCvv}
                              onChange={e => setCartaoCvv(e.target.value)}
                              placeholder="123"
                              maxLength={4}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PIX */}
                    {metodoPagamento === 'PIX' && (
                      <div className="p-4 bg-light rounded-4 border text-center mb-4">
                        <div className="mb-3">
                          <div className="bg-white p-3 d-inline-block rounded-4 shadow-sm border mb-2">
                            {/* SVG Simulado de QR Code PIX */}
                            <svg width="140" height="140" viewBox="0 0 100 100" fill="#0f172a">
                              <rect width="100" height="100" fill="#ffffff" />
                              <rect x="10" y="10" width="30" height="30" fill="#000" />
                              <rect x="15" y="15" width="20" height="20" fill="#fff" />
                              <rect x="20" y="20" width="10" height="10" fill="#000" />
                              
                              <rect x="60" y="10" width="30" height="30" fill="#000" />
                              <rect x="65" y="15" width="20" height="20" fill="#fff" />
                              <rect x="70" y="20" width="10" height="10" fill="#000" />

                              <rect x="10" y="60" width="30" height="30" fill="#000" />
                              <rect x="15" y="65" width="20" height="20" fill="#fff" />
                              <rect x="20" y="70" width="10" height="10" fill="#000" />

                              <rect x="45" y="10" width="10" height="20" fill="#000" />
                              <rect x="45" y="45" width="20" height="20" fill="#000" />
                              <rect x="70" y="60" width="20" height="25" fill="#000" />
                            </svg>
                          </div>
                          <p className="text-muted small mb-0">Escaneie o QR Code no seu aplicativo do banco para aprovação instantânea.</p>
                        </div>

                        <div className="input-group">
                          <input type="text" className="form-control font-monospace small bg-white" value={pixKeySimulada} readOnly />
                          <button
                            type="button"
                            onClick={handleCopiarPix}
                            className={`btn ${pixCopied ? 'btn-success' : 'btn-outline-primary'}`}
                          >
                            <i className={`bi ${pixCopied ? 'bi-check2' : 'bi-clipboard'} me-1`}></i>
                            {pixCopied ? 'Copiado!' : 'Copiar PIX'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Boleto */}
                    {metodoPagamento === 'Boleto' && (
                      <div className="p-4 bg-light rounded-4 border mb-4">
                        <div className="text-center mb-3">
                          <i className="bi bi-barcode display-3 text-dark mb-2 d-block"></i>
                          <h6 className="fw-bold text-dark">Boleto Bancário Gerado</h6>
                          <p className="text-muted small">O boleto tem vencimento em 3 dias úteis. Ao confirmar abaixo, seu pagamento é simulado e liberado para testes.</p>
                        </div>

                        <label className="form-label fw-semibold small text-muted">Linha Digitável do Boleto</label>
                        <div className="input-group">
                          <input type="text" className="form-control font-monospace small bg-white" value={linhaDigitavelSimulada} readOnly />
                          <button
                            type="button"
                            onClick={handleCopiarBoleto}
                            className={`btn ${boletoCopied ? 'btn-success' : 'btn-outline-dark'}`}
                          >
                            <i className={`bi ${boletoCopied ? 'bi-check2' : 'bi-clipboard'} me-1`}></i>
                            {boletoCopied ? 'Copiado!' : 'Copiar'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Botão de Finalização */}
                    <button
                      type="submit"
                      disabled={processing}
                      className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow py-3"
                    >
                      {processing ? (
                        <span><span className="spinner-border spinner-border-sm me-2"></span> Processando Pagamento...</span>
                      ) : (
                        <span>
                          <i className="bi bi-bag-check-fill me-2"></i>
                          Confirmar Pagamento de {formatarMoeda(plano.preco)}
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
