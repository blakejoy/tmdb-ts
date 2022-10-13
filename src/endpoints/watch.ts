import { BaseEndpoint } from './base';
import querystring from 'querystring';
import { Region } from '../types/regions';
import { WatchProvider } from '../types';

export interface RegionResponse {
  results: Array<Region>
}

export interface WatchProviderResponse {
  results: Array<WatchProvider>
}

export class WatchEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async getRegions(language?: string): Promise<RegionResponse> {
    const params = querystring.encode({ language: language });
    return await this.api.get<RegionResponse>(`/watch/providers/regions?${params}`);
  }

  async getMovieWatchProviders(language?: string, region?: string): Promise<WatchProviderResponse> {
    const params = querystring.encode({ language: language, watch_region: region  });
    return await this.api.get<WatchProviderResponse>(`/watch/providers/movie?${params}`);
  }

  async getTvWatchProviders(language?: string, region?: string): Promise<WatchProviderResponse> {
    const params = querystring.encode({ language: language, watch_region: region  });
    return await this.api.get<WatchProviderResponse>(`/watch/providers/tv?${params}`);
  }
}
