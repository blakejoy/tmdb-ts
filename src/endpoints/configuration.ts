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

  /**
   * Query the API configuration details including image base URLs and sizes.
   *
   * @see https://developer.themoviedb.org/reference/configuration-details
   */
  async getApiConfiguration(): Promise<Configuration> {
    return await this.api.get<Configuration>(`/configuration`);
  }

  /**
   * Get the list of countries used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/reference/configuration-countries
   */
  async getCountries(): Promise<CountryConfiguration[]> {
    return await this.api.get<CountryConfiguration[]>(
      `/configuration/countries`
    );
  }

  /**
   * Get the list of languages supported by TMDB.
   *
   * @see https://developer.themoviedb.org/reference/configuration-languages
   */
  async getLanguages(): Promise<LanguageConfiguration[]> {
    return await this.api.get<LanguageConfiguration[]>(
      `/configuration/languages`
    );
  }

  /**
   * Get the list of the jobs and departments used on TMDB.
   *
   * @see https://developer.themoviedb.org/reference/configuration-jobs
   */
  async getJobs(): Promise<JobConfiguration[]> {
    return await this.api.get<JobConfiguration[]>(`/configuration/jobs`);
  }

  /**
   * Get a list of the officially supported translations on TMDB.
   *
   * @see https://developer.themoviedb.org/reference/configuration-primary-translations
   */
  async getPrimaryTranslations(): Promise<string[]> {
    return await this.api.get<string[]>(`/configuration/primary_translations`);
  }

  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/reference/configuration-timezones
   */
  async getTimezones(): Promise<TimezoneConfiguration[]> {
    return await this.api.get<TimezoneConfiguration[]>(
      `/configuration/timezones`
    );
  }
}
