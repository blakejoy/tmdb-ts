import { ParsedUrlQueryInput } from 'querystring';
import { Movie } from '.';

export interface KeywordsOptions extends ParsedUrlQueryInput {
  include_adult?: boolean;
  language?: string;
}

export interface BelongingMovies{
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Keyword{
  id: number;
  name: string;
}

export interface Keywords {
  id: number;
  keywords: Keyword[];
}