import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class FetcherService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(FetcherService.name);

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'fetcher', disabled: true })
  async handleCron() {
    const response = await this.httpService.axiosRef.get(
      'https://cat-fact.herokuapp.com/facts',
    );

    const { data } = response;

    console.log(JSON.stringify(data));
  }
}
