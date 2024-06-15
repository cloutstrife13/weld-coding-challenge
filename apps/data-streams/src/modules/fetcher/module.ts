import { Module } from '@nestjs/common';
import { FetcherService } from './service';
import { ProducerModule } from '../producer/module';
import { FetcherController } from './controller';

@Module({
  imports: [ProducerModule],
  controllers: [FetcherController],
  providers: [FetcherService],
})
export class FetcherModule {}
