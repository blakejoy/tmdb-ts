import { BaseEndpoint } from './base';
import { Certifications } from '../types/certification';

export class CertificationEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get an up-to-date list of the officially supported movie certifications on TMDB.
   *
   * @see https://developer.themoviedb.org/reference/certification-movie-list
   */
  async movies(): Promise<Certifications> {
    return await this.api.get<Certifications>('/certification/movie/list');
  }

  /**
   * Get an up-to-date list of the officially supported TV show certifications on TMDB.
   *
   * @see https://developer.themoviedb.org/reference/certifications-tv-list
   */
  async tvShows(): Promise<Certifications> {
    return await this.api.get<Certifications>('/certification/tv/list');
  }
}
