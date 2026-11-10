import axios from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// No emulador Android, 10.0.2.2 mapeia para o localhost do computador host
const DEFAULT_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export const api = axios.create({
  baseURL: DEFAULT_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('@plataforma_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn('Erro ao obter token do AsyncStorage:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const setApiBaseUrl = (url: string) => {
  api.defaults.baseURL = url;
};

export const getApiBaseUrl = () => api.defaults.baseURL;
