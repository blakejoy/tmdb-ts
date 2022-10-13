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

export class WatchProvidersEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async getRegions(language_iso_639_1?: string): Promise<RegionResponse> {
    const params = querystring.encode({ language: language_iso_639_1 });
    return await this.api.get<RegionResponse>(`/watch/providers/regions?${params}`);
  }

  async getMovieProviders(language_iso_639_1?: string, region_iso_3166_1?: string): Promise<WatchProviderResponse> {
    const params = querystring.encode({ language: language_iso_639_1, watch_region: region_iso_3166_1 });
    return await this.api.get<WatchProviderResponse>(`/watch/providers/movie?${params}`);
  }

  async getTvProviders(language_iso_639_1?: string, region_iso_3166_1?: string): Promise<WatchProviderResponse> {
    const params = querystring.encode({ language: language_iso_639_1, watch_region: region_iso_3166_1  });
    return await this.api.get<WatchProviderResponse>(`/watch/providers/tv?${params}`);
  }
}
