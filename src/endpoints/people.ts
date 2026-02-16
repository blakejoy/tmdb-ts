import {
  AppendToResponse,
  AppendToResponsePersonKey,
  ChangeOption,
  ExternalIds,
  PageOption,
  PeopleImages,
  PersonTranslations,
  PersonCombinedCredits,
  PersonDetails,
  PersonMovieCredit,
  PersonTvShowCredit,
  TaggedImages,
  Changes,
  PersonChangeValue,
  LanguageOption,
  PopularPeople,
} from '../types';
import { BaseEndpoint } from './base';

const BASE_PERSON = '/person';

export class PeopleEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Get the primary person details by ID.
   *
   * @param id - The person ID.
   * @param appendToResponse - Additional requests to append to the response (e.g. movie_credits, tv_credits).
   * @param language - ISO 639-1 language code.
   * @see https://developer.themoviedb.org/reference/person-details
   */
  async details<T extends AppendToResponsePersonKey[] | undefined>(
    id: number,
    appendToResponse?: T,
    language?: string
  ) {
    const options = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
      language: language,
    };
    return await this.api.get<AppendToResponse<PersonDetails, T, 'person'>>(
      `${BASE_PERSON}/${id}`,
      options
    );
  }

  /**
   * Get the changes for a person. By default, only the last 24 hours are returned.
   *
   * @param id - The person ID.
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/person-changes
   */
  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<PersonChangeValue>> {
    return await this.api.get<Changes<PersonChangeValue>>(
      `${BASE_PERSON}/${id}/changes`,
      options
    );
  }

  /**
   * Get the movie credits for a person.
   *
   * @param id - The person ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/person-movie-credits
   */
  async movieCredits(
    id: number,
    options?: LanguageOption
  ): Promise<PersonMovieCredit> {
    return await this.api.get<PersonMovieCredit>(
      `${BASE_PERSON}/${id}/movie_credits`,
      options
    );
  }

  /**
   * Get the TV show credits for a person.
   *
   * @param id - The person ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/person-tv-credits
   */
  async tvShowCredits(
    id: number,
    options?: LanguageOption
  ): Promise<PersonTvShowCredit> {
    return await this.api.get<PersonTvShowCredit>(
      `${BASE_PERSON}/${id}/tv_credits`,
      options
    );
  }

  /**
   * Get the combined movie and TV credits for a person.
   *
   * @param id - The person ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/person-combined-credits
   */
  async combinedCredits(
    id: number,
    options?: LanguageOption
  ): Promise<PersonCombinedCredits> {
    return await this.api.get<PersonCombinedCredits>(
      `${BASE_PERSON}/${id}/combined_credits`,
      options
    );
  }

  /**
   * Get the external IDs for a person (e.g. IMDb, Facebook, Instagram, Twitter).
   *
   * @param id - The person ID.
   * @see https://developer.themoviedb.org/reference/person-external-ids
   */
  async externalId(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_PERSON}/${id}/external_ids`);
  }

  /**
   * Get the profile images for a person.
   *
   * @param id - The person ID.
   * @see https://developer.themoviedb.org/reference/person-images
   */
  async images(id: number): Promise<PeopleImages> {
    return await this.api.get<PeopleImages>(`${BASE_PERSON}/${id}/images`);
  }

  /**
   * Get the tagged images for a person.
   *
   * @deprecated
   * @param id - The person ID.
   * @param options - Pagination options.
   * @see https://developer.themoviedb.org/reference/person-tagged-images
   */
  async taggedImages(id: number, options?: PageOption): Promise<TaggedImages> {
    return await this.api.get<TaggedImages>(
      `${BASE_PERSON}/${id}/tagged_images`,
      options
    );
  }

  /**
   * Get the translations for a person.
   *
   * @param id - The person ID.
   * @see https://developer.themoviedb.org/reference/person-translations
   */
  async translation(id: number): Promise<PersonTranslations> {
    return await this.api.get<PersonTranslations>(
      `${BASE_PERSON}/${id}/translations`
    );
  }

  /**
   * Get the most newly created person. This is a live response and will continuously change.
   *
   * @see https://developer.themoviedb.org/reference/person-latest-id
   */
  async latest(): Promise<PersonDetails> {
    return await this.api.get<PersonDetails>(`${BASE_PERSON}/latest`);
  }

  /**
   * Get a list of people ordered by popularity.
   *
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/person-popular-list
   */
  async popular(options?: LanguageOption & PageOption): Promise<PopularPeople> {
    return await this.api.get<PopularPeople>(`${BASE_PERSON}/popular`, options);
  }
}
