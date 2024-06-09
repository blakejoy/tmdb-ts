import { LanguageOption, Movie } from '.';

export interface Collection {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

export interface CollectionDetails extends Collection {
  parts: Movie[];
}

export interface CollectionImageOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}
