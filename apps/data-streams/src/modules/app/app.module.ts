import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerService } from '../../producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-service',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'],
          queue: 'datastream_queue',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, ProducerService],
  exports: [ProducerService],
})
export class AppModule {}
