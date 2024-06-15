import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('rabbit-mq-service') private readonly client: ClientProxy,
  ) {}

  private readonly logger = new Logger(ProducerService.name);

  addFetchOptionToQueue(message: unknown) {
    this.logger.debug('Sending fetched data back to data-streams service');

    this.client.send('publish-response-message', message).subscribe();
  }
}
