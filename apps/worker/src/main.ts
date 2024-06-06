import { MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    {
      options: {
        port: 3002,
      },
      // Setup communication protocol here
    },
  );
  app.listen();
}
bootstrap();
