import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { cores } from '../../styles/theme';
import { styles } from './MenuLateral.styles';

interface MenuLateralProps {
  visivel: boolean;
  aoFechar: () => void;
  navigation: any;
  rotaAtiva?: string;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({
  visivel,
  aoFechar,
  navigation,
  rotaAtiva = 'Início',
}) => {
  const { user, logout } = useAuth();

  const getIniciais = (nome?: string) => {
    if (!nome) return 'AL';
    const partes = nome.trim().split(' ');
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  };

  const navegarPara = (nomeRota: string) => {
    aoFechar();
    try {
      navigation.navigate(nomeRota);
    } catch {
      navigation.navigate('Principal', { screen: nomeRota });
    }
  };

  const handleSair = async () => {
    try {
      aoFechar();
      await logout();
    } catch (error) {
      console.warn('Erro ao encerrar sessão:', error);
      await logout();
    }
  };

  // Seções organizadas exatamente como no painel Web
  const secoesMenu = [
    {
      titulo: 'Dashboard',
      itens: [
        {
          nome: 'Início',
          icone: 'grid-outline' as const,
          iconeAtivo: 'grid' as const,
          descricao: 'Painel Principal e Catálogo',
        },
      ],
    },
    {
      titulo: 'Conteúdo do Curso',
      itens: [
        {
          nome: 'Início',
          label: 'Cursos',
          icone: 'book-outline' as const,
          iconeAtivo: 'book' as const,
          descricao: 'Catálogo de Cursos',
        },
        {
          nome: 'Início',
          label: 'Módulos',
          icone: 'layers-outline' as const,
          iconeAtivo: 'layers' as const,
          descricao: 'Módulos de Aprendizado',
        },
        {
          nome: 'Matrículas',
          label: 'Aulas',
          icone: 'play-circle-outline' as const,
          iconeAtivo: 'play-circle' as const,
          descricao: 'Assistir Aulas dos Cursos',
        },
      ],
    },
    {
      titulo: 'Planos & Assinaturas',
      itens: [
        {
          nome: 'Planos',
          label: 'Planos da Plataforma',
          icone: 'card-outline' as const,
          iconeAtivo: 'card' as const,
          descricao: 'Planos e Preços Disponíveis',
        },
        {
          nome: 'MinhaAssinatura',
          label: 'Minha Assinatura',
          icone: 'calendar-outline' as const,
          iconeAtivo: 'calendar' as const,
          descricao: 'Meu Plano Ativo e Vigência',
        },
      ],
    },
    {
      titulo: 'Minha Área',
      itens: [
        {
          nome: 'Matrículas',
          label: 'Matrículas',
          icone: 'school-outline' as const,
          iconeAtivo: 'school' as const,
          descricao: 'Meus Cursos Matriculados',
        },
        {
          nome: 'Progresso',
          label: 'Progresso',
          icone: 'stats-chart-outline' as const,
          iconeAtivo: 'stats-chart' as const,
          descricao: 'Desempenho e Aulas Concluídas',
        },
        {
          nome: 'Avaliacoes',
          label: 'Avaliações',
          icone: 'star-outline' as const,
          iconeAtivo: 'star' as const,
          descricao: 'Minhas Avaliações e Notas',
        },
        {
          nome: 'Certificados',
          label: 'Certificados',
          icone: 'ribbon-outline' as const,
          iconeAtivo: 'ribbon' as const,
          descricao: 'Certificados Conquistados',
        },
        {
          nome: 'Perfil',
          label: 'Meu Perfil',
          icone: 'person-outline' as const,
          iconeAtivo: 'person' as const,
          descricao: 'Dados da Minha Conta',
        },
      ],
    },
  ];

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={aoFechar}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.drawerContainer}>
          <View style={styles.drawerCabecalho}>
            <TouchableOpacity
              style={styles.botaoFechar}
              onPress={aoFechar}
              activeOpacity={0.8}
            >
              <Ionicons name="close" size={22} color={cores.branco} />
            </TouchableOpacity>

            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>{getIniciais(user?.nomeCompleto)}</Text>
            </View>

            <Text style={styles.nomeUsuario} numberOfLines={1}>
              {user?.nomeCompleto || 'Aluno'}
            </Text>
            <Text style={styles.emailUsuario} numberOfLines={1}>
              {user?.email || 'aluno@plataforma.com'}
            </Text>

            <View style={styles.badgeAluno}>
              <Text style={styles.badgeAlunoTexto}>
                {user?.role === 'ADMIN' ? 'Administrador' : 'Aluno da Plataforma'}
              </Text>
            </View>
          </View>

          <ScrollView style={styles.drawerCorpo} showsVerticalScrollIndicator={false}>
            {secoesMenu.map((secao) => (
              <View key={secao.titulo}>
                <Text style={styles.secaoTituloMenu}>{secao.titulo}</Text>
                {secao.itens.map((item, idx) => {
                  const label = (item as any).label || item.nome;
                  const ativo = rotaAtiva === item.nome || rotaAtiva === label;
                  return (
                    <TouchableOpacity
                      key={`${secao.titulo}-${label}-${idx}`}
                      style={[styles.itemMenu, ativo && styles.itemMenuAtivo]}
                      onPress={() => navegarPara(item.nome)}
                      activeOpacity={0.7}
                    >
                      <View
                        style={[
                          styles.itemMenuIconeContainer,
                          ativo && styles.itemMenuIconeContainerAtivo,
                        ]}
                      >
                        <Ionicons
                          name={ativo ? item.iconeAtivo : item.icone}
                          size={18}
                          color={ativo ? cores.branco : cores.primaria}
                        />
                      </View>
                      <Text style={[styles.itemMenuTexto, ativo && styles.itemMenuTextoAtivo]}>
                        {label}
                      </Text>
                      <Ionicons
                        name="chevron-forward"
                        size={14}
                        color={ativo ? cores.primaria : cores.cinza}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}

            <View style={styles.divisor} />

            <View style={styles.statusSincronizacao}>
              <View style={styles.statusDot} />
              <Text style={styles.statusTexto}>Banco e Kafka Sincronizados</Text>
            </View>
          </ScrollView>

          <View style={styles.drawerRodape}>
            <TouchableOpacity style={styles.botaoSair} onPress={handleSair} activeOpacity={0.8}>
              <Ionicons name="log-out-outline" size={20} color={cores.perigo} />
              <Text style={styles.botaoSairTexto}>Encerrar Sessão</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={aoFechar}>
          <View style={styles.backdropTouchable} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
