import { Movie } from '.';
import { PageOption } from './options';

/** Options for querying movies belonging to a keyword. */
export interface KeywordsOptions extends PageOption {
  include_adult?: boolean;
  language?: string;
}

/** Paginated list of movies belonging to a keyword. */
export interface BelongingMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

/**
 * A keyword used to tag movies and TV shows.
 *
 * @see https://developer.themoviedb.org/reference/keyword-details
 */
export interface Keyword {
  id: number;
  name: string;
}

/** A list of keywords associated with a movie or TV show. */
export interface Keywords {
  id: number;
  keywords: Keyword[];
}
