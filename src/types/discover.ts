import { Movie, TV } from '.';

/** The type of monetization (streaming, rental, etc.) for watch provider filtering. */
export type MonetizationType = 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';

/**
 * Common query options shared between movie and TV show discovery.
 *
 * @see https://developer.themoviedb.org/reference/discover-movie
 * @see https://developer.themoviedb.org/reference/discover-tv
 */
export interface DiscoverQueryOptions {
  /** ISO 639-1 language code. */
  language?: string;
  /** Sort results by the given option. */
  sort_by?: SortOption;
  page?: number;
  /** Filter by minimum vote average. */
  'vote_average.gte'?: number;
  /** Filter by minimum vote count. */
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  'vote_average.lte'?: number;
  /** A comma-separated list of watch provider IDs. Combine with `watch_region`. */
  with_watch_providers?: string;
  /** ISO 3166-1 country code for watch provider filtering. */
  watch_region?: string;
  /** A comma-separated list of company IDs to exclude. */
  without_companies?: string;
  with_watch_monetization_types?: MonetizationType;
  /** Filter by minimum runtime in minutes. */
  'with_runtime.gte'?: number;
  /** Filter by maximum runtime in minutes. */
  'with_runtime.lte'?: number;
  /** A comma-separated list of genre IDs. */
  with_genres?: string;
  /** A comma-separated list of genre IDs to exclude. */
  without_genres?: string;
  /** ISO 639-1 language code for original language filtering. */
  with_original_language?: string;
  /** A comma-separated list of keyword IDs to exclude. */
  without_keywords?: string;
  /** A comma-separated list of keyword IDs. */
  with_keywords?: string;
  /** A comma-separated list of company IDs. */
  with_companies?: string;
  /** Include adult-only results. */
  include_adult?: boolean;
}

/**
 * Query options for discovering movies.
 *
 * @see https://developer.themoviedb.org/reference/discover-movie
 */
export interface MovieQueryOptions extends DiscoverQueryOptions {
  region?: string;
  certification_country?: string;
  certification?: string;
  'certification.lte'?: string;
  'certification.gte'?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  with_release_type?: string;
  year?: number;
  /** A comma-separated list of person IDs (cast). */
  with_cast?: string;
  /** A comma-separated list of person IDs (crew). */
  with_crew?: string;
  /** A comma-separated list of person IDs (cast and crew). */
  with_people?: string;
}

/**
 * Query options for discovering TV shows.
 *
 * @see https://developer.themoviedb.org/reference/discover-tv
 */
export interface TvShowQueryOptions extends DiscoverQueryOptions {
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  first_air_date_year?: number;
  timezone?: string;
  /** A comma-separated list of network IDs. */
  with_networks?: string;
  include_null_first_air_dates?: boolean;
  screened_theatrically?: boolean;
  with_status?: string;
  with_type?: string;
}

/** Available sort options for discover queries. */
export type SortOption =
  | 'first_air_date.asc'
  | 'first_air_date.desc'
  | 'popularity.asc'
  | 'popularity.desc'
  | 'release_date.asc'
  | 'release_date.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'original_title.asc'
  | 'original_title.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc';

/** Paginated movie discover results. */
export interface MovieDiscoverResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

/** Paginated TV show discover results. */
export interface TvShowDiscoverResult {
  page: number;
  results: TV[];
  total_results: number;
  total_pages: number;
}
