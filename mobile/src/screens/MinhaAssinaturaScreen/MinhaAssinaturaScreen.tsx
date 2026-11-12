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
import { AssinaturaService } from '../../services/assinatura.service';
import { PlanoService } from '../../services/plano.service';
import { CursoService } from '../../services/curso.service';
import { Assinatura, Plano, Curso } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './MinhaAssinaturaScreen.styles';

interface Props {
  navigation: any;
}

export const MinhaAssinaturaScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [assinaturas, setAssinaturas] = useState<Assinatura[]>([]);
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);

  const carregarDados = useCallback(async (silencioso = false) => {
    if (!user?.id) return;
    if (!silencioso && assinaturas.length === 0) setCarregando(true);
    try {
      const [assinaturasData, planosData, cursosData] = await Promise.all([
        AssinaturaService.findAll(),
        PlanoService.findAll(),
        CursoService.findAll(),
      ]);

      const minhas = assinaturasData
        .filter((a) => a.usuarioId === user.id)
        .sort((a, b) => new Date(b.dataInicio).getTime() - new Date(a.dataInicio).getTime());

      setAssinaturas(minhas);
      setPlanos(planosData);
      setCursos(cursosData);
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar assinaturas:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user?.id, assinaturas.length]);

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [carregarDados])
  );

  // Auto-refresh silencioso a cada 3s
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

  const formatarData = (iso?: string) => {
    if (!iso) return 'Sem validade';
    const parte = iso.includes('T') ? iso.split('T')[0] : iso;
    const [ano, mes, dia] = parte.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const hoje = new Date().toISOString().split('T')[0];
  const assinaturaAtiva = assinaturas.find((a) => !a.dataFim || a.dataFim >= hoje);
  const planoAtivo = assinaturaAtiva ? planos.find((p) => p.id === assinaturaAtiva.planoId) : null;

  const calcularDiasRestantes = (dataFim?: string) => {
    if (!dataFim) return 999;
    const diff = new Date(dataFim).getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
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
        <Text style={styles.titulo}>Minha Assinatura</Text>
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
        {assinaturaAtiva && planoAtivo ? (
          <View style={styles.cardAtivo}>
            <View style={styles.cardAtivoTopo}>
              <View style={styles.badgeAtiva}>
                <Ionicons name="checkmark-circle" size={14} color="#166534" />
                <Text style={styles.badgeAtivaTexto}>Assinatura Ativa</Text>
              </View>
              <Text style={styles.duracaoTexto}>
                {planoAtivo.duracaoMeses} {planoAtivo.duracaoMeses === 1 ? 'mês' : 'meses'}
              </Text>
            </View>

            <Text style={styles.nomePlano}>{planoAtivo.nome}</Text>
            <Text style={styles.descricaoPlano}>{planoAtivo.descricao}</Text>

            <View style={styles.caixaVigencia}>
              <View style={styles.linhaVigencia}>
                <Ionicons name="calendar-outline" size={16} color={cores.primaria} />
                <Text style={styles.rotuloVigencia}>Início da vigência:</Text>
                <Text style={styles.valorVigencia}>{formatarData(assinaturaAtiva.dataInicio)}</Text>
              </View>
              <View style={styles.linhaVigencia}>
                <Ionicons name="time-outline" size={16} color={cores.primaria} />
                <Text style={styles.rotuloVigencia}>Válido até:</Text>
                <Text style={styles.valorVigenciaDestaque}>{formatarData(assinaturaAtiva.dataFim)}</Text>
              </View>
              <View style={styles.linhaVigencia}>
                <Ionicons name="hourglass-outline" size={16} color="#D97706" />
                <Text style={styles.rotuloVigencia}>Dias restantes:</Text>
                <Text style={styles.valorVigenciaDias}>
                  {calcularDiasRestantes(assinaturaAtiva.dataFim)} dias de acesso
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.botaoVerPlanos}
              onPress={() => navigation.navigate('Planos')}
              activeOpacity={0.85}
            >
              <Ionicons name="card-outline" size={18} color={cores.branco} />
              <Text style={styles.botaoVerPlanosTexto}>Alterar ou Renovar Plano</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.cardVazio}>
            <View style={styles.iconeVazio}>
              <Ionicons name="card-outline" size={42} color={cores.primaria} />
            </View>
            <Text style={styles.vazioTitulo}>Nenhum Plano Ativo</Text>
            <Text style={styles.vazioDescricao}>
              Você ainda não possui uma assinatura ativa. Assine um plano para liberar os cursos e conquistar certificados oficiais!
            </Text>
            <TouchableOpacity
              style={styles.botaoAssinarAgora}
              onPress={() => navigation.navigate('Planos')}
              activeOpacity={0.85}
            >
              <Ionicons name="rocket-outline" size={18} color={cores.branco} />
              <Text style={styles.botaoAssinarAgoraTexto}>Ver Planos da Plataforma</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Histórico de Assinaturas Anteriores */}
        {assinaturas.length > 0 && (
          <View style={styles.secaoHistorico}>
            <Text style={styles.secaoTitulo}>Histórico de Assinaturas</Text>
            {assinaturas.map((ass) => {
              const plano = planos.find((p) => p.id === ass.planoId);
              const estaAtiva = !ass.dataFim || ass.dataFim >= hoje;
              return (
                <View key={ass.id} style={styles.cardHistoricoItem}>
                  <View style={styles.historicoEsquerda}>
                    <Text style={styles.historicoPlanoNome}>{plano?.nome || `Plano #${ass.planoId}`}</Text>
                    <Text style={styles.historicoPeriodo}>
                      {formatarData(ass.dataInicio)} até {formatarData(ass.dataFim)}
                    </Text>
                  </View>
                  <View style={[styles.badgeHistorico, estaAtiva ? styles.badgeHistoricoAtivo : styles.badgeHistoricoExpirado]}>
                    <Text style={[styles.badgeHistoricoTexto, estaAtiva ? styles.badgeHistoricoTextoAtivo : styles.badgeHistoricoTextoExpirado]}>
                      {estaAtiva ? 'Vigente' : 'Encerrada'}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
