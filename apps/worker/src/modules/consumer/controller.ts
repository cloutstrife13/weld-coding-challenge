import { Controller } from '@nestjs/common';
import { ConsumerService } from './service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ToggleFetcherMessageDto } from 'apps/shared/src/toggle-message.dto';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('toggle-fetcher-message')
  toggleFetcher(
    @Payload() data: ToggleFetcherMessageDto,
    @Ctx() context: RmqContext,
  ) {
    this.consumerService.handleToggleFetcherMessage(data, context);
  }
}
