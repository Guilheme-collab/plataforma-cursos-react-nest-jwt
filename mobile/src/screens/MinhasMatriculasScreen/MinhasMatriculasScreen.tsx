import React, { useState, useCallback } from 'react';
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
import { Matricula, Curso, Aula } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './MinhasMatriculasScreen.styles';

interface Props {
  navigation: any;
}

interface ItemMatriculaComProgresso {
  matricula: Matricula;
  curso: Curso;
  totalAulas: number;
  aulasConcluidas: number;
  porcentagem: number;
}

export const MinhasMatriculasScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [lista, setLista] = useState<ItemMatriculaComProgresso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);

  const carregarMatriculas = useCallback(async () => {
    if (!user?.id) return;
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
      const concluidasIds = new Set(
        progressosData
          .filter((p) => p.usuarioId === user.id && p.status === 'Concluído')
          .map((p) => p.aulaId)
      );

      const formatados: ItemMatriculaComProgresso[] = [];

      for (const mat of minhas) {
        const curso = cursosData.find((c) => c.id === mat.cursoId);
        if (!curso) continue;

        const modulosDoCurso = modulosData.filter((m) => m.cursoId === curso.id);
        const modulosIds = modulosDoCurso.map((m) => m.id);
        const aulasDoCurso = aulasData.filter((a) => modulosIds.includes(a.moduloId));

        const totalAulas = aulasDoCurso.length;
        const concluidas = aulasDoCurso.filter((a) => concluidasIds.has(a.id)).length;
        const porcentagem = totalAulas > 0 ? Math.round((concluidas / totalAulas) * 100) : 0;

        formatados.push({
          matricula: mat,
          curso,
          totalAulas,
          aulasConcluidas: concluidas,
          porcentagem,
        });
      }

      setLista(formatados);
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar matrículas:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user?.id]);

  useFocusEffect(
    useCallback(() => {
      carregarMatriculas();
    }, [carregarMatriculas])
  );

  const onRefresh = () => {
    setAtualizando(true);
    carregarMatriculas();
  };

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
        <Text style={styles.titulo}>Minhas Matrículas</Text>
        <Text style={styles.subtitulo}>Acompanhe o andamento dos seus cursos</Text>
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
        {lista.length === 0 ? (
          <View style={styles.estadoVazio}>
            <View style={styles.iconeVazio}>
              <Ionicons name="school-outline" size={36} color={cores.primaria} />
            </View>
            <Text style={styles.vazioTitulo}>Você ainda não possui cursos</Text>
            <Text style={styles.vazioDescricao}>
              Explore o catálogo completo de cursos e comece sua jornada de aprendizado agora mesmo!
            </Text>
            <TouchableOpacity
              style={styles.botaoExplorarCursos}
              onPress={() => navigation.navigate('Início')}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoExplorarCursosTexto}>Explorar Catálogo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          lista.map((item) => {
            const completo = item.porcentagem === 100;
            return (
              <View key={item.matricula.id} style={styles.cardMatricula}>
                <View style={styles.cardTopo}>
                  <Text style={styles.dataMatricula}>
                    Matriculado em:{' '}
                    {new Date(item.matricula.dataMatricula).toLocaleDateString('pt-BR')}
                  </Text>
                  <View
                    style={
                      completo ? styles.badgeStatusConcluido : styles.badgeStatusAndamento
                    }
                  >
                    <Ionicons
                      name={completo ? 'checkmark-done-circle' : 'time'}
                      size={13}
                      color={completo ? cores.secundariaEscura : cores.primaria}
                    />
                    <Text
                      style={
                        completo
                          ? styles.badgeStatusConcluidoTexto
                          : styles.badgeStatusAndamentoTexto
                      }
                    >
                      {completo ? '100% Concluído' : 'Em Andamento'}
                    </Text>
                  </View>
                </View>

                <Text style={styles.cursoTitulo}>{item.curso.titulo}</Text>

                <View style={styles.secaoProgresso}>
                  <View style={styles.linhaProgressoInfo}>
                    <Text style={styles.progressoTexto}>
                      {item.aulasConcluidas} de {item.totalAulas} aulas finalizadas
                    </Text>
                    <Text style={styles.progressoPorcentagem}>{item.porcentagem}%</Text>
                  </View>

                  <View style={styles.trilhoBarra}>
                    <View
                      style={[
                        styles.barraPreenchida,
                        completo && styles.barraPreenchidaCompleta,
                        { width: `${item.porcentagem}%` as any },
                      ]}
                    />
                  </View>
                </View>

                <View style={styles.cardRodape}>
                  <TouchableOpacity
                    style={styles.botaoAcessar}
                    onPress={() =>
                      navigation.navigate('CursoDetalhes', { cursoId: item.curso.id })
                    }
                    activeOpacity={0.85}
                  >
                    <Text style={styles.botaoAcessarTexto}>
                      {completo ? 'Revisar Conteúdo' : 'Continuar Estudando'}
                    </Text>
                    <Ionicons name="arrow-forward" size={15} color={cores.branco} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
