import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('publish-response-message')
  toggleFetcher(@Payload() data: unknown, @Ctx() context: RmqContext) {
    this.consumerService.handlePublishResponseMessage(data, context);
  }
}
