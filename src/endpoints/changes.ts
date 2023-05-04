import { BaseEndpoint } from './base';
import { ChangeOptions, MediaChanges } from '../types/changes';

export class ChangeEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(options?: ChangeOptions): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/movie/changes`, options);
  }

  async tvShows(options?: ChangeOptions): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/tv/changes`, options);
  }

  async person(options?: ChangeOptions): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/person/change`, options);
  }
}
