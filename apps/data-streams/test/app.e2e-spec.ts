import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../shared/src/toggle-message.dto';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from '../src/app.service';
import { ProducerService } from '../src/producer.service';
import { AppController } from '../src/app.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'rabbit-mq-service',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://0.0.0.0:5672'],
              queue: 'datastream_queue',
            },
          },
        ]),
      ],
      controllers: [AppController],
      providers: [AppService, ProducerService],
      exports: [ProducerService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/toggleFetch (POST)', () => {
    const input: ToggleFetcherMessageDto = {
      isFetchEnabled: true,
    };

    return request(app.getHttpServer())
      .post('/fetcher')
      .send(input)
      .expect(201)
      .expect(input);
  });
});
