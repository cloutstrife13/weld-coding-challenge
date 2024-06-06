import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { ConsumerModule } from './modules/consumer/consumer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'datastream_queue',
        noAck: false,
        prefetchCount: 1,
      },
    },
  );
  app.listen();
}
bootstrap();
