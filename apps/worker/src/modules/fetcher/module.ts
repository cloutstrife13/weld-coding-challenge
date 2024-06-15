import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProducerModule } from '../producer/module';
import { FetcherService } from './service';

@Module({
  imports: [HttpModule, ProducerModule],
  controllers: [],
  providers: [FetcherService],
  exports: [FetcherService],
})
export class FetcherModule {}
