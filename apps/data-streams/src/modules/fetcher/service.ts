import { Injectable } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';
import { ProducerService } from '../producer/service';

@Injectable()
export class FetcherService {
  constructor(private readonly producerService: ProducerService) {}

  async postToggleFetcherMessage(
    message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    this.producerService.addFetchOptionToQueue(message);

    return message;
  }
}
