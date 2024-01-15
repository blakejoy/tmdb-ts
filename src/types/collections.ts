import { LanguageOption, Movie } from '.';

export interface Collection {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
  adult: boolean;
  original_language: string;
  original_name: string;
  overview: string;
}

export interface DetailedCollection extends Collection {
  parts: Movie[];
}

export interface CollectionImageOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}
