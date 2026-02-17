import { Episode } from '.';

/** Parameters to identify a specific TV season. */
export interface SeasonSelection {
  tvShowID: number;
  seasonNumber: number;
}

/**
 * Full details for a TV season including its episodes.
 *
 * @see https://developer.themoviedb.org/reference/tv-season-details
 */
export interface SeasonDetails {
  /** Air date in YYYY-MM-DD format. */
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
}

/** The value type for TV season change entries. */
export type TvSeasonChangeValue =
  | string
  | {
      episode_id: number;
      episode_number: number;
    };
