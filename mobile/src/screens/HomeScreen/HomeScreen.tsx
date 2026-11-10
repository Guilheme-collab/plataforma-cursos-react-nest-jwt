import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { CursoService } from '../../services/curso.service';
import { CategoriaService } from '../../services/categoria.service';
import { MatriculaService } from '../../services/matricula.service';
import { Curso, Categoria } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './HomeScreen.styles';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user } = useAuth();
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [matriculasIds, setMatriculasIds] = useState<number[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);
  const [termoBusca, setTermoBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);

  const carregarDados = useCallback(async () => {
    if (!user) {
      setCarregando(false);
      setAtualizando(false);
      return;
    }

    try {
      const [listaCursos, listaCategorias, listaMatriculas] = await Promise.all([
        CursoService.findAll(),
        CategoriaService.findAll(),
        MatriculaService.findAll(),
      ]);

      setCursos(listaCursos);
      setCategorias(listaCategorias);

      if (user?.id) {
        const minhas = listaMatriculas
          .filter((m) => m.usuarioId === user.id)
          .map((m) => m.cursoId);
        setMatriculasIds(minhas);
      }
    } catch (error: any) {
      // Ignora 401 silenciosamente (ocorre se o usuário estiver saindo da sessão)
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar catálogo:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      carregarDados();
    }
  }, [user, carregarDados]);

  const onRefresh = () => {
    setAtualizando(true);
    carregarDados();
  };

  const cursosFiltrados = cursos.filter((c) => {
    const matchCategoria = categoriaSelecionada ? c.categoriaId === categoriaSelecionada : true;
    const matchBusca = termoBusca.trim()
      ? c.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        c.descricao.toLowerCase().includes(termoBusca.toLowerCase())
      : true;
    return matchCategoria && matchBusca;
  });

  const getIniciais = (nome?: string) => {
    if (!nome) return 'AL';
    const partes = nome.trim().split(' ');
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <MenuLateral
        visivel={menuLateralAberto}
        aoFechar={() => setMenuLateralAberto(false)}
        navigation={navigation}
        rotaAtiva="Início"
      />

      <View style={styles.cabecalho}>
        <View style={styles.cabecalhoLinha}>
          <View style={styles.cabecalhoEsquerda}>
            <TouchableOpacity
              style={styles.botaoMenu}
              onPress={() => setMenuLateralAberto(true)}
              activeOpacity={0.7}
            >
              <Ionicons name="menu-outline" size={26} color={cores.texto} />
            </TouchableOpacity>

            <View>
              <Text style={styles.saudacao}>Bem-vindo de volta,</Text>
              <Text style={styles.nomeUsuario}>{user?.nomeCompleto || 'Estudante'}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navigation.navigate('Perfil')}
            activeOpacity={0.8}
          >
            <Text style={styles.avatarTexto}>{getIniciais(user?.nomeCompleto)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.barraBusca}>
          <Ionicons name="search-outline" size={20} color={cores.cinza} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar por cursos ou tecnologias..."
            placeholderTextColor={cores.cinza}
            value={termoBusca}
            onChangeText={setTermoBusca}
          />
          {termoBusca.length > 0 && (
            <TouchableOpacity onPress={() => setTermoBusca('')}>
              <Ionicons name="close-circle" size={18} color={cores.cinza} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {carregando ? (
        <View style={styles.estadoVazio}>
          <ActivityIndicator size="large" color={cores.primaria} />
          <Text style={styles.estadoVazioTexto}>Carregando cursos disponíveis...</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.conteudoScroll}
          refreshControl={<RefreshControl refreshing={atualizando} onRefresh={onRefresh} colors={[cores.primaria]} />}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.linhaEstatisticas}>
            <View style={[styles.cardEstatistica, styles.cardEstatisticaPrimario]}>
              <View style={styles.cardEstatisticaIcone}>
                <Ionicons name="book-outline" size={22} color={cores.branco} />
              </View>
              <View>
                <Text style={styles.cardEstatisticaNumero}>{cursos.length}</Text>
                <Text style={styles.cardEstatisticaRotulo}>Cursos Totais</Text>
              </View>
            </View>

            <View style={[styles.cardEstatistica, styles.cardEstatisticaSecundario]}>
              <View style={styles.cardEstatisticaIcone}>
                <Ionicons name="checkmark-circle-outline" size={22} color={cores.branco} />
              </View>
              <View>
                <Text style={styles.cardEstatisticaNumero}>{matriculasIds.length}</Text>
                <Text style={styles.cardEstatisticaRotulo}>Matriculados</Text>
              </View>
            </View>
          </View>

          <View style={styles.secaoCategorias}>
            <Text style={styles.secaoTitulo}>Categorias</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollCategorias}
            >
              <TouchableOpacity
                style={[
                  styles.chipCategoria,
                  categoriaSelecionada === null && styles.chipCategoriaAtivo,
                ]}
                onPress={() => setCategoriaSelecionada(null)}
              >
                <Text
                  style={[
                    styles.chipTexto,
                    categoriaSelecionada === null && styles.chipTextoAtivo,
                  ]}
                >
                  Todas
                </Text>
              </TouchableOpacity>

              {categorias.map((cat) => {
                const ativo = categoriaSelecionada === cat.id;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    style={[styles.chipCategoria, ativo && styles.chipCategoriaAtivo]}
                    onPress={() => setCategoriaSelecionada(ativo ? null : cat.id)}
                  >
                    <Text style={[styles.chipTexto, ativo && styles.chipTextoAtivo]}>
                      {cat.nome}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.secaoCursos}>
            <Text style={styles.secaoTitulo}>
              {categoriaSelecionada
                ? `Cursos de ${categorias.find((c) => c.id === categoriaSelecionada)?.nome}`
                : 'Cursos Disponíveis'}
            </Text>

            {cursosFiltrados.length === 0 ? (
              <View style={styles.estadoVazio}>
                <Ionicons name="file-tray-outline" size={44} color={cores.cinza} />
                <Text style={styles.estadoVazioTexto}>
                  Nenhum curso encontrado para os filtros selecionados.
                </Text>
              </View>
            ) : (
              cursosFiltrados.map((curso) => {
                const matriculado = matriculasIds.includes(curso.id);
                return (
                  <TouchableOpacity
                    key={curso.id}
                    style={styles.cardCurso}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('CursoDetalhes', { cursoId: curso.id })}
                  >
                    <View style={styles.cardCursoTopo}>
                      <View style={styles.badgeCategoria}>
                        <Text style={styles.badgeCategoriaTexto}>
                          {curso.categoria?.nome || 'Tecnologia'}
                        </Text>
                      </View>
                      {matriculado && (
                        <View style={styles.badgeMatriculado}>
                          <Ionicons name="checkmark-circle" size={13} color={cores.secundariaEscura} />
                          <Text style={styles.badgeMatriculadoTexto}>Matriculado</Text>
                        </View>
                      )}
                    </View>

                    <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
                    <Text style={styles.cursoDescricao} numberOfLines={2}>
                      {curso.descricao}
                    </Text>

                    <View style={styles.cursoMetadadosLinha}>
                      <View style={styles.metadadoItem}>
                        <Ionicons name="bar-chart-outline" size={14} color={cores.textoSecundario} />
                        <Text style={styles.metadadoTexto}>{curso.nivel}</Text>
                      </View>
                      <View style={styles.metadadoItem}>
                        <Ionicons name="play-circle-outline" size={14} color={cores.textoSecundario} />
                        <Text style={styles.metadadoTexto}>{curso.totalAulas || 0} aulas</Text>
                      </View>
                      <View style={styles.metadadoItem}>
                        <Ionicons name="time-outline" size={14} color={cores.textoSecundario} />
                        <Text style={styles.metadadoTexto}>{curso.totalHoras || 0}h</Text>
                      </View>
                    </View>

                    <View style={styles.cursoRodapeBotaoLinha}>
                      <View
                        style={[
                          styles.botaoAcessarCard,
                          matriculado && styles.botaoAcessarCardMatriculado,
                        ]}
                      >
                        <Text
                          style={[
                            styles.botaoAcessarCardTexto,
                            matriculado && styles.botaoAcessarCardTextoMatriculado,
                          ]}
                        >
                          {matriculado ? 'Acessar Aulas' : 'Ver Detalhes do Curso'}
                        </Text>
                        <Ionicons
                          name="arrow-forward"
                          size={15}
                          color={matriculado ? cores.secundariaEscura : cores.primaria}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
