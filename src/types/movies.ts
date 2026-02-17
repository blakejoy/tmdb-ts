import {
  CountryCode,
  Genre,
  Movie,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from './';

/** A collection that a movie belongs to (e.g. "The Lord of the Rings Collection"). */
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

/**
 * Full details for a movie.
 *
 * @see https://developer.themoviedb.org/reference/movie-details
 */
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: BelongsToCollection;
  /** The movie's production budget in USD. */
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  /** The IMDb ID, or null if not available. */
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  /** Release date in YYYY-MM-DD format. */
  release_date: string;
  /** The movie's worldwide box office revenue in USD. */
  revenue: number;
  /** Runtime in minutes. */
  runtime: number;
  spoken_languages: SpokenLanguage[];
  /** Release status (e.g. "Released", "Post Production"). */
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * The type of release for a movie.
 *
 * @see https://developer.themoviedb.org/reference/movie-release-dates
 */
export enum ReleaseDateType {
  'Premiere' = 1,
  'Theatrical (limited)',
  'Theatrical',
  'Digital',
  'Physical',
  'TV',
}

/** A release date entry with certification information. */
export interface ReleaseDate {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  /** ISO 8601 date string. */
  release_date: string;
  type: ReleaseDateType;
  note: string;
}

/** Release dates grouped by country. */
export interface ReleaseDateResult {
  iso_3166_1: CountryCode;
  release_dates: ReleaseDate[];
}

/**
 * All release dates for a movie across all countries.
 *
 * @see https://developer.themoviedb.org/reference/movie-release-dates
 */
export interface ReleaseDates {
  id: number;
  results: ReleaseDateResult[];
}

/** Paginated list of similar movies. */
export interface SimilarMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

/** A user-created list that contains a movie. */
export interface MovieList {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: string;
}

/** Paginated list of lists containing a movie. */
export interface MovieLists {
  id: number;
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

/** The most recently added movie on TMDB. */
export interface LatestMovie {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/** A date range with maximum and minimum dates. */
export interface Dates {
  maximum: string;
  minimum: string;
}

/**
 * Paginated list of movies currently playing in theatres.
 *
 * @see https://developer.themoviedb.org/reference/movie-now-playing-list
 */
export interface MoviesPlayingNow {
  page: number;
  results: Movie[];
  /** The date range for the "now playing" window. */
  dates: Dates;
  total_pages: number;
  total_results: number;
}

/**
 * Paginated list of popular movies.
 *
 * @see https://developer.themoviedb.org/reference/movie-popular-list
 */
export interface PopularMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

/**
 * Paginated list of top-rated movies.
 *
 * @see https://developer.themoviedb.org/reference/movie-top-rated-list
 */
export interface TopRatedMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

/**
 * Paginated list of upcoming movies.
 *
 * @see https://developer.themoviedb.org/reference/movie-upcoming-list
 */
export interface UpcomingMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

/** The value type for movie change entries. Can be a string, cast change, or unknown. */
export type MovieChangeValue =
  | string
  | {
      person_id: number;
      character: string;
      order: number;
      cast_id: number;
      credit_id: string;
    }
  | unknown;
