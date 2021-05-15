import { BaseEndpoint } from './base';
import { AlternativeTitles, MovieDetails } from '../types/movie';

const BASE_MOVIE = '/movie';

export class MoviesEndpoint extends BaseEndpoint{
  constructor(protected readonly accessToken: string) {
    super(accessToken);
  }

  async details(id: number): Promise<MovieDetails>{
    return await this.api.get<MovieDetails>(`${BASE_MOVIE}/${id}`);
  }

  async alternativeTitles(id: number): Promise<AlternativeTitles>{
    return await this.api.get<AlternativeTitles>(`${BASE_MOVIE}/${id}/alternative_titles`);
  }

}
