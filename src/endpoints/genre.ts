import {  BaseEndpoint } from './base';

export interface Genres {
  genres: Array<{id: number, name: string}>
}

export class GenreEndpoint extends BaseEndpoint {
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async movies(): Promise<Genres> {
    return await this.api.get<Genres>('/genre/movie/list');
  }

  async tvShows(): Promise<Genres> {
    return await this.api.get<Genres>('/genre/tv/list');
  }
}
