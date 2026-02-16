import { BaseEndpoint } from './base';
import { ExternalIdOptions, FindResult } from '../types';

export class FindEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Find TMDB objects by an external ID (e.g. IMDb, TVDB, Facebook, Instagram, Twitter).
   *
   * @param id - The external ID to search for.
   * @param options - The external source to search (e.g. imdb_id, tvdb_id).
   * @see https://developer.themoviedb.org/reference/find-by-id
   */
  async byExternalId(
    id: string,
    options: ExternalIdOptions
  ): Promise<FindResult> {
    return await this.api.get<FindResult>(`/find/${id}`, options);
  }
}
