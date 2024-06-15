import { Controller } from '@nestjs/common';
import { ConsumerService } from './service';
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
  async toggleFetcher(@Payload() data: unknown, @Ctx() context: RmqContext) {
    await this.consumerService.handlePublishResponseMessage(data, context);
  }
}
