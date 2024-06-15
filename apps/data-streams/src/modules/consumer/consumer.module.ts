import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { ResponseModule } from '../response/response.module';

@Module({
  imports: [ResponseModule],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
