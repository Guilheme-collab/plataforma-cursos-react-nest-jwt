import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { CursoService } from '../../services/curso.service';
import { TrilhaService } from '../../services/trilha.service';
import { ModuloService } from '../../services/modulo.service';
import { MatriculaService } from '../../services/matricula.service';
import { NotificacaoService } from '../../services/notificacao.service';
import { AppNotificationService } from '../../services/notification.service';
import { Curso, Trilha, Modulo, Notificacao } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './HomeScreen.styles';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';

interface HomeScreenProps {
  navigation: any;
  route?: any;
}

type TipoFiltro = 'GERAL' | 'TRILHAS' | 'MEUS_CURSOS' | 'CURSOS' | 'MODULOS';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const { user, logout } = useAuth();
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [matriculasIds, setMatriculasIds] = useState<number[]>([]);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [naoLidasCount, setNaoLidasCount] = useState<number>(0);
  const [toastNotificacao, setToastNotificacao] = useState<Notificacao | null>(null);
  const ultimoIdNotificacaoRef = useRef<number | null>(null);

  // Ref para evitar que dois carregamentos simultâneos disparem a mesma notificação nativa
  const processandoRef = useRef(false);

  const [filtroAtivo, setFiltroAtivo] = useState<TipoFiltro>('GERAL');

  useEffect(() => {
    if (route?.params?.filtro) {
      setFiltroAtivo(route.params.filtro);
    }
  }, [route?.params?.filtro]);
  const [termoBusca, setTermoBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);
  const [modalNotificacoesAberto, setModalNotificacoesAberto] = useState(false);

  const carregarDados = useCallback(async (silencioso = false) => {
    if (!user) {
      setCarregando(false);
      setAtualizando(false);
      return;
    }

    if (!silencioso) {
      if (cursos.length === 0 && trilhas.length === 0) setCarregando(true);
    }

    try {
      const [listaCursos, listaTrilhas, listaModulos, listaMatriculas, listaNotif, contagemNotif] =
        await Promise.all([
          CursoService.findAll(),
          TrilhaService.findAll().catch(() => []),
          ModuloService.findAll().catch(() => []),
          MatriculaService.findAll().catch(() => []),
          NotificacaoService.findAll().catch(() => []),
          NotificacaoService.countUnread().catch(() => ({ naoLidas: 0 })),
        ]);

      // Alerta instantâneo com banner flutuante no celular ao receber notificação
      // Usa processandoRef para evitar condição de corrida entre chamadas concorrentes
      if (listaNotif.length > 0 && !processandoRef.current) {
        processandoRef.current = true;
        try {
          const maxId = Math.max(...listaNotif.map((n) => n.id));
          if (ultimoIdNotificacaoRef.current !== null) {
            const novas = listaNotif.filter(
              (n) => n.id > (ultimoIdNotificacaoRef.current || 0) && !n.lida
            );
            if (novas.length > 0) {
              const maisRecente = novas[0];
              setToastNotificacao(maisRecente);
              AppNotificationService.dispararNotificacaoLocal(maisRecente);
              setTimeout(() => {
                setToastNotificacao(null);
              }, 5000);
            }
          } else {
            // No primeiro carregamento, só exibe banner se for evento recém-criado (últimos 2 minutos)
            const agora = Date.now();
            const recenteNaoLida = listaNotif.find((n) => {
              if (n.lida) return false;
              const diffMs = agora - new Date(n.dataCriacao).getTime();
              return diffMs < 120000;
            });
            if (recenteNaoLida) {
              setToastNotificacao(recenteNaoLida);
              AppNotificationService.dispararNotificacaoLocal(recenteNaoLida);
              setTimeout(() => {
                setToastNotificacao(null);
              }, 5000);
            }
          }
          ultimoIdNotificacaoRef.current = maxId;
        } finally {
          processandoRef.current = false;
        }
      } else if (listaNotif.length === 0 && ultimoIdNotificacaoRef.current === null) {
        ultimoIdNotificacaoRef.current = 0;
      }

      setCursos(listaCursos);
      setTrilhas(listaTrilhas);
      setModulos(listaModulos);
      setNotificacoes(listaNotif);
      setNaoLidasCount(contagemNotif.naoLidas);

      if (user?.id) {
        const minhas = listaMatriculas
          .filter((m) => m.usuarioId === user.id)
          .map((m) => m.cursoId);
        setMatriculasIds(minhas);
      }
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar dados da Home:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user, cursos.length, trilhas.length]);

  // Recarrega sempre que o usuário foca na tela
  useFocusEffect(
    useCallback(() => {
      if (user) {
        carregarDados();
      }
    }, [user, carregarDados])
  );

  // Polling ultrarrápido a cada 1.5 segundos para entrega instantânea
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      carregarDados(true);
    }, 1500);
    return () => clearInterval(interval);
  }, [user, carregarDados]);

  const onRefresh = () => {
    setAtualizando(true);
    carregarDados();
  };

  const handleMarcarComoLida = async (id: number) => {
    try {
      await NotificacaoService.markAsRead(id);
      carregarDados(true);
    } catch (err: any) {
      console.warn('Erro ao marcar lida:', err?.message || err);
    }
  };

  const handleMarcarTodasComoLidas = async () => {
    try {
      await NotificacaoService.markAllAsRead();
      carregarDados(true);
    } catch (err: any) {
      console.warn('Erro ao marcar todas lidas:', err?.message || err);
    }
  };

  const getIniciais = (nome?: string) => {
    if (!nome) return 'AL';
    const partes = nome.trim().split(' ');
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  };

  const getIconeNotificacao = (tipo: string) => {
    switch (tipo) {
      case 'BOAS_VINDAS':
        return { nome: 'sparkles', cor: '#10B981' };
      case 'PAGAMENTO':
        return { nome: 'card', cor: cores.primaria };
      case 'MATRICULA':
        return { nome: 'school', cor: '#06B6D4' };
      case 'NOVO_CURSO':
        return { nome: 'book', cor: '#F59E0B' };
      case 'NOVO_MODULO':
        return { nome: 'layers', cor: '#6366F1' };
      case 'NOVA_TRILHA':
        return { nome: 'trail-sign', cor: '#EF4444' };
      case 'CERTIFICADO':
        return { nome: 'ribbon', cor: '#D97706' };
      default:
        return { nome: 'notifications', cor: cores.primaria };
    }
  };

  // Filtros de busca
  const termo = termoBusca.trim().toLowerCase();

  const trilhasFiltradas = trilhas.filter((t) => {
    if (!termo) return true;
    return (
      t.titulo.toLowerCase().includes(termo) ||
      t.descricao?.toLowerCase().includes(termo) ||
      t.categoria?.nome?.toLowerCase().includes(termo)
    );
  });

  const cursosFiltrados = cursos.filter((c) => {
    const matriculado = matriculasIds.includes(c.id);
    if (filtroAtivo === 'MEUS_CURSOS' && !matriculado) return false;
    if (!termo) return true;
    return (
      c.titulo.toLowerCase().includes(termo) ||
      c.descricao.toLowerCase().includes(termo) ||
      c.categoria?.nome?.toLowerCase().includes(termo)
    );
  });

  const modulosFiltrados = modulos.filter((m) => {
    if (!termo) return true;
    return (
      m.titulo.toLowerCase().includes(termo) ||
      m.curso?.titulo?.toLowerCase().includes(termo)
    );
  });

  const deveMostrarTrilhas = filtroAtivo === 'GERAL' || filtroAtivo === 'TRILHAS';
  const deveMostrarCursos =
    filtroAtivo === 'GERAL' || filtroAtivo === 'CURSOS' || filtroAtivo === 'MEUS_CURSOS';
  const deveMostrarModulos = filtroAtivo === 'GERAL' || filtroAtivo === 'MODULOS';

  return (
    <View style={styles.container}>
      {/* Banner Flutuante de Notificação Instantânea (Toast) */}
      {toastNotificacao && (
        <TouchableOpacity
          style={styles.toastBanner}
          activeOpacity={0.9}
          onPress={() => {
            setToastNotificacao(null);
            setModalNotificacoesAberto(true);
          }}
        >
          <View style={styles.toastBannerIcone}>
            <Ionicons
              name={getIconeNotificacao(toastNotificacao.tipo).nome as any}
              size={20}
              color={getIconeNotificacao(toastNotificacao.tipo).cor}
            />
          </View>
          <View style={styles.toastBannerConteudo}>
            <View style={styles.toastBannerTopo}>
              <Text style={styles.toastBannerTitulo} numberOfLines={1}>
                {toastNotificacao.titulo}
              </Text>
              <View style={styles.badgeKafka}>
                <Text style={styles.badgeKafkaTexto}>Kafka</Text>
              </View>
            </View>
            <Text style={styles.toastBannerMensagem} numberOfLines={2}>
              {toastNotificacao.mensagem}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setToastNotificacao(null)}>
            <Ionicons name="close" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </TouchableOpacity>
      )}

      <MenuLateral
        visivel={menuLateralAberto}
        aoFechar={() => setMenuLateralAberto(false)}
        navigation={navigation}
        rotaAtiva="Início"
      />

      {/* Cabeçalho */}
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
              <Text style={styles.saudacao}>Bem-vindo(a),</Text>
              <Text style={styles.nomeUsuario}>{user?.nomeCompleto || 'Estudante'}</Text>
            </View>
          </View>

          <View style={styles.cabecalhoDireita}>
            {/* Sino de Notificações com Mensageria Kafka */}
            <TouchableOpacity
              style={styles.botaoNotificacao}
              onPress={() => setModalNotificacoesAberto(true)}
              activeOpacity={0.8}
            >
              <Ionicons name="notifications-outline" size={22} color={cores.texto} />
              {naoLidasCount > 0 && (
                <View style={styles.badgeNotificacao}>
                  <Text style={styles.badgeNotificacaoTexto}>
                    {naoLidasCount > 9 ? '9+' : naoLidasCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.avatar}
              onPress={() => navigation.navigate('Perfil')}
              activeOpacity={0.8}
            >
              <Text style={styles.avatarTexto}>{getIniciais(user?.nomeCompleto)}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoSairTopo}
              onPress={async () => {
                try {
                  await logout();
                } catch (e) {
                  console.warn('Erro ao sair:', e);
                }
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="log-out-outline" size={20} color={cores.perigo} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Barra de Busca */}
        <View style={styles.barraBusca}>
          <Ionicons name="search-outline" size={20} color={cores.cinza} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Pesquisar por cursos, trilhas ou módulos..."
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

        {/* Filtros em Abas/Chips: Geral, Trilhas, Meus Cursos, Cursos, Módulos */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollFiltros}
        >
          <TouchableOpacity
            style={[styles.chipFiltro, filtroAtivo === 'GERAL' && styles.chipFiltroAtivo]}
            onPress={() => setFiltroAtivo('GERAL')}
          >
            <Text
              style={[
                styles.chipFiltroTexto,
                filtroAtivo === 'GERAL' && styles.chipFiltroTextoAtivo,
              ]}
            >
              🌐 Geral (Tudo)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chipFiltro, filtroAtivo === 'TRILHAS' && styles.chipFiltroAtivo]}
            onPress={() => setFiltroAtivo('TRILHAS')}
          >
            <Text
              style={[
                styles.chipFiltroTexto,
                filtroAtivo === 'TRILHAS' && styles.chipFiltroTextoAtivo,
              ]}
            >
              🗺️ Trilhas ({trilhas.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chipFiltro, filtroAtivo === 'MEUS_CURSOS' && styles.chipFiltroAtivo]}
            onPress={() => setFiltroAtivo('MEUS_CURSOS')}
          >
            <Text
              style={[
                styles.chipFiltroTexto,
                filtroAtivo === 'MEUS_CURSOS' && styles.chipFiltroTextoAtivo,
              ]}
            >
              🎓 Meus Cursos ({matriculasIds.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chipFiltro, filtroAtivo === 'CURSOS' && styles.chipFiltroAtivo]}
            onPress={() => setFiltroAtivo('CURSOS')}
          >
            <Text
              style={[
                styles.chipFiltroTexto,
                filtroAtivo === 'CURSOS' && styles.chipFiltroTextoAtivo,
              ]}
            >
              📚 Cursos ({cursos.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chipFiltro, filtroAtivo === 'MODULOS' && styles.chipFiltroAtivo]}
            onPress={() => setFiltroAtivo('MODULOS')}
          >
            <Text
              style={[
                styles.chipFiltroTexto,
                filtroAtivo === 'MODULOS' && styles.chipFiltroTextoAtivo,
              ]}
            >
              🧩 Módulos ({modulos.length})
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {carregando ? (
        <View style={styles.estadoVazio}>
          <ActivityIndicator size="large" color={cores.primaria} />
          <Text style={styles.estadoVazioTexto}>Carregando trilhas, cursos e módulos...</Text>
        </View>
      ) : (
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
          {/* Estatísticas Rápidas */}
          <View style={styles.linhaEstatisticas}>
            <View style={styles.cardEstatistica}>
              <View style={[styles.cardEstatisticaIcone, styles.iconeTrilhasBg]}>
                <Ionicons name="trail-sign-outline" size={20} color={cores.primaria} />
              </View>
              <View style={styles.cardEstatisticaTextoWrapper}>
                <Text style={styles.cardEstatisticaNumero}>{trilhas.length}</Text>
                <Text style={styles.cardEstatisticaRotulo}>Trilhas</Text>
              </View>
            </View>

            <View style={styles.cardEstatistica}>
              <View style={[styles.cardEstatisticaIcone, styles.iconeCursosBg]}>
                <Ionicons name="book-outline" size={20} color="#10B981" />
              </View>
              <View style={styles.cardEstatisticaTextoWrapper}>
                <Text style={styles.cardEstatisticaNumero}>{cursos.length}</Text>
                <Text style={styles.cardEstatisticaRotulo}>Cursos</Text>
              </View>
            </View>

            <View style={styles.cardEstatistica}>
              <View style={[styles.cardEstatisticaIcone, styles.iconeMatriculadosBg]}>
                <Ionicons name="checkmark-circle-outline" size={20} color="#F59E0B" />
              </View>
              <View style={styles.cardEstatisticaTextoWrapper}>
                <Text style={styles.cardEstatisticaNumero}>{matriculasIds.length}</Text>
                <Text style={styles.cardEstatisticaRotulo}>Matriculados</Text>
              </View>
            </View>
          </View>

          {/* SEÇÃO 1: TRILHAS DE APRENDIZADO */}
          {deveMostrarTrilhas && (
            <View style={styles.secaoBloco}>
              <View style={styles.secaoCabecalhoLinha}>
                <Text style={styles.secaoTitulo}>Trilhas de Aprendizado</Text>
                <View style={styles.secaoBadgeContador}>
                  <Text style={styles.secaoBadgeContadorTexto}>
                    {trilhasFiltradas.length} {trilhasFiltradas.length === 1 ? 'trilha' : 'trilhas'}
                  </Text>
                </View>
              </View>

              {trilhasFiltradas.length === 0 ? (
                <View style={styles.estadoVazio}>
                  <Ionicons name="trail-sign-outline" size={38} color={cores.cinza} />
                  <Text style={styles.estadoVazioTexto}>
                    Nenhuma trilha encontrada para este filtro.
                  </Text>
                </View>
              ) : (
                trilhasFiltradas.map((trilha) => {
                  const qtdCursos = trilha.trilhasCursos?.length || 0;
                  return (
                    <View key={trilha.id} style={styles.cardTrilha}>
                      <View style={styles.cardTrilhaTopo}>
                        <View style={styles.cardTrilhaIconeWrapper}>
                          <Ionicons name="trail-sign" size={24} color={cores.primaria} />
                        </View>
                        {trilha.categoria && (
                          <View style={styles.badgeTrilhaCategoria}>
                            <Text style={styles.badgeTrilhaCategoriaTexto}>
                              {trilha.categoria.nome}
                            </Text>
                          </View>
                        )}
                      </View>

                      <Text style={styles.trilhaTitulo}>{trilha.titulo}</Text>
                      <Text style={styles.trilhaDescricao} numberOfLines={3}>
                        {trilha.descricao}
                      </Text>

                      <View style={styles.trilhaRodape}>
                        <Text style={styles.trilhaQtdCursosTexto}>
                          {qtdCursos} {qtdCursos === 1 ? 'curso organizado' : 'cursos organizados'}
                        </Text>
                        <TouchableOpacity
                          style={styles.botaoExplorarTrilha}
                          onPress={() => {
                            // Se a trilha tiver cursos, seleciona o primeiro para detalhes
                            if (trilha.trilhasCursos && trilha.trilhasCursos.length > 0) {
                              navigation.navigate('CursoDetalhes', {
                                cursoId: trilha.trilhasCursos[0].cursoId,
                              });
                            } else {
                              setFiltroAtivo('CURSOS');
                            }
                          }}
                        >
                          <Text style={styles.botaoExplorarTrilhaTexto}>Ver Cursos</Text>
                          <Ionicons name="arrow-forward" size={14} color={cores.primaria} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })
              )}
            </View>
          )}

          {/* SEÇÃO 2: CURSOS */}
          {deveMostrarCursos && (
            <View style={styles.secaoBloco}>
              <View style={styles.secaoCabecalhoLinha}>
                <Text style={styles.secaoTitulo}>
                  {filtroAtivo === 'MEUS_CURSOS' ? 'Meus Cursos Matriculados' : 'Cursos da Plataforma'}
                </Text>
                <View style={styles.secaoBadgeContador}>
                  <Text style={styles.secaoBadgeContadorTexto}>
                    {cursosFiltrados.length} {cursosFiltrados.length === 1 ? 'curso' : 'cursos'}
                  </Text>
                </View>
              </View>

              {cursosFiltrados.length === 0 ? (
                <View style={styles.estadoVazio}>
                  <Ionicons name="book-outline" size={38} color={cores.cinza} />
                  <Text style={styles.estadoVazioTexto}>
                    {filtroAtivo === 'MEUS_CURSOS'
                      ? 'Você ainda não está matriculado em nenhum curso. Assine um plano para começar!'
                      : 'Nenhum curso encontrado para este filtro.'}
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
                            {matriculado ? 'Acessar Aulas do Curso' : 'Ver Detalhes do Curso'}
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
          )}

          {/* SEÇÃO 3: MÓDULOS E CONTEÚDOS (Exibição requerida pelo professor!) */}
          {deveMostrarModulos && (
            <View style={styles.secaoBloco}>
              <View style={styles.secaoCabecalhoLinha}>
                <Text style={styles.secaoTitulo}>Módulos e Conteúdos</Text>
                <View style={styles.secaoBadgeContador}>
                  <Text style={styles.secaoBadgeContadorTexto}>
                    {modulosFiltrados.length} {modulosFiltrados.length === 1 ? 'módulo' : 'módulos'}
                  </Text>
                </View>
              </View>

              {modulosFiltrados.length === 0 ? (
                <View style={styles.estadoVazio}>
                  <Ionicons name="layers-outline" size={38} color={cores.cinza} />
                  <Text style={styles.estadoVazioTexto}>
                    Nenhum módulo cadastrado ou encontrado.
                  </Text>
                </View>
              ) : (
                modulosFiltrados.map((mod) => (
                  <TouchableOpacity
                    key={mod.id}
                    style={styles.cardModuloHome}
                    activeOpacity={0.85}
                    onPress={() => {
                      if (mod.cursoId) {
                        navigation.navigate('CursoDetalhes', { cursoId: mod.cursoId });
                      }
                    }}
                  >
                    <View style={styles.cardModuloHeader}>
                      <Text style={styles.moduloCursoVinculado}>
                        {mod.curso?.titulo || `Curso #${mod.cursoId}`}
                      </Text>
                      <Ionicons name="chevron-forward" size={16} color={cores.cinza} />
                    </View>

                    <Text style={styles.moduloTituloHome}>
                      Módulo {mod.ordem}: {mod.titulo}
                    </Text>

                    {mod.aulas && mod.aulas.length > 0 && (
                      <View style={styles.moduloAulasLista}>
                        {mod.aulas.slice(0, 3).map((aula) => (
                          <View key={aula.id} style={styles.linhaAulaModulo}>
                            <Ionicons name="play-outline" size={14} color={cores.primaria} />
                            <Text style={styles.aulaModuloTitulo} numberOfLines={1}>
                              {aula.titulo}
                            </Text>
                            <Text style={styles.aulaModuloDuracao}>
                              {aula.duracaoMinutos} min • {aula.tipoConteudo}
                            </Text>
                          </View>
                        ))}
                        {mod.aulas.length > 3 && (
                          <Text style={[styles.aulaModuloDuracao, { fontStyle: 'italic', marginTop: 2 }]}>
                            + {mod.aulas.length - 3} outras aulas...
                          </Text>
                        )}
                      </View>
                    )}
                  </TouchableOpacity>
                ))
              )}
            </View>
          )}
        </ScrollView>
      )}

      {/* MODAL DE NOTIFICAÇÕES (MENSAGERIA KAFKA) */}
      <Modal
        visible={modalNotificacoesAberto}
        animationType="slide"
        transparent
        onRequestClose={() => setModalNotificacoesAberto(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalContainer}>
            <View style={styles.modalCabecalho}>
              <View style={styles.modalTituloLinha}>
                <Ionicons name="notifications" size={22} color={cores.primaria} />
                <Text style={styles.modalTitulo}>Notificações (Kafka)</Text>
              </View>

              <View style={styles.modalAcoesDireita}>
                {naoLidasCount > 0 && (
                  <TouchableOpacity
                    style={styles.botaoLerTodas}
                    onPress={handleMarcarTodasComoLidas}
                  >
                    <Text style={styles.botaoLerTodasTexto}>Ler todas</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={styles.botaoFecharModal}
                  onPress={() => setModalNotificacoesAberto(false)}
                >
                  <Ionicons name="close-circle" size={26} color={cores.cinza} />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView contentContainerStyle={styles.modalListaScroll}>
              {notificacoes.length === 0 ? (
                <View style={styles.estadoVazio}>
                  <Ionicons name="notifications-off-outline" size={44} color={cores.cinza} />
                  <Text style={styles.estadoVazioTexto}>
                    Nenhuma notificação recebida até o momento.
                  </Text>
                </View>
              ) : (
                notificacoes.map((notif) => {
                  const iconInfo = getIconeNotificacao(notif.tipo);
                  return (
                    <TouchableOpacity
                      key={notif.id}
                      style={[
                        styles.cardNotificacao,
                        !notif.lida && styles.cardNotificacaoNaoLida,
                      ]}
                      activeOpacity={0.85}
                      onPress={() => handleMarcarComoLida(notif.id)}
                    >
                      <View style={styles.notifIconeWrapper}>
                        <Ionicons name={iconInfo.nome as any} size={22} color={iconInfo.cor} />
                      </View>

                      <View style={styles.notifConteudo}>
                        <View style={styles.notifCabecalhoItem}>
                          <Text style={styles.notifTituloItem} numberOfLines={1}>
                            {notif.titulo}
                          </Text>
                          {notif.tipo === 'BOAS_VINDAS' && (
                            <View style={styles.badgeKafka}>
                              <Text style={styles.badgeKafkaTexto}>Kafka</Text>
                            </View>
                          )}
                        </View>

                        <Text style={styles.notifMensagemItem}>{notif.mensagem}</Text>

                        <Text style={styles.notifDataTexto}>
                          {new Date(notif.dataCriacao).toLocaleString('pt-BR')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
