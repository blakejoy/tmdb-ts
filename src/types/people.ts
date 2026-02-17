import { CountryCode, Image, Movie, Person, TV } from '.';

interface Cast {
  character: string;
  credit_id: string;
  vote_count: number;
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  genre_ids: number[];
  popularity: number;
  overview: string;
}

interface Crew {
  id: number;
  department: string;
  original_language: string;
  credit_id: string;
  overview: string;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  genre_ids: number[];
  job: string;
  vote_average: number;
}

/** A movie cast credit for a person. */
export interface PersonMovieCast extends Cast {
  release_date: string;
  video: boolean;
  adult: boolean;
  title: string;
  original_title: string;
}

/** A movie crew credit for a person. */
export interface PersonMovieCrew extends Crew {
  original_title: string;
  video: boolean;
  title: string;
  adult: boolean;
  release_date: string;
}

/** A TV show crew credit for a person. */
export interface PersonTvShowCrew extends Crew {
  episode_count: number;
  origin_country: string[];
  original_name: string;
  name: string;
  first_air_date: string;
}

/** A TV show cast credit for a person. */
export interface PersonTvShowCast extends Cast {
  original_name: string;
  name: string;
  episode_count: number;
  first_air_date: string;
  origin_country: string[];
}

/**
 * A person's movie credits (cast and crew).
 *
 * @see https://developer.themoviedb.org/reference/person-movie-credits
 */
export interface PersonMovieCredit {
  cast: PersonMovieCast[];
  crew: PersonMovieCrew[];
  id: number;
}

/**
 * A person's TV show credits (cast and crew).
 *
 * @see https://developer.themoviedb.org/reference/person-tv-credits
 */
export interface PersonTvShowCredit {
  cast: PersonTvShowCast[];
  crew: PersonTvShowCrew[];
  id: number;
}

/**
 * A person's combined movie and TV show credits.
 *
 * @see https://developer.themoviedb.org/reference/person-combined-credits
 */
export interface PersonCombinedCredits {
  cast: (PersonMovieCast & PersonTvShowCast)[];
  crew: (PersonMovieCrew & PersonTvShowCrew)[];
  id: number;
}

/**
 * Full details for a person.
 *
 * @see https://developer.themoviedb.org/reference/person-details
 */
export interface PersonDetails {
  /** Date of birth in YYYY-MM-DD format. */
  birthday: string;
  known_for_department: string;
  /** Date of death in YYYY-MM-DD format, or null if alive. */
  deathday: string;
  id: number;
  name: string;
  also_known_as: string[];
  /** 0 = not set, 1 = female, 2 = male, 3 = non-binary. */
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
}

/** The value type for person change entries. */
export type PersonChangeValue =
  | string
  | {
      profile: {
        file_path: string;
      };
    };

/**
 * Paginated list of popular people.
 *
 * @see https://developer.themoviedb.org/reference/person-popular-list
 */
export interface PopularPeople {
  page: number;
  results: Person[];
  total_results: number;
  total_pages: number;
}

/**
 * Profile images for a person.
 *
 * @see https://developer.themoviedb.org/reference/person-images
 */
export interface PeopleImages {
  id: number;
  profiles: Image[];
}

/** An image tagged with its associated media. */
export interface TaggedImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  id: string;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
  image_type: string;
  media_type: string;
  /** The movie or TV show the image is from. */
  media: Movie | TV;
}

/**
 * Paginated list of tagged images for a person.
 *
 * @deprecated
 * @see https://developer.themoviedb.org/reference/person-tagged-images
 */
export interface TaggedImages {
  page: number;
  results: TaggedImage[];
  total_results: number;
  total_pages: number;
}

/** Translation data for a person. */
export interface PersonTranslations {
  id: number;
  translations: {
    iso_3166_1: CountryCode;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      biography: string;
    };
  };
}
