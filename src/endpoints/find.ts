import { BaseEndpoint } from './base';
import { ExternalIdOptions, FindResult } from '../types';

export class FindEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async byId(externalId: string, options: ExternalIdOptions): Promise<FindResult> {
    const params = new URLSearchParams(Object.entries(options)).toString();
    return await this.api.get<FindResult>(`/find/${externalId}?${params}`);
  }
}
