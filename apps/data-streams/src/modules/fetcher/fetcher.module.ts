import { Module } from '@nestjs/common';
import { FetcherService } from './fetcher.service';
import { ProducerModule } from '../producer/producer.module';
import { FetcherController } from './fetcher.controller';

@Module({
  imports: [ProducerModule],
  controllers: [FetcherController],
  providers: [FetcherService],
})
export class FetcherModule {}
