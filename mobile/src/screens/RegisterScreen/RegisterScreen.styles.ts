import { StyleSheet } from 'react-native';
import { cores, espacamento, bordas } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: espacamento.lg,
  },
  card: {
    backgroundColor: cores.fundoCard,
    borderRadius: bordas.lg,
    padding: espacamento.xl,
    shadowColor: cores.preto,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: espacamento.lg,
    gap: espacamento.xs,
  },
  iconeCabecalho: {
    width: 60,
    height: 60,
    borderRadius: bordas.lg,
    backgroundColor: cores.destaqueBadge,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: espacamento.xs,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: cores.textoSecundario,
    textAlign: 'center',
  },
  formulario: {
    gap: espacamento.md,
  },
  grupoInput: {
    gap: espacamento.xs,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: cores.texto,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: cores.cinzaClaro,
    borderRadius: bordas.md,
    backgroundColor: cores.branco,
    paddingHorizontal: espacamento.md,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: cores.texto,
    paddingHorizontal: espacamento.sm,
  },
  linhaSenhas: {
    flexDirection: 'row',
    gap: espacamento.sm,
  },
  colunaMetade: {
    flex: 1,
    gap: espacamento.xs,
  },
  botao: {
    height: 52,
    borderRadius: bordas.md,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: espacamento.sm,
    shadowColor: cores.primaria,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  botaoDesabilitado: {
    opacity: 0.7,
  },
  botaoTexto: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 16,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: espacamento.xl,
    gap: espacamento.xs,
  },
  rodapeTexto: {
    color: cores.textoSecundario,
    fontSize: 14,
  },
  link: {
    color: cores.primaria,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
