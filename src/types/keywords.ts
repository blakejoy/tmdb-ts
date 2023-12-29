import { Movie } from '.';
import { PageOption } from './options';

export interface KeywordsOptions extends PageOption {
  include_adult?: boolean;
  language?: string;
}

export interface BelongingMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Keyword {
  id: number;
  name: string;
}

export interface Keywords {
  id: number;
  keywords: Keyword[];
}
