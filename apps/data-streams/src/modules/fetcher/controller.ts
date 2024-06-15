import { Controller, Post } from '@nestjs/common';
import { FetcherService } from './service';
import { ToggleFetcherMessageDto } from '@cloutstrife13/shared';

@Controller('/fetcher')
export class FetcherController {
  constructor(private readonly fetcherService: FetcherService) {}

  @Post('/on')
  async postEnableToggleFetcherMessage(): Promise<ToggleFetcherMessageDto> {
    const message = await this.fetcherService.postToggleFetcherMessage({
      isFetchEnabled: true,
    });

    return message;
  }

  @Post('/off')
  async postDisableToggleFetcherMessage(): Promise<ToggleFetcherMessageDto> {
    const message = await this.fetcherService.postToggleFetcherMessage({
      isFetchEnabled: false,
    });

    return message;
  }
}
