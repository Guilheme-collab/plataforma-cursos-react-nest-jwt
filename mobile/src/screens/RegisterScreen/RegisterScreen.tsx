import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { cores } from '../../styles/theme';
import { styles } from './RegisterScreen.styles';

interface RegisterScreenProps {
  navigation: any;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { register } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollRef = useRef<any>(null);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      scrollRef.current?.scrollToEnd({ animated: true });
    });
    return () => {
      showSub.remove();
    };
  }, []);

  const EMAIL_DOMAIN_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

  const handleCadastrar = async () => {
    setMensagemErro(null);
    setMensagemSucesso(null);

    if (!nomeCompleto.trim()) {
      setMensagemErro('Por favor, informe seu nome completo.');
      return;
    }

    if (nomeCompleto.trim().length < 3) {
      setMensagemErro('O nome completo precisa ter pelo menos 3 caracteres.');
      return;
    }

    if (!email.trim()) {
      setMensagemErro('Por favor, informe seu e-mail.');
      return;
    }

    if (!EMAIL_DOMAIN_REGEX.test(email.trim())) {
      setMensagemErro('Por favor, informe um e-mail com domínio válido (ex: aluno@gmail.com).');
      return;
    }

    if (!senha.trim()) {
      setMensagemErro('Por favor, informe uma senha.');
      return;
    }

    if (senha.trim().length < 6) {
      setMensagemErro('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagemErro('A confirmação de senha não coincide com a senha digitada.');
      return;
    }

    try {
      setCarregando(true);
      await register(nomeCompleto.trim(), email.trim(), senha);
      setMensagemSucesso('🎉 Conta criada com sucesso! Entrando na plataforma...');
      setTimeout(() => {
        try {
          navigation.replace('Principal');
        } catch (e) {
          // AppRoutes troca a pilha automaticamente quando user !== null
        }
      }, 1200);
    } catch (error: any) {
      console.warn('Tentativa de cadastro com erro:', error?.response?.data?.message || error?.message);
      const msg = error.response?.data?.message || 'Erro ao realizar cadastro.';
      setMensagemErro(Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.topoBarra}>
        <TouchableOpacity
          style={styles.botaoVoltarTopo}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color={cores.texto} />
          <Text style={styles.botaoVoltarTopoTexto}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.cabecalho}>
            <View style={styles.iconeCabecalho}>
              <Ionicons name="person-add" size={30} color={cores.primaria} />
            </View>
            <Text style={styles.titulo}>Criar Nova Conta</Text>
            <Text style={styles.subtitulo}>Junte-se à nossa comunidade de alunos</Text>
          </View>

          <View style={styles.formulario}>
            <View style={styles.grupoInput}>
              <Text style={styles.label}>Nome Completo</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome completo"
                  placeholderTextColor={cores.cinza}
                  autoCapitalize="words"
                  value={nomeCompleto}
                  onChangeText={setNomeCompleto}
                />
              </View>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>E-mail</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="aluno@exemplo.com"
                  placeholderTextColor={cores.cinza}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Senha (mínimo 6 caracteres)</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  placeholderTextColor={cores.cinza}
                  secureTextEntry={!mostrarSenha}
                  value={senha}
                  onChangeText={setSenha}
                  onFocus={() => {
                    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
                    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 350);
                  }}
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

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Confirmar Senha</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color={cores.cinza} />
                <TextInput
                  style={styles.input}
                  placeholder="Repita a senha digitada"
                  placeholderTextColor={cores.cinza}
                  secureTextEntry={!mostrarConfirmar}
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  onFocus={() => {
                    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
                    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 350);
                  }}
                />
                <TouchableOpacity
                  style={styles.botaoOlho}
                  onPress={() => setMostrarConfirmar(!mostrarConfirmar)}
                >
                  <Ionicons
                    name={mostrarConfirmar ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={cores.cinza}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {mensagemErro && (
              <View style={styles.erroContainer}>
                <Ionicons name="alert-circle-outline" size={18} color="#B91C1C" />
                <Text style={styles.erroTexto}>{mensagemErro}</Text>
              </View>
            )}

            {mensagemSucesso && (
              <View style={styles.sucessoContainer}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#15803D" />
                <Text style={styles.sucessoTexto}>{mensagemSucesso}</Text>
              </View>
            )}

            <TouchableOpacity
              style={[styles.botao, carregando && styles.botaoDesabilitado]}
              onPress={handleCadastrar}
              disabled={carregando}
              activeOpacity={0.8}
            >
              {carregando ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <Text style={styles.botaoTexto}>CADASTRAR</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>Já possui uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.link}>Faça Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 160 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
