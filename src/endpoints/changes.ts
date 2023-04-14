import { BaseEndpoint } from './base';
import { ChangeOptions, Changes } from '../types/changes';


export class ChangeEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(options?: ChangeOptions): Promise<Changes> {
    return await this.api.get<Changes>(`/movie/changes`, options);
  }

  async tvShows(options?: ChangeOptions): Promise<Changes> {
    return await this.api.get<Changes>(`/tv/changes`, options);
  }

  async person(options?: ChangeOptions): Promise<Changes> {
    return await this.api.get<Changes>(`/person/change`, options);
  }
}
