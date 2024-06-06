import { AppService } from '../src/modules/app.service';
import { ProducerService } from '../src/modules/producer/producer.service';
import { ToggleFetcherMessageDto } from '../../shared/src/toggle-message.dto';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let app: TestingModule;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
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
      providers: [AppService, ProducerService],
      exports: [ProducerService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('receives a message for changing the fetch status', async () => {
    const input: ToggleFetcherMessageDto = { isFetchEnabled: true };

    const result = await appService.postToggleFetcherMessage(input);

    expect(result).toEqual(input);
  });
});
