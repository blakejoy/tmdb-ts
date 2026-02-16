import {
  ChangeOption,
  Changes,
  Credits,
  ExternalIds,
  Images,
  LanguageOption,
  TvSeasonChangeValue,
  SeasonDetails,
  SeasonSelection,
  Translations,
  Videos,
  AppendToResponseTvSeasonKey,
  AppendToResponse,
  AggregateCredits,
} from '..';
import { BaseEndpoint } from './base';

const BASE_SEASON = (seasonSelection: SeasonSelection): string => {
  return `/tv/${seasonSelection.tvShowID}/season/${seasonSelection.seasonNumber}`;
};

export interface TvSeasonImageSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}

export interface TvSeasonVideoSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_video_language?: string[];
}

export class TvSeasonsEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  async details<T extends AppendToResponseTvSeasonKey[] | undefined>(
    seasonSelection: SeasonSelection,
    appendToResponse?: T,
    options?: LanguageOption
  ) {
    const combinedOptions = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
      ...options,
    };

    return await this.api.get<AppendToResponse<SeasonDetails, T, 'tvSeason'>>(
      `${BASE_SEASON(seasonSelection)}`,
      combinedOptions
    );
  }

  async aggregateCredits(
    seasonSelection: SeasonSelection,
    options?: LanguageOption
  ) {
    return await this.api.get<AggregateCredits>(
      `${BASE_SEASON(seasonSelection)}/aggregate_credits`,
      options
    );
  }

  async changes(seasonId: number, options?: ChangeOption) {
    return await this.api.get<Changes<TvSeasonChangeValue>>(
      `/tv/season/${seasonId}/changes`,
      options
    );
  }

  async credits(seasonSelection: SeasonSelection, options?: LanguageOption) {
    return await this.api.get<Credits>(
      `${BASE_SEASON(seasonSelection)}/credits`,
      options
    );
  }

  async externalIds(
    seasonSelection: SeasonSelection,
    options?: LanguageOption
  ) {
    return await this.api.get<ExternalIds>(
      `${BASE_SEASON(seasonSelection)}/external_ids`,
      options
    );
  }

  async images(
    seasonSelection: SeasonSelection,
    options?: TvSeasonImageSearchOptions
  ) {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(
      `${BASE_SEASON(seasonSelection)}/images`,
      computedOptions
    );
  }

  async videos(
    seasonSelection: SeasonSelection,
    options?: TvSeasonVideoSearchOptions
  ) {
    const computedOptions = {
      include_video_language: options?.include_video_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Videos>(
      `${BASE_SEASON(seasonSelection)}/videos`,
      computedOptions
    );
  }

  async translations(
    seasonSelection: SeasonSelection,
    options?: LanguageOption
  ) {
    return await this.api.get<Translations>(
      `${BASE_SEASON(seasonSelection)}/translations`,
      options
    );
  }
}
