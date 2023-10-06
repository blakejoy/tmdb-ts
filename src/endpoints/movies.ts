import { BaseEndpoint } from './base';
import {
  AlternativeTitles,
  AppendToResponse,
  AppendToResponseMovieKey,
  ChangeOption,
  Changes,
  Credits,
  ExternalIds,
  Images,
  Keywords,
  LanguageOption,
  LatestMovie,
  MovieChangeValue,
  MovieDetails,
  MovieLists,
  MoviesPlayingNow,
  PageOption,
  PopularMovies,
  Recommendations,
  RegionOption,
  ReleaseDates,
  Reviews,
  SimilarMovies,
  TopRatedMovies,
  Translations,
  UpcomingMovies,
  Videos,
  WatchProviders,
} from '../types';

const BASE_MOVIE = '/movie';

export interface MoviesImageSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[],
}

export class MoviesEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details<T extends AppendToResponseMovieKey[] | undefined>(
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

    return await this.api.get<AppendToResponse<MovieDetails, T, 'movie'>>(
      `${BASE_MOVIE}/${id}`,
      options
    );
  }

  async alternativeTitles(id: number): Promise<AlternativeTitles> {
    return await this.api.get<AlternativeTitles>(
      `${BASE_MOVIE}/${id}/alternative_titles`
    );
  }

  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<MovieChangeValue>> {
    return await this.api.get<Changes<MovieChangeValue>>(
      `${BASE_MOVIE}/${id}/changes`,
      options
    );
  }

  async credits(id: number, options?: LanguageOption): Promise<Credits> {
    return await this.api.get<Credits>(`${BASE_MOVIE}/${id}/credits`, options);
  }

  async externalIds(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_MOVIE}/${id}/external_ids`);
  }

  async images(id: number, options?: MoviesImageSearchOptions): Promise<Images> {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(`${BASE_MOVIE}/${id}/images`, computedOptions);
  }

  async keywords(id: number): Promise<Keywords> {
    return await this.api.get<Keywords>(`${BASE_MOVIE}/${id}/keywords`);
  }

  async lists(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<MovieLists> {
    return await this.api.get<MovieLists>(`${BASE_MOVIE}/${id}/lists`, options);
  }

  async recommendations(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Recommendations> {
    return await this.api.get<Recommendations>(
      `${BASE_MOVIE}/${id}/recommendations`,
      options
    );
  }

  async releaseDates(id: number): Promise<ReleaseDates> {
    return await this.api.get<ReleaseDates>(
      `${BASE_MOVIE}/${id}/release_dates`
    );
  }

  async reviews(id: number, options?: LanguageOption & PageOption): Promise<Reviews> {
    return await this.api.get<Reviews>(`${BASE_MOVIE}/${id}/reviews`, options);
  }

  async similar(id: number, options?: LanguageOption & PageOption): Promise<SimilarMovies> {
    return await this.api.get<SimilarMovies>(
      `${BASE_MOVIE}/${id}/similar`,
      options
    );
  }

  async translations(id: number): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_MOVIE}/${id}/translations`);
  }

  async videos(id: number, options?: LanguageOption): Promise<Videos> {
    return await this.api.get<Videos>(`${BASE_MOVIE}/${id}/videos`, options);
  }

  /**
   * Powered by JustWatch
   * @param id
   */
  async watchProviders(id: number): Promise<WatchProviders> {
    return await this.api.get<WatchProviders>(
      `${BASE_MOVIE}/${id}/watch/providers`
    );
  }

  async latest(): Promise<LatestMovie> {
    return await this.api.get<LatestMovie>(`${BASE_MOVIE}/latest`);
  }

  async nowPlaying(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<MoviesPlayingNow> {
    return await this.api.get<MoviesPlayingNow>(
      `${BASE_MOVIE}/now_playing`,
      options
    );
  }

  async popular(options?: LanguageOption & PageOption): Promise<PopularMovies> {
    return await this.api.get<PopularMovies>(`${BASE_MOVIE}/popular`, options);
  }

  async topRated(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<TopRatedMovies> {
    return await this.api.get<TopRatedMovies>(
      `${BASE_MOVIE}/top_rated`,
      options
    );
  }

  async upcoming(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<UpcomingMovies> {
    return await this.api.get<UpcomingMovies>(
      `${BASE_MOVIE}/upcoming`,
      options
    );
  }
}
