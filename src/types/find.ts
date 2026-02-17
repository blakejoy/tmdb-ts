import { Episode, MediaType, Movie, Person, Season, TV } from '.';

/**
 * Supported external ID sources for the Find endpoint.
 *
 * @see https://developer.themoviedb.org/reference/find-by-id
 */
export type ExternalSource =
  | 'imdb_id'
  | 'freebase_mid'
  | 'freebase_id'
  | 'tvdb_id'
  | 'tvrage_id'
  | 'facebook_id'
  | 'twitter_id'
  | 'instagram_id';

/** Options for the Find by external ID endpoint. */
export interface ExternalIdOptions {
  /** The external source to search. */
  external_source: ExternalSource;
  /** ISO 639-1 language code. */
  language?: string;
}

type MediaTagged<T> = T & {
  media_type: MediaType;
};

/**
 * Results from finding TMDB objects by an external ID.
 *
 * @see https://developer.themoviedb.org/reference/find-by-id
 */
export interface FindResult {
  movie_results: MediaTagged<Movie>[];
  person_results: MediaTagged<Person>[];
  tv_results: MediaTagged<TV>[];
  tv_episode_results: MediaTagged<Episode>[];
  tv_season_results: MediaTagged<Season & { show_id: string }>[];
}
