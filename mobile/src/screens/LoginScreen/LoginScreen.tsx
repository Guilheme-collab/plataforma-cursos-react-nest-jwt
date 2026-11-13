import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { cores } from '../../styles/theme';
import { styles } from './LoginScreen.styles';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { login, reactivate } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [contaInativa, setContaInativa] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha seu e-mail e sua senha.');
      return;
    }

    try {
      setCarregando(true);
      setMensagemErro(null);
      setContaInativa(false);

      await login(email, senha);
      // AppRoutes detecta user !== null e transiciona de forma limpa e atômica para Principal
    } catch (error: any) {
      console.error('Erro ao autenticar:', error);
      const msg = error.response?.data?.message || 'Falha ao autenticar. Verifique suas credenciais.';
      setMensagemErro(Array.isArray(msg) ? msg[0] : msg);

      if (msg.toLowerCase().includes('inativo') || msg.toLowerCase().includes('excluído')) {
        setContaInativa(true);
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleReativar = async () => {
    try {
      setCarregando(true);
      const mensagem = await reactivate(email, senha);
      Alert.alert('Sucesso', mensagem, [
        { text: 'OK', onPress: () => navigation.replace('Principal') },
      ]);
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Erro ao reativar conta.';
      Alert.alert('Erro', Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.cabecalho}>
            <View style={styles.logo}>
              <Ionicons name="school" size={38} color={cores.branco} />
            </View>
            <Text style={styles.titulo}>Plataforma EAD</Text>
            <Text style={styles.subtitulo}>Acesse sua conta para continuar aprendendo</Text>
          </View>

          <View style={styles.formulario}>
            <View style={styles.grupoInput}>
              <Text style={styles.label}>E-mail</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="seu.email@exemplo.com"
                  placeholderTextColor={cores.cinza}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor={cores.cinza}
                  secureTextEntry={!mostrarSenha}
                  value={senha}
                  onChangeText={setSenha}
                />
                <TouchableOpacity
                  style={styles.botaoOlho}
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                >
                  <Ionicons
                    name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={cores.cinza}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {mensagemErro && (
              <View style={styles.erroContainer}>
                <Text style={styles.erroTexto}>{mensagemErro}</Text>
                {contaInativa && (
                  <TouchableOpacity style={styles.botaoReativar} onPress={handleReativar}>
                    <Text style={styles.botaoReativarTexto}>Reativar Minha Conta Agora</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            <TouchableOpacity
              style={[styles.botao, carregando && styles.botaoDesabilitado]}
              onPress={handleLogin}
              disabled={carregando}
              activeOpacity={0.8}
            >
              {carregando ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <Text style={styles.botaoTexto}>ENTRAR</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>Não tem conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
