import { Episode, MediaType, Movie, Person, Season, TV } from '.';

export type ExternalSource =
  | 'imdb_id'
  | 'freebase_mid'
  | 'freebase_id'
  | 'tvdb_id'
  | 'tvrage_id'
  | 'facebook_id'
  | 'twitter_id'
  | 'instagram_id';

export interface ExternalIdOptions {
  external_source: ExternalSource;
  language?: string;
}

type MediaTagged<T> = T & {
  media_type: MediaType;
};

export interface FindResult {
  movie_results: MediaTagged<Movie>[];
  person_results: MediaTagged<Person>[];
  tv_results: MediaTagged<TV>[];
  tv_episode_results: MediaTagged<Episode>[];
  tv_season_results: MediaTagged<Season & { show_id: string }>[];
}
