import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { MatriculaService } from '../../services/matricula.service';
import { CursoService } from '../../services/curso.service';
import { ModuloService } from '../../services/modulo.service';
import { AulaService } from '../../services/aula.service';
import { ProgressoService } from '../../services/progresso.service';
import { Matricula, Curso, Modulo, Aula } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './ProgressoScreen.styles';

interface Props {
  navigation: any;
}

interface ItemCursoProgresso {
  matricula: Matricula;
  curso: Curso;
  modulos: Modulo[];
  aulas: Aula[];
  totalAulas: number;
  aulasConcluidasCount: number;
  porcentagem: number;
  concluidasIds: number[];
}

export const ProgressoScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [listaCursos, setListaCursos] = useState<ItemCursoProgresso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);

  const carregarDados = useCallback(async (silencioso = false) => {
    if (!user?.id) return;
    if (!silencioso && listaCursos.length === 0) setCarregando(true);
    try {
      const [matriculasData, cursosData, modulosData, aulasData, progressosData] =
        await Promise.all([
          MatriculaService.findAll(),
          CursoService.findAll(),
          ModuloService.findAll(),
          AulaService.findAll(),
          ProgressoService.findAll(),
        ]);

      const minhas = matriculasData.filter((m) => m.usuarioId === user.id);
      const concluidasIds = progressosData
        .filter((p) => p.usuarioId === user.id && p.status === 'Concluído')
        .map((p) => p.aulaId);

      const concluidasSet = new Set(concluidasIds);
      const formatados: ItemCursoProgresso[] = [];

      for (const mat of minhas) {
        const curso = cursosData.find((c) => c.id === mat.cursoId);
        if (!curso) continue;

        const modulosDoCurso = modulosData
          .filter((m) => m.cursoId === curso.id)
          .sort((a, b) => a.ordem - b.ordem);
        const modulosIds = modulosDoCurso.map((m) => m.id);
        const aulasDoCurso = aulasData
          .filter((a) => modulosIds.includes(a.moduloId))
          .sort((a, b) => a.ordem - b.ordem);

        const totalAulas = aulasDoCurso.length;
        const concluidasCount = aulasDoCurso.filter((a) => concluidasSet.has(a.id)).length;
        const porcentagem = totalAulas > 0 ? Math.round((concluidasCount / totalAulas) * 100) : 0;

        formatados.push({
          matricula: mat,
          curso,
          modulos: modulosDoCurso,
          aulas: aulasDoCurso,
          totalAulas,
          aulasConcluidasCount: concluidasCount,
          porcentagem,
          concluidasIds,
        });
      }

      setListaCursos(formatados);
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar progresso:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user?.id, listaCursos.length]);

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [carregarDados])
  );

  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      carregarDados(true);
    }, 3000);
    return () => clearInterval(interval);
  }, [user, carregarDados]);

  const onRefresh = () => {
    setAtualizando(true);
    carregarDados();
  };

  const totalAulasGeral = listaCursos.reduce((acc, c) => acc + c.totalAulas, 0);
  const totalConcluidasGeral = listaCursos.reduce((acc, c) => acc + c.aulasConcluidasCount, 0);
  const progressoGeral =
    totalAulasGeral > 0 ? Math.round((totalConcluidasGeral / totalAulasGeral) * 100) : 0;

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
        </TouchableOpacity>
        <Text style={styles.titulo}>Meu Progresso</Text>
        <View style={styles.espacadorCabecalho} />
      </View>

      <ScrollView
        contentContainerStyle={styles.conteudoScroll}
        refreshControl={
          <RefreshControl
            refreshing={atualizando}
            onRefresh={onRefresh}
            colors={[cores.primaria]}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Card Resumo Geral */}
        <View style={styles.cardResumo}>
          <Text style={styles.resumoTitulo}>Desempenho Geral de Estudos</Text>
          <View style={styles.resumoLinha}>
            <View style={styles.resumoItem}>
              <Text style={styles.resumoNumero}>{progressoGeral}%</Text>
              <Text style={styles.resumoRotulo}>Geral Concluído</Text>
            </View>
            <View style={styles.resumoDivisor} />
            <View style={styles.resumoItem}>
              <Text style={styles.resumoNumero}>{totalConcluidasGeral}/{totalAulasGeral}</Text>
              <Text style={styles.resumoRotulo}>Aulas Assistidas</Text>
            </View>
            <View style={styles.resumoDivisor} />
            <View style={styles.resumoItem}>
              <Text style={styles.resumoNumero}>{listaCursos.filter((c) => c.porcentagem === 100).length}</Text>
              <Text style={styles.resumoRotulo}>Cursos Concluídos</Text>
            </View>
          </View>

          <View style={styles.trilhoProgresso}>
            <View style={[styles.barraProgresso, { width: `${progressoGeral}%` as any }]} />
          </View>
        </View>

        {/* Lista de Cursos e Progresso Detalhado */}
        <Text style={styles.secaoTitulo}>Cursos em Andamento</Text>

        {listaCursos.length === 0 ? (
          <View style={styles.cardVazio}>
            <Ionicons name="school-outline" size={42} color={cores.cinza} />
            <Text style={styles.vazioTitulo}>Nenhum Curso Matriculado</Text>
            <Text style={styles.vazioDescricao}>
              Você ainda não iniciou nenhum curso. Assine um plano para começar a estudar e registrar seu progresso!
            </Text>
            <TouchableOpacity
              style={styles.botaoExplorar}
              onPress={() => {
                navigation.navigate('Principal', { screen: 'Início' });
              }}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoExplorarTexto}>Explorar Catálogo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          listaCursos.map((item) => (
            <View key={item.curso.id} style={styles.cardCursoProgresso}>
              <View style={styles.cardCursoTopo}>
                <View style={styles.badgeCategoria}>
                  <Text style={styles.badgeCategoriaTexto}>{item.curso.categoria?.nome || 'Tecnologia'}</Text>
                </View>
                <Text style={styles.porcentagemTexto}>{item.porcentagem}%</Text>
              </View>

              <Text style={styles.cursoTitulo}>{item.curso.titulo}</Text>

              <View style={styles.trilhoProgressoCurso}>
                <View
                  style={[
                    styles.barraProgressoCurso,
                    {
                      width: `${item.porcentagem}%` as any,
                      backgroundColor: item.porcentagem === 100 ? '#10B981' : cores.primaria,
                    },
                  ]}
                />
              </View>

              <View style={styles.cursoMetricasLinha}>
                <Text style={styles.metricasTexto}>
                  {item.aulasConcluidasCount} de {item.totalAulas} aulas concluídas
                </Text>
                {item.porcentagem === 100 && (
                  <View style={styles.badgeConcluido}>
                    <Ionicons name="ribbon" size={14} color="#D97706" />
                    <Text style={styles.badgeConcluidoTexto}>Concluído</Text>
                  </View>
                )}
              </View>

              <TouchableOpacity
                style={[styles.botaoAcessar, item.porcentagem === 100 && styles.botaoAcessarConcluido]}
                onPress={() => {
                  const proxima =
                    item.aulas.find((a) => !item.concluidasIds.includes(a.id)) || item.aulas[0];
                  if (proxima) {
                    navigation.navigate('AulaPlayer', {
                      aulaId: proxima.id,
                      cursoId: item.curso.id,
                      tituloCurso: item.curso.titulo,
                    });
                  } else {
                    navigation.navigate('CursoDetalhes', { cursoId: item.curso.id });
                  }
                }}
                activeOpacity={0.85}
              >
                <Ionicons
                  name={item.porcentagem === 100 ? 'ribbon-outline' : 'play-circle-outline'}
                  size={18}
                  color={cores.branco}
                />
                <Text style={styles.botaoAcessarTexto}>
                  {item.porcentagem === 100 ? 'Rever Aulas do Curso' : 'Continuar de Onde Parou'}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
