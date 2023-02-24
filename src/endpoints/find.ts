import { BaseEndpoint } from './base';
import querystring from 'querystring';
import { ExternalIdOptions, FindResult } from '../types';

export class FindEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async byId(externalId: string, options: ExternalIdOptions): Promise<FindResult> {
    const params = querystring.encode(options);
    return await this.api.get<FindResult>(`/find/${externalId}?${params}`);
  }
}
