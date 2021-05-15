export * from './certification';
export *  from './credits';
export *  from './changes';


export interface KnownFor {
  id: number;
  overview: string;
  release_date: string;
  video: boolean;
  adult: boolean;
  backdrop_path: string;
  media_type: string;
  genre_ids: number[];
  title: string;
  original_language: string;
  original_title: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
}

export interface Person {
  id: number;
  name: string;
  known_for: KnownFor[];
  profile_path: string;
  adult: boolean;
  known_for_department: string;
  gender: number;
  popularity: number;
}

export interface Collection {
  id:number;
  backdrop_path: string;
  name: string;
  poster_path: string;
}

export interface Movie {
  id: number;
  logo_path: string;
  name: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface TV {
  id: number;
  name:string;
  first_air_date: string;
  backdrop_path: string;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ExternalIds {
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
  id: number;
}


export {
  certs,
  credits,
  changes,
};
