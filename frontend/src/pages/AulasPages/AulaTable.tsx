import { useState, useEffect } from 'react';
import { Aula } from '../../models/aula.model';
import { useAuth } from '../../contexts/AuthContext';
import { ProgressoService } from '../../services/progresso.service';
import { toast } from 'react-toastify';

interface Props {
  lista: Aula[];
  onEdit: (item: Aula) => void;
  onDelete: (id: number) => void;
  isAdmin?: boolean;
}

export const AulaTable = ({ lista, onEdit, onDelete, isAdmin = true }: Props) => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lista.length / itemsPerPage) || 1;
  const paginated = lista.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const [completedAulaIds, setCompletedAulaIds] = useState<Set<number>>(new Set());
  const [togglingId, setTogglingId] = useState<number | null>(null);

  // Carregar o progresso do aluno para saber quais aulas ele já concluiu
  const loadUserProgress = async () => {
    if (isAdmin || !user?.id) return;
    try {
      const progressos = await ProgressoService.findAll();
      const userCompleted = progressos
        .filter((p: any) => p.usuarioId === user.id && p.status === 'Concluído')
        .map((p: any) => p.aulaId);
      setCompletedAulaIds(new Set(userCompleted));
    } catch (err) {
      console.error('Erro ao carregar progresso do usuário:', err);
    }
  };

  useEffect(() => {
    loadUserProgress();
  }, [lista, user]);

  const handleToggleConcluirAula = async (aula: Aula) => {
    if (!user?.id || !aula.id) return;
    const isCompleted = completedAulaIds.has(aula.id);
    setTogglingId(aula.id);

    try {
      if (isCompleted) {
        // Se já concluiu, busca o registro de progresso para excluir/desmarcar
        const progressos = await ProgressoService.findAll();
        const existing = progressos.find((p: any) => p.usuarioId === user.id && p.aulaId === aula.id);
        if (existing?.id) {
          await ProgressoService.delete(existing.id);
          toast.info(`Status da aula "${aula.titulo}" alterado para Em Andamento.`);
        }
      } else {
        // Marcar como concluída
        await ProgressoService.create({
          usuarioId: user.id,
          aulaId: aula.id,
          status: 'Concluído',
          dataConclusao: new Date().toISOString().split('T')[0],
        });
        toast.success(`🎉 Parabéns! Aula "${aula.titulo}" marcada como concluída!`);
      }
      await loadUserProgress();
    } catch (err: any) {
      console.error(err);
      toast.error('Erro ao atualizar status da aula.');
    } finally {
      setTogglingId(null);
    }
  };

  const getBadgeClass = (tipo: string) => {
    switch (tipo) {
      case 'Vídeo':
        return 'bg-primary-subtle text-primary border-primary-subtle';
      case 'Texto':
        return 'bg-success-subtle text-success border-success-subtle';
      case 'Quiz':
        return 'bg-warning-subtle text-warning-emphasis border-warning-subtle';
      default:
        return 'bg-secondary-subtle text-secondary border-secondary-subtle';
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-white border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-play-circle-fill text-primary fs-5 me-2"></i>
          <h5 className="mb-0 fw-bold" style={{ color: '#2b3674' }}>
            Lista de Aulas
          </h5>
          <span className="badge bg-primary-subtle text-primary rounded-pill ms-2 px-3 py-1">
            {lista.length} {lista.length === 1 ? 'aula' : 'aulas'}
          </span>
        </div>
      </div>

      <div className="card-body p-0">
        {lista.length === 0 ? (
          <div className="text-center py-5 px-3">
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: '70px', height: '70px' }}
            >
              <i className="bi bi-inbox text-muted fs-1"></i>
            </div>
            <h6 className="fw-bold text-secondary mb-1">Nenhuma aula cadastrada</h6>
            <p className="text-muted small mb-0">
              {isAdmin ? 'Cadastre a primeira aula utilizando o formulário ao lado.' : 'Nenhuma aula disponível no momento.'}
            </p>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" style={{ width: '70px' }}>ID</th>
                    <th>Título da Aula</th>
                    <th>Módulo Vinculado</th>
                    <th>Tipo</th>
                    <th>Duração</th>
                    {!isAdmin && <th className="text-center">Meu Progresso</th>}
                    {isAdmin && <th className="text-end pe-4" style={{ width: '120px' }}>Ações</th>}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(item => {
                    const isCompleted = item.id ? completedAulaIds.has(item.id) : false;
                    return (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-muted">#{item.id}</td>
                        <td>
                          <span className="fw-semibold text-dark">{item.titulo}</span>
                          <div className="small text-muted text-truncate" style={{ maxWidth: '220px' }}>
                            <i className="bi bi-link-45deg me-1"></i>{item.urlConteudo}
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                            <i className="bi bi-collection me-1 text-primary"></i>
                            {(item as any).modulo?.titulo || `Módulo #${item.moduloId}`}
                          </span>
                        </td>
                        <td>
                          <span className={`badge border px-3 py-1 rounded-pill ${getBadgeClass(item.tipoConteudo)}`}>
                            {item.tipoConteudo}
                          </span>
                        </td>
                        <td className="text-muted small">
                          <i className="bi bi-clock me-1"></i>
                          {item.duracaoMinutos} min
                        </td>

                        {/* Botão de Marcar como Concluído para o Aluno */}
                        {!isAdmin && (
                          <td className="text-center">
                            <button
                              onClick={() => handleToggleConcluirAula(item)}
                              disabled={togglingId === item.id}
                              className={`btn btn-sm rounded-pill fw-bold px-3 py-1 shadow-sm transition-all ${
                                isCompleted
                                  ? 'btn-success text-white'
                                  : 'btn-outline-primary'
                              }`}
                            >
                              {togglingId === item.id ? (
                                <span><span className="spinner-border spinner-border-sm me-1"></span> Salvando...</span>
                              ) : isCompleted ? (
                                <span><i className="bi bi-check-circle-fill me-1"></i> Aula Concluída</span>
                              ) : (
                                <span><i className="bi bi-circle me-1"></i> Marcar como Concluída</span>
                              )}
                            </button>
                          </td>
                        )}

                        {isAdmin && (
                          <td className="text-end pe-4">
                            <button
                              className="btn btn-sm btn-light text-primary me-2 shadow-sm rounded-3"
                              onClick={() => onEdit(item)}
                              title="Editar aula"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-light text-danger shadow-sm rounded-3"
                              onClick={() => item.id && onDelete(item.id)}
                              title="Excluir aula"
                            >
                              <i className="bi bi-trash3-fill"></i>
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="d-flex justify-content-between align-items-center p-3 border-top">
                <small className="text-muted">
                  Página {page} de {totalPages}
                </small>
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    disabled={page === 1}
                  >
                    Anterior
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                  >
                    Próxima
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
