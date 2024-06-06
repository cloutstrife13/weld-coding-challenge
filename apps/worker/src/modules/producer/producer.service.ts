import { Inject, Injectable } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('rabbit-mq-service') private readonly client: ClientProxy,
  ) {}

  addFetchOptionToQueue(message: unknown) {
    this.client.send('publish-response-message', message).subscribe();
  }
}
