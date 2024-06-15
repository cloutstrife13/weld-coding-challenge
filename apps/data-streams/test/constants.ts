import { MongooseModule } from '@nestjs/mongoose';
import { ResponseModule } from '../src/modules/response/module';

export const database = 'mongodb://0.0.0.0:27017/test';

export const imports = [MongooseModule.forRoot(database), ResponseModule];
