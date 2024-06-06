import { AppService } from '../src/app.service';
import { ToggleFetcherMessageDto } from '../src/toggle-message.dto';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it('receives a message for changing the fetch status', async () => {
    const input: ToggleFetcherMessageDto = { isFetchEnabled: true };

    const result = await appService.postToggleFetcherMessage(input);

    expect(result).toEqual(input);
  });
});
