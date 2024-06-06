import { Body, Controller, Get } from '@nestjs/common';
import { ResponseService } from './response.service';

@Controller('/response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get()
  async getAllResponses(): Promise<unknown[]> {
    const responses = await this.responseService.getAllResponses();

    return responses;
  }
}
