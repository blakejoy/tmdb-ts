import { BaseEndpoint } from './base';
import {
  AlternativeTitles,
  ChangeOptions,
  ContentRatings,
  Credits,
  EpisodeGroups,
  ExternalIds,
  Images,
  Keywords,
  LatestTvShows,
  OnTheAir,
  PopularTvShows,
  Recommendations,
  Reviews,
  ScreenedTheatrically,
  SimilarTvShows,
  TopRatedTvShows,
  Translations,
  TvShowChanges,
  TvShowDetails,
  TvShowsAiringToday,
  Videos,
  WatchProviders,
} from '../types';
import querystring from 'querystring';

const BASE_TV = '/tv';

export class TvShowsEndpoint extends BaseEndpoint{
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number): Promise<TvShowDetails>{
    return await this.api.get<TvShowDetails>(`${BASE_TV}/${id}`);
  }

  async alternativeTitles(id: number): Promise<AlternativeTitles>{
    return await this.api.get<AlternativeTitles>(`${BASE_TV}/${id}/alternative_titles`);
  }

  async changes(id: number, options?: ChangeOptions): Promise<TvShowChanges>{
    const params = querystring.encode(options);
    return await this.api.get<TvShowChanges>(`${BASE_TV}/${id}/changes?${params}`);
  }

  async contentRatings(id: number): Promise<ContentRatings>{
    return await this.api.get<ContentRatings>(`${BASE_TV}/${id}/content_ratings`);
  }

  async credits(id: number): Promise<Credits>{
    return await this.api.get<Credits>(`${BASE_TV}/${id}/credits`);
  }


  async episodeGroups(id: number): Promise<EpisodeGroups>{
    return await this.api.get<EpisodeGroups>(`${BASE_TV}/${id}/episode_groups`);
  }

  async externalIds(id: number): Promise<ExternalIds>{
    return await this.api.get<ExternalIds>(`${BASE_TV}/${id}/external_ids`);
  }

  async images(id: number): Promise<Images>{
    return await this.api.get<Images>(`${BASE_TV}/${id}/images`);
  }

  async keywords(id: number): Promise<Keywords>{
    return await this.api.get<Keywords>(`${BASE_TV}/${id}/keywords`);
  }

  async recommendations(id: number, options?: {page?: number}): Promise<Recommendations>{
    const params = querystring.encode(options);
    return await this.api.get<Recommendations>(`${BASE_TV}/${id}/recommendations?${params}`);
  }

  async reviews(id: number, options?: {page?: number}): Promise<Reviews>{
    const params = querystring.encode(options);
    return await this.api.get<Reviews>(`${BASE_TV}/${id}/reviews?${params}`);
  }

  async screenedTheatrically(id: number, options?: {page?: number}): Promise<ScreenedTheatrically>{
    const params = querystring.encode(options);
    return await this.api.get<ScreenedTheatrically>(`${BASE_TV}/${id}/screened_theatrically`);
  }

  async similar(id: number, options?: {page?: number}): Promise<SimilarTvShows>{
    const params = querystring.encode(options);
    return await this.api.get<SimilarTvShows>(`${BASE_TV}/${id}/similar?${params}`);
  }

  async translations(id: number): Promise<Translations>{
    return await this.api.get<Translations>(`${BASE_TV}/${id}/translations`);
  }

  async videos(id: number): Promise<Videos>{
    return await this.api.get<Videos>(`${BASE_TV}/${id}/videos`);
  }

  /**
     * Powered by JustWatch
     * @param id
     */
  async watchProviders(id: number): Promise<WatchProviders>{
    return await this.api.get<WatchProviders>(`${BASE_TV}/${id}/watch/providers`);
  }

  async latest(): Promise<LatestTvShows>{
    return await this.api.get<LatestTvShows>(`${BASE_TV}/latest`);
  }

  async onTheAir(): Promise<OnTheAir>{
    return await this.api.get<OnTheAir>(`${BASE_TV}/on_the_air`);
  }

  async airingToday(options?: {page?: number, region?: string, language?: string}): Promise<TvShowsAiringToday>{
    const params = querystring.encode(options);
    return await this.api.get<TvShowsAiringToday>(`${BASE_TV}/airing_today?${params}`);
  }

  async popular(options?: {page?: number}): Promise<PopularTvShows>{
    const params = querystring.encode(options);
    return await this.api.get<PopularTvShows>(`${BASE_TV}/popular?${params}`);
  }

  async topRated(options?: {page?: number, region?: string, language?: string}): Promise<TopRatedTvShows>{
    const params = querystring.encode(options);
    return await this.api.get<TopRatedTvShows>(`${BASE_TV}/top_rated?${params}`);
  }

}


