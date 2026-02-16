import {
  MovieDiscoverResult,
  MovieQueryOptions,
  TvShowDiscoverResult,
  TvShowQueryOptions,
} from '../types';
import { BaseEndpoint } from './base';

const BASE_DISCOVER = '/discover';

export class DiscoverEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Find movies using over 30 filters and sort options.
   *
   * @param options - Filter and sort options for movie discovery.
   * @see https://developer.themoviedb.org/reference/discover-movie
   */
  async movie(options?: MovieQueryOptions): Promise<MovieDiscoverResult> {
    return await this.api.get<MovieDiscoverResult>(
      `${BASE_DISCOVER}/movie`,
      options
    );
  }

  /**
   * Find TV shows using over 30 filters and sort options.
   *
   * @param options - Filter and sort options for TV show discovery.
   * @see https://developer.themoviedb.org/reference/discover-tv
   */
  async tvShow(options?: TvShowQueryOptions): Promise<TvShowDiscoverResult> {
    return await this.api.get<TvShowDiscoverResult>(
      `${BASE_DISCOVER}/tv`,
      options
    );
  }
}
