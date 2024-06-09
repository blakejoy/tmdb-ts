import { CountryCode, Credits, Crew } from '.';

export interface EpisodeSelection {
  tvShowID: number;
  seasonNumber: number;
  episodeNumber: number;
}

export interface Episode {
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
  runtime: number;
  show_id: number;
}

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

export interface TvEpisodeCredit extends Credits {
  guest_stars: GuestStar[];
}

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

export type TvEpisodeChangeValue = string | unknown;
