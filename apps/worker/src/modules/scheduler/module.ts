import { Module } from '@nestjs/common';
import { SchedulerService } from './service';
import { FetcherModule } from '../fetcher/module';

@Module({
  imports: [FetcherModule],
  controllers: [],
  providers: [SchedulerService],
})
export class SchedulerModule {}
