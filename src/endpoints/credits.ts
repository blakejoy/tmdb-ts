import { BaseEndpoint } from './base';
import { CreditResponse } from '../types/credits';

export class CreditsEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get a movie or TV credit details by ID.
   *
   * @param id - The credit ID.
   * @see https://developer.themoviedb.org/reference/credit-details
   */
  async getById(id: string): Promise<CreditResponse> {
    return await this.api.get<CreditResponse>(`/credit/${id}`);
  }
}
