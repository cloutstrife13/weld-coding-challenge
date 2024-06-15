import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from './response.schema';
import { ResponseParams } from '../../types/response';

@Injectable()
export class ResponseRepository {
  constructor(
    @InjectModel(Response.name)
    private workerResponseModel: Model<Response>,
  ) {}

  async create(workerResponse: ResponseParams): Promise<Response> {
    const createdResponse = new this.workerResponseModel(workerResponse);
    return createdResponse.save();
  }

  async find(): Promise<Response[]> {
    const responses = this.workerResponseModel.find();
    return responses;
  }
}
