import {
  Movie,
  Person,
  TV,
  MediaType,
  MovieWithMediaType,
  TVWithMediaType,
  PersonWithMediaType,
} from '.';

export type TimeWindow = 'day' | 'week';

export type TrendingMediaType = MediaType | 'all';

type TrendingResult<T extends TrendingMediaType> = T extends 'tv'
  ? TV
  : T extends 'movie'
    ? Movie
    : T extends 'person'
      ? Person
      : TVWithMediaType | MovieWithMediaType | PersonWithMediaType;

export interface TrendingResults<T extends TrendingMediaType> {
  page: number;
  results: TrendingResult<T>[];
  total_pages: number;
  total_results: number;
}
