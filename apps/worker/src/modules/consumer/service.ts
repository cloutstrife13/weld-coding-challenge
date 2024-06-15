import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';
import { Injectable, Logger } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class ConsumerService {
  constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  private readonly logger = new Logger(ConsumerService.name);

  acknowledgeMessage(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    channel.ack(originalMessage);
    this.logger.debug('Message acknowledged');
  }

  handleFetcherStateByMessage({ isFetchEnabled }: ToggleFetcherMessageDto) {
    const job = this.schedulerRegistry.getCronJob('fetcher');

    if (isFetchEnabled) {
      job.start();
      this.logger.debug('Activating diachronic fetching of external API');
      return;
    }

    job.stop();
    this.logger.debug('Deactivating diachronic fetching of external API');
  }

  handleToggleFetcherMessage(
    data: ToggleFetcherMessageDto,
    context: RmqContext,
  ) {
    this.acknowledgeMessage(context);
    this.handleFetcherStateByMessage(data);
  }
}
