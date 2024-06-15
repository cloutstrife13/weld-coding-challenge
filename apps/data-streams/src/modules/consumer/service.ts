import { Injectable, Logger } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { ResponseService } from '../response/service';

@Injectable()
export class ConsumerService {
  constructor(private readonly responseService: ResponseService) {}

  private readonly logger = new Logger(ConsumerService.name);

  acknowledgeMessage(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    channel.ack(originalMessage);
    this.logger.debug('Message acknowledged');
  }

  async storeExternalApiResponseInDatabase(data: unknown) {
    await this.responseService.createResponse({
      sourceUrl: 'https://cat-fact.herokuapp.com/facts',
      data,
    });

    this.logger.debug('Response obtained from worker and saved');
  }

  async handlePublishResponseMessage(data: unknown, context: RmqContext) {
    this.acknowledgeMessage(context);
    await this.storeExternalApiResponseInDatabase(data);
  }
}
