import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../app.service';
import { ToggleFetcherMessageDto } from '../../../../shared/src/toggle-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/fetcher')
  async postToggleFetcherMessage(
    @Body() message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    this.appService.postToggleFetcherMessage(message);

    return message;
  }
}
