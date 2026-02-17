export * from './options';
export * from './certification';
export * from './credits';
export * from './companies';
export * from './networks';
export * from './configuration';
export * from './changes';
export * from './movies';
export * from './search';
export * from './tv-shows';
export * from './watch-providers';
export * from './people';
export * from './discover';
export * from './review';
export * from './trending';
export * from './find';
export * from './keywords';
export * from './collections';
export * from './tv-episode';
export * from './tv-seasons';

/** An error response returned by the TMDB API. */
export interface ErrorResponse {
  status_code: number;
  status_message: string;
  success: boolean;
}

/** The type of media on TMDB. */
export type MediaType = 'movie' | 'tv' | 'person';

/** Details about the author of a review. */
export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating?: number;
}

/** A movie or TV show that a person is known for. */
export type KnownFor = MovieWithMediaType | TVWithMediaType;

/** A person (actor, director, etc.) on TMDB. */
export interface Person {
  id: number;
  name: string;
  original_name: string;
  known_for: KnownFor[];
  profile_path: string;
  adult: boolean;
  known_for_department: string;
  gender: number;
  popularity: number;
}

/** A person result with the `media_type` discriminator set to 'person'. */
export interface PersonWithMediaType extends Person {
  media_type: 'person';
}

/** A movie on TMDB. */
export interface Movie {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

/** A movie result with the `media_type` discriminator set to 'movie'. */
export interface MovieWithMediaType extends Movie {
  media_type: 'movie';
}

/** A production company on TMDB. */
export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

/** A TV show on TMDB. */
export interface TV {
  id: number;
  adult: boolean;
  name: string;
  first_air_date: string;
  backdrop_path: string;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

/** A TV show result with the `media_type` discriminator set to 'tv'. */
export interface TVWithMediaType extends TV {
  media_type: 'tv';
}

/** A genre for movies or TV shows. */
export interface Genre {
  id: number;
  name: string;
}

/** External IDs for a movie, TV show, or person (IMDb, TVDB, social media, etc.). */
export interface ExternalIds {
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
  tvdb_id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  tvrage_id?: number;
  wikidata_id: string;
  tiktok_id?: string;
  youtube_id?: string;
  id: number;
}

/** A production company involved in a movie or TV show. */
export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

/** A country where a movie or TV show was produced. */
export interface ProductionCountry {
  iso_3166_1: CountryCode;
  name: string;
}

/** A language spoken in a movie or TV show. */
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

/** Content ratings (parental guidelines) for a TV show by country. */
export interface ContentRatings {
  results: ContentRatingsResult[];
  id: number;
}

/** A content rating result for a specific country. */
export interface ContentRatingsResult {
  descriptor: unknown[];
  iso_3166_1: CountryCode;
  rating: string;
}

/** A recommended movie. */
export interface Recommendation {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path?: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/** Paginated list of movie recommendations. */
export interface Recommendations {
  page: number;
  results: Recommendation[];
  total_pages: number;
  total_results: number;
}

/** A user review for a movie or TV show. */
export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

/** Paginated list of user reviews. */
export interface Reviews {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

/** Translated content data for a movie or TV show. */
export interface TranslationData {
  title: string;
  overview: string;
  homepage: string;
  tagline: string;
  runtime: number;
}

/** A translation entry for a movie or TV show. */
export interface Translation {
  iso_3166_1: CountryCode;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: TranslationData;
}

/** A list of translations for a movie or TV show. */
export interface Translations {
  id: number;
  translations: Translation[];
}

/** An image (poster, backdrop, logo, still, or profile) from TMDB. */
export interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/** A collection of images (backdrops, logos, posters) for a movie or TV show. */
export interface Images {
  id: number;
  backdrops: Image[];
  logos: Image[];
  posters: Image[];
}

/** All supported ISO 3166-1 country codes on TMDB. */
export const CountryCodes = [
  'AE',
  'AR',
  'AT',
  'AU',
  'BE',
  'BG',
  'BO',
  'BR',
  'CA',
  'CH',
  'CL',
  'CO',
  'CR',
  'CV',
  'CZ',
  'DE',
  'DK',
  'EC',
  'EE',
  'EG',
  'ES',
  'FI',
  'FR',
  'GB',
  'GH',
  'GR',
  'GT',
  'HK',
  'HN',
  'HU',
  'ID',
  'IE',
  'IL',
  'IN',
  'IT',
  'JP',
  'LT',
  'LV',
  'MU',
  'MX',
  'MY',
  'MZ',
  'NL',
  'NO',
  'NZ',
  'PE',
  'PH',
  'PL',
  'PT',
  'PY',
  'RU',
  'SA',
  'SE',
  'SG',
  'SI',
  'SK',
  'TH',
  'TR',
  'TW',
  'UG',
  'US',
  'VE',
  'ZA',
] as const;

/** An ISO 3166-1 country code supported by TMDB. */
export type CountryCode = (typeof CountryCodes)[number];
