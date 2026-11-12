import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Notificacao } from '../models';

// Configura como as notificações são tratadas quando o app está aberto ou em segundo plano
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Cache em memória dos IDs já notificados nativamente nesta sessão (evita duplicações no celular)
const idsNotificados = new Set<number>();

export const AppNotificationService = {
  /**
   * Inicializa o canal de notificações nativo do Android e solicita permissões
   */
  inicializar: async () => {
    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return false;
      }

      // No Android, configura canal com prioridade máxima e som (estilo WhatsApp)
      if (Platform.OS === 'android') {
        try {
          await Notifications.setNotificationChannelAsync('plataforma-notificacoes', {
            name: 'Notificações da Plataforma EAD',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#6C5CE7',
            enableVibrate: true,
            showBadge: true,
          });
        } catch {
          // Em ambientes como Expo Go, o canal padrão é utilizado automaticamente pelo sistema
        }
      }

      return true;
    } catch {
      return false;
    }
  },

  /**
   * Dispara notificação nativa na barra de notificações do celular (com apito e vibração)
   * Possui trava estrita anti-duplicação por ID
   */
  dispararNotificacaoLocal: async (notif: Notificacao) => {
    if (!notif || !notif.id) return;

    // Se já foi disparada nesta sessão, não repete
    if (idsNotificados.has(notif.id)) {
      return;
    }
    idsNotificados.add(notif.id);

    try {
      const extras = typeof notif.dadosExtras === 'object' && notif.dadosExtras !== null ? notif.dadosExtras : {};
      await Notifications.scheduleNotificationAsync({
        content: {
          title: notif.titulo,
          body: notif.mensagem,
          data: { id: notif.id, tipo: notif.tipo, ...extras },
          sound: true,
          priority: Notifications.AndroidNotificationPriority.MAX,
          vibrate: [0, 250, 250, 250],
        },
        trigger: null, // Disparo imediato na barra do sistema
      });
    } catch (error) {
      console.warn('Erro ao disparar notificação nativa no celular:', error);
    }
  },

  /**
   * Limpa o histórico de IDs notificados (útil no logout)
   */
  limparHistorico: () => {
    idsNotificados.clear();
  },
};
