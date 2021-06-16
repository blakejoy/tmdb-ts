import { Genre, Movie, ProductionCompany, ProductionCountry, SpokenLanguage } from './';

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: any;
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

export enum ReleaseDateType {
  'Premiere' = 1,
  'Theatrical (limited)',
  'Theatrical',
  'Digital',
  'Physical',
  'TV'
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  release_date: Date;
  type: ReleaseDateType;
  note: string;
}

export interface ReleaseDateResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDates {
  id: number;
  results: ReleaseDateResult[];
}


export interface SimilarMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

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

export interface MovieLists {
  id: number;
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}


export interface MovieChangeItem {
  id: string;
  action: string;
  time: string;
  iso_639_1: string;
  value: string;
  original_value: string;
}

export interface MovieChange {
  key: string;
  items: MovieChangeItem[];
}

export interface MovieChanges {
  changes: MovieChange[];
}

export interface LatestMovie {
  adult: boolean;
  backdrop_path?: any;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface Dates {
  maximum: string;
  minimum: string;
}

export interface MoviesPlayingNow {
  page: number;
  results: Movie[];
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export interface PopularMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface TopRatedMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface UpcomingMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
