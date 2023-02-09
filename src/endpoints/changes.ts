import querystring  from 'querystring';
import { BaseEndpoint } from './base';
import { Change, ChangeOptions } from '../types/changes';
import { PaginatedResult } from '../types';


export class ChangeEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(options?: ChangeOptions): Promise<PaginatedResult<Change>> {
    const params = querystring.encode(options);
    return await this.api.get<PaginatedResult<Change>>(`/movie/changes?${params}`);
  }

  async tvShows(options?: ChangeOptions): Promise<PaginatedResult<Change>> {
    const params = querystring.stringify(options);
    return await this.api.get<PaginatedResult<Change>>(`/tv/changes?${params}`);
  }

  async person(options?: ChangeOptions): Promise<PaginatedResult<Change>> {
    const params = querystring.stringify(options);

    return await this.api.get<PaginatedResult<Change>>(`/person/changes${params}`);
  }
}
