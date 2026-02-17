import {
  Movie,
  Person,
  TV,
  MediaType,
  MovieWithMediaType,
  TVWithMediaType,
  PersonWithMediaType,
} from '.';

/** The time window for trending results. */
export type TimeWindow = 'day' | 'week';

/** The media type to get trending results for. Use 'all' for all media types. */
export type TrendingMediaType = MediaType | 'all';

type TrendingResult<T extends TrendingMediaType> = T extends 'tv'
  ? TV
  : T extends 'movie'
    ? Movie
    : T extends 'person'
      ? Person
      : TVWithMediaType | MovieWithMediaType | PersonWithMediaType;

/**
 * Paginated trending results for a given media type.
 *
 * @see https://developer.themoviedb.org/reference/trending-all
 */
export interface TrendingResults<T extends TrendingMediaType> {
  page: number;
  results: TrendingResult<T>[];
  total_pages: number;
  total_results: number;
}
