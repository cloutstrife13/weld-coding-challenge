import { Body, Controller, Get, Post } from '@nestjs/common';
import { FetcherService } from './fetcher.service';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';

@Controller('/fetcher')
export class FetcherController {
  constructor(private readonly fetcherService: FetcherService) {}

  @Post('/on')
  async postEnableToggleFetcherMessage(): Promise<ToggleFetcherMessageDto> {
    const message = this.fetcherService.postToggleFetcherMessage({
      isFetchEnabled: true,
    });

    return message;
  }

  @Post('/off')
  async postDisableToggleFetcherMessage(): Promise<ToggleFetcherMessageDto> {
    const message = this.fetcherService.postToggleFetcherMessage({
      isFetchEnabled: true,
    });

    return message;
  }
}
