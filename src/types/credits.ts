import { Person } from './';

export interface CreditSeason {
  air_date?: string;
  poster_path?: string;
  season_number?: number;
}


export interface Media{
  i?: number;
  name?:string;
  first_air_date?: string;
  vote_count?: number;
  overview?: string;
  vote_average?: number;
  backdrop_path?: string;
  genre_ids?: number[];
  original_name?: string;
  origin_country?: string[];
  poster_path?: string;
  original_language?: string;
  popularity?: number;
  character?: string;
  episodes?: string[];
  seasons?: CreditSeason[];
}

export interface CreditResponse {
  credit_type?: string;
  department?: string;
  job?: string;
  media?: Media;
  media_type?: string;
  id?: string;
  person?: Person;
}

