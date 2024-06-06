import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';

describe('ConsumerController', () => {
  let ConsumerController: ConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerController],
      providers: [ConsumerService],
    }).compile();

    ConsumerController = app.get<ConsumerController>(ConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
