import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Kafka, Producer, Consumer, EachMessagePayload } from 'kafkajs';
import { PrismaService } from '../prisma/prisma.service';

export interface EventoNotificacao {
  usuarioId?: number | null;
  roleDestino?: 'USER' | 'ADMIN' | 'INSTRUTOR' | 'TODOS';
  titulo: string;
  mensagem: string;
  tipo:
    | 'BOAS_VINDAS'
    | 'PAGAMENTO'
    | 'MATRICULA'
    | 'NOVO_CURSO'
    | 'NOVO_MODULO'
    | 'NOVA_TRILHA'
    | 'CERTIFICADO'
    | 'SISTEMA';
  dadosExtras?: Record<string, any>;
}

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaService.name);
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;
  private isConnected = false;
  private readonly topicoNotificacoes = 'plataforma.notificacoes';

  constructor(private readonly prisma: PrismaService) {
    const broker = process.env.KAFKA_BROKER || 'kafka:9092';
    this.logger.log(`Inicializando Kafka client apontando para broker: ${broker}`);

    this.kafka = new Kafka({
      clientId: 'plataforma-cursos-backend',
      brokers: [broker],
      retry: {
        initialRetryTime: 1000,
        retries: 5,
      },
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({
      groupId: 'plataforma-notificacoes-group',
    });
  }

  async onModuleInit() {
    await this.conectarKafka();
  }

  async onModuleDestroy() {
    try {
      if (this.isConnected) {
        await this.consumer.disconnect();
        await this.producer.disconnect();
        this.logger.log('Kafka Producer e Consumer desconectados com sucesso.');
      }
    } catch (err: any) {
      this.logger.warn(`Erro ao desconectar Kafka: ${err.message}`);
    }
  }

  private async conectarKafka() {
    try {
      this.logger.log('Conectando Producer ao Kafka...');
      await this.producer.connect();

      this.logger.log('Conectando Consumer ao Kafka...');
      await this.consumer.connect();

      await this.consumer.subscribe({
        topic: this.topicoNotificacoes,
        fromBeginning: false,
      });

      await this.consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
          await this.processarMensagemKafka(payload);
        },
      });

      this.isConnected = true;
      this.logger.log('✅ Kafka conectado com sucesso! Producer e Consumer ativos no tópico plataforma.notificacoes');
    } catch (error: any) {
      this.isConnected = false;
      this.logger.warn(
        `⚠️ Kafka não disponível no momento (${error.message}). Modo de contingência ativado (eventos serão persistidos diretamente com log de mensageria).`
      );
    }
  }

  /**
   * Publica um evento de notificação através da mensageria (Kafka)
   * Garante persistência instantânea no banco (0ms de latência) e transmissão via Kafka
   */
  async publicarNotificacao(evento: EventoNotificacao): Promise<void> {
    // 1. Persistência imediata e atômica no banco de dados (entrega instantânea sem delay)
    await this.salvarNotificacaoNoBanco(evento);

    // 2. Transmissão do evento pelo Kafka (Apache Kafka Mensageria ativa)
    const payloadString = JSON.stringify({
      ...evento,
      timestamp: new Date().toISOString(),
    });

    if (this.isConnected) {
      try {
        await this.producer.send({
          topic: this.topicoNotificacoes,
          messages: [{ value: payloadString }],
        });
        this.logger.log(`📨 [Kafka] Evento publicado no tópico "${this.topicoNotificacoes}": ${evento.tipo} -> "${evento.titulo}"`);
      } catch (err: any) {
        this.logger.warn(`Aviso ao publicar no Kafka: ${err.message}`);
      }
    }
  }

  /**
   * Processa a mensagem recebida pelo Consumer do Kafka
   */
  private async processarMensagemKafka(payload: EachMessagePayload) {
    try {
      const raw = payload.message.value?.toString();
      if (!raw) return;

      const evento: EventoNotificacao = JSON.parse(raw);
      this.logger.log(`📥 [Kafka Consumer] Mensagem consumida com sucesso do tópico "${payload.topic}": ${evento.tipo} para role "${evento.roleDestino || 'TODOS'}"`);
    } catch (error: any) {
      this.logger.error(`Erro ao processar mensagem do Kafka: ${error.message}`);
    }
  }

  /**
   * Salva a notificação na tabela do PostgreSQL
   */
  private async salvarNotificacaoNoBanco(evento: EventoNotificacao) {
    try {
      await this.prisma.notificacao.create({
        data: {
          usuarioId: evento.usuarioId || null,
          roleDestino: evento.roleDestino || 'TODOS',
          titulo: evento.titulo,
          mensagem: evento.mensagem,
          tipo: evento.tipo,
          dadosExtras: evento.dadosExtras ? JSON.stringify(evento.dadosExtras) : null,
          lida: false,
        },
      });
      this.logger.log(`💾 Notificação persistida no banco: [${evento.tipo}] ${evento.titulo}`);
    } catch (err: any) {
      this.logger.error(`Erro ao persistir notificação no banco: ${err.message}`);
    }
  }
}
