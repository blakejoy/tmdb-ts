import { BaseEndpoint } from './base';
import {
  AlternativeTitles,
  AppendToResponse,
  AppendToResponseMovieKeys,
  ChangeOptions,
  Changes,
  Credits,
  ExternalIds,
  Images,
  Keywords,
  LanguageOption,
  LatestMovie,
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

export class MoviesEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details<T extends AppendToResponseMovieKeys[] | undefined>(
    id: number,
    appendToResponse?: T
  ) {
    const options = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
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

  async changes(id: number, options?: ChangeOptions): Promise<Changes> {
    return await this.api.get<Changes>(`${BASE_MOVIE}/${id}/changes`, options);
  }

  async credits(id: number): Promise<Credits> {
    return await this.api.get<Credits>(`${BASE_MOVIE}/${id}/credits`);
  }

  async externalIds(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_MOVIE}/${id}/external_ids`);
  }

  async images(id: number): Promise<Images> {
    return await this.api.get<Images>(`${BASE_MOVIE}/${id}/images`);
  }

  async keywords(id: number): Promise<Keywords> {
    return await this.api.get<Keywords>(`${BASE_MOVIE}/${id}/keywords`);
  }

  async lists(
    id: number,
    options?: LanguageOption | PageOption
  ): Promise<MovieLists> {
    return await this.api.get<MovieLists>(`${BASE_MOVIE}/${id}/lists`, options);
  }

  async recommendations(
    id: number,
    options?: PageOption
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

  async reviews(id: number, options?: PageOption): Promise<Reviews> {
    return await this.api.get<Reviews>(`${BASE_MOVIE}/${id}/reviews`, options);
  }

  async similar(id: number, options?: PageOption): Promise<SimilarMovies> {
    return await this.api.get<SimilarMovies>(
      `${BASE_MOVIE}/${id}/similar`,
      options
    );
  }

  async translations(id: number): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_MOVIE}/${id}/translations`);
  }

  async videos(id: number): Promise<Videos> {
    return await this.api.get<Videos>(`${BASE_MOVIE}/${id}/videos`);
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

  async popular(options?: PageOption): Promise<PopularMovies> {
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
