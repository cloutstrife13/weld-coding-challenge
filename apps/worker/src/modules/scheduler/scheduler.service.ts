import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FetcherService } from '../fetcher/fetcher.service';

@Injectable()
export class SchedulerService {
  constructor(private readonly fetcherService: FetcherService) {}

  private readonly logger = new Logger(SchedulerService.name);

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'fetcher', disabled: true })
  async handleCron() {
    this.logger.debug('Fetching data from external API every 5th minute');

    await this.fetcherService.runFetcherAndSendResultToDataStreams();
  }
}
