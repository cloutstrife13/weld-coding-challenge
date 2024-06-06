import { Injectable } from '@nestjs/common';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';
import { ProducerService } from '../producer/producer.service';

@Injectable()
export class FetcherService {
  constructor(private readonly producerService: ProducerService) {}

  postToggleFetcherMessage(
    message: ToggleFetcherMessageDto,
  ): ToggleFetcherMessageDto {
    this.producerService.addFetchOptionToQueue(message);

    return message;
  }
}
