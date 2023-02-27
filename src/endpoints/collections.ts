import { DetailedCollection, LanguageOption, PageOption } from '../types';
import {  BaseEndpoint } from './base';
import querystring from 'querystring';

const BASE_COLLECTION = '/collection';

export class CollectionsEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number, options? : LanguageOption): Promise<DetailedCollection> {
    const params = querystring.encode(options);
    return await this.api.get<DetailedCollection>(`${BASE_COLLECTION}/${id}?${params}`);
  }

}