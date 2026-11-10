import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { MatriculaService } from '../../services/matricula.service';
import { ProgressoService } from '../../services/progresso.service';
import { CertificadoService } from '../../services/certificado.service';
import { UsuarioService } from '../../services/usuario.service';
import { cores } from '../../styles/theme';
import { styles } from './PerfilScreen.styles';

interface Props {
  navigation: any;
}

export const PerfilScreen: React.FC<Props> = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [totalMatriculas, setTotalMatriculas] = useState(0);
  const [totalAulasConcluidas, setTotalAulasConcluidas] = useState(0);
  const [totalCertificados, setTotalCertificados] = useState(0);

  const carregarEstatisticas = useCallback(async () => {
    if (!user?.id) return;
    try {
      const [matriculasData, progressosData, certificadosData] = await Promise.all([
        MatriculaService.findAll(),
        ProgressoService.findAll(),
        CertificadoService.findAll(),
      ]);

      setTotalMatriculas(matriculasData.filter((m) => m.usuarioId === user.id).length);
      setTotalAulasConcluidas(
        progressosData.filter((p) => p.usuarioId === user.id && p.status === 'Concluído').length
      );
      setTotalCertificados(certificadosData.filter((c) => c.usuarioId === user.id).length);
    } catch (error) {
      console.error('Erro ao carregar estatísticas do perfil:', error);
    }
  }, [user?.id]);

  useEffect(() => {
    carregarEstatisticas();
  }, [carregarEstatisticas]);

  const handleDesativarConta = () => {
    Alert.alert(
      'Desativar Conta',
      'Tem certeza de que deseja desativar sua conta temporariamente? Todo o seu progresso será preservado e você poderá reativá-la quando quiser na tela de Login.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim, Desativar',
          style: 'destructive',
          onPress: async () => {
            if (!user?.id) return;
            try {
              await UsuarioService.desativarConta(user.id);
              await logout();
              navigation.getParent()?.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
              Alert.alert('Conta Desativada', 'Sua conta foi desativada com sucesso.');
            } catch (error: any) {
              Alert.alert('Erro', 'Não foi possível desativar a conta.');
            }
          },
        },
      ]
    );
  };

  const handleSair = () => {
    Alert.alert('Sair da Conta', 'Deseja realmente encerrar sua sessão?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: async () => {
          await logout();
          navigation.getParent()?.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  const getIniciais = (nome?: string) => {
    if (!nome) return 'AL';
    const partes = nome.trim().split(' ');
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Início')}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={22} color={cores.texto} />
        </TouchableOpacity>

        <Text style={styles.titulo}>Meu Perfil</Text>

        <View style={styles.espacadorCabecalho} />
      </View>

      <ScrollView contentContainerStyle={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.cardPerfil}>
          <View style={styles.avatarGrande}>
            <Text style={styles.avatarTextoGrande}>{getIniciais(user?.nomeCompleto)}</Text>
          </View>
          <Text style={styles.nomeUsuario}>{user?.nomeCompleto || 'Aluno'}</Text>
          <Text style={styles.emailUsuario}>{user?.email || 'email@plataforma.com'}</Text>

          <View style={styles.badgeRole}>
            <Text style={styles.badgeRoleTexto}>
              {user?.role === 'ADMIN'
                ? 'Administrador'
                : user?.role === 'INSTRUTOR'
                ? 'Instrutor'
                : 'Aluno da Plataforma'}
            </Text>
          </View>
        </View>

        <View style={styles.cardEstatisticas}>
          <Text style={styles.tituloSecao}>Conquistas e Estatísticas</Text>
          <View style={styles.linhaEstatisticas}>
            <View style={styles.itemEstatistica}>
              <Text style={styles.numeroEstatistica}>{totalMatriculas}</Text>
              <Text style={styles.rotuloEstatistica}>Cursos</Text>
            </View>
            <View style={styles.itemEstatistica}>
              <Text style={styles.numeroEstatistica}>{totalAulasConcluidas}</Text>
              <Text style={styles.rotuloEstatistica}>Aulas Feitas</Text>
            </View>
            <View style={styles.itemEstatistica}>
              <Text style={styles.numeroEstatistica}>{totalCertificados}</Text>
              <Text style={styles.rotuloEstatistica}>Certificados</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardSincronizacao}>
          <View style={styles.iconeSincronizacao}>
            <Ionicons name="cloud-done-outline" size={20} color="#15803D" />
          </View>
          <View style={styles.sincronizacaoInfo}>
            <Text style={styles.sincronizacaoTitulo}>Sincronizado com a Web</Text>
            <Text style={styles.sincronizacaoDescricao}>
              Suas matrículas, aulas e certificados são sincronizados com o painel web em tempo real.
            </Text>
          </View>
        </View>

        <View style={styles.secaoAcoes}>
          <Text style={styles.tituloSecao}>Navegação Rápida</Text>

          <TouchableOpacity
            style={styles.itemAcaoNavegacao}
            onPress={() => navigation.navigate('Matrículas')}
            activeOpacity={0.8}
          >
            <View style={styles.itemAcaoEsquerda}>
              <Ionicons name="school-outline" size={20} color={cores.primaria} />
              <Text style={styles.itemAcaoTexto}>Minhas Matrículas e Cursos</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={cores.cinza} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itemAcaoNavegacao}
            onPress={() => navigation.navigate('Certificados')}
            activeOpacity={0.8}
          >
            <View style={styles.itemAcaoEsquerda}>
              <Ionicons name="ribbon-outline" size={20} color={cores.primaria} />
              <Text style={styles.itemAcaoTexto}>Meus Certificados Conquistados</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={cores.cinza} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itemAcaoNavegacao}
            onPress={() => navigation.navigate('Planos')}
            activeOpacity={0.8}
          >
            <View style={styles.itemAcaoEsquerda}>
              <Ionicons name="card-outline" size={20} color={cores.primaria} />
              <Text style={styles.itemAcaoTexto}>Planos e Assinaturas</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={cores.cinza} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoDesativarConta}
          onPress={handleDesativarConta}
          activeOpacity={0.85}
        >
          <Ionicons name="warning-outline" size={18} color={cores.perigo} />
          <Text style={styles.botaoDesativarTexto}>Desativar Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLogout} onPress={handleSair} activeOpacity={0.85}>
          <Ionicons name="log-out-outline" size={20} color={cores.branco} />
          <Text style={styles.botaoLogoutTexto}>Encerrar Sessão</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
