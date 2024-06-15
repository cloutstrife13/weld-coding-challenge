import { ResponseRepository } from '../../src/modules/response/repository';
import { Test, TestingModule } from '@nestjs/testing';
import { imports } from '../constants';
import { ResponseParams } from '../../src/types/response';

describe('ResponseRepository', () => {
  let app: TestingModule;
  let responseRepository: ResponseRepository;

  const sampleData = [
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

    responseRepository = app.get<ResponseRepository>(ResponseRepository);
  });

  afterAll(async () => {
    await app.close();
  });

  it('stores an object in MongoDB', async () => {
    const input: ResponseParams = {
      data: sampleData,
      dateAdded: new Date(),
      sourceUrl: 'https://cat-fact.herokuapp.com/facts',
    };

    const result = await responseRepository.create(input);

    expect(result).toEqual(expect.objectContaining(input));
  });

  it('retrieves an object from MongoDB', async () => {
    const input: ResponseParams = {
      data: sampleData,
      dateAdded: expect.any(Date),
      sourceUrl: 'https://cat-fact.herokuapp.com/facts',
    };

    const [result] = await responseRepository.find();

    expect(result).toEqual(expect.objectContaining(input));
  });
});
