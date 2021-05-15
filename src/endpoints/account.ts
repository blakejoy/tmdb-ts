import { BaseEndpoint } from './base';

export class AccountEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async details(): Promise<any> {
    return await this.api.get('/account');
  }
}
