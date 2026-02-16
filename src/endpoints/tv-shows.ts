import { BaseEndpoint } from './base';
import {
  AggregateCredits,
  AlternativeTitles,
  AppendToResponse,
  AppendToResponseTvKey,
  ChangeOption,
  Changes,
  ContentRatings,
  Credits,
  EpisodeGroups,
  ExternalIds,
  Images,
  Keywords,
  LanguageOption,
  LatestTvShows,
  OnTheAir,
  PageOption,
  PopularTvShows,
  Reviews,
  ScreenedTheatrically,
  SeasonDetails,
  SimilarTvShows,
  TimezoneOption,
  TopRatedTvShows,
  Translations,
  TvRecommendations,
  TvShowImageOptions,
  TvShowVideoOptions,
  TvShowChangeValue,
  TvShowDetails,
  TvShowsAiringToday,
  Videos,
  WatchProviders,
} from '../types';

const BASE_TV = '/tv';

export class TvShowsEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get the details of a TV show by ID.
   *
   * @param id - The TV show ID.
   * @param appendToResponse - Additional requests to append to the response (e.g. credits, videos).
   * @param language - ISO 639-1 language code.
   * @see https://developer.themoviedb.org/reference/tv-series-details
   */
  async details<T extends AppendToResponseTvKey[] | undefined>(
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
    return await this.api.get<AppendToResponse<TvShowDetails, T, 'tvShow'>>(
      `${BASE_TV}/${id}`,
      options
    );
  }

  /**
   * Get all of the alternative titles for a TV show.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-alternative-titles
   */
  async alternativeTitles(id: number): Promise<AlternativeTitles> {
    return await this.api.get<AlternativeTitles>(
      `${BASE_TV}/${id}/alternative_titles`
    );
  }

  /**
   * Get the changes for a TV show. By default, only the last 24 hours are returned.
   *
   * @param id - The TV show ID.
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/tv-series-changes
   */
  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<TvShowChangeValue>> {
    return await this.api.get<Changes<TvShowChangeValue>>(
      `${BASE_TV}/${id}/changes`,
      options
    );
  }

  /**
   * Get the content ratings (parental guidelines) for a TV show.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-content-ratings
   */
  async contentRatings(id: number): Promise<ContentRatings> {
    return await this.api.get<ContentRatings>(
      `${BASE_TV}/${id}/content_ratings`
    );
  }

  /**
   * Get the aggregate credits (combined cast and crew) for a TV show.
   *
   * @param id - The TV show ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-series-aggregate-credits
   */
  async aggregateCredits(
    id: number,
    options?: LanguageOption
  ): Promise<AggregateCredits> {
    return await this.api.get<AggregateCredits>(
      `${BASE_TV}/${id}/aggregate_credits`,
      options
    );
  }

  /**
   * Get the cast and crew for a TV show.
   *
   * @param id - The TV show ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/tv-series-credits
   */
  async credits(id: number, options?: LanguageOption): Promise<Credits> {
    return await this.api.get<Credits>(`${BASE_TV}/${id}/credits`, options);
  }

  /**
   * Get the details of a TV show season.
   *
   * @param tvId - The TV show ID.
   * @param seasonNumber - The season number.
   * @see https://developer.themoviedb.org/reference/tv-season-details
   */
  async season(tvId: number, seasonNumber: number): Promise<SeasonDetails> {
    return await this.api.get<SeasonDetails>(
      `${BASE_TV}/${tvId}/season/${seasonNumber}`
    );
  }

  /**
   * Get the episode groups for a TV show.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-episode-groups
   */
  async episodeGroups(id: number): Promise<EpisodeGroups> {
    return await this.api.get<EpisodeGroups>(`${BASE_TV}/${id}/episode_groups`);
  }

  /**
   * Get the external IDs for a TV show (e.g. IMDb, TVDB, Facebook, Instagram, Twitter).
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-external-ids
   */
  async externalIds(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_TV}/${id}/external_ids`);
  }

  /**
   * Get the images that belong to a TV show (posters, backdrops, logos).
   *
   * @param id - The TV show ID.
   * @param options - Language and image language filter options.
   * @see https://developer.themoviedb.org/reference/tv-series-images
   */
  async images(id: number, options?: TvShowImageOptions): Promise<Images> {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(
      `${BASE_TV}/${id}/images`,
      computedOptions
    );
  }

  /**
   * Get the keywords that have been added to a TV show.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-keywords
   */
  async keywords(id: number): Promise<Keywords> {
    return await this.api.get<Keywords>(`${BASE_TV}/${id}/keywords`);
  }

  /**
   * Get a list of recommended TV shows for a TV show.
   *
   * @param id - The TV show ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/tv-series-recommendations
   */
  async recommendations(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<TvRecommendations> {
    return await this.api.get<TvRecommendations>(
      `${BASE_TV}/${id}/recommendations`,
      options
    );
  }

  /**
   * Get the user reviews for a TV show.
   *
   * @param id - The TV show ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/tv-series-reviews
   */
  async reviews(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Reviews> {
    return await this.api.get<Reviews>(`${BASE_TV}/${id}/reviews`, options);
  }

  /**
   * Get a list of seasons or episodes that have been screened theatrically.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-screened-theatrically
   */
  async screenedTheatrically(id: number): Promise<ScreenedTheatrically> {
    return await this.api.get<ScreenedTheatrically>(
      `${BASE_TV}/${id}/screened_theatrically`
    );
  }

  /**
   * Get a list of similar TV shows. This is not the same as the "Recommendation" system.
   *
   * @param id - The TV show ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/tv-series-similar
   */
  async similar(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<SimilarTvShows> {
    return await this.api.get<SimilarTvShows>(
      `${BASE_TV}/${id}/similar`,
      options
    );
  }

  /**
   * Get the translations for a TV show.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-translations
   */
  async translations(id: number): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_TV}/${id}/translations`);
  }

  /**
   * Get the videos that have been added to a TV show (trailers, teasers, clips, etc.).
   *
   * @param id - The TV show ID.
   * @param options - Language and video language filter options.
   * @see https://developer.themoviedb.org/reference/tv-series-videos
   */
  async videos(id: number, options?: TvShowVideoOptions): Promise<Videos> {
    const computedOptions = {
      include_video_language: options?.include_video_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Videos>(
      `${BASE_TV}/${id}/videos`,
      computedOptions
    );
  }

  /**
   * Get the watch providers (streaming, rent, buy) for a TV show. Powered by JustWatch.
   *
   * @param id - The TV show ID.
   * @see https://developer.themoviedb.org/reference/tv-series-watch-providers
   */
  async watchProviders(id: number): Promise<WatchProviders> {
    return await this.api.get<WatchProviders>(
      `${BASE_TV}/${id}/watch/providers`
    );
  }

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   *
   * @see https://developer.themoviedb.org/reference/tv-series-latest-id
   */
  async latest(): Promise<LatestTvShows> {
    return await this.api.get<LatestTvShows>(`${BASE_TV}/latest`);
  }

  /**
   * Get a list of TV shows that air in the next 7 days.
   *
   * @param options - Page, language, and timezone options.
   * @see https://developer.themoviedb.org/reference/tv-series-on-the-air-list
   */
  async onTheAir(
    options?: PageOption & LanguageOption & TimezoneOption
  ): Promise<OnTheAir> {
    return await this.api.get<OnTheAir>(`${BASE_TV}/on_the_air`, options);
  }

  /**
   * Get a list of TV shows airing today.
   *
   * @param options - Page, language, and timezone options.
   * @see https://developer.themoviedb.org/reference/tv-series-airing-today-list
   */
  async airingToday(
    options?: PageOption & LanguageOption & TimezoneOption
  ): Promise<TvShowsAiringToday> {
    return await this.api.get<TvShowsAiringToday>(
      `${BASE_TV}/airing_today`,
      options
    );
  }

  /**
   * Get a list of TV shows ordered by popularity.
   *
   * @param options - Page and language options.
   * @see https://developer.themoviedb.org/reference/tv-series-popular-list
   */
  async popular(
    options?: PageOption & LanguageOption
  ): Promise<PopularTvShows> {
    return await this.api.get<PopularTvShows>(`${BASE_TV}/popular`, options);
  }

  /**
   * Get a list of TV shows ordered by rating.
   *
   * @param options - Page and language options.
   * @see https://developer.themoviedb.org/reference/tv-series-top-rated-list
   */
  async topRated(
    options?: PageOption & LanguageOption
  ): Promise<TopRatedTvShows> {
    return await this.api.get<TopRatedTvShows>(`${BASE_TV}/top_rated`, options);
  }
}
