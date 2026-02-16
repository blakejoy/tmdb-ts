import { BaseEndpoint } from './base';
import { AccountDetails } from '../types/account';

export class AccountEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  async details(): Promise<AccountDetails> {
    return await this.api.get('/account');
  }
}
