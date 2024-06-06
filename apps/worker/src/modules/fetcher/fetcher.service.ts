import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProducerService } from '../producer/producer.service';

@Injectable()
export class FetcherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly producerService: ProducerService,
  ) {}

  private readonly logger = new Logger(FetcherService.name);

  @Cron(CronExpression.EVERY_5_MINUTES, { name: 'fetcher', disabled: true })
  async handleCron() {
    this.logger.debug('Fetching data from external API every 5th minute');
    const response = await this.httpService.axiosRef.get(
      'https://cat-fact.herokuapp.com/facts',
    );

    const { data } = response;

    this.producerService.addFetchOptionToQueue(data);
  }
}
