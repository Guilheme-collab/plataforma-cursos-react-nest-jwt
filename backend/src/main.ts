import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  
  const config = new DocumentBuilder()
    .setTitle('Plataforma de Cursos API')
    .setDescription('API completa da Plataforma de Cursos Online com NestJS e Prisma')
    .setVersion('1.0')
    .addTag('usuarios')
    .addTag('categorias')
    .addTag('cursos')
    .addTag('modulos')
    .addTag('aulas')
    .addTag('matriculas')
    .addTag('progresso-aulas')
    .addTag('avaliacoes')
    .addTag('trilhas')
    .addTag('trilhas-cursos')
    .addTag('certificados')
    .addTag('planos')
    .addTag('assinaturas')
    .addTag('pagamentos')
    .addTag('Auth')
    .addBearerAuth()
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000, '0.0.0.0');
  console.log('Application is running on: http://localhost:3000');
  console.log('Swagger documentation: http://localhost:3000/api');
}
bootstrap();
