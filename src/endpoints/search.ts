import { BaseEndpoint } from './base';
import { MultiSearchResult, Search } from '../types/search';
import {
  Collection,
  Company,
  LanguageOption,
  Movie,
  PageOption,
  Person,
  RegionOption,
  TV,
} from '../types';

const BASE_SEARCH = '/search';

export interface SearchOptions {
  query: string;
  page?: number;
}

export interface MovieSearchOptions
  extends SearchOptions, LanguageOption, PageOption, RegionOption {
  include_adult?: boolean;
  year?: number;
  primary_release_year?: number;
}

export interface CollectionSearchOptions
  extends SearchOptions, LanguageOption, PageOption, RegionOption {
  include_adult?: boolean;
}

export interface TvSearchOptions
  extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
  year?: number;
  first_air_date_year?: number;
}

export interface PeopleSearchOptions
  extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
}

export interface MultiSearchOptions
  extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
}

export class SearchEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Search for companies by name.
   *
   * @param options - Search query and pagination options.
   * @see https://developer.themoviedb.org/reference/search-company
   */
  async companies(options: SearchOptions): Promise<Search<Company>> {
    return await this.api.get<Search<Company>>(
      `${BASE_SEARCH}/company`,
      options
    );
  }

  /**
   * Search for collections by name.
   *
   * @param options - Search query and pagination options.
   * @see https://developer.themoviedb.org/reference/search-collection
   */
  async collections(options: SearchOptions): Promise<Search<Collection>> {
    return await this.api.get<Search<Collection>>(
      `${BASE_SEARCH}/collection`,
      options
    );
  }

  /**
   * Search for keywords by name.
   *
   * @param options - Search query and pagination options.
   * @see https://developer.themoviedb.org/reference/search-keyword
   */
  async keywords(
    options: SearchOptions
  ): Promise<Search<{ id: string; name: string }>> {
    return await this.api.get<Search<{ id: string; name: string }>>(
      `${BASE_SEARCH}/keyword`,
      options
    );
  }

  /**
   * Search for movies by title.
   *
   * @param options - Search query with optional year, language, region, and adult content filters.
   * @see https://developer.themoviedb.org/reference/search-movie
   */
  async movies(options: MovieSearchOptions): Promise<Search<Movie>> {
    return await this.api.get<Search<Movie>>(`${BASE_SEARCH}/movie`, options);
  }

  /**
   * Search for people by name.
   *
   * @param options - Search query with optional language and adult content filters.
   * @see https://developer.themoviedb.org/reference/search-person
   */
  async people(options: PeopleSearchOptions): Promise<Search<Person>> {
    return await this.api.get<Search<Person>>(`${BASE_SEARCH}/person`, options);
  }

  /**
   * Search for TV shows by title.
   *
   * @param options - Search query with optional year, language, and adult content filters.
   * @see https://developer.themoviedb.org/reference/search-tv
   */
  async tvShows(options: TvSearchOptions): Promise<Search<TV>> {
    return await this.api.get<Search<TV>>(`${BASE_SEARCH}/tv`, options);
  }

  /**
   * Search for movies, TV shows, and people in a single request.
   *
   * @param options - Search query with optional language and adult content filters.
   * @see https://developer.themoviedb.org/reference/search-multi
   */
  async multi(options: MultiSearchOptions): Promise<Search<MultiSearchResult>> {
    return await this.api.get<Search<MultiSearchResult>>(
      `${BASE_SEARCH}/multi`,
      options
    );
  }
}
