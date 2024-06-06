import { Injectable } from '@nestjs/common';
import { ToggleFetcherMessageDto } from './toggle-message.dto';

@Injectable()
export class AppService {
  async postToggleFetcherMessage(
    message: ToggleFetcherMessageDto,
  ): Promise<ToggleFetcherMessageDto> {
    return message;
  }
}
