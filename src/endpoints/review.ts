import { ReviewDetails } from '../types';
import { BaseEndpoint } from './base';

export class ReviewEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Retrieve the details of a movie or TV show review.
   *
   * @param id - The review ID.
   * @see https://developer.themoviedb.org/reference/review-details
   */
  async details(id: string): Promise<ReviewDetails> {
    return await this.api.get<ReviewDetails>(`/review/${id}`);
  }
}
