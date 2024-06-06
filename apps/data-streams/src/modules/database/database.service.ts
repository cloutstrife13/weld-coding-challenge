import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WorkerResponse } from './database.schema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(WorkerResponse.name)
    private workerResponseModel: Model<unknown>,
  ) {}

  async create(workerResponse: unknown): Promise<unknown> {
    const createdResponse = new this.workerResponseModel(workerResponse);
    return createdResponse.save();
  }
}
