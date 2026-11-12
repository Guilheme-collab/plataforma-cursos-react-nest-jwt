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
import { AvaliacaoService } from '../../services/avaliacao.service';
import { CursoService } from '../../services/curso.service';
import { Avaliacao, Curso } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './MinhasAvaliacoesScreen.styles';

interface Props {
  navigation: any;
}

interface ItemAvaliacaoComCurso {
  avaliacao: Avaliacao;
  curso?: Curso;
}

export const MinhasAvaliacoesScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [avaliacoes, setAvaliacoes] = useState<ItemAvaliacaoComCurso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);

  const carregarDados = useCallback(async (silencioso = false) => {
    if (!user?.id) return;
    if (!silencioso && avaliacoes.length === 0) setCarregando(true);
    try {
      const [avaliacoesData, cursosData] = await Promise.all([
        AvaliacaoService.findAll(),
        CursoService.findAll(),
      ]);

      const minhas = avaliacoesData
        .filter((av) => av.usuarioId === user.id)
        .map((av) => ({
          avaliacao: av,
          curso: cursosData.find((c) => c.id === av.cursoId),
        }));

      setAvaliacoes(minhas);
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar avaliações:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user?.id, avaliacoes.length]);

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

  const renderEstrelas = (nota: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <Ionicons
          key={i}
          name={i <= nota ? 'star' : 'star-outline'}
          size={16}
          color={i <= nota ? '#F59E0B' : cores.cinza}
        />
      );
    }
    return estrelas;
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
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Início')}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color={cores.texto} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Minhas Avaliações</Text>
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
        {avaliacoes.length === 0 ? (
          <View style={styles.cardVazio}>
            <View style={styles.iconeVazio}>
              <Ionicons name="star-outline" size={42} color={cores.primaria} />
            </View>
            <Text style={styles.vazioTitulo}>Nenhuma Avaliação Enviada</Text>
            <Text style={styles.vazioDescricao}>
              Você ainda não avaliou nenhum curso. Acesse os cursos matriculados para deixar sua nota e feedback para o instrutor!
            </Text>
            <TouchableOpacity
              style={styles.botaoExplorar}
              onPress={() => navigation.navigate('Matrículas')}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoExplorarTexto}>Ver Meus Cursos</Text>
            </TouchableOpacity>
          </View>
        ) : (
          avaliacoes.map(({ avaliacao, curso }) => (
            <View key={avaliacao.id} style={styles.cardAvaliacao}>
              <View style={styles.cardAvaliacaoTopo}>
                <Text style={styles.cursoTitulo}>{curso?.titulo || `Curso #${avaliacao.cursoId}`}</Text>
                <View style={styles.linhaEstrelas}>{renderEstrelas(avaliacao.nota)}</View>
              </View>

              {avaliacao.comentario ? (
                <Text style={styles.comentarioTexto}>"{avaliacao.comentario}"</Text>
              ) : (
                <Text style={styles.comentarioVazio}>Nenhum comentário por escrito adicionado.</Text>
              )}

              <TouchableOpacity
                style={styles.botaoVerCurso}
                onPress={() => {
                  if (curso) {
                    navigation.navigate('CursoDetalhes', { cursoId: curso.id });
                  }
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.botaoVerCursoTexto}>Acessar Página do Curso</Text>
                <Ionicons name="arrow-forward" size={14} color={cores.primaria} />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
