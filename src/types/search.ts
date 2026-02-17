import { MovieWithMediaType, PersonWithMediaType, TVWithMediaType } from '.';

/**
 * A paginated search result.
 *
 * @see https://developer.themoviedb.org/reference/search-movie
 */
export interface Search<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

/**
 * A union of movie, TV show, and person results returned by multi-search.
 *
 * @see https://developer.themoviedb.org/reference/search-multi
 */
export type MultiSearchResult =
  | MovieWithMediaType
  | TVWithMediaType
  | PersonWithMediaType;
