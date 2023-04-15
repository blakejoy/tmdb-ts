import { BaseEndpoint } from './base';
import { CreditResponse } from '../types/credits';

export class CreditsEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async getById(id: string): Promise<CreditResponse> {
    return await this.api.get<CreditResponse>(`/credit/${id}`);
  }
}
