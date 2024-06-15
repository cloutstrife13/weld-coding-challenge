import { Injectable, Logger } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';
import { ProducerService } from '../producer/service';

@Injectable()
export class FetcherService {
  constructor(private readonly producerService: ProducerService) {}

  private readonly logger = new Logger(ProducerService.name);

  async postToggleFetcherMessage(
    message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    this.logger.debug(
      `Turning fetcher ${message.isFetchEnabled ? 'on' : 'off'}`,
    );

    this.producerService.addFetchOptionToQueue(message);

    return message;
  }
}
