import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConsumerModule } from './consumer/consumer.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [ConsumerModule, SchedulerModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
