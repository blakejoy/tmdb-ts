import { BaseEndpoint } from './base';
import { MultiSearchResult, Search } from '../types/search';
import { Collection, Company, LanguageOption, Movie, PageOption, Person, RegionOption, TV } from '../types';

const BASE_SEARCH = '/search';

export interface SearchOptions {
  query: string;
  page?: number;
}

export interface MovieSearchOptions extends SearchOptions, LanguageOption, PageOption, RegionOption {
  include_adult?: boolean;
  year?: number;
  primary_release_year?: number;
}

export interface CollectionSearchOptions extends SearchOptions, LanguageOption, PageOption, RegionOption {
  include_adult?: boolean;
}

export interface TvSearchOptions extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
  year?: number;
  first_air_date_year?: number;
}

export interface PeopleSearchOptions extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
}

export interface MultiSearchOptions extends SearchOptions, LanguageOption, PageOption {
  include_adult?: boolean;
}

export class SearchEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async companies(options: SearchOptions): Promise<Search<Company>> {
    return await this.api.get<Search<Company>>(
      `${BASE_SEARCH}/company`,
      options
    );
  }

  async collections(options: SearchOptions): Promise<Search<Collection>> {
    return await this.api.get<Search<Collection>>(
      `${BASE_SEARCH}/collection`,
      options
    );
  }

  async keywords(
    options: SearchOptions
  ): Promise<Search<{ id: string; name: string }>> {
    return await this.api.get<Search<{ id: string; name: string }>>(
      `${BASE_SEARCH}/keyword`,
      options
    );
  }

  async movies(options: MovieSearchOptions): Promise<Search<Movie>> {
    return await this.api.get<Search<Movie>>(`${BASE_SEARCH}/movie`, options);
  }

  async people(options: PeopleSearchOptions): Promise<Search<Person>> {
    return await this.api.get<Search<Person>>(`${BASE_SEARCH}/person`, options);
  }

  async tvShows(options: TvSearchOptions): Promise<Search<TV>> {
    return await this.api.get<Search<TV>>(`${BASE_SEARCH}/tv`, options);
  }

  async multi(options: MultiSearchOptions): Promise<Search<MultiSearchResult>> {
    return await this.api.get<Search<MultiSearchResult>>(
      `${BASE_SEARCH}/multi`,
      options
    );
  }
}
