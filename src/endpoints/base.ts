import { Api } from '../api';

export class BaseEndpoint {
  protected api: Api;

  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    this.api = new Api(accessToken, customFetch);
  }
}
