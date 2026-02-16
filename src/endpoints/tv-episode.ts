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
  include_image_language?: string[];
}

export interface TvEpisodeVideoSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_video_language?: string[];
}

export class TvEpisodesEndpoint extends BaseEndpoint {
  constructor(accessToken: string, customFetch?: typeof fetch) {
    super(accessToken, customFetch);
  }

  /**
   * Get the details of a TV episode.
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @param appendToResponse - Additional requests to append to the response (e.g. credits, images).
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-episode-details
   */
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

  /**
   * Get the changes for a TV episode. By default, only the last 24 hours are returned.
   *
   * @param episodeID - The TV episode ID.
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/tv-episode-changes-by-id
   */
  async changes(episodeID: number, options?: ChangeOption) {
    return await this.api.get<Changes<TvEpisodeChangeValue>>(
      `/tv/episode/${episodeID}/changes`,
      options
    );
  }

  /**
   * Get the credits (cast and crew) for a TV episode.
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-episode-credits
   */
  async credits(episodeSelection: EpisodeSelection, options?: LanguageOption) {
    return await this.api.get<TvEpisodeCredit>(
      `${BASE_EPISODE(episodeSelection)}/credits`,
      options
    );
  }

  /**
   * Get the external IDs for a TV episode.
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @see https://developer.themoviedb.org/reference/tv-episode-external-ids
   */
  async externalIds(episodeSelection: EpisodeSelection) {
    return await this.api.get<ExternalIds>(
      `${BASE_EPISODE(episodeSelection)}/external_ids`
    );
  }

  /**
   * Get the images that belong to a TV episode (stills).
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @param options - Language and image language filter options.
   * @see https://developer.themoviedb.org/reference/tv-episode-images
   */
  async images(
    episodeSelection: EpisodeSelection,
    options?: TvEpisodeImageSearchOptions
  ) {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(
      `${BASE_EPISODE(episodeSelection)}/images`,
      computedOptions
    );
  }

  /**
   * Get the translations for a TV episode.
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @see https://developer.themoviedb.org/reference/tv-episode-translations
   */
  async translations(episodeSelection: EpisodeSelection) {
    return await this.api.get<TvEpisodeTranslations>(
      `${BASE_EPISODE(episodeSelection)}/translations`
    );
  }

  /**
   * Get the videos that have been added to a TV episode (trailers, teasers, clips, etc.).
   *
   * @param episodeSelection - The TV show ID, season number, and episode number.
   * @param options - Language and video language filter options.
   * @see https://developer.themoviedb.org/reference/tv-episode-videos
   */
  async videos(
    episodeSelection: EpisodeSelection,
    options?: TvEpisodeVideoSearchOptions
  ) {
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
