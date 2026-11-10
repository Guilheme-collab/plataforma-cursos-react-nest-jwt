import axios from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export const STORAGE_KEY_API_URL = '@plataforma_api_url';

function resolveDefaultApiUrl(): string {
  if (Platform.OS === 'web') {
    return 'http://localhost:3000';
  }

  // No celular físico via Expo Go, detecta automaticamente o IP do seu computador na rede
  try {
    const hostUri =
      Constants.expoConfig?.hostUri ||
      (Constants as any).manifest?.debuggerHost ||
      (Constants as any).manifest2?.extra?.expoGo?.debuggerHost;
    if (hostUri) {
      const ip = hostUri.split(':')[0];
      if (ip && ip !== 'localhost' && ip !== '127.0.0.1') {
        return `http://${ip}:3000`;
      }
    }
  } catch (e) {
    // fallback
  }

  return Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
}

export const DEFAULT_URL = resolveDefaultApiUrl();

export const api = axios.create({
  baseURL: DEFAULT_URL,
  timeout: 10000,
});

// Interceptor para injetar dinamicamente a URL configurada e o token JWT
api.interceptors.request.use(
  async (config) => {
    try {
      const savedUrl = await AsyncStorage.getItem(STORAGE_KEY_API_URL);
      if (savedUrl && savedUrl.trim()) {
        config.baseURL = savedUrl.trim();
      }

      const token = await AsyncStorage.getItem('@plataforma_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn('Erro ao obter dados do AsyncStorage no interceptor:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta para tratar expiração de sessão
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const setApiBaseUrl = async (url: string): Promise<void> => {
  const cleanUrl = url.trim().replace(/\/+$/, ''); // Remove barras finais
  api.defaults.baseURL = cleanUrl;
  await AsyncStorage.setItem(STORAGE_KEY_API_URL, cleanUrl);
};

export const getApiBaseUrl = async (): Promise<string> => {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY_API_URL);
    if (saved && saved.trim()) {
      return saved.trim();
    }
  } catch (error) {
    console.warn('Erro ao ler URL salva:', error);
  }
  return api.defaults.baseURL || DEFAULT_URL;
};

export const testConnection = async (testUrl: string): Promise<{ success: boolean; message: string }> => {
  try {
    const cleanUrl = testUrl.trim().replace(/\/+$/, '');
    const client = axios.create({ baseURL: cleanUrl, timeout: 5000 });
    // Tenta rota /cursos ou /auth/login
    await client.get('/cursos').catch((err) => {
      // Se retornar 401 Unauthorized, significa que o servidor está vivo e respondendo!
      if (err.response && (err.response.status === 401 || err.response.status === 200)) {
        return;
      }
      throw err;
    });
    return { success: true, message: 'Conexão com o servidor estabelecida com sucesso!' };
  } catch (error: any) {
    const errText = error.response
      ? `Servidor respondeu com código ${error.response.status}`
      : error.code === 'ECONNABORTED'
      ? 'Tempo limite de conexão esgotado (Timeout de 5s)'
      : 'Não foi possível conectar. Verifique o IP, porta e firewall.';
    return { success: false, message: errText };
  }
};
