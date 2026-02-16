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

  /**
   * Get the list of official genres for movies.
   *
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/genre-movie-list
   */
  async movies(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/movie/list', options);
  }

  /**
   * Get the list of official genres for TV shows.
   *
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/genre-tv-list
   */
  async tvShows(options?: LanguageOption): Promise<Genres> {
    return await this.api.get<Genres>('/genre/tv/list', options);
  }
}
