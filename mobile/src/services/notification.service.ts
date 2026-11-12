import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Notificacao } from '../models';

// Configura como as notificações são tratadas quando o app está aberto ou em segundo plano
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

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
        console.warn('Permissão de notificações não concedida pelo usuário.');
        return false;
      }

      // No Android, cria canal com prioridade máxima e som (estilo WhatsApp)
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('plataforma-notificacoes', {
          name: 'Notificações da Plataforma EAD',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#6C5CE7',
          sound: 'default',
          enableVibrate: true,
          showBadge: true,
        });
      }

      return true;
    } catch (error) {
      console.warn('Erro ao inicializar notificações nativas:', error);
      return false;
    }
  },

  /**
   * Dispara notificação nativa na barra de notificações do celular (com apito e vibração)
   */
  dispararNotificacaoLocal: async (notif: Notificacao) => {
    try {
      const extras = typeof notif.dadosExtras === 'object' && notif.dadosExtras !== null ? notif.dadosExtras : {};
      await Notifications.scheduleNotificationAsync({
        content: {
          title: notif.titulo,
          body: notif.mensagem,
          data: { id: notif.id, tipo: notif.tipo, ...extras },
          sound: 'default',
          priority: Notifications.AndroidNotificationPriority.MAX,
          vibrate: [0, 250, 250, 250],
        },
        trigger: null, // Disparo imediato na barra do sistema
      });
    } catch (error) {
      console.warn('Erro ao disparar notificação nativa no celular:', error);
    }
  },
};
