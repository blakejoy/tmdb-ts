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
  Recommendations,
  Reviews,
  ScreenedTheatrically,
  SeasonDetails,
  SimilarTvShows,
  TimezoneOption,
  TopRatedTvShows,
  Translations,
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
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

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

  async alternativeTitles(id: number): Promise<AlternativeTitles> {
    return await this.api.get<AlternativeTitles>(
      `${BASE_TV}/${id}/alternative_titles`
    );
  }

  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<TvShowChangeValue>> {
    return await this.api.get<Changes<TvShowChangeValue>>(
      `${BASE_TV}/${id}/changes`,
      options
    );
  }

  async contentRatings(id: number): Promise<ContentRatings> {
    return await this.api.get<ContentRatings>(
      `${BASE_TV}/${id}/content_ratings`
    );
  }

  async aggregateCredits(
    id: number,
    options?: LanguageOption
  ): Promise<AggregateCredits> {
    return await this.api.get<AggregateCredits>(
      `${BASE_TV}/${id}/aggregate_credits`,
      options
    );
  }

  async credits(id: number, options?: LanguageOption): Promise<Credits> {
    return await this.api.get<Credits>(`${BASE_TV}/${id}/credits`, options);
  }

  async season(tvId: number, seasonNumber: number): Promise<SeasonDetails> {
    return await this.api.get<SeasonDetails>(
      `${BASE_TV}/${tvId}/season/${seasonNumber}`
    );
  }

  async episodeGroups(id: number): Promise<EpisodeGroups> {
    return await this.api.get<EpisodeGroups>(`${BASE_TV}/${id}/episode_groups`);
  }

  async externalIds(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_TV}/${id}/external_ids`);
  }

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

  async keywords(id: number): Promise<Keywords> {
    return await this.api.get<Keywords>(`${BASE_TV}/${id}/keywords`);
  }

  async recommendations(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Recommendations> {
    return await this.api.get<Recommendations>(
      `${BASE_TV}/${id}/recommendations`,
      options
    );
  }

  async reviews(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Reviews> {
    return await this.api.get<Reviews>(`${BASE_TV}/${id}/reviews`, options);
  }

  async screenedTheatrically(id: number): Promise<ScreenedTheatrically> {
    return await this.api.get<ScreenedTheatrically>(
      `${BASE_TV}/${id}/screened_theatrically`
    );
  }

  async similar(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<SimilarTvShows> {
    return await this.api.get<SimilarTvShows>(
      `${BASE_TV}/${id}/similar`,
      options
    );
  }

  async translations(id: number): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_TV}/${id}/translations`);
  }

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
   * Powered by JustWatch
   * @param id
   */
  async watchProviders(id: number): Promise<WatchProviders> {
    return await this.api.get<WatchProviders>(
      `${BASE_TV}/${id}/watch/providers`
    );
  }

  async latest(): Promise<LatestTvShows> {
    return await this.api.get<LatestTvShows>(`${BASE_TV}/latest`);
  }

  async onTheAir(
    options?: PageOption & LanguageOption & TimezoneOption
  ): Promise<OnTheAir> {
    return await this.api.get<OnTheAir>(`${BASE_TV}/on_the_air`, options);
  }

  async airingToday(
    options?: PageOption & LanguageOption & TimezoneOption
  ): Promise<TvShowsAiringToday> {
    return await this.api.get<TvShowsAiringToday>(
      `${BASE_TV}/airing_today`,
      options
    );
  }

  async popular(
    options?: PageOption & LanguageOption
  ): Promise<PopularTvShows> {
    return await this.api.get<PopularTvShows>(`${BASE_TV}/popular`, options);
  }

  async topRated(
    options?: PageOption & LanguageOption
  ): Promise<TopRatedTvShows> {
    return await this.api.get<TopRatedTvShows>(`${BASE_TV}/top_rated`, options);
  }
}
