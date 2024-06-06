import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './producer/producer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [
    ProducerModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/nest'),
    ConsumerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
