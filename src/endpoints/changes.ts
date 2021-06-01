import querystring  from 'querystring';
import { BaseEndpoint } from './base';
import { ChangeOptions, Changes } from '../types/changes';


export class ChangeEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(options?: ChangeOptions): Promise<Changes> {
    const params = querystring.encode(options);
    return await this.api.get<Changes>(`/movie/changes?${params}`);
  }

  async tvShows(options?: ChangeOptions): Promise<Changes> {
    const params = querystring.stringify(options);
    return await this.api.get<Changes>(`/tv/changes?${params}`);
  }

  async person(options?: ChangeOptions): Promise<Changes> {
    const params = querystring.stringify(options);

    return await this.api.get<Changes>(`/person/changes${params}`);
  }
}
