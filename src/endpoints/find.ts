import { BaseEndpoint } from './base';
import { ExternalIdOptions, FindResult } from '../types';
import { parseOptions } from '../utils';

export class FindEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async byId(externalId: string, options: ExternalIdOptions): Promise<FindResult> {
    const params = parseOptions(options);
    return await this.api.get<FindResult>(`/find/${externalId}?${params}`);
  }
}
