import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { CursoService } from '../../services/curso.service';
import { ModuloService } from '../../services/modulo.service';
import { AulaService } from '../../services/aula.service';
import { MatriculaService } from '../../services/matricula.service';
import { ProgressoService } from '../../services/progresso.service';
import { AvaliacaoService } from '../../services/avaliacao.service';
import { Curso, Modulo, Aula, Avaliacao } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './CursoDetalhesScreen.styles';

interface Props {
  route: any;
  navigation: any;
}

export const CursoDetalhesScreen: React.FC<Props> = ({ route, navigation }) => {
  const { cursoId } = route.params;
  const { user } = useAuth();

  const [curso, setCurso] = useState<Curso | null>(null);
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [matriculado, setMatriculado] = useState(false);
  const [matriculaId, setMatriculaId] = useState<number | null>(null);
  const [aulasConcluidasIds, setAulasConcluidasIds] = useState<number[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [notaAvaliacao, setNotaAvaliacao] = useState(5);
  const [comentarioAvaliacao, setComentarioAvaliacao] = useState('');
  const [enviandoAvaliacao, setEnviandoAvaliacao] = useState(false);
  const [processandoMatricula, setProcessandoMatricula] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const carregarDados = useCallback(async () => {
    try {
      setCarregando(true);
      const [cursoData, modulosData, aulasData, matriculasData, progressosData, avaliacoesData] =
        await Promise.all([
          CursoService.findOne(cursoId),
          ModuloService.findAll(),
          AulaService.findAll(),
          MatriculaService.findAll(),
          ProgressoService.findAll(),
          AvaliacaoService.findAll(),
        ]);

      setCurso(cursoData);

      const modulosDoCurso = modulosData
        .filter((m) => m.cursoId === cursoId)
        .sort((a, b) => a.ordem - b.ordem);
      setModulos(modulosDoCurso);

      const modulosIds = modulosDoCurso.map((m) => m.id);
      const aulasDoCurso = aulasData
        .filter((a) => modulosIds.includes(a.moduloId))
        .sort((a, b) => a.ordem - b.ordem);
      setAulas(aulasDoCurso);

      if (user?.id) {
        const minhaMatricula = matriculasData.find(
          (m) => m.usuarioId === user.id && m.cursoId === cursoId
        );
        if (minhaMatricula) {
          setMatriculado(true);
          setMatriculaId(minhaMatricula.id);
        } else {
          setMatriculado(false);
          setMatriculaId(null);
        }

        const concluidas = progressosData
          .filter((p) => p.usuarioId === user.id && p.status === 'Concluído')
          .map((p) => p.aulaId);
        setAulasConcluidasIds(concluidas);
      }

      const avaliacoesDoCurso = avaliacoesData.filter((av) => av.cursoId === cursoId);
      setAvaliacoes(avaliacoesDoCurso);
    } catch (error) {
      console.error('Erro ao carregar detalhes do curso:', error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes do curso.');
    } finally {
      setCarregando(false);
    }
  }, [cursoId, user?.id]);

  useEffect(() => {
    carregarDados();
  }, [carregarDados]);

  const handleMatricular = async () => {
    if (!user?.id) {
      Alert.alert('Acesso restrito', 'Você precisa estar logado para se matricular.');
      return;
    }

    try {
      setProcessandoMatricula(true);
      const hoje = new Date().toISOString().split('T')[0];
      const novaMatricula = await MatriculaService.create({
        usuarioId: user.id,
        cursoId,
        dataMatricula: hoje,
      });
      setMatriculado(true);
      setMatriculaId(novaMatricula.id);
      Alert.alert(
        'Parabéns!',
        'Sua matrícula foi realizada com sucesso! Você já pode iniciar as aulas.',
        [{ text: 'Iniciar Agora', onPress: handleIniciarEstudos }]
      );
    } catch (error: any) {
      console.error('Erro ao se matricular:', error);
      const msg = error.response?.data?.message || 'Erro ao realizar matrícula.';
      Alert.alert('Atenção', Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setProcessandoMatricula(false);
    }
  };

  const handleIniciarEstudos = () => {
    if (aulas.length === 0) {
      Alert.alert('Sem aulas', 'Este curso ainda não possui aulas cadastradas.');
      return;
    }
    const proximaAula = aulas.find((a) => !aulasConcluidasIds.includes(a.id)) || aulas[0];
    navigation.navigate('AulaPlayer', {
      aulaId: proximaAula.id,
      cursoId,
      tituloCurso: curso?.titulo,
    });
  };

  const handleEnviarAvaliacao = async () => {
    if (!user?.id) return;
    if (notaAvaliacao < 1 || notaAvaliacao > 5) {
      Alert.alert('Nota inválida', 'Escolha uma nota de 1 a 5 estrelas.');
      return;
    }

    try {
      setEnviandoAvaliacao(true);
      await AvaliacaoService.create({
        usuarioId: user.id,
        cursoId,
        nota: notaAvaliacao,
        comentario: comentarioAvaliacao.trim() || null,
      });

      Alert.alert('Obrigado!', 'Sua avaliação foi registrada com sucesso.');
      setComentarioAvaliacao('');
      carregarDados();
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Erro ao salvar avaliação.';
      Alert.alert('Erro', Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setEnviandoAvaliacao(false);
    }
  };

  if (carregando || !curso) {
    return (
      <View style={styles.carregandoContainer}>
        <ActivityIndicator size="large" color={cores.primaria} />
      </View>
    );
  }

  const aulasConcluidasNesteCurso = aulas.filter((a) =>
    aulasConcluidasIds.includes(a.id)
  ).length;
  const porcentagemProgresso =
    aulas.length > 0 ? Math.round((aulasConcluidasNesteCurso / aulas.length) * 100) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoBarra}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={22} color={cores.texto} />
        </TouchableOpacity>
        <Text style={styles.tituloBarra} numberOfLines={1}>
          {curso.titulo}
        </Text>
        <View style={styles.espacadorBarra} />
      </View>

      <ScrollView contentContainerStyle={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cardBanner}>
          <View style={styles.linhaBadges}>
            <View style={styles.badgeHero}>
              <Text style={styles.badgeHeroTexto}>{curso.categoria?.nome || 'Geral'}</Text>
            </View>
            <View style={styles.badgeHero}>
              <Text style={styles.badgeHeroTexto}>{curso.nivel}</Text>
            </View>
          </View>

          <Text style={styles.tituloCurso}>{curso.titulo}</Text>
          <Text style={styles.descricaoCurso}>{curso.descricao}</Text>

          {curso.instrutor && (
            <View style={styles.linhaInstrutor}>
              <Ionicons name="person-circle-outline" size={18} color={cores.branco} />
              <Text style={styles.instrutorTexto}>
                Instrutor: {curso.instrutor.nomeCompleto}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.cardAcao}>
          {matriculado ? (
            <>
              <View style={styles.progressoLinha}>
                <Text style={styles.progressoRotulo}>Seu Progresso no Curso</Text>
                <Text style={styles.progressoValor}>
                  {porcentagemProgresso}% ({aulasConcluidasNesteCurso}/{aulas.length} aulas)
                </Text>
              </View>

              <View style={styles.barraProgressoTrilho}>
                <View
                  style={[
                    styles.barraProgressoPreenchida,
                    { width: `${porcentagemProgresso}%` as any },
                  ]}
                />
              </View>

              <TouchableOpacity
                style={styles.botaoContinuar}
                onPress={handleIniciarEstudos}
                activeOpacity={0.85}
              >
                <Ionicons name="play" size={20} color={cores.branco} />
                <Text style={styles.botaoAcaoTexto}>
                  {aulasConcluidasNesteCurso > 0 ? 'Continuar Estudando' : 'Iniciar Curso'}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.botaoMatricular}
              onPress={handleMatricular}
              disabled={processandoMatricula}
              activeOpacity={0.85}
            >
              {processandoMatricula ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <>
                  <Ionicons name="checkmark-done-circle" size={22} color={cores.branco} />
                  <Text style={styles.botaoAcaoTexto}>Matricular-se Gratuitamente</Text>
                </>
              )}
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Conteúdo Programático</Text>

          {modulos.length === 0 ? (
            <Text style={styles.reviewComentario}>Nenhum módulo cadastrado ainda.</Text>
          ) : (
            modulos.map((modulo) => {
              const aulasDoModulo = aulas.filter((a) => a.moduloId === modulo.id);
              return (
                <View key={modulo.id} style={styles.cardModulo}>
                  <View style={styles.moduloCabecalho}>
                    <Text style={styles.moduloTitulo}>{modulo.titulo}</Text>
                    <Text style={styles.moduloBadgeAulas}>
                      {aulasDoModulo.length} {aulasDoModulo.length === 1 ? 'aula' : 'aulas'}
                    </Text>
                  </View>

                  <View style={styles.listaAulas}>
                    {aulasDoModulo.map((aula) => {
                      const concluida = aulasConcluidasIds.includes(aula.id);
                      return (
                        <TouchableOpacity
                          key={aula.id}
                          style={[styles.itemAula, concluida && styles.itemAulaConcluida]}
                          onPress={() => {
                            if (!matriculado) {
                              Alert.alert(
                                'Acesso Bloqueado',
                                'Matricule-se no curso para assistir a esta aula.'
                              );
                              return;
                            }
                            navigation.navigate('AulaPlayer', {
                              aulaId: aula.id,
                              cursoId,
                              tituloCurso: curso.titulo,
                            });
                          }}
                        >
                          <View
                            style={[
                              styles.iconeAulaStatus,
                              { backgroundColor: concluida ? '#dcfce7' : '#f1f5f9' },
                            ]}
                          >
                            <Ionicons
                              name={concluida ? 'checkmark-circle' : 'play-outline'}
                              size={18}
                              color={concluida ? cores.secundariaEscura : cores.primaria}
                            />
                          </View>

                          <View style={styles.infoAula}>
                            <Text style={styles.aulaTitulo}>{aula.titulo}</Text>
                            <Text style={styles.aulaDuracao}>
                              {aula.duracaoMinutos} min • {aula.tipoConteudo}
                            </Text>
                          </View>

                          <Ionicons
                            name={matriculado ? 'chevron-forward' : 'lock-closed-outline'}
                            size={18}
                            color={cores.cinza}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })
          )}
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Avaliações dos Alunos</Text>

          {matriculado && (
            <View style={styles.cardAvaliacao}>
              <Text style={styles.aulaTitulo}>Deixe sua avaliação sobre o curso:</Text>
              <View style={styles.estrelasLinha}>
                {[1, 2, 3, 4, 5].map((estrela) => (
                  <TouchableOpacity key={estrela} onPress={() => setNotaAvaliacao(estrela)}>
                    <Ionicons
                      name={estrela <= notaAvaliacao ? 'star' : 'star-outline'}
                      size={28}
                      color={cores.estrela}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                style={styles.inputComentario}
                placeholder="Conte o que achou das aulas e do instrutor..."
                placeholderTextColor={cores.cinza}
                multiline
                value={comentarioAvaliacao}
                onChangeText={setComentarioAvaliacao}
              />

              <TouchableOpacity
                style={styles.botaoEnviarAvaliacao}
                onPress={handleEnviarAvaliacao}
                disabled={enviandoAvaliacao}
                activeOpacity={0.8}
              >
                {enviandoAvaliacao ? (
                  <ActivityIndicator color={cores.branco} />
                ) : (
                  <Text style={styles.botaoAcaoTexto}>Publicar Avaliação</Text>
                )}
              </TouchableOpacity>
            </View>
          )}

          {avaliacoes.length === 0 ? (
            <Text style={styles.reviewComentario}>
              Este curso ainda não recebeu avaliações. Seja o primeiro a avaliar!
            </Text>
          ) : (
            avaliacoes.map((av) => (
              <View key={av.id} style={styles.itemReview}>
                <View style={styles.reviewCabecalho}>
                  <Text style={styles.reviewNome}>
                    {av.usuario?.nomeCompleto || 'Aluno'}
                  </Text>
                  <View style={styles.estrelasLinha}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Ionicons
                        key={s}
                        name={s <= av.nota ? 'star' : 'star-outline'}
                        size={14}
                        color={cores.estrela}
                      />
                    ))}
                  </View>
                </View>
                {av.comentario && (
                  <Text style={styles.reviewComentario}>{av.comentario}</Text>
                )}
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};
