export interface Usuario {
  id: number;
  nomeCompleto: string;
  email: string;
  role: 'ADMIN' | 'INSTRUTOR' | 'USER';
  ativo: boolean;
  dataCadastro?: string;
}

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

export interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  instrutorId: number;
  categoriaId: number;
  nivel: string;
  dataPublicacao?: string;
  totalAulas: number;
  totalHoras: number;
  instrutor?: Usuario;
  categoria?: Categoria;
  modulos?: Modulo[];
}

export interface Modulo {
  id: number;
  cursoId: number;
  titulo: string;
  ordem: number;
  curso?: Curso;
  aulas?: Aula[];
}

export interface Aula {
  id: number;
  moduloId: number;
  titulo: string;
  tipoConteudo: string;
  urlConteudo: string;
  duracaoMinutos: number;
  ordem: number;
  modulo?: Modulo;
}

export interface Matricula {
  id: number;
  usuarioId: number;
  cursoId: number;
  dataMatricula: string;
  dataConclusao?: string | null;
  usuario?: Usuario;
  curso?: Curso;
}

export interface ProgressoAula {
  id: number;
  usuarioId: number;
  aulaId: number;
  dataConclusao: string;
  status: string;
  usuario?: Usuario;
  aula?: Aula;
}

export interface Avaliacao {
  id: number;
  usuarioId: number;
  cursoId: number;
  nota: number;
  comentario?: string | null;
  dataAvaliacao?: string;
  usuario?: Usuario;
  curso?: Curso;
}

export interface Certificado {
  id: number;
  usuarioId: number;
  cursoId: number;
  trilhaId?: number | null;
  codigoVerificacao: string;
  dataEmissao: string;
  usuario?: Usuario;
  curso?: Curso;
}

export interface Plano {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracaoMeses: number;
  planosCursos?: { cursoId: number; curso?: Curso }[];
  cursosIds?: number[];
}

export interface Assinatura {
  id: number;
  usuarioId: number;
  planoId: number;
  dataInicio: string;
  dataFim: string;
  usuario?: Usuario;
  plano?: Plano;
}

export interface Pagamento {
  id: number;
  assinaturaId: number;
  valorPago: number;
  dataPagamento: string;
  metodoPagamento: string;
  idTransacaoGateway: string;
}
