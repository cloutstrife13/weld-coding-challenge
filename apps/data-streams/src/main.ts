import { AppModule } from './modules/app/app.module';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

const initMicroservice = async (app: INestApplication) => {
  app.connectMicroservice({});
  await app.startAllMicroservices();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initMicroservice(app);
  await app.listen(3001);
}
bootstrap();
