import {
  TrendingMediaType,
  TimeWindow,
  TrendingResults,
  LanguageOption,
  PageOption,
} from '../types';
import { BaseEndpoint } from './base';

export class TrendingEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Get the trending movies, TV shows, or people.
   *
   * @param mediaType - The type of media to get trending results for (all, movie, tv, person).
   * @param timeWindow - The time window for trending results (day or week).
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/trending-all
   */
  async trending<T extends TrendingMediaType>(
    mediaType: T,
    timeWindow: TimeWindow,
    options?: LanguageOption & PageOption
  ): Promise<TrendingResults<T>> {
    return await this.api.get<TrendingResults<T>>(
      `/trending/${mediaType}/${timeWindow}`,
      options
    );
  }
}
