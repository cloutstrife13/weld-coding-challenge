import { Module } from '@nestjs/common';
import { ConsumerController } from './controller';
import { ConsumerService } from './service';

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
