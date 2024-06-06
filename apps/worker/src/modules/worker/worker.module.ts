import { Module } from '@nestjs/common';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';
import { FetcherModule } from '../fetcher/fetcher.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [FetcherModule, ScheduleModule.forRoot()],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
