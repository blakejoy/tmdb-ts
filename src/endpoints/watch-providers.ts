import { BaseEndpoint } from './base';
import {
  LanguageOption,
  RegionResult,
  WatchProviderResult,
  WatchRegionOption,
} from '../types';

type ProviderOptions = WatchRegionOption & LanguageOption;

export class WatchProvidersEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get the list of available watch provider regions.
   *
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/watch-providers-available-regions
   */
  async getRegions(options?: LanguageOption): Promise<RegionResult> {
    return await this.api.get<RegionResult>(
      `/watch/providers/regions`,
      options
    );
  }

  /**
   * Get the list of movie watch providers. Powered by JustWatch.
   *
   * @param options - Watch region and language options.
   * @see https://developer.themoviedb.org/reference/watch-providers-movie-list
   */
  async getMovieProviders(
    options?: ProviderOptions
  ): Promise<WatchProviderResult> {
    return await this.api.get<WatchProviderResult>(
      `/watch/providers/movie`,
      options
    );
  }

  /**
   * Get the list of TV show watch providers. Powered by JustWatch.
   *
   * @param options - Watch region and language options.
   * @see https://developer.themoviedb.org/reference/watch-provider-tv-list
   */
  async getTvProviders(
    options?: ProviderOptions
  ): Promise<WatchProviderResult> {
    return await this.api.get<WatchProviderResult>(
      `/watch/providers/tv`,
      options
    );
  }
}
