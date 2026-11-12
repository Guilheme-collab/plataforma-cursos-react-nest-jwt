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
          <Stack.Screen name="CursoDetalhes" component={CursoDetalhesScreen} />
          <Stack.Screen name="AulaPlayer" component={AulaPlayerScreen} />
          <Stack.Screen name="Certificados" component={CertificadosScreen} />
          <Stack.Screen name="Planos" component={PlanosScreen} />
          <Stack.Screen name="Matrículas" component={MinhasMatriculasScreen} />
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
