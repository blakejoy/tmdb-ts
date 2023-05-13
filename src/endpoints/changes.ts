import { ChangeOption, MediaChanges } from '../types';
import { BaseEndpoint } from './base';

export class ChangeEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/movie/changes`, options);
  }

  async tvShows(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/tv/changes`, options);
  }

  async person(options?: ChangeOption): Promise<MediaChanges> {
    return await this.api.get<MediaChanges>(`/person/change`, options);
  }
}
