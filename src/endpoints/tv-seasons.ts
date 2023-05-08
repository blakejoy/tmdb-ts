import {
  ChangeOptions,
  Changes,
  Credits,
  ExternalIds,
  Images,
  LanguageOption,
  SeasonDetails,
  SeasonSelection,
  Translations,
  Videos,
} from '..';
import { BaseEndpoint } from './base';

const BASE_SEASON = (seasonSelection: SeasonSelection): string => {
  return `/tv/${seasonSelection.tvShowID}/season/${seasonSelection.seasonNumber}`;
};

export class TvSeasonsEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async details(seasonSelection: SeasonSelection, options: LanguageOption) {
    return await this.api.get<SeasonDetails>(
      `${BASE_SEASON(seasonSelection)}`,
      options
    );
  }

  async aggregateCredits(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<Credits>(
      `${BASE_SEASON(seasonSelection)}/aggregate_credits`,
      options
    );
  }

  async changes(seasonId: number, options: ChangeOptions) {
    return await this.api.get<Changes>(
      `tv/season/${seasonId}/changes`,
      options
    );
  }

  async credits(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<Credits>(
      `${BASE_SEASON(seasonSelection)}/credits`,
      options
    );
  }

  async externalIds(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<ExternalIds>(
      `${BASE_SEASON(seasonSelection)}/external_ids`,
      options
    );
  }

  async images(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<Images>(
      `${BASE_SEASON(seasonSelection)}/images`,
      options
    );
  }

  async videos(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<Videos>(
      `${BASE_SEASON(seasonSelection)}/videos`,
      options
    );
  }

  async translations(
    seasonSelection: SeasonSelection,
    options: LanguageOption
  ) {
    return await this.api.get<Translations>(
      `${BASE_SEASON(seasonSelection)}/translations`,
      options
    );
  }
}
