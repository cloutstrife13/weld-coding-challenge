import { Module } from '@nestjs/common';
import { ResponseController } from './controller';
import { ResponseService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { Response, ResponseSchema } from './schema';
import { ResponseRepository } from './repository';

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
