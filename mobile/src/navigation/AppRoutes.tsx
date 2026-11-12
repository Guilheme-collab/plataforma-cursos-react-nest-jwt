import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';
import { TabRoutes } from './TabRoutes';
import { CursoDetalhesScreen } from '../screens/CursoDetalhesScreen/CursoDetalhesScreen';
import { AulaPlayerScreen } from '../screens/AulaPlayerScreen/AulaPlayerScreen';
import { CertificadosScreen } from '../screens/CertificadosScreen/CertificadosScreen';
import { PlanosScreen } from '../screens/PlanosScreen/PlanosScreen';
import { MinhasMatriculasScreen } from '../screens/MinhasMatriculasScreen/MinhasMatriculasScreen';
import { MinhaAssinaturaScreen } from '../screens/MinhaAssinaturaScreen/MinhaAssinaturaScreen';
import { ProgressoScreen } from '../screens/ProgressoScreen/ProgressoScreen';
import { MinhasAvaliacoesScreen } from '../screens/MinhasAvaliacoesScreen/MinhasAvaliacoesScreen';
import { PerfilScreen } from '../screens/PerfilScreen/PerfilScreen';
import { useAuth } from '../contexts/AuthContext';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { cores } from '../styles/theme';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cores.fundo,
  },
});

export const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={cores.primaria} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {user ? (
        // Rotas autenticadas do Aluno
        <>
          <Stack.Screen name="Principal" component={TabRoutes} />
          <Stack.Screen name="Início" component={TabRoutes} />
          <Stack.Screen name="CursoDetalhes" component={CursoDetalhesScreen} />
          <Stack.Screen name="AulaPlayer" component={AulaPlayerScreen} />
          <Stack.Screen name="Certificados" component={CertificadosScreen} />
          <Stack.Screen name="Planos" component={PlanosScreen} />
          <Stack.Screen name="Matrículas" component={MinhasMatriculasScreen} />
          <Stack.Screen name="MinhaAssinatura" component={MinhaAssinaturaScreen} />
          <Stack.Screen name="Progresso" component={ProgressoScreen} />
          <Stack.Screen name="Avaliacoes" component={MinhasAvaliacoesScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
        </>
      ) : (
        // Rotas públicas de Autenticação
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registro" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
