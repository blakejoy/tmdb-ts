import { Images } from './../types';
import { CompanyDetails, AlternativeNames } from './../types/companies';
import { BaseEndpoint } from './base';

export class CompaniesEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number): Promise<CompanyDetails> {
    return await this.api.get<CompanyDetails>(`/company/${id}`);
  }

  async alternativeNames(id: number): Promise<AlternativeNames> {
    return await this.api.get<AlternativeNames>(`/company/${id}/alternative_names`);
  }

  async images(id: number): Promise<Images> {
    return await this.api.get<Images>(`/company/${id}/images`);
  }
}
