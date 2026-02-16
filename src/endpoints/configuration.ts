import { BaseEndpoint } from './base';
import {
  Configuration,
  CountryConfiguration,
  JobConfiguration,
  LanguageConfiguration,
  TimezoneConfiguration,
} from '../types/configuration';

export class ConfigurationEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  async getApiConfiguration(): Promise<Configuration> {
    return await this.api.get<Configuration>(`/configuration`);
  }

  async getCountries(): Promise<CountryConfiguration[]> {
    return await this.api.get<CountryConfiguration[]>(
      `/configuration/countries`
    );
  }

  async getLanguages(): Promise<LanguageConfiguration[]> {
    return await this.api.get<LanguageConfiguration[]>(
      `/configuration/languages`
    );
  }

  async getJobs(): Promise<JobConfiguration[]> {
    return await this.api.get<JobConfiguration[]>(`/configuration/jobs`);
  }

  async getPrimaryTranslations(): Promise<string[]> {
    return await this.api.get<string[]>(`/configuration/primary_translations`);
  }

  async getTimezones(): Promise<TimezoneConfiguration[]> {
    return await this.api.get<TimezoneConfiguration[]>(
      `/configuration/timezones`
    );
  }
}
