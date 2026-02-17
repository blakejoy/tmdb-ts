import { CountryCode } from '../types';

/**
 * Image configuration details including base URLs and supported sizes.
 *
 * @see https://developer.themoviedb.org/reference/configuration-details
 */
export interface ImageConfiguration {
  /** The HTTP base URL for images. */
  base_url: string;
  /** The HTTPS base URL for images. */
  secure_base_url: string;
  backdrop_sizes: BackdropSizes[];
  logo_sizes: LogoSizes[];
  poster_sizes: PosterSizes[];
  profile_sizes: ProfileSizes[];
  still_sizes: StillSizes[];
}

/**
 * The system-wide configuration details for the TMDB API.
 *
 * @see https://developer.themoviedb.org/reference/configuration-details
 */
export interface Configuration {
  images: ImageConfiguration;
  /** The list of valid change keys used for tracking media changes. */
  change_keys: ChangeKeys[];
}

/**
 * A country configuration entry.
 *
 * @see https://developer.themoviedb.org/reference/configuration-countries
 */
export interface CountryConfiguration {
  iso_3166_1: CountryCode;
  english_name: string;
  native_name: string;
}

/**
 * A language configuration entry.
 *
 * @see https://developer.themoviedb.org/reference/configuration-languages
 */
export interface LanguageConfiguration {
  iso_639_1: string;
  english_name: string;
  name: string;
}

/**
 * A department and its associated jobs.
 *
 * @see https://developer.themoviedb.org/reference/configuration-jobs
 */
export interface JobConfiguration {
  department: string;
  jobs: string[];
}

/**
 * A country and its associated timezones.
 *
 * @see https://developer.themoviedb.org/reference/configuration-timezones
 */
export interface TimezoneConfiguration {
  iso_3166_1: CountryCode;
  zones: string[];
}

/** All supported media image sizes. */
export const MediaSize = {
  W45: 'w45',
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W300: 'w300',
  W342: 'w342',
  W500: 'w500',
  W632: 'w632',
  W780: 'w780',
  W1280: 'w1280',
  ORIGINAL: 'original',
} as const;

/** Supported backdrop image sizes. */
export const BackdropSize = {
  W45: 'w45',
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W300: 'w300',
  W500: 'w500',
  W780: 'w780',
  W1280: 'w1280',
  ORIGINAL: 'original',
} as const;

type BackdropSizes = (typeof BackdropSize)[keyof typeof BackdropSize];

/** Supported logo image sizes. */
export const LogoSize = {
  W45: 'w45',
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W300: 'w300',
  W500: 'w500',
  ORIGINAL: 'original',
} as const;

type LogoSizes = (typeof LogoSize)[keyof typeof LogoSize];

/** Supported poster image sizes. */
export const PosterSize = {
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W300: 'w300',
  W342: 'w342',
  W500: 'w500',
  W780: 'w780',
  ORIGINAL: 'original',
} as const;

type PosterSizes = (typeof PosterSize)[keyof typeof PosterSize];

/** Supported profile image sizes. */
export const ProfileSize = {
  W45: 'w45',
  W185: 'w185',
  W632: 'w632',
  ORIGINAL: 'original',
} as const;

type ProfileSizes = (typeof ProfileSize)[keyof typeof ProfileSize];

/** Supported still image sizes. */
export const StillSize = {
  W92: 'w92',
  W185: 'w185',
  W300: 'w300',
  ORIGINAL: 'original',
} as const;

type StillSizes = (typeof StillSize)[keyof typeof StillSize];

/** All valid change keys used for tracking modifications to media entries. */
export const ChangeKey = {
  ADULT: 'adult',
  AIR_DATE: 'air_date',
  ALSO_KNOWN_AS: 'also_known_as',
  ALTERNATIVE_TITLES: 'alternative_titles',
  BIOGRAPHY: 'biography',
  BIRTHDAY: 'birthday',
  BUDGET: 'budget',
  CAST: 'cast',
  CERTIFICATIONS: 'certifications',
  CHARACTER_NAMES: 'character_names',
  CREATED_BY: 'created_by',
  CREW: 'crew',
  DEATHDAY: 'deathday',
  EPISODE: 'episode',
  EPISODE_NUMBER: 'episode_number',
  EPISODE_RUN_TIME: 'episode_run_time',
  FREEBASE_ID: 'freebase_id',
  FREEBASE_MID: 'freebase_mid',
  GENERAL: 'general',
  GENRES: 'genres',
  GUEST_STARS: 'guest_stars',
  HOMEPAGE: 'homepage',
  IMAGES: 'images',
  IMDB_ID: 'imdb_id',
  LANGUAGES: 'languages',
  NAME: 'name',
  NETWORK: 'network',
  ORIGIN_COUNTRY: 'origin_country',
  ORIGINAL_NAME: 'original_name',
  ORIGINAL_TITLE: 'original_title',
  OVERVIEW: 'overview',
  PARTS: 'parts',
  PLACE_OF_BIRTH: 'place_of_birth',
  PLOT_KEYWORDS: 'plot_keywords',
  PRODUCTION_CODE: 'production_code',
  PRODUCTION_COMPANIES: 'production_companies',
  PRODUCTION_COUNTRIES: 'production_countries',
  RELEASES: 'releases',
  REVENUE: 'revenue',
  RUNTIME: 'runtime',
  SEASON: 'season',
  SEASON_NUMBER: 'season_number',
  SEASON_REGULAR: 'season_regular',
  SPOKEN_LANGUAGES: 'spoken_languages',
  STATUS: 'status',
  TAGLINE: 'tagline',
  TITLE: 'title',
  TRANSLATIONS: 'translations',
  TVDB_ID: 'tvdb_id',
  TVRAGE_ID: 'tvrage_id',
  TYPE: 'type',
  VIDEO: 'video',
  VIDEOS: 'videos',
} as const;

type ChangeKeys = (typeof ChangeKey)[keyof typeof ChangeKey];
