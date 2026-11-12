import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { CertificadoForm } from './CertificadoForm';
import { CertificadoTable } from './CertificadoTable';
import { CertificadoService } from '../../services/certificado.service';
import { CursoService } from '../../services/curso.service';
import { ModuloService } from '../../services/modulo.service';
import { AulaService } from '../../services/aula.service';
import { ProgressoService } from '../../services/progresso.service';
import { Certificado } from '../../models/certificado.model';
import { Curso } from '../../models/curso.model';
import { toast } from 'react-toastify';

interface CursoProgressoInfo {
  curso: Curso;
  totalAulas: number;
  aulasConcluidas: number;
  porcentagem: number;
  temCertificado: boolean;
}

export const CertificadosPages = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const [lista, setLista] = useState<Certificado[]>([]);
  const [cursosProgresso, setCursosProgresso] = useState<CursoProgressoInfo[]>([]);
  const [item, setItem] = useState<Partial<Certificado>>({});
  const [loading, setLoading] = useState(true);
  const [issuingCourseId, setIssuingCourseId] = useState<number | null>(null);

  const loadData = async (silencioso = false) => {
    try {
      if (!silencioso) setLoading(true);
      const dataCertificados = await CertificadoService.findAll();
      const userCertificates = isAdmin ? dataCertificados : dataCertificados.filter((c: any) => c.usuarioId === user?.id);
      setLista(userCertificates);

      if (!isAdmin && user?.id) {
        // Carregar cursos, módulos, aulas e progresso para o Aluno
        const [cursos, modulos, aulas, progressos] = await Promise.all([
          CursoService.findAll().catch(() => []),
          ModuloService.findAll().catch(() => []),
          AulaService.findAll().catch(() => []),
          ProgressoService.findAll().catch(() => []),
        ]);

        const userProgressos = progressos.filter((p: any) => p.usuarioId === user.id && p.status === 'Concluído');
        const userProgressAulaIds = new Set(userProgressos.map((p: any) => p.aulaId));
        const userCertificateCursoIds = new Set(userCertificates.map((c: any) => c.cursoId));

        const infoList: CursoProgressoInfo[] = cursos.map(curso => {
          const modulosCurso = modulos.filter((m: any) => m.cursoId === curso.id);
          const moduloIds = new Set(modulosCurso.map((m: any) => m.id));
          const aulasCurso = aulas.filter((a: any) => moduloIds.has(a.moduloId));
          const totalAulas = aulasCurso.length;

          const aulasConcluidas = aulasCurso.filter((a: any) => userProgressAulaIds.has(a.id)).length;
          const porcentagem = totalAulas > 0 ? Math.round((aulasConcluidas / totalAulas) * 100) : 0;
          const temCertificado = userCertificateCursoIds.has(curso.id);

          return {
            curso,
            totalAulas,
            aulasConcluidas,
            porcentagem,
            temCertificado,
          };
        });

        setCursosProgresso(infoList);
      }
    } catch (error: any) {
      console.error(error);
      if (!silencioso) toast.error('Erro ao carregar certificados do servidor!');
    } finally {
      if (!silencioso) setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleSync = () => loadData(true);
    window.addEventListener('plataforma:dados-atualizados', handleSync);

    const interval = setInterval(() => {
      loadData(true);
    }, 3500);

    return () => {
      window.removeEventListener('plataforma:dados-atualizados', handleSync);
      clearInterval(interval);
    };
  }, [user, isAdmin]);

  const handleSolicitarCertificado = async (info: CursoProgressoInfo) => {
    if (!user?.id || !info.curso.id) return;
    try {
      setIssuingCourseId(info.curso.id);
      await CertificadoService.create({
        usuarioId: user.id,
        cursoId: info.curso.id,
        codigoVerificacao: `CERT-${Date.now()}-${user.id}-${info.curso.id}`,
        dataEmissao: new Date().toISOString().split('T')[0],
      } as any);

      toast.success(`🎉 Certificado do curso "${info.curso.titulo}" emitido com sucesso!`);
      loadData();
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message;
      toast.error(Array.isArray(msg) ? msg[0] : msg || 'Erro ao solicitar certificado.');
    } finally {
      setIssuingCourseId(null);
    }
  };

  const handleSave = async (data: Certificado) => {
    try {
      if (data.id) {
        await CertificadoService.update(data.id, data);
        toast.success('Certificado atualizado com sucesso!');
      } else {
        await CertificadoService.create(data);
        toast.success('Certificado emitido com sucesso!');
      }
      setItem({});
      loadData();
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        const msg = error.response.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg);
      } else {
        toast.error('Erro ao salvar os dados do certificado.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este certificado?')) {
      try {
        await CertificadoService.delete(id);
        toast.success('Certificado excluído com sucesso!');
        loadData();
      } catch (error: any) {
        console.error(error);
        if (error.response && error.response.data && error.response.data.message) {
          const msg = error.response.data.message;
          toast.error(Array.isArray(msg) ? msg[0] : msg);
        } else {
          toast.error('Erro ao excluir certificado.');
        }
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: '#2b3674' }}>
            {isAdmin ? 'Gestão de Certificados' : 'Meus Certificados'}
          </h3>
          <p className="text-muted mb-0">
            {isAdmin ? 'Emita e gerencie certificados de conclusão' : 'Acompanhe seu progresso e solicite seus certificados ao concluir 100% das aulas'}
          </p>
        </div>
      </div>

      {/* Para o Aluno: Painel de Progresso dos Cursos e Emissão Condicionada */}
      {!isAdmin && (
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
          <h5 className="fw-bold text-dark mb-3">
            <i className="bi bi-mortarboard me-2 text-primary"></i>
            Progresso de Conclusão e Emissão de Certificados
          </h5>

          {loading ? (
            <div className="text-center p-4"><div className="spinner-border text-primary"></div></div>
          ) : cursosProgresso.length === 0 ? (
            <div className="text-muted small p-3">Nenhum curso disponível.</div>
          ) : (
            <div className="row g-3">
              {cursosProgresso.map(info => (
                <div key={info.curso.id} className="col-md-6 col-lg-4">
                  <div className="card border rounded-4 p-3 h-100 bg-light d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="badge bg-primary-subtle text-primary border rounded-pill">
                          {info.curso.nivel}
                        </span>
                        <span className={`fw-bold small ${info.porcentagem === 100 ? 'text-success' : 'text-warning'}`}>
                          {info.porcentagem}% Concluído
                        </span>
                      </div>

                      <h6 className="fw-bold text-dark mb-2">{info.curso.titulo}</h6>
                      
                      {/* Barra de Progresso */}
                      <div className="progress mb-2" style={{ height: '8px' }}>
                        <div
                          className={`progress-bar ${info.porcentagem === 100 ? 'bg-success' : 'bg-primary'}`}
                          role="progressbar"
                          style={{ width: `${info.porcentagem}%` }}
                        ></div>
                      </div>

                      <div className="text-muted style-small mb-3" style={{ fontSize: '12px' }}>
                        {info.aulasConcluidas} de {info.totalAulas} aulas concluídas
                      </div>
                    </div>

                    <div>
                      {info.temCertificado ? (
                        <button className="btn btn-outline-success btn-sm w-100 rounded-pill fw-bold" disabled>
                          <i className="bi bi-patch-check-fill me-1"></i> Certificado Emitido
                        </button>
                      ) : info.porcentagem === 100 ? (
                        <button
                          onClick={() => handleSolicitarCertificado(info)}
                          disabled={issuingCourseId === info.curso.id}
                          className="btn btn-success btn-sm w-100 rounded-pill fw-bold shadow-sm"
                        >
                          {issuingCourseId === info.curso.id ? (
                            <span><span className="spinner-border spinner-border-sm me-1"></span> Gerando...</span>
                          ) : (
                            <span><i className="bi bi-award-fill me-1"></i> Emitir Meu Certificado</span>
                          )}
                        </button>
                      ) : (
                        <button
                          className="btn btn-secondary btn-sm w-100 rounded-pill fw-bold"
                          disabled
                          title="Conclua 100% das aulas para liberar"
                        >
                          <i className="bi bi-lock-fill me-1"></i> Requer 100% de Aulas
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="row">
        {isAdmin && (
          <div className="col-lg-4 mb-4 mb-lg-0">
            <CertificadoForm 
              item={item} 
              onSave={handleSave} 
              onCancel={() => setItem({})} 
            />
          </div>
        )}
        <div className={isAdmin ? 'col-lg-8' : 'col-lg-12'}>
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-primary">
                <i className="bi bi-award me-2"></i> Certificados Emitidos
              </h5>
              <span className="badge bg-primary rounded-pill px-3 py-2">
                {lista.length} {lista.length === 1 ? 'certificado' : 'certificados'}
              </span>
            </div>
            <div className="card-body p-0 mt-3">
              {loading ? (
                <div className="text-center p-5 text-muted">
                  <div className="spinner-border text-primary mb-3" role="status"></div>
                  <p className="mb-0">Carregando dados...</p>
                </div>
              ) : lista.length === 0 ? (
                <div className="text-center p-5 text-muted">
                  <i className="bi bi-inbox fs-1 mb-3 d-block text-secondary"></i>
                  <h5>Nenhum certificado emitido</h5>
                  <p className="mb-0">{isAdmin ? 'Emita o primeiro certificado utilizando o formulário ao lado.' : 'Conclua as aulas dos seus cursos para emitir seus certificados!'}</p>
                </div>
              ) : (
                <CertificadoTable 
                  lista={lista} 
                  onEdit={setItem} 
                  onDelete={handleDelete} 
                  isAdmin={isAdmin}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
