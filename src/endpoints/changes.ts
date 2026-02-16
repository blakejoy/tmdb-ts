import { ChangeOption, MediaChanges } from '../types';
import { BaseEndpoint } from './base';

export class ChangeEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get a list of all of the movie IDs that have been changed in the past 24 hours.
   *
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/changes-movie-list
   */
  async movies(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/movie/changes`, options);
  }

  /**
   * Get a list of all of the TV show IDs that have been changed in the past 24 hours.
   *
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/changes-tv-list
   */
  async tvShows(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/tv/changes`, options);
  }

  /**
   * Get a list of all of the person IDs that have been changed in the past 24 hours.
   *
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/changes-people-list
   */
  async person(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/person/changes`, options);
  }
}
