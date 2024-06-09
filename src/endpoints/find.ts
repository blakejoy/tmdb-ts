import { BaseEndpoint } from './base';
import { ExternalIdOptions, FindResult } from '../types';

export class FindEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async byExternalId(
    id: string,
    options: ExternalIdOptions
  ): Promise<FindResult> {
    return await this.api.get<FindResult>(`/find/${id}`, options);
  }
}
