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

export interface Title {
  iso_3166_1: string;
  title: string;
  type: string;
}

export interface AlternativeTitles {
  id: number;
  titles: Title[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}


export interface Backdrop {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1?: any;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  id: number;
  backdrops: Backdrop[];
  posters: Poster[];
}


export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Videos {
  id: number;
  results: Video[];
}

export interface Keywords {
  id: number;
  keywords: Array<{
    id: number;
    name: string;
  }>

}

