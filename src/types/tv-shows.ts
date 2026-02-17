import {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
  LanguageOption,
} from './';

/** A person who created a TV show. */
export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  /** 0 = not set, 1 = female, 2 = male, 3 = non-binary. */
  gender: number;
  profile_path: string;
}

/** The next episode scheduled to air. */
export interface NextEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

/** The most recent episode that has aired. */
export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

/** A TV network that broadcasts a show. */
export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

/** A season summary within TV show details. */
export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

/**
 * Full details for a TV show.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-details
 */
export interface TvShowDetails {
  backdrop_path: string;
  created_by: CreatedBy[];
  /** The running time per episode in minutes. */
  episode_run_time: number[];
  /** First air date in YYYY-MM-DD format. */
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: NextEpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  /** The show's current status (e.g. "Returning Series", "Ended", "Canceled"). */
  status: string;
  tagline: string;
  /** The show's type (e.g. "Scripted", "Reality", "Documentary"). */
  type: string;
  vote_average: number;
  vote_count: number;
}

/** An episode group for a TV show (e.g. alternate episode orderings). */
export interface EpisodeGroup {
  description: string;
  episode_count: number;
  group_count: number;
  id: string;
  name: string;
  network: Network;
  type: number;
}

/**
 * A list of episode groups for a TV show.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-episode-groups
 */
export interface EpisodeGroups {
  results: EpisodeGroup[];
  id: number;
}

/** An episode or season that was screened theatrically. */
export interface ScreenedTheatricallyResult {
  id: number;
  episode_number: number;
  season_number: number;
}

/**
 * A list of episodes/seasons screened theatrically for a TV show.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-screened-theatrically
 */
export interface ScreenedTheatrically {
  id: number;
  results: ScreenedTheatricallyResult[];
}

/** A TV show similar to another TV show. */
export interface SimilarTvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

/** Paginated list of similar TV shows. */
export interface SimilarTvShows {
  page: number;
  results: SimilarTvShow[];
  total_pages: number;
  total_results: number;
}

/** A recommended TV show. */
export interface TvRecommendation {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

/** Paginated list of TV show recommendations. */
export interface TvRecommendations {
  page: number;
  results: TvRecommendation[];
  total_pages: number;
  total_results: number;
}

/** The most recently added TV show on TMDB. */
export interface LatestTvShows {
  backdrop_path?: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompany[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

/** A TV show airing within the next 7 days. */
export interface OnTheAirResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

/**
 * Paginated list of TV shows airing within the next 7 days.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-on-the-air-list
 */
export interface OnTheAir {
  page: number;
  results: OnTheAirResult[];
  total_results: number;
  total_pages: number;
}

/** A TV show airing today. */
export interface AiringTodayResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

/**
 * Paginated list of TV shows airing today.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-airing-today-list
 */
export interface TvShowsAiringToday {
  page: number;
  results: AiringTodayResult[];
  total_results: number;
  total_pages: number;
}

/** A popular TV show result. */
export interface PopularTvShowResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

/**
 * Paginated list of popular TV shows.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-popular-list
 */
export interface PopularTvShows {
  page: number;
  results: PopularTvShowResult[];
  total_results: number;
  total_pages: number;
}

/** A top-rated TV show result. */
export interface TopRatedTvShowResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

/**
 * Paginated list of top-rated TV shows.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-top-rated-list
 */
export interface TopRatedTvShows {
  page: number;
  results: TopRatedTvShowResult[];
  total_results: number;
  total_pages: number;
}

/** The value type for TV show change entries. */
export interface TvShowChangeValue {
  season_id: number;
  season_number: number;
}

/** Options for querying TV show images. */
export interface TvShowImageOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}

/** Options for querying TV show videos. */
export interface TvShowVideoOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_video_language?: string[];
}
