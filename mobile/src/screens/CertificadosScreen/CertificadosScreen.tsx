import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { CertificadoService } from '../../services/certificado.service';
import { CursoService } from '../../services/curso.service';
import { Certificado, Curso } from '../../models';
import { cores } from '../../styles/theme';
import { styles } from './CertificadosScreen.styles';
import { voltarOuIrParaInicio } from '../../utils/navigation';

interface ItemCertificadoComCurso {
  certificado: Certificado;
  curso?: Curso;
}

interface Props {
  navigation: any;
}

export const CertificadosScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [certificados, setCertificados] = useState<ItemCertificadoComCurso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);

  const carregarCertificados = useCallback(async (silencioso = false) => {
    if (!user?.id) return;
    if (!silencioso && certificados.length === 0) setCarregando(true);
    try {
      const [certificadosData, cursosData] = await Promise.all([
        CertificadoService.findAll(),
        CursoService.findAll(),
      ]);

      const meus = certificadosData.filter((c) => c.usuarioId === user.id);
      const vinculados = meus.map((cert) => ({
        certificado: cert,
        curso: cursosData.find((c) => c.id === cert.cursoId),
      }));

      setCertificados(vinculados);
    } catch (error: any) {
      if (error?.response?.status !== 401) {
        console.warn('Erro ao carregar certificados:', error?.message || error);
      }
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, [user?.id]);

  useFocusEffect(
    useCallback(() => {
      carregarCertificados();
    }, [carregarCertificados])
  );

  // Auto-refresh a cada 3 segundos para exibir certificados gerados em tempo real
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      carregarCertificados(true);
    }, 3000);
    return () => clearInterval(interval);
  }, [user, carregarCertificados]);

  const onRefresh = () => {
    setAtualizando(true);
    carregarCertificados();
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
        <View style={styles.cabecalhoLinha}>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => voltarOuIrParaInicio(navigation)}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={20} color={cores.texto} />
          </TouchableOpacity>
          <Text style={styles.titulo}>Meus Certificados</Text>
          <View style={styles.espacadorCabecalho} />
        </View>
        <Text style={styles.subtitulo}>Diplomas de conclusão conquistados por você</Text>
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
        {certificados.length === 0 ? (
          <View style={styles.estadoVazio}>
            <View style={styles.iconeVazio}>
              <Ionicons name="ribbon-outline" size={38} color={cores.aviso} />
            </View>
            <Text style={styles.vazioTitulo}>Nenhum certificado emitido</Text>
            <Text style={styles.vazioDescricao}>
              Conclua 100% das aulas de qualquer curso matriculado para desbloquear seu certificado oficial.
            </Text>
          </View>
        ) : (
          certificados.map(({ certificado, curso }) => (
            <View key={certificado.id} style={styles.cardCertificado}>
              <View style={styles.certificadoBordaInterna}>
                <View style={styles.iconeBrasao}>
                  <Ionicons name="medal" size={32} color={cores.aviso} />
                </View>

                <Text style={styles.textoCertifica}>Certificado de Conclusão</Text>
                <Text style={styles.textoConclusao}>Certificamos que</Text>
                <Text style={styles.nomeAlunoCertificado}>
                  {user?.nomeCompleto || 'Aluno da Plataforma'}
                </Text>
                <Text style={styles.textoConclusao}>concluiu com êxito o curso</Text>
                <Text style={styles.nomeCursoCertificado}>
                  {curso?.titulo || 'Curso Especializado'}
                </Text>

                <View style={styles.divisorCertificado} />

                <View style={styles.rodapeCertificado}>
                  <View style={styles.blocoInfoCertificado}>
                    <Text style={styles.rotuloInfo}>Carga Horária</Text>
                    <Text style={styles.valorInfo}>{curso?.totalHoras || 0} horas</Text>
                  </View>
                  <View style={styles.blocoInfoCertificado}>
                    <Text style={styles.rotuloInfo}>Data de Emissão</Text>
                    <Text style={styles.valorInfo}>
                      {new Date(certificado.dataEmissao).toLocaleDateString('pt-BR')}
                    </Text>
                  </View>
                </View>

                <View style={styles.codigoVerificacaoCaixa}>
                  <Text style={styles.rotuloInfo}>Código de Verificação Único</Text>
                  <Text style={styles.codigoVerificacaoTexto}>
                    {certificado.codigoVerificacao}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
