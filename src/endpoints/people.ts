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
  PopularPersons,
  TaggedImages,
  Changes,
  PersonChangeValue,
  LanguageOption,
} from '../types';
import { BaseEndpoint } from './base';

const BASE_PERSON = '/person';

export class PeopleEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async details<T extends AppendToResponsePersonKey[] | undefined>(
    id: number,
    appendToResponse?: T,
    language?: string
  ) {
    const options = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
      language: language
    };
    return await this.api.get<AppendToResponse<PersonDetails, T, 'person'>>(
      `${BASE_PERSON}/${id}`,
      options
    );
  }

  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<PersonChangeValue>> {
    return await this.api.get<Changes<PersonChangeValue>>(
      `${BASE_PERSON}/${id}/changes`,
      options
    );
  }

  async movieCredits(id: number, options?: LanguageOption): Promise<PersonMovieCredit> {
    return await this.api.get<PersonMovieCredit>(
      `${BASE_PERSON}/${id}/movie_credits`,
      options
    );
  }

  async tvShowCredits(id: number, options?: LanguageOption): Promise<PersonTvShowCredit> {
    return await this.api.get<PersonTvShowCredit>(
      `${BASE_PERSON}/${id}/tv_credits`,
      options
    );
  }

  async combinedCredits(id: number, options?: LanguageOption): Promise<PersonCombinedCredits> {
    return await this.api.get<PersonCombinedCredits>(
      `${BASE_PERSON}/${id}/combined_credits`,
      options
    );
  }

  async externalId(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_PERSON}/${id}/external_ids`);
  }

  async images(id: number): Promise<PeopleImages> {
    return await this.api.get<PeopleImages>(`${BASE_PERSON}/${id}/images`);
  }

  async taggedImages(id: number, options?: PageOption): Promise<TaggedImages> {
    return await this.api.get<TaggedImages>(
      `${BASE_PERSON}/${id}/tagged_images`,
      options
    );
  }

  async translation(id: number): Promise<PersonTranslations> {
    return await this.api.get<PersonTranslations>(
      `${BASE_PERSON}/${id}/translations`
    );
  }

  async latest(): Promise<PersonDetails> {
    return await this.api.get<PersonDetails>(`${BASE_PERSON}/latest`);
  }

  async popular(options?: LanguageOption & PageOption): Promise<PopularPersons> {
    return await this.api.get<PopularPersons>(
      `${BASE_PERSON}/popular`,
      options
    );
  }
}
