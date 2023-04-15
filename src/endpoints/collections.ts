import {
  DetailedCollection,
  ImageCollection,
  LanguageOption,
  Translations,
} from '../types';
import { BaseEndpoint } from './base';

const BASE_COLLECTION = '/collection';

export class CollectionsEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number, options? : LanguageOption): Promise<DetailedCollection> {
    return await this.api.get<DetailedCollection>(`${BASE_COLLECTION}/${id}`, options);
  }

  async images(id: number, options? : LanguageOption): Promise<ImageCollection> {
    return await this.api.get<ImageCollection>(`${BASE_COLLECTION}/${id}/images`, options);
  }

  async translations(id: number, options? : LanguageOption): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_COLLECTION}/${id}/translations`, options);
  }
}
