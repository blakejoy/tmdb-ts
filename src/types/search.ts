import { MovieWithMediaType, PersonWithMediaType, TVWithMediaType } from '.';

export interface Search<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type MultiSearchResult =
  | MovieWithMediaType
  | TVWithMediaType
  | PersonWithMediaType;
