import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { FetcherModule } from '../fetcher/fetcher.module';

@Module({
  imports: [FetcherModule],
  controllers: [],
  providers: [SchedulerService],
})
export class SchedulerModule {}
