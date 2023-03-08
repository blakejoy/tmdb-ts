import { BaseEndpoint } from './base';
import {
  AlternativeTitles,
  ChangeOptions,
  Credits,
  ExternalIds,
  Images,
  Keywords,
  LatestMovie,
  LocaleOptions,
  MovieChanges,
  MovieDetails,
  MovieLists,
  MoviesPlayingNow,
  PageOptions,
  PopularMovies,
  Recommendations,
  ReleaseDates,
  Reviews,
  SimilarMovies,
  TopRatedMovies, Translations,
  UpcomingMovies,
  Videos,
  WatchProviders,
} from '../types';

const BASE_MOVIE = '/movie';

export class MoviesEndpoint extends BaseEndpoint{
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number): Promise<MovieDetails>{
    return await this.api.get<MovieDetails>(`${BASE_MOVIE}/${id}`);
  }

  async alternativeTitles(id: number): Promise<AlternativeTitles>{
    return await this.api.get<AlternativeTitles>(`${BASE_MOVIE}/${id}/alternative_titles`);
  }

  async changes(id: number, options?: ChangeOptions): Promise<MovieChanges>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<MovieChanges>(`${BASE_MOVIE}/${id}/changes?${params}`);
  }

  async credits(id: number): Promise<Credits>{
    return await this.api.get<Credits>(`${BASE_MOVIE}/${id}/credits`);
  }

  async externalIds(id: number): Promise<ExternalIds>{
    return await this.api.get<ExternalIds>(`${BASE_MOVIE}/${id}/external_ids`);
  }

  async images(id: number): Promise<Images>{
    return await this.api.get<Images>(`${BASE_MOVIE}/${id}/images`);
  }

  async keywords(id: number): Promise<Keywords>{
    return await this.api.get<Keywords>(`${BASE_MOVIE}/${id}/keywords`);
  }

  async lists(id: number, options?: PageOptions): Promise<MovieLists>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<MovieLists>(`${BASE_MOVIE}/${id}/lists?${params}`);
  }

  async recommendations(id: number, options?: PageOptions): Promise<Recommendations>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<Recommendations>(`${BASE_MOVIE}/${id}/recommendations?${params}`);
  }

  async releaseDates(id: number): Promise<ReleaseDates>{
    return await this.api.get<ReleaseDates>(`${BASE_MOVIE}/${id}/release_dates`);
  }

  async reviews(id: number, options?: PageOptions): Promise<Reviews>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<Reviews>(`${BASE_MOVIE}/${id}/reviews?${params}`);
  }

  async similar(id: number, options?: PageOptions): Promise<SimilarMovies>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<SimilarMovies>(`${BASE_MOVIE}/${id}/similar?${params}`);
  }

  async translations(id: number): Promise<Translations>{
    return await this.api.get<Translations>(`${BASE_MOVIE}/${id}/translations`);
  }

  async videos(id: number): Promise<Videos>{
    return await this.api.get<Videos>(`${BASE_MOVIE}/${id}/videos`);
  }

  /**
   * Powered by JustWatch
   * @param id
   */
  async watchProviders(id: number): Promise<WatchProviders>{
    return await this.api.get<WatchProviders>(`${BASE_MOVIE}/${id}/watch/providers`);
  }

  async latest(): Promise<LatestMovie>{
    return await this.api.get<LatestMovie>(`${BASE_MOVIE}/latest`);
  }

  async nowPlaying(options?: LocaleOptions): Promise<MoviesPlayingNow>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<MoviesPlayingNow>(`${BASE_MOVIE}/now_playing?${params}`);
  }

  async popular(options?: PageOptions): Promise<PopularMovies>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<PopularMovies>(`${BASE_MOVIE}/popular?${params}`);
  }

  async topRated(options?: LocaleOptions): Promise<TopRatedMovies>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<TopRatedMovies>(`${BASE_MOVIE}/top_rated?${params}`);
  }

  async upcoming(options?: LocaleOptions): Promise<UpcomingMovies>{
    const params = options 
      ? new URLSearchParams(Object.entries(options)).toString() 
      :  '';
    return await this.api.get<UpcomingMovies>(`${BASE_MOVIE}/upcoming?${params}`);
  }
}


