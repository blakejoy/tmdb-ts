import {
  Episode,
  EpisodeSelection,
  LanguageOption,
  ChangeOption,
  TvEpisodeCredit,
  ExternalIds,
  Images,
  TvEpisodeTranslations,
  Videos,
  AppendToResponseMovieKey,
  AppendToResponse,
  Changes,
  TvEpisodeChangeValue,
  AppendToResponseTvEpisodeKey,
} from '..';
import { BaseEndpoint } from './base';

const BASE_EPISODE = (episodeSelection: EpisodeSelection): string => {
  return `/tv/${episodeSelection.tvShowID}/season/${episodeSelection.seasonNumber}/episode/${episodeSelection.episodeNumber}`;
};

export interface TvEpisodeImageSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[],
}

export interface TvEpisodeVideoSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_video_language?: string[],
}

export class TvEpisodesEndpoint extends BaseEndpoint {
  constructor(accessToken: string) {
    super(accessToken);
  }

  async details<T extends AppendToResponseTvEpisodeKey[] | undefined>(
    episodeSelection: EpisodeSelection,
    appendToResponse?: T,
    options?: LanguageOption
  ) {
    const combinedOptions = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
      ...options,
    };

    return await this.api.get<
      AppendToResponse<Omit<Episode, 'show_id'>, T, 'tvEpisode'>
    >(`${BASE_EPISODE(episodeSelection)}`, combinedOptions);
  }

  async changes(episodeID: number, options?: ChangeOption) {
    return await this.api.get<Changes<TvEpisodeChangeValue>>(
      `/tv/episode/${episodeID}/changes`,
      options
    );
  }

  async credits(episodeSelection: EpisodeSelection, options?: LanguageOption) {
    return await this.api.get<TvEpisodeCredit>(
      `${BASE_EPISODE(episodeSelection)}/credits`,
      options
    );
  }

  async externalIds(episodeSelection: EpisodeSelection) {
    return await this.api.get<ExternalIds>(
      `${BASE_EPISODE(episodeSelection)}/external_ids`
    );
  }

  async images(episodeSelection: EpisodeSelection, options?: TvEpisodeImageSearchOptions) {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(
      `${BASE_EPISODE(episodeSelection)}/images`,
      computedOptions
    );
  }

  async translations(episodeSelection: EpisodeSelection) {
    return await this.api.get<TvEpisodeTranslations>(
      `${BASE_EPISODE(episodeSelection)}/translations`
    );
  }

  async videos(episodeSelection: EpisodeSelection, options?: TvEpisodeVideoSearchOptions) {
    const computedOptions = {
      include_video_language: options?.include_video_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Videos>(
      `${BASE_EPISODE(episodeSelection)}/videos`,
      computedOptions
    );
  }
}
