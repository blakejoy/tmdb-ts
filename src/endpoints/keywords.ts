import { BaseEndpoint } from './base';
import { BelongingMovies, Keyword, KeywordsOptions } from '../types';

const BASE_Keyword = '/keyword';

export class KeywordsEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Get the details of a keyword.
   *
   * @param keywordId - The keyword ID.
   * @see https://developer.themoviedb.org/reference/keyword-details
   */
  async details(keywordId: number): Promise<Keyword> {
    return await this.api.get<Keyword>(`${BASE_Keyword}/${keywordId}`);
  }

  /**
   * Get the movies that belong to a keyword.
   *
   * @deprecated Use {@link DiscoverEndpoint.movie} with `with_keywords` instead.
   * @param keywordId - The keyword ID.
   * @param options - Language and pagination options.
   */
  async belongingMovies(
    keywordId: number,
    options?: KeywordsOptions
  ): Promise<BelongingMovies> {
    return await this.api.get<BelongingMovies>(
      `${BASE_Keyword}/${keywordId}/movies`,
      options
    );
  }
}
