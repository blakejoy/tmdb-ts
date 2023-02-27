import { DetailedCollection, ImageCollection, LanguageOption, PageOption, Translations } from '../types';
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

  async images(id: number, options? : LanguageOption): Promise<ImageCollection> {
    const params = querystring.encode(options);
    return await this.api.get<ImageCollection>(`${BASE_COLLECTION}/${id}/images?${params}`);
  }

  async translations(id: number, options? : LanguageOption): Promise<Translations> {
    const params = querystring.encode(options);
    return await this.api.get<Translations>(`${BASE_COLLECTION}/${id}/translations?${params}`);
  }

}