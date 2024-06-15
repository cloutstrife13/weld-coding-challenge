import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from './schema';
import { ResponseParams } from '../../types/response';

@Injectable()
export class ResponseRepository {
  constructor(
    @InjectModel(Response.name)
    private workerResponseModel: Model<Response>,
  ) {}

  private readonly logger = new Logger(ResponseRepository.name);

  async create(workerResponse: ResponseParams): Promise<Response> {
    this.logger.debug('Attempt saving streamed data in database');
    const createdResponse = new this.workerResponseModel(workerResponse);

    const savedResponse = createdResponse.save();
    this.logger.debug('Streamed data saved');

    return savedResponse;
  }

  async find(): Promise<Response[]> {
    this.logger.debug('Attempt finding streamed data in database');
    const responses = await this.workerResponseModel.find();

    this.logger.debug(`${responses.length} entries found`);
    return responses;
  }
}
