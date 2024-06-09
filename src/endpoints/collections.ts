import {
  CollectionDetails,
  CollectionImageOptions,
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

  async details(
    id: number,
    options?: LanguageOption
  ): Promise<CollectionDetails> {
    return await this.api.get<CollectionDetails>(
      `${BASE_COLLECTION}/${id}`,
      options
    );
  }

  async images(
    id: number,
    options?: CollectionImageOptions
  ): Promise<ImageCollection> {
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
