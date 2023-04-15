import { BaseEndpoint } from './base';
import { Search } from '../types/search';
import { Collection, Company, Movie, Person, TV } from '../types';
import { parseOptions } from '../utils';

const BASE_SEARCH = '/search';

export interface SearchOptions {
  query: string;
  page?: number;
}

export interface MovieSearchOptions extends SearchOptions {
  include_adult?: boolean;
  year?: number;
  primary_release_year?: number;
}

export interface TvSearchOptions extends SearchOptions {
  include_adult?: boolean;
  first_air_date_year?: number;
}

export interface PeopleSearchOptions extends SearchOptions {
  include_adult?: boolean;
}

export class SearchEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async companies(options: SearchOptions): Promise<Search<Company>> {
    const params = parseOptions(options);
    return await this.api.get<Search<Company>>(
      `${BASE_SEARCH}/company?${params}`
    );
  }

  async collections(options: SearchOptions): Promise<Search<Collection>> {
    const params = parseOptions(options);
    return await this.api.get<Search<Collection>>(
      `${BASE_SEARCH}/collection?${params}`
    );
  }

  async keywords(
    options: SearchOptions
  ): Promise<Search<{ id: string; name: string }>> {
    const params = parseOptions(options);
    return await this.api.get<Search<{ id: string; name: string }>>(
      `${BASE_SEARCH}/keyword?${params}`
    );
  }

  async movies(options: MovieSearchOptions): Promise<Search<Movie>> {
    const params = parseOptions(options);
    return await this.api.get<Search<Movie>>(`${BASE_SEARCH}/movie?${params}`);
  }

  async people(options: PeopleSearchOptions): Promise<Search<Person>> {
    const params = parseOptions(options);
    return await this.api.get<Search<Person>>(
      `${BASE_SEARCH}/person?${params}`
    );
  }

  // TODO: Multi search

  async tvShows(options: TvSearchOptions): Promise<Search<TV>> {
    const params = parseOptions(options);
    return await this.api.get<Search<TV>>(`${BASE_SEARCH}/tv?${params}`);
  }
}
