import { LanguageOption, Movie } from '.';

/**
 * Basic information about a movie collection.
 *
 * @see https://developer.themoviedb.org/reference/collection-details
 */
export interface Collection {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

/** Detailed collection information including the movies in the collection. */
export interface CollectionDetails extends Collection {
  /** The list of movies that belong to this collection. */
  parts: Movie[];
}

/** Options for querying collection images. */
export interface CollectionImageOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}
