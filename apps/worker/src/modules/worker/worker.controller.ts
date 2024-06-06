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
  async toggleFetcher(
    @Payload() data: ToggleFetcherMessageDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();

    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const catFacts = await response.json();

    console.log('data', data);
    console.log('cats', catFacts);

    channel.ack(orginalMessage);
  }
}
