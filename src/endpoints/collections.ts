import {
  DetailedCollection,
  ImageCollection,
  LanguageOption,
  Translations,
} from '../types';
import { BaseEndpoint } from './base';

const BASE_COLLECTION = '/collection';

export interface CollectionImageSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[],
}

export class CollectionsEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(
    id: number,
    options?: LanguageOption
  ): Promise<DetailedCollection> {
    return await this.api.get<DetailedCollection>(
      `${BASE_COLLECTION}/${id}`,
      options
    );
  }

  async images(id: number, options?: CollectionImageSearchOptions): Promise<ImageCollection> {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<ImageCollection>(
      `${BASE_COLLECTION}/${id}/images`,
      computedOptions
    );
  }

  async translations(
    id: number,
    options?: LanguageOption
  ): Promise<Translations> {
    return await this.api.get<Translations>(
      `${BASE_COLLECTION}/${id}/translations`,
      options
    );
  }
}
