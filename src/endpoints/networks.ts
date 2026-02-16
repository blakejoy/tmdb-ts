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

  /**
   * Get the details of a TV network.
   *
   * @param id - The network ID.
   * @see https://developer.themoviedb.org/reference/network-details
   */
  async details(id: number): Promise<NetworkDetails> {
    return await this.api.get<NetworkDetails>(`/network/${id}`);
  }

  /**
   * Get the alternative names of a network.
   *
   * @param id - The network ID.
   * @see https://developer.themoviedb.org/reference/details-copy
   */
  async alternativeNames(id: number): Promise<AlternativeNames> {
    return await this.api.get<AlternativeNames>(
      `/network/${id}/alternative_names`
    );
  }

  /**
   * Get the logos for a TV network.
   *
   * @param id - The network ID.
   * @see https://developer.themoviedb.org/reference/alternative-names-copy
   */
  async images(id: number): Promise<NetworkImages> {
    return await this.api.get<NetworkImages>(`/network/${id}/images`);
  }
}
