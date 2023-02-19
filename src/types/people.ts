import { Movie, Person, TV, TvShowItem } from ".";

interface Cast {
	character: string;
	credit_id: string;
	vote_count: number;
	id: number;
	backdrop_path: string;
	poster_path: string;
	original_language: string;
	vote_average: number;
	genre_ids: number[];
	popularity: number;
	overview: string;
}

interface Crew {
	id: number;
	department: string;
	original_language: string;
	credit_id: string;
	overview: string;
	vote_count: number;
	poster_path: string;
	backdrop_path: string;
	popularity: number;
	genre_ids: number[];
	job: string;
	vote_average: number;
}

export interface PersonMovieCast extends Cast {
	release_date: string;
	video: boolean;
	adult: boolean;
	title: string;
	original_title: string;
}

export interface PersonMovieCrew extends Crew {
	original_title: string;
	video: boolean;
	title: string;
	adult: boolean;
	release_date: string;
}

export interface PersonTvShowCrew extends Crew {
	episode_count: number;
	origin_country: string[];
	original_name: string;
	name: string;
	first_air_date: string;
}

export interface PersonTvShowCast extends Cast {
	original_name: string;
	name: string;
	episode_count: number;
	first_air_date: string;
	origin_country: string[];
}

export interface PersonMovieCredit {
	cast: PersonMovieCast[];
	crew: PersonMovieCrew[];
	id: number;
}

export interface PersonTvShowCredit {
	cast: PersonTvShowCast[];
	crew: PersonTvShowCrew[];
	id: number;
}

export interface PersonCombinedCredits {
	cast: (PersonMovieCast & PersonTvShowCast)[];
	crew: (PersonMovieCrew & PersonTvShowCrew)[];
	id: number;
}

export interface PersonDetail {
	birthday: string,
	known_for_department: string,
	deathday: string,
	id: number,
	name: string,
	also_known_as: string[]
	gender: number,
	biography: string,
	popularity: number,
	place_of_birth: string,
	profile_path: string,
	adult: boolean,
	imdb_id: string,
	homepage: string
}

export interface PersonChange{
	id: string;
	action: string;
	time: string;
	iso_639_1: string;
	iso_3166_1: string;
	value: string | { profile: { file_path: string;} };
	original_value: string | { profile: { file_path: string; } };
}

export interface PersonChanges {
	changes: {
		key: string;
		items: PersonChange[];
	}[];
}

export interface PopularPersons{
	page: number;
	results: Person[];
	total_results: number;
	total_pages: number;
}

export interface TaggedImage{
  aspect_ratio: number;
  file_path: string;
  height: number;
  id: string;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
  image_type: string;
  media_type: string;
  media: Movie | TV
}

export interface TaggedImages{
	page: number;
	results: TaggedImage[];
	total_results: number;
	total_pages: number;
}

export interface PeopleTranslations{
	id: number;
	translations: {
	  iso_3166_1: string;
	  iso_639_1: string;
	  name: string;
	  english_name: string;
	  data: {
		biography: string
	  };
	}
}