import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { MinhasMatriculasScreen } from '../screens/MinhasMatriculasScreen/MinhasMatriculasScreen';
import { PlanosScreen } from '../screens/PlanosScreen/PlanosScreen';
import { CertificadosScreen } from '../screens/CertificadosScreen/CertificadosScreen';
import { PerfilScreen } from '../screens/PerfilScreen/PerfilScreen';
import { cores } from '../styles/theme';

const Tab = createBottomTabNavigator();

export const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: cores.primaria,
        tabBarInactiveTintColor: cores.cinza,
        tabBarStyle: {
          backgroundColor: cores.branco,
          borderTopColor: cores.borda,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle-outline';

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Matrículas') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Planos') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Certificados') {
            iconName = focused ? 'ribbon' : 'ribbon-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Matrículas" component={MinhasMatriculasScreen} />
      <Tab.Screen name="Planos" component={PlanosScreen} />
      <Tab.Screen name="Certificados" component={CertificadosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
};
