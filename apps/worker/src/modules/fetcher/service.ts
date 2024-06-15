import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ProducerService } from '../producer/service';

@Injectable()
export class FetcherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly producerService: ProducerService,
  ) {}

  private readonly logger = new Logger(FetcherService.name);

  async fetchDataFromExternalApi(): Promise<unknown> {
    this.logger.debug('Fetching data from Cat Fact API');

    const response = await this.httpService.axiosRef.get(
      'https://cat-fact.herokuapp.com/facts',
    );

    const { data } = response;

    return data;
  }

  async runFetcherAndSendResultToDataStreams() {
    const data = await this.fetchDataFromExternalApi();

    this.producerService.addFetchOptionToQueue(data);
  }
}
