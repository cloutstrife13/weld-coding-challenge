import { Injectable } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';
import { ProducerService } from '../producer/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async postToggleFetcherMessage(
    message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    await this.producerService.addFetchOptionToQueue(message);

    return message;
  }
}
