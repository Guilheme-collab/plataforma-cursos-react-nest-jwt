import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { useOrientation } from '../../hooks/useOrientation';
import { AulaService } from '../../services/aula.service';
import { ModuloService } from '../../services/modulo.service';
import { ProgressoService } from '../../services/progresso.service';
import { CertificadoService } from '../../services/certificado.service';
import { Aula, Modulo, ProgressoAula } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './AulaPlayerScreen.styles';

interface Props {
  route: any;
  navigation: any;
}

export const AulaPlayerScreen: React.FC<Props> = ({ route, navigation }) => {
  const { aulaId, cursoId, tituloCurso } = route.params;
  const { user } = useAuth();
  const { isLandscape } = useOrientation();

  const [aulaAtual, setAulaAtual] = useState<Aula | null>(null);
  const [moduloAtual, setModuloAtual] = useState<Modulo | null>(null);
  const [todasAulasDoCurso, setTodasAulasDoCurso] = useState<Aula[]>([]);
  const [progressoExistente, setProgressoExistente] = useState<ProgressoAula | null>(null);
  const [reproduzindo, setReproduzindo] = useState(true);
  const [salvandoProgresso, setSalvandoProgresso] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [cursoCompleto, setCursoCompleto] = useState(false);

  const carregarDadosAula = useCallback(
    async (idDaAula: number) => {
      try {
        setCarregando(true);
        const [aulaData, modulosData, aulasData, progressosData] = await Promise.all([
          AulaService.findOne(idDaAula),
          ModuloService.findAll(),
          AulaService.findAll(),
          ProgressoService.findAll(),
        ]);

        setAulaAtual(aulaData);

        const modulo = modulosData.find((m) => m.id === aulaData.moduloId) || null;
        setModuloAtual(modulo);

        const modulosDoCurso = modulosData.filter((m) => m.cursoId === cursoId);
        const modulosIds = modulosDoCurso.map((m) => m.id);
        const aulasOrdenadas = aulasData
          .filter((a) => modulosIds.includes(a.moduloId))
          .sort((a, b) => a.ordem - b.ordem);
        setTodasAulasDoCurso(aulasOrdenadas);

        if (user?.id) {
          const progresso = progressosData.find(
            (p) => p.usuarioId === user.id && p.aulaId === idDaAula
          );
          setProgressoExistente(progresso || null);

          // Verificar se todas as outras aulas do curso estão concluídas
          const concluidasSet = new Set(
            progressosData
              .filter((p) => p.usuarioId === user.id && p.status === 'Concluído')
              .map((p) => p.aulaId)
          );
          const estaAulaConcluida = progresso?.status === 'Concluído';
          const todasConcluidas =
            aulasOrdenadas.length > 0 &&
            aulasOrdenadas.every((a) => concluidasSet.has(a.id) || (a.id === idDaAula && estaAulaConcluida));
          setCursoCompleto(todasConcluidas && estaAulaConcluida);
        }
      } catch (error) {
        console.error('Erro ao carregar aula:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes da aula.');
      } finally {
        setCarregando(false);
      }
    },
    [cursoId, user?.id]
  );

  useEffect(() => {
    carregarDadosAula(aulaId);
  }, [aulaId, carregarDadosAula]);

  const handleToggleConcluir = async () => {
    if (!user?.id || !aulaAtual) return;

    try {
      setSalvandoProgresso(true);
      const isConcluida = progressoExistente?.status === 'Concluído';

      if (isConcluida && progressoExistente) {
        const atualizado = await ProgressoService.update(progressoExistente.id, {
          status: 'Em Andamento',
        });
        setProgressoExistente(atualizado);
        setCursoCompleto(false);
        Alert.alert('Status atualizado', 'A aula foi desmarcada e voltou para "Em Andamento".');
      } else {
        const novoProgresso = await ProgressoService.create({
          usuarioId: user.id,
          aulaId: aulaAtual.id,
          status: 'Concluído',
          dataConclusao: new Date().toISOString().split('T')[0],
        });
        setProgressoExistente(novoProgresso);
        Alert.alert('Parabéns!', 'Aula marcada como concluída! Seu progresso foi salvo.');

        // Verificar se agora todas as aulas do curso foram concluídas
        const progressosAtualizados = await ProgressoService.findAll();
        const concluidas = new Set(
          progressosAtualizados
            .filter((p) => p.usuarioId === user.id && p.status === 'Concluído')
            .map((p) => p.aulaId)
        );
        const todasFinalizadas = todasAulasDoCurso.every((a) => concluidas.has(a.id));
        if (todasFinalizadas) {
          setCursoCompleto(true);
        }
      }
    } catch (error: any) {
      console.error('Erro ao atualizar progresso:', error);
      Alert.alert('Erro', 'Não foi possível salvar o progresso da aula.');
    } finally {
      setSalvandoProgresso(false);
    }
  };

  const handleGerarCertificado = async () => {
    if (!user?.id) return;
    try {
      const codigo = `CERT-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
      await CertificadoService.create({
        usuarioId: user.id,
        cursoId,
        codigoVerificacao: codigo,
      });

      Alert.alert(
        '🎓 Certificado Emitido!',
        `Parabéns por concluir 100% do curso! Seu certificado com código ${codigo} já está disponível na aba Certificados.`,
        [
          {
            text: 'Ver Certificados',
            onPress: () => {
              try {
                navigation.navigate('Principal', { screen: 'Certificados' });
              } catch {
                navigation.navigate('Certificados');
              }
            },
          },
          { text: 'OK', style: 'cancel' },
        ]
      );
    } catch (error: any) {
      console.error('Erro ao emitir certificado:', error);
      Alert.alert('Erro', 'Não foi possível emitir o certificado no momento.');
    }
  };

  const indiceAtual = todasAulasDoCurso.findIndex((a) => a.id === aulaAtual?.id);
  const temAnterior = indiceAtual > 0;
  const temProxima = indiceAtual < todasAulasDoCurso.length - 1;

  const navegarParaAula = (novaAula: Aula) => {
    carregarDadosAula(novaAula.id);
  };

  if (carregando || !aulaAtual) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator size="large" color={cores.primaria} />
      </View>
    );
  }

  // Renderização em Modo Paisagem (Landscape) - Modo Cinema Tela Cheia
  if (isLandscape) {
    return (
      <View style={styles.containerLandscape}>
        <StatusBar hidden />
        <View style={styles.areaPlayerLandscape}>
          <TouchableOpacity
            style={styles.playerOverlay}
            activeOpacity={0.9}
            onPress={() => setReproduzindo(!reproduzindo)}
          >
            <View style={styles.botaoPlayCentral}>
              <Ionicons
                name={reproduzindo ? 'pause' : 'play'}
                size={34}
                color={cores.branco}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.indicadorLandscapeRotacao}>
            <Ionicons name="phone-portrait-outline" size={14} color={cores.branco} />
            <Text style={styles.indicadorLandscapeTexto}>
              Gire para voltar aos detalhes da aula
            </Text>
          </View>
        </View>
      </View>
    );
  }

  // Renderização em Modo Retrato (Portrait)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.cabecalhoBarra}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Principal', { screen: 'Início' });
            }
          }}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color={cores.texto} />
          <Text style={styles.botaoVoltarTexto}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tituloBarra} numberOfLines={1}>
          {tituloCurso || 'Assistindo Aula'}
        </Text>
        <View style={styles.espacadorBarra} />
      </View>

      <View style={styles.areaPlayerPortrait}>
        <TouchableOpacity
          style={styles.playerOverlay}
          activeOpacity={0.9}
          onPress={() => setReproduzindo(!reproduzindo)}
        >
          <View style={styles.botaoPlayCentral}>
            <Ionicons
              name={reproduzindo ? 'pause' : 'play'}
              size={30}
              color={cores.branco}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.indicadorLandscapeRotacao}>
          <Ionicons name="phone-landscape-outline" size={14} color={cores.branco} />
          <Text style={styles.indicadorLandscapeTexto}>Gire para tela cheia</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cardInfoAula}>
          {moduloAtual && (
            <View style={styles.linhaModulo}>
              <Ionicons name="folder-open-outline" size={16} color={cores.primaria} />
              <Text style={styles.moduloTexto}>{moduloAtual.titulo}</Text>
            </View>
          )}

          <Text style={styles.tituloAula}>{aulaAtual.titulo}</Text>

          <View style={styles.linhaMetadados}>
            <View style={styles.badgeMeta}>
              <Ionicons name="time-outline" size={15} color={cores.textoSecundario} />
              <Text style={styles.badgeMetaTexto}>{aulaAtual.duracaoMinutos} minutos</Text>
            </View>
            <View style={styles.badgeMeta}>
              <Ionicons name="videocam-outline" size={15} color={cores.textoSecundario} />
              <Text style={styles.badgeMetaTexto}>{aulaAtual.tipoConteudo}</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardProgressoAcao}>
          {(() => {
            const isConcluida = progressoExistente?.status === 'Concluído';
            return (
              <TouchableOpacity
                style={[
                  styles.botaoConcluir,
                  isConcluida ? styles.botaoConcluidaAtiva : undefined,
                ]}
                onPress={handleToggleConcluir}
                disabled={salvandoProgresso}
                activeOpacity={0.85}
              >
                {salvandoProgresso ? (
                  <ActivityIndicator color={isConcluida ? cores.secundariaEscura : cores.branco} />
                ) : (
                  <>
                    <Ionicons
                      name={isConcluida ? 'checkmark-circle' : 'checkmark-circle-outline'}
                      size={22}
                      color={isConcluida ? cores.secundariaEscura : cores.branco}
                    />
                    <Text
                      style={
                        isConcluida
                          ? styles.botaoConcluidaTextoAtivo
                          : styles.botaoConcluirTexto
                      }
                    >
                      {isConcluida ? 'Aula Concluída ✓ (Toque p/ Desmarcar)' : 'Marcar como Concluída'}
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            );
          })()}

          <View style={styles.linhaNavegacao}>
            <TouchableOpacity
              style={[styles.botaoNavegar, !temAnterior && styles.botaoNavegarDesabilitado]}
              disabled={!temAnterior}
              onPress={() => navegarParaAula(todasAulasDoCurso[indiceAtual - 1])}
            >
              <Ionicons name="arrow-back" size={16} color={cores.texto} />
              <Text style={styles.botaoNavegarTexto}>Aula Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botaoNavegar, !temProxima && styles.botaoNavegarDesabilitado]}
              disabled={!temProxima}
              onPress={() => navegarParaAula(todasAulasDoCurso[indiceAtual + 1])}
            >
              <Text style={styles.botaoNavegarTexto}>Próxima Aula</Text>
              <Ionicons name="arrow-forward" size={16} color={cores.texto} />
            </TouchableOpacity>
          </View>
        </View>

        {cursoCompleto && (
          <View style={styles.cardCertificadoLiberado}>
            <Ionicons name="ribbon" size={36} color={cores.aviso} />
            <Text style={styles.certificadoLiberadoTitulo}>Parabéns! Todas as aulas concluídas!</Text>
            <Text style={styles.certificadoLiberadoTexto}>
              Você finalizou 100% deste curso. Já pode emitir seu certificado de conclusão oficial.
            </Text>
            <TouchableOpacity
              style={styles.botaoGerarCertificado}
              onPress={handleGerarCertificado}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoGerarCertificadoTexto}>Gerar Certificado Agora</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
