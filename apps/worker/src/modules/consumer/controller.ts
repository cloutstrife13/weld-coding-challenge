import { Controller } from '@nestjs/common';
import { ConsumerService } from './service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';

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
