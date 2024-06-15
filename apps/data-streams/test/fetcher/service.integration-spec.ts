import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';
import { FetcherService } from '../../src/modules/fetcher/service';
import { ProducerService } from '../../src/modules/producer/service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';

describe('FetcherService', () => {
  let app: TestingModule;
  let fetcherService: FetcherService;

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
      providers: [FetcherService, ProducerService],
      exports: [ProducerService],
    }).compile();

    fetcherService = app.get<FetcherService>(FetcherService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('receives a message for changing the fetch status', async () => {
    const input: ToggleFetcherMessageDto = { isFetchEnabled: true };

    const result = await fetcherService.postToggleFetcherMessage(input);

    expect(result).toEqual(input);
  });
});
