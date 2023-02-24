import { Genre, ProductionCompany, ProductionCountry, SpokenLanguage, Crew } from './';

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface TvShowDetails {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface GuestStar {
  credit_id: string
  order: number
  character: string
  adult: boolean
  gender: number | null
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null

}

export interface Episode {
  air_date: string
  episode_number: number
  crew: Crew[]
  guest_stars: GuestStar[]
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
  show_id: number;
  runtime: number;
}

export interface SeasonDetails {
  air_date: string
  episodes: Episode[]
  name: string
  overview: string
  id: number
  poster_path: string | null
  season_number: number
}

export interface TvShowItem {
  id: string;
  action: string;
  time: string;
  value: any;
  iso_639_1: string;
  original_value: any;
}

export interface TvShowChange {
  key: string;
  items: TvShowItem[];
}

export interface TvShowChanges {
  changes: TvShowChange[];
}

export interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface EpisodeGroup {
  description: string;
  episode_count: number;
  group_count: number;
  id: string;
  name: string;
  network: Network;
  type: number;
}

export interface EpisodeGroups {
  results: EpisodeGroup[];
  id: number;
}

export interface ScreenedTheatricallyResult {
  id: number;
  episode_number: number;
  season_number: number;
}

export interface ScreenedTheatrically {
  id: number;
  results: ScreenedTheatricallyResult[];
}


export interface SimilarTvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface SimilarTvShows {
  page: number;
  results: SimilarTvShow[];
  total_pages: number;
  total_results: number;
}

export interface LatestTvShows {
  backdrop_path?: any;
  created_by: any[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview?: any;
  popularity: number;
  poster_path?: any;
  production_companies: any[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}


export interface OnTheAirResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface OnTheAir {
  page: number;
  results: OnTheAirResult[];
  total_results: number;
  total_pages: number;
}


export interface AiringTodayResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface TvShowsAiringToday {
  page: number;
  results: AiringTodayResult[];
  total_results: number;
  total_pages: number;
}


export interface PopularTvShowResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface PopularTvShows {
  page: number;
  results: PopularTvShowResult[];
  total_results: number;
  total_pages: number;
}


export interface TopRatedTvShowResult {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface TopRatedTvShows {
  page: number;
  results: TopRatedTvShowResult[];
  total_results: number;
  total_pages: number;
}


