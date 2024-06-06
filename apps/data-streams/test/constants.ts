import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '../src/modules/database/database.module';

export const database = 'mongodb://0.0.0.0:27017/test';

export const imports = [MongooseModule.forRoot(database), DatabaseModule];
