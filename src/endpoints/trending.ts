import { TrendingMediaType, TimeWindow, TrendingResults, LanguageOption } from '../types';
import { BaseEndpoint } from './base';

export class TrendingEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async trending<T extends TrendingMediaType>(
    mediaType: T,
    timeWindow: TimeWindow,
    options?: LanguageOption
  ): Promise<TrendingResults<T>> {
    return await this.api.get<TrendingResults<T>>(
      `/trending/${mediaType}/${timeWindow}`,
      options
    );
  }
}
