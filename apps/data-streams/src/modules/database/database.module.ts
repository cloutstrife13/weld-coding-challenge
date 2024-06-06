import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerResponse, WorkerResponseSchema } from './database.schema';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkerResponse.name, schema: WorkerResponseSchema },
    ]),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
