import { CountryCode } from '../types';

/** Gravatar profile image hash. */
export interface Gravatar {
  hash: string;
}

/** User avatar information. */
export interface Avatar {
  gravatar: Gravatar;
}

/**
 * Public details of a TMDB user account.
 *
 * @see https://developer.themoviedb.org/reference/account-details
 */
export interface AccountDetails {
  avatar: Avatar;
  id: number;
  /** Whether the user has enabled adult content. */
  include_adult: boolean;
  /** ISO 3166-1 country code. */
  iso_3166_1: CountryCode;
  /** ISO 639-1 language code. */
  iso_639_1: string;
  name: string;
  username: string;
}
