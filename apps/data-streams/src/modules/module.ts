import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerModule } from './consumer/consumer.module';
import { ResponseModule } from './response/module';
import { FetcherModule } from './fetcher/fetcher.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/nest'),
    FetcherModule,
    ConsumerModule,
    ResponseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
