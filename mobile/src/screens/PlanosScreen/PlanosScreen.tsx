import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { PlanoService } from '../../services/plano.service';
import { CursoService } from '../../services/curso.service';
import { AssinaturaService } from '../../services/assinatura.service';
import { PagamentoService } from '../../services/pagamento.service';
import { MatriculaService } from '../../services/matricula.service';
import { Plano, Curso } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './PlanosScreen.styles';

interface Props {
  navigation: any;
}

export const PlanosScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [planoSelecionado, setPlanoSelecionado] = useState<Plano | null>(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [metodoPagamento, setMetodoPagamento] = useState<'PIX' | 'Cartão' | 'Boleto'>('PIX');
  const [cartaoNumero, setCartaoNumero] = useState('4532 8912 3456 7890');
  const [cartaoNome, setCartaoNome] = useState(user?.nomeCompleto?.toUpperCase() || 'ALUNO TITULAR');
  const [cartaoValidade, setCartaoValidade] = useState('12/28');
  const [cartaoCvv, setCartaoCvv] = useState('888');
  const [processandoPagamento, setProcessandoPagamento] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const carregarDados = useCallback(async () => {
    try {
      const [planosData, cursosData] = await Promise.all([
        PlanoService.findAll(),
        CursoService.findAll(),
      ]);
      setPlanos(planosData);
      setCursos(cursosData);
    } catch (error) {
      console.error('Erro ao carregar planos:', error);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarDados();
  }, [carregarDados]);

  const abrirCheckout = (plano: Plano) => {
    setPlanoSelecionado(plano);
    setModalVisivel(true);
  };

  const fecharCheckout = () => {
    if (processandoPagamento) return;
    setModalVisivel(false);
    setPlanoSelecionado(null);
  };

  const handleFinalizarPagamento = async () => {
    if (!user?.id || !planoSelecionado) {
      Alert.alert('Erro', 'Sessão inválida. Faça login novamente.');
      return;
    }

    try {
      setProcessandoPagamento(true);
      const hoje = new Date();
      const dataInicio = hoje.toISOString().split('T')[0];

      const dataFimObj = new Date(hoje);
      dataFimObj.setMonth(dataFimObj.getMonth() + (planoSelecionado.duracaoMeses || 1));
      const dataFim = dataFimObj.toISOString().split('T')[0];

      // 1. Criar Assinatura no banco
      const novaAssinatura = await AssinaturaService.create({
        usuarioId: user.id,
        planoId: planoSelecionado.id,
        dataInicio,
        dataFim,
      });

      // 2. Criar Pagamento
      if (novaAssinatura?.id) {
        await PagamentoService.create({
          assinaturaId: novaAssinatura.id,
          valorPago: planoSelecionado.preco,
          metodoPagamento,
          dataPagamento: dataInicio,
          idTransacaoGateway: `MOB_PAY_${metodoPagamento}_${Date.now()}`,
        });
      }

      // 3. Matricular o aluno nos cursos vinculados ao plano
      const cursosDoPlano = obterCursosDoPlano(planoSelecionado);
      for (const curso of cursosDoPlano) {
        try {
          await MatriculaService.create({
            usuarioId: user.id,
            cursoId: curso.id,
            dataMatricula: dataInicio,
          });
        } catch {
          // Já matriculado
        }
      }

      fecharCheckout();
      Alert.alert(
        '🎉 Pagamento Aprovado!',
        `Sua assinatura do plano "${planoSelecionado.nome}" está ativa! Os cursos foram liberados para você.`,
        [{ text: 'Ver Meus Cursos', onPress: () => navigation.navigate('Matrículas') }]
      );
    } catch (error: any) {
      console.error('Erro no checkout mobile:', error);
      const msg = error.response?.data?.message || 'Erro ao processar assinatura.';
      Alert.alert('Erro', Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setProcessandoPagamento(false);
    }
  };

  const obterCursosDoPlano = (plano: Plano): Curso[] => {
    if (plano.planosCursos && plano.planosCursos.length > 0) {
      const ids = plano.planosCursos.map((pc) => pc.cursoId);
      return cursos.filter((c) => ids.includes(c.id));
    }
    if (plano.cursosIds && plano.cursosIds.length > 0) {
      return cursos.filter((c) => plano.cursosIds?.includes(c.id));
    }
    return [];
  };

  const formatarMoeda = (val: number) =>
    `R$ ${val.toFixed(2).replace('.', ',')}`;

  const pixSimulado = `00020126580014br.gov.bcb.pix0136${Math.random().toString(36).substring(2, 15)}5204000053039865802BR5920PLATAFORMA EAD6009SAO PAULO62070503***6304`;

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color={cores.primaria} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Planos de Acesso</Text>
        <Text style={styles.subtitulo}>Escolha o plano ideal e turbine seu conhecimento</Text>
      </View>

      <ScrollView contentContainerStyle={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        {planos.map((plano) => {
          const cursosInclusos = obterCursosDoPlano(plano);
          return (
            <View key={plano.id} style={styles.cardPlano}>
              <View style={styles.planoTopo}>
                <Text style={styles.planoNome}>{plano.nome}</Text>
                <View style={styles.badgeDuracao}>
                  <Text style={styles.badgeDuracaoTexto}>
                    {plano.duracaoMeses} {plano.duracaoMeses === 1 ? 'mês' : 'meses'}
                  </Text>
                </View>
              </View>

              <Text style={styles.planoDescricao}>{plano.descricao}</Text>

              <View style={styles.caixaPreco}>
                <Text style={styles.precoRotulo}>Valor total da assinatura</Text>
                <Text style={styles.precoValor}>{formatarMoeda(plano.preco)}</Text>
              </View>

              <View style={styles.secaoCursosInclusos}>
                <Text style={styles.tituloCursosInclusos}>Cursos inclusos neste plano:</Text>
                {cursosInclusos.length === 0 ? (
                  <Text style={styles.planoDescricao}>
                    Acesso a cursos selecionados pelo instrutor.
                  </Text>
                ) : (
                  cursosInclusos.map((c) => (
                    <View key={c.id} style={styles.itemCursoIncluso}>
                      <Ionicons name="checkmark-circle" size={16} color={cores.secundariaEscura} />
                      <Text style={styles.itemCursoTexto} numberOfLines={1}>
                        {c.titulo}
                      </Text>
                    </View>
                  ))
                )}
              </View>

              <TouchableOpacity
                style={styles.botaoAssinar}
                onPress={() => abrirCheckout(plano)}
                activeOpacity={0.85}
              >
                <Text style={styles.botaoAssinarTexto}>Assinar Plano</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Modal de Checkout */}
      <Modal visible={modalVisivel} animationType="slide" transparent onRequestClose={fecharCheckout}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalCabecalho}>
              <Text style={styles.modalTitulo}>Checkout: {planoSelecionado?.nome}</Text>
              <TouchableOpacity
                style={styles.botaoFecharModal}
                onPress={fecharCheckout}
                disabled={processandoPagamento}
              >
                <Ionicons name="close" size={24} color={cores.texto} />
              </TouchableOpacity>
            </View>

            <View style={styles.linhaMetodos}>
              {(['PIX', 'Cartão', 'Boleto'] as const).map((m) => {
                const ativo = metodoPagamento === m;
                return (
                  <TouchableOpacity
                    key={m}
                    style={[styles.abaMetodo, ativo && styles.abaMetodoAtiva]}
                    onPress={() => setMetodoPagamento(m)}
                  >
                    <Ionicons
                      name={
                        m === 'PIX'
                          ? 'qr-code-outline'
                          : m === 'Cartão'
                          ? 'card-outline'
                          : 'barcode-outline'
                      }
                      size={20}
                      color={ativo ? cores.primaria : cores.textoSecundario}
                    />
                    <Text style={[styles.abaMetodoTexto, ativo && styles.abaMetodoTextoAtivo]}>
                      {m}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {metodoPagamento === 'PIX' && (
              <View style={styles.caixaPix}>
                <Ionicons name="qr-code" size={48} color={cores.secundariaEscura} />
                <Text style={styles.pixInstrucao}>
                  Copie o código PIX abaixo para pagar no app do seu banco. A liberação é imediata!
                </Text>
                <Text style={styles.codigoPixTexto} numberOfLines={1}>
                  {pixSimulado}
                </Text>
                <TouchableOpacity
                  style={styles.botaoCopiarPix}
                  onPress={() => Alert.alert('Copiado!', 'Código PIX copiado.')}
                >
                  <Ionicons name="copy-outline" size={16} color={cores.branco} />
                  <Text style={styles.botaoCopiarPixTexto}>Copiar Código PIX</Text>
                </TouchableOpacity>
              </View>
            )}

            {metodoPagamento === 'Cartão' && (
              <View style={styles.formularioCartao}>
                <TextInput
                  style={styles.inputCartao}
                  placeholder="Número do Cartão"
                  placeholderTextColor={cores.cinza}
                  value={cartaoNumero}
                  onChangeText={setCartaoNumero}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputCartao}
                  placeholder="Nome no Cartão"
                  placeholderTextColor={cores.cinza}
                  value={cartaoNome}
                  onChangeText={setCartaoNome}
                />
                <View style={styles.linhaCartaoDupla}>
                  <TextInput
                    style={[styles.inputCartao, styles.inputCartaoMetade]}
                    placeholder="Validade (MM/AA)"
                    placeholderTextColor={cores.cinza}
                    value={cartaoValidade}
                    onChangeText={setCartaoValidade}
                  />
                  <TextInput
                    style={[styles.inputCartao, styles.inputCartaoMetade]}
                    placeholder="CVV"
                    placeholderTextColor={cores.cinza}
                    value={cartaoCvv}
                    onChangeText={setCartaoCvv}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                </View>
              </View>
            )}

            {metodoPagamento === 'Boleto' && (
              <View style={styles.caixaPix}>
                <Ionicons name="barcode" size={44} color={cores.texto} />
                <Text style={styles.pixInstrucao}>
                  Boleto bancário gerado com vencimento para 3 dias úteis.
                </Text>
                <Text style={styles.codigoPixTexto}>
                  34191.79001 01043.510047 91020.150008 8 91230000050000
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.botaoConfirmarPagamento}
              onPress={handleFinalizarPagamento}
              disabled={processandoPagamento}
              activeOpacity={0.85}
            >
              {processandoPagamento ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <Text style={styles.botaoConfirmarPagamentoTexto}>
                  Confirmar Pagamento ({formatarMoeda(planoSelecionado?.preco || 0)})
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
