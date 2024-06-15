import { Module } from '@nestjs/common';
import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Response, ResponseSchema } from './response.schema';
import { ResponseRepository } from './response.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Response.name, schema: ResponseSchema },
    ]),
  ],
  controllers: [ResponseController],
  providers: [ResponseService, ResponseRepository],
  exports: [ResponseService],
})
export class ResponseModule {}
