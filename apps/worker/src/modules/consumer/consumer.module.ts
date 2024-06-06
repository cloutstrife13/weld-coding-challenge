import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { FetcherModule } from '../fetcher/fetcher.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [FetcherModule, ScheduleModule.forRoot()],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
