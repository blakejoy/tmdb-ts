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
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get collection details by ID.
   *
   * @param id - The collection ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/collection-details
   */
  async details(
    id: number,
    options?: LanguageOption
  ): Promise<CollectionDetails> {
    return await this.api.get<CollectionDetails>(
      `${BASE_COLLECTION}/${id}`,
      options
    );
  }

  /**
   * Get the images that belong to a collection.
   *
   * @param id - The collection ID.
   * @param options - Language and image language filter options.
   * @see https://developer.themoviedb.org/reference/collection-images
   */
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

  /**
   * Get the list of translations for a collection.
   *
   * @param id - The collection ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/collection-translations
   */
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
