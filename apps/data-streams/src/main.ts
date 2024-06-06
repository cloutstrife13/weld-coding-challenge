import { AppModule } from './modules/app.module';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

const initMicroservice = async (app: INestApplication) => {
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: 'worker_queue',
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.startAllMicroservices();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initMicroservice(app);
  await app.listen(3001);
}
bootstrap();
