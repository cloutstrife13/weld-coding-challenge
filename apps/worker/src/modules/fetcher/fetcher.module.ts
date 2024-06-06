import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetcherService } from './fetcher.service';
import { ProducerModule } from '../producer/producer.module';

@Module({
  imports: [HttpModule, ProducerModule],
  controllers: [],
  providers: [FetcherService],
})
export class FetcherModule {}
