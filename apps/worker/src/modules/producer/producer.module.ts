import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerService } from '../producer/producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-service',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'],
          queue: 'worker_queue',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}
