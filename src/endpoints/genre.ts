import { LanguageOption } from '../types';
import { BaseEndpoint } from './base';

export interface Genres {
  genres: Array<{ id: number; name: string }>;
}

export class GenreEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  async movies(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/movie/list', options);
  }

  async tvShows(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/tv/list', options);
  }
}
