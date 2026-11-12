import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '../models';
import { AuthService } from '../services/auth.service';
import { AppNotificationService } from '../services/notification.service';

interface AuthContextData {
  user: Usuario | null;
  token: string | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (nomeCompleto: string, email: string, pass: string) => Promise<void>;
  reactivate: (email: string, pass: string) => Promise<string>;
  logout: () => Promise<void>;
  updateUserData: (updated: Partial<Usuario>) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedToken = await AsyncStorage.getItem('@plataforma_token');
        const storedUser = await AsyncStorage.getItem('@plataforma_user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Falha ao restaurar sessão salva:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  const login = async (email: string, pass: string) => {
    const data = await AuthService.login(email.trim().toLowerCase(), pass);
    setToken(data.access_token);
    setUser(data.user);
    await AsyncStorage.setItem('@plataforma_token', data.access_token);
    await AsyncStorage.setItem('@plataforma_user', JSON.stringify(data.user));
  };

  const register = async (nomeCompleto: string, email: string, pass: string) => {
    await AuthService.register(nomeCompleto, email.trim().toLowerCase(), pass);
    // Realiza login imediato após cadastro
    await login(email, pass);
  };

  const reactivate = async (email: string, pass: string) => {
    const data = await AuthService.reactivate(email.trim().toLowerCase(), pass);
    setToken(data.access_token);
    setUser(data.user);
    await AsyncStorage.setItem('@plataforma_token', data.access_token);
    await AsyncStorage.setItem('@plataforma_user', JSON.stringify(data.user));
    return data.message || 'Conta reativada com sucesso!';
  };

  const logout = async () => {
    try {
      AppNotificationService.limparHistorico();
      setToken(null);
      setUser(null);
      await AsyncStorage.multiRemove(['@plataforma_token', '@plataforma_user']);
    } catch (error) {
      console.warn('Erro ao limpar sessão:', error);
      AppNotificationService.limparHistorico();
      setToken(null);
      setUser(null);
    }
  };

  const updateUserData = async (updated: Partial<Usuario>) => {
    if (!user) return;
    const newUser = { ...user, ...updated };
    setUser(newUser);
    await AsyncStorage.setItem('@plataforma_user', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        reactivate,
        logout,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
