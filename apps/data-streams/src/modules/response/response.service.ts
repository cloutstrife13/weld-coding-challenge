import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ResponseService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllResponses(): Promise<unknown[]> {
    const responses = await this.databaseService.find();

    return responses;
  }
}
