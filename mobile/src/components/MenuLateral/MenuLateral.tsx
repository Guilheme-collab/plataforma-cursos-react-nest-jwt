import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
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
    navigation.navigate(nomeRota);
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

  const itensMenu = [
    {
      nome: 'Início',
      icone: 'home-outline' as const,
      iconeAtivo: 'home' as const,
      descricao: 'Catálogo de Cursos',
    },
    {
      nome: 'Matrículas',
      icone: 'school-outline' as const,
      iconeAtivo: 'school' as const,
      descricao: 'Meus Cursos em Andamento',
    },
    {
      nome: 'Planos',
      icone: 'card-outline' as const,
      iconeAtivo: 'card' as const,
      descricao: 'Planos de Acesso',
    },
    {
      nome: 'Certificados',
      icone: 'ribbon-outline' as const,
      iconeAtivo: 'ribbon' as const,
      descricao: 'Certificados Conquistados',
    },
    {
      nome: 'Perfil',
      icone: 'person-outline' as const,
      iconeAtivo: 'person' as const,
      descricao: 'Meu Perfil de Aluno',
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
            {itensMenu.map((item) => {
              const ativo = rotaAtiva === item.nome;
              return (
                <TouchableOpacity
                  key={item.nome}
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
                      size={20}
                      color={ativo ? cores.branco : cores.primaria}
                    />
                  </View>
                  <Text style={[styles.itemMenuTexto, ativo && styles.itemMenuTextoAtivo]}>
                    {item.nome}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={ativo ? cores.primaria : cores.cinza}
                  />
                </TouchableOpacity>
              );
            })}

            <View style={styles.divisor} />

            <View style={styles.statusSincronizacao}>
              <View style={styles.statusDot} />
              <Text style={styles.statusTexto}>Banco de Dados Web Sincronizado</Text>
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
