import { CountryCode, Credits, Crew } from '.';

/** Parameters to identify a specific TV episode. */
export interface EpisodeSelection {
  tvShowID: number;
  seasonNumber: number;
  episodeNumber: number;
}

/**
 * Full details for a TV episode.
 *
 * @see https://developer.themoviedb.org/reference/tv-episode-details
 */
export interface Episode {
  /** Air date in YYYY-MM-DD format. */
  air_date: string;
  episode_number: number;
  crew: Crew[];
  guest_stars: GuestStar[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  /** Runtime in minutes. */
  runtime: number;
  show_id: number;
}

/** A guest star appearing in a TV episode. */
export interface GuestStar {
  credit_id: string;
  order: number;
  character: string;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

/** Credits for a TV episode, including guest stars. */
export interface TvEpisodeCredit extends Credits {
  guest_stars: GuestStar[];
}

/** Translations for a TV episode. */
export interface TvEpisodeTranslations {
  id: number;
  translations: {
    iso_3166_1: CountryCode;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      name: string;
      overview: string;
    };
  };
}

/** The value type for TV episode change entries. */
export type TvEpisodeChangeValue = string | unknown;
