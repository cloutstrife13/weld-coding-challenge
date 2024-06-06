import { DatabaseService } from '../src/modules/database/database.service';
import { Test, TestingModule } from '@nestjs/testing';
import { imports } from './constants';

describe('DatabaseService', () => {
  let app: TestingModule;
  let databaseService: DatabaseService;

  const input = [
    {
      status: { verified: true, sentCount: 1 },
      _id: '58e00b5f0aac31001185ed24',
      user: '58e007480aac31001185ecef',
      text: 'When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied "cats."',
      __v: 0,
      source: 'user',
      updatedAt: '2020-08-23T20:20:01.611Z',
      type: 'cat',
      createdAt: '2018-02-19T21:20:03.434Z',
      deleted: false,
      used: false,
    },
  ];

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports,
    }).compile();

    databaseService = app.get<DatabaseService>(DatabaseService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('stores an object in MongoDB', async () => {
    const result = await databaseService.create({ data: input });

    expect(result).toEqual(expect.objectContaining({ data: input }));
  });

  it('retrieves an object from MongoDB', async () => {
    const [result] = await databaseService.find();

    expect(result).toEqual(expect.objectContaining({ data: input }));
  });
});
