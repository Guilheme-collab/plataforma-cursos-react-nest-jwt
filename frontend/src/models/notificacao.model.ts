export interface Notificacao {
  id: number;
  usuarioId?: number | null;
  roleDestino?: string | null;
  titulo: string;
  mensagem: string;
  tipo: string;
  lida: boolean;
  dadosExtras?: string | null;
  dataCriacao: string;
}
