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

  async details(id: number): Promise<CompanyDetails> {
    return await this.api.get<CompanyDetails>(`/company/${id}`);
  }

  async alternativeNames(id: number): Promise<AlternativeNames> {
    return await this.api.get<AlternativeNames>(
      `/company/${id}/alternative_names`
    );
  }

  async images(id: number): Promise<CompanyImages> {
    return await this.api.get<CompanyImages>(`/company/${id}/images`);
  }
}
