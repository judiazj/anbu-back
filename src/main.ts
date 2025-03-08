import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: '*',
<<<<<<< HEAD
    methods: 'GET,HEAD,POST,PUT,DELETE',
=======
    methods: 'GET,POST,PUT,DELETE',
>>>>>>> 79e86572501c37b0f6a12ee7998bb6f54617633b
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Anbu API')
    .setDescription('Esta es la api del grupo secreto mas poderoso de Colombia')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(envs.port);
}
bootstrap();
