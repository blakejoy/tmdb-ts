import { NetworkDetails, NetworkImages } from '..';
import { AlternativeNames } from './../types/companies';
import { BaseEndpoint } from './base';

export class NetworksEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  async details(id: number): Promise<NetworkDetails> {
    return await this.api.get<NetworkDetails>(`/network/${id}`);
  }

  async alternativeNames(id: number): Promise<AlternativeNames> {
    return await this.api.get<AlternativeNames>(
      `/network/${id}/alternative_names`
    );
  }

  async images(id: number): Promise<NetworkImages> {
    return await this.api.get<NetworkImages>(`/network/${id}/images`);
  }
}
