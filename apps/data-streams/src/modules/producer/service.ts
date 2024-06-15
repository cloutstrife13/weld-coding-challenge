import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('rabbit-mq-service') private readonly client: ClientProxy,
  ) {}

  private readonly logger = new Logger(ProducerService.name);

  addFetchOptionToQueue(message: ToggleFetcherMessageDto) {
    this.logger.debug('Dispatching fetcher state change to worker');

    this.client.send('toggle-fetcher-message', message).subscribe();
  }
}
