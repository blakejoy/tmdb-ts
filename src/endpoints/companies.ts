import {
  CompanyDetails,
  AlternativeNames,
  CompanyImages,
} from './../types/companies';
import { BaseEndpoint } from './base';

export class CompaniesEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get a company's details by ID.
   *
   * @param id - The company ID.
   * @see https://developer.themoviedb.org/reference/company-details
   */
  async details(id: number): Promise<CompanyDetails> {
    return await this.api.get<CompanyDetails>(`/company/${id}`);
  }

  /**
   * Get the alternative names of a company.
   *
   * @param id - The company ID.
   * @see https://developer.themoviedb.org/reference/company-alternative-names
   */
  async alternativeNames(id: number): Promise<AlternativeNames> {
    return await this.api.get<AlternativeNames>(
      `/company/${id}/alternative_names`
    );
  }

  /**
   * Get the logos that belong to a company.
   *
   * @param id - The company ID.
   * @see https://developer.themoviedb.org/reference/company-images
   */
  async images(id: number): Promise<CompanyImages> {
    return await this.api.get<CompanyImages>(`/company/${id}/images`);
  }
}
