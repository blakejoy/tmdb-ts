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

  /**
   * Get the details of a TV season.
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param appendToResponse - Additional requests to append to the response (e.g. credits, images).
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-season-details
   */
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

  /**
   * Get the aggregate credits (combined cast and crew) for a TV season.
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-season-aggregate-credits
   */
  async aggregateCredits(
    seasonSelection: SeasonSelection,
    options?: LanguageOption
  ) {
    return await this.api.get<AggregateCredits>(
      `${BASE_SEASON(seasonSelection)}/aggregate_credits`,
      options
    );
  }

  /**
   * Get the changes for a TV season. By default, only the last 24 hours are returned.
   *
   * @param seasonId - The TV season ID.
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/tv-season-changes-by-id
   */
  async changes(seasonId: number, options?: ChangeOption) {
    return await this.api.get<Changes<TvSeasonChangeValue>>(
      `/tv/season/${seasonId}/changes`,
      options
    );
  }

  /**
   * Get the credits (cast and crew) for a TV season.
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-season-credits
   */
  async credits(seasonSelection: SeasonSelection, options?: LanguageOption) {
    return await this.api.get<Credits>(
      `${BASE_SEASON(seasonSelection)}/credits`,
      options
    );
  }

  /**
   * Get the external IDs for a TV season.
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-season-external-ids
   */
  async externalIds(
    seasonSelection: SeasonSelection,
    options?: LanguageOption
  ) {
    return await this.api.get<ExternalIds>(
      `${BASE_SEASON(seasonSelection)}/external_ids`,
      options
    );
  }

  /**
   * Get the images that belong to a TV season (posters).
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language and image language filter options.
   * @see https://developer.themoviedb.org/reference/tv-season-images
   */
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

  /**
   * Get the videos that have been added to a TV season (trailers, teasers, etc.).
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language and video language filter options.
   * @see https://developer.themoviedb.org/reference/tv-season-videos
   */
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

  /**
   * Get the translations for a TV season.
   *
   * @param seasonSelection - The TV show ID and season number.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-season-translations
   */
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
