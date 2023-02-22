import { ReviewDetails } from '../types';
import { BaseEndpoint } from './base';

export class ReviewEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async details(id: string): Promise<ReviewDetails> {
    return await this.api.get<ReviewDetails>(`/review/${id}`);
  }
}
