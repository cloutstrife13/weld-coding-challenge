import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ToggleFetcherMessageDto } from './toggle-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/fetcher')
  async postToggleFetcherMessage(
    @Body() message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    return this.appService.postToggleFetcherMessage(message);
  }
}
