import { CountryCode, Image, Person } from './';

/** A season entry within a credit's media details. */
export interface CreditSeason {
  air_date?: string;
  poster_path?: string;
  season_number?: number;
}

/** The media (movie or TV show) associated with a credit. */
export interface Media {
  id?: number;
  name?: string;
  first_air_date?: string;
  vote_count?: number;
  overview?: string;
  vote_average?: number;
  backdrop_path?: string;
  genre_ids?: number[];
  media_type: string;
  adult: boolean;
  original_name?: string;
  origin_country?: string[];
  poster_path?: string;
  original_language?: string;
  popularity?: number;
  character?: string;
  episodes?: string[];
  seasons?: CreditSeason[];
}

/**
 * Detailed credit information linking a person to a media entry.
 *
 * @see https://developer.themoviedb.org/reference/credit-details
 */
export interface CreditResponse {
  credit_type?: string;
  department?: string;
  job?: string;
  media?: Media;
  media_type?: string;
  id?: string;
  person?: Person;
}

/** An alternative title for a movie or TV show in a specific country. */
export interface Title {
  /** ISO 3166-1 country code. */
  iso_3166_1: CountryCode;
  title: string;
  type: string;
}

/**
 * A list of alternative titles for a movie or TV show.
 *
 * @see https://developer.themoviedb.org/reference/movie-alternative-titles
 */
export interface AlternativeTitles {
  id: number;
  titles: Title[];
}

/** A cast member in a movie or TV show. */
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

/** A crew member in a movie or TV show. */
export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

/**
 * The cast and crew credits for a movie or TV show.
 *
 * @see https://developer.themoviedb.org/reference/movie-credits
 */
export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

/** A collection of backdrop and poster images. */
export interface ImageCollection {
  id: number;
  backdrops: Image[];
  posters: Image[];
}

/** A video (trailer, teaser, clip, etc.) associated with a movie or TV show. */
export interface Video {
  id: string;
  /** ISO 639-1 language code. */
  iso_639_1: string;
  /** ISO 3166-1 country code. */
  iso_3166_1: CountryCode;
  /** The video key (e.g. YouTube video ID). */
  key: string;
  name: string;
  /** The video hosting site (e.g. "YouTube", "Vimeo"). */
  site: string;
  /** The video resolution (e.g. 360, 480, 720, 1080). */
  size: number;
  /** The video type (e.g. "Trailer", "Teaser", "Clip", "Featurette"). */
  type: string;
}

/** A list of videos for a movie or TV show. */
export interface Videos {
  id: number;
  results: Video[];
}

/**
 * Aggregate credits combining all episodes for a TV show or season.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 */
export interface AggregateCredits {
  id: number;
  cast: AggregateCast[];
  crew: AggregateCrew[];
}

/** A role played by a cast member across multiple episodes. */
export interface CastRole {
  credit_id: string;
  character: string;
  episode_count: number;
}

/** An aggregate cast member with all roles across episodes. */
export interface AggregateCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  roles: CastRole[];
  total_episode_count: number;
  order: number;
}

/** A job performed by a crew member across multiple episodes. */
export interface CrewJob {
  credit_id: string;
  job: string;
  episode_count: number;
}

/** An aggregate crew member with all jobs across episodes. */
export interface AggregateCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  jobs: CrewJob[];
  department: string;
  total_episode_count: number;
}
