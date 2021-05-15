import { BaseEndpoint } from './base';
import { Configuration } from '../types/configuration';

export class ConfigurationEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async getCurrent(): Promise<Configuration> {
    return await this.api.get<Configuration>(`/configuration`);
  }

}
