import {Api} from '../api';

export class BaseEndpoint {
  protected api: Api;

  constructor(protected readonly accessToken: string) {
    this.api = new Api(accessToken);
  }
}
