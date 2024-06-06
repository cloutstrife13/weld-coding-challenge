import { Controller } from '@nestjs/common';
import { WorkerService } from './worker.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ToggleFetcherMessageDto } from 'apps/shared/src/toggle-message.dto';

@Controller()
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @MessagePattern('toggle-fetcher-message')
  toggleFetcher(
    @Payload() data: ToggleFetcherMessageDto,
    @Ctx() context: RmqContext,
  ) {
    this.workerService.handleToggleFetcherMessage(data, context);
  }
}
