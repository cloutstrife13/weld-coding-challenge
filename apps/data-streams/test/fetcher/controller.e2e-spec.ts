import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FetcherService } from '../../src/modules/fetcher/service';
import { ProducerService } from '../../src/modules/producer/service';
import { FetcherController } from '../../src/modules/fetcher/controller';
import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';

describe('FetcherController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
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
      controllers: [FetcherController],
      providers: [FetcherService, ProducerService],
      exports: [ProducerService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/fetcher (POST)', () => {
    const input: ToggleFetcherMessageDto = {
      isFetchEnabled: true,
    };

    return request(app.getHttpServer())
      .post('/fetcher/on')
      .send(input)
      .expect(201)
      .expect(input);
  });
});
