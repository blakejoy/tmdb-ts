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
} from '..';
import { BaseEndpoint } from './base';

const BASE_SEASON = (seasonSelection: SeasonSelection): string => {
  return `/tv/${seasonSelection.tvShowID}/season/${seasonSelection.seasonNumber}`;
};

export class TvSeasonsEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
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
    return await this.api.get<Credits>(
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

  async images(seasonSelection: SeasonSelection, options?: LanguageOption) {
    return await this.api.get<Images>(
      `${BASE_SEASON(seasonSelection)}/images`,
      options
    );
  }

  async videos(seasonSelection: SeasonSelection, options?: LanguageOption) {
    return await this.api.get<Videos>(
      `${BASE_SEASON(seasonSelection)}/videos`,
      options
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
