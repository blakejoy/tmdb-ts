import { BaseEndpoint } from './base';
import { Search } from '../types/search';
import { Collection, Company, Movie, Person, TV } from '../types';

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

  async companies(options: SearchOptions): Promise<Search<Company>>{
    return await this.api.get<Search<Company>>(`${BASE_SEARCH}/company`, options);
  }

  async collections(options: SearchOptions): Promise<Search<Collection>>{
    return await this.api.get<Search<Collection>>(`${BASE_SEARCH}/collection`, options);
  }

  async keywords(options: SearchOptions): Promise<Search<{ id: string, name: string }>>{
    return await this.api.get<Search<{ id: string, name: string }>>(`${BASE_SEARCH}/keyword`, options);
  }

  async movies(options: MovieSearchOptions): Promise<Search<Movie>>{
    return await this.api.get<Search<Movie>>(`${BASE_SEARCH}/movie`, options);
  }

  async people(options: PeopleSearchOptions): Promise<Search<Person>>{
    return await this.api.get<Search<Person>>(`${BASE_SEARCH}/person`, options);
  }

  // TODO: Multi search

  async tvShows(options: TvSearchOptions): Promise<Search<TV>>{
    return await this.api.get<Search<TV>>(`${BASE_SEARCH}/tv`, options);
  }
}
