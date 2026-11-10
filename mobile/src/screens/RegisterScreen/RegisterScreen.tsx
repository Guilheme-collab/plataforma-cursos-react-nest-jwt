import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
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
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastrar = async () => {
    if (!nomeCompleto.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos do formulário.');
      return;
    }

    if (nomeCompleto.trim().length < 3) {
      Alert.alert('Atenção', 'O nome completo deve conter no mínimo 3 caracteres.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('E-mail inválido', 'Informe um endereço de e-mail válido (ex: aluno@dominio.com).');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Senha muito curta', 'A senha deve possuir no mínimo 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Senhas não coincidem', 'A confirmação de senha é diferente da senha digitada.');
      return;
    }

    try {
      setCarregando(true);
      await register(nomeCompleto.trim(), email.trim(), senha);
      Alert.alert('Conta criada!', 'Seu cadastro foi realizado com sucesso. Bem-vindo!', [
        { text: 'Acessar', onPress: () => navigation.replace('Principal') },
      ]);
    } catch (error: any) {
      console.error('Erro no cadastro:', error);
      const msg = error.response?.data?.message || 'Erro ao realizar cadastro.';
      Alert.alert('Não foi possível cadastrar', Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
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
                  placeholder="seu.email@exemplo.com"
                  placeholderTextColor={cores.cinza}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={styles.linhaSenhas}>
              <View style={styles.colunaMetade}>
                <Text style={styles.label}>Senha</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Mín. 6 dígitos"
                    placeholderTextColor={cores.cinza}
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                  />
                </View>
              </View>

              <View style={styles.colunaMetade}>
                <Text style={styles.label}>Confirmar</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Repita a senha"
                    placeholderTextColor={cores.cinza}
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                  />
                </View>
              </View>
            </View>

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
