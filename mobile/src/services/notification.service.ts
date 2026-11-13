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

// Cache em memória dos IDs já notificados nativamente nesta sessão (evita duplicações no celular)
const idsNotificados = new Set<number>();
let ultimoIdDisparado: number | null = null;
let ultimoTimestampDisparo = 0;
let processandoDisparo = false;

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
   * Possui trava estrita anti-duplicação atômica e identifier único no sistema operacional
   */
  dispararNotificacaoLocal: async (notif: Notificacao) => {
    if (!notif || !notif.id) return;

    const agora = Date.now();
    // Trava estrita: se já disparou esse ID ou se disparou o mesmo ID nos últimos 15 segundos
    if (
      idsNotificados.has(notif.id) ||
      (ultimoIdDisparado === notif.id && agora - ultimoTimestampDisparo < 15000)
    ) {
      return;
    }

    if (processandoDisparo) return;
    processandoDisparo = true;

    idsNotificados.add(notif.id);
    ultimoIdDisparado = notif.id;
    ultimoTimestampDisparo = agora;

    try {
      const extras = typeof notif.dadosExtras === 'object' && notif.dadosExtras !== null ? notif.dadosExtras : {};
      await Notifications.scheduleNotificationAsync({
        identifier: `ead_notif_${notif.id}`,
        content: {
          title: notif.titulo,
          body: notif.mensagem,
          data: { id: notif.id, tipo: notif.tipo, ...extras },
          sound: true,
          priority: Notifications.AndroidNotificationPriority.MAX,
          vibrate: [0, 250, 250, 250],
          ...(Platform.OS === 'android' ? { channelId: 'plataforma-notificacoes' } : {}),
        },
        trigger: null, // Disparo imediato na barra do sistema
      });
    } catch (error) {
      console.warn('Erro ao disparar notificação nativa no celular:', error);
    } finally {
      processandoDisparo = false;
    }
  },

  /**
   * Limpa o histórico de IDs notificados (apenas no logout)
   */
  limparHistorico: () => {
    idsNotificados.clear();
    ultimoIdDisparado = null;
    ultimoTimestampDisparo = 0;
  },
};
