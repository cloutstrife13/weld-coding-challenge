import { Injectable, Logger } from '@nestjs/common';
import { Response } from './response.schema';
import { ResponseRepository } from './response.repository';
import { ResponseParams } from '../../types/response';

@Injectable()
export class ResponseService {
  constructor(private readonly responseRepository: ResponseRepository) {}

  private readonly logger = new Logger(ResponseService.name);

  async getAllResponses(): Promise<Response[]> {
    const responses = await this.responseRepository.find();

    return responses;
  }

  async createResponse(
    responseParams: Omit<ResponseParams, 'dateAdded'>,
  ): Promise<Response> {
    const newResponse: ResponseParams = {
      ...responseParams,
      dateAdded: new Date(),
    };

    const createdResponse = await this.responseRepository.create(newResponse);

    return createdResponse;
  }
}
