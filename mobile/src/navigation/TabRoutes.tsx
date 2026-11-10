import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { MinhasMatriculasScreen } from '../screens/MinhasMatriculasScreen/MinhasMatriculasScreen';
import { PlanosScreen } from '../screens/PlanosScreen/PlanosScreen';
import { CertificadosScreen } from '../screens/CertificadosScreen/CertificadosScreen';
import { PerfilScreen } from '../screens/PerfilScreen/PerfilScreen';
import { cores } from '../styles/theme';

const Tab = createBottomTabNavigator();

export const TabRoutes: React.FC = () => {
  const insets = useSafeAreaInsets();
  const bottomPadding = insets.bottom > 0 ? insets.bottom : 10;
  const tabHeight = 62 + bottomPadding;

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
          height: tabHeight,
          paddingBottom: bottomPadding,
          paddingTop: 8,
          elevation: 8,
          shadowColor: cores.preto,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 2,
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

          return <Ionicons name={iconName} size={size + 1} color={color} />;
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
