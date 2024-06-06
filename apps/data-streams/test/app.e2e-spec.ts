import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../src/toggle-message.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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
