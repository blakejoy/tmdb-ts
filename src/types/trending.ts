import { Movie, Person, TV } from '.';
export type MediaType = 'all' | 'movie' | 'tv' | 'person';

export type TimeWindow = 'day' | 'week';

type TrendingResult<T extends MediaType> = T extends 'tv'
? TV
: T extends 'movie'
? Movie
: T extends 'person'
? Person
: TV | Movie | Person;

export interface TrendingResults<T extends MediaType> {
  page: number;
  results: (TrendingResult<T> & {media_type: MediaType})[];
  total_pages: number;
  total_results: number;
}