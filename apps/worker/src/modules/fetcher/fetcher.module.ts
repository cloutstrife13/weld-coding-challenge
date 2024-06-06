import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetcherService } from './fetcher.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [FetcherService],
})
export class FetcherModule {}
