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

  async getRegions(options?: LanguageOption): Promise<RegionResult> {
    return await this.api.get<RegionResult>(
      `/watch/providers/regions`,
      options
    );
  }

  async getMovieProviders(
    options?: ProviderOptions
  ): Promise<WatchProviderResult> {
    return await this.api.get<WatchProviderResult>(
      `/watch/providers/movie`,
      options
    );
  }

  async getTvProviders(
    options?: ProviderOptions
  ): Promise<WatchProviderResult> {
    return await this.api.get<WatchProviderResult>(
      `/watch/providers/tv`,
      options
    );
  }
}
