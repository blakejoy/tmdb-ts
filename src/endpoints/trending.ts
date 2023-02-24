import { MediaType, TimeWindow, TrendingResults,  } from '../types';
import { BaseEndpoint } from './base';

export class TrendingEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async trending<T extends MediaType>(mediaType : T, timeWindow: TimeWindow): Promise<TrendingResults<T>> {
    return await this.api.get<TrendingResults<T>>(`/trending/${mediaType}/${timeWindow}`);
  }
}


