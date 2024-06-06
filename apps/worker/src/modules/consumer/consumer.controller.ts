import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ToggleFetcherMessageDto } from 'apps/shared/src/toggle-message.dto';

@Controller()
export class ConsumerController {
  constructor(private readonly ConsumerService: ConsumerService) {}

  @MessagePattern('toggle-fetcher-message')
  toggleFetcher(
    @Payload() data: ToggleFetcherMessageDto,
    @Ctx() context: RmqContext,
  ) {
    this.ConsumerService.handleToggleFetcherMessage(data, context);
  }
}
