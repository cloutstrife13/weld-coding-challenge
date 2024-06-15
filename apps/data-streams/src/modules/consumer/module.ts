import { Module } from '@nestjs/common';
import { ConsumerController } from './controller';
import { ConsumerService } from './service';
import { ResponseModule } from '../response/module';

@Module({
  imports: [ResponseModule],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
