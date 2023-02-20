import { Movie, TV } from ".";

export type SortOption =
	| 'popularity.asc'
	| 'popularity.desc'
	| 'release_date.asc'
	| 'release_date.desc'
	| 'revenue.asc'
	| 'revenue.desc'
	| 'primary_release_date.asc'
	| 'primary_release_date.desc'
	| 'original_title.asc'
	| 'original_title.desc'
	| 'vote_average.asc'
	| 'vote_average.desc'
	| 'vote_count.asc'
	| 'vote_count.desc';

export interface MovieDiscoverResult{
	page: number;
	results: Movie[];
	total_results: number;
	total_pages: number;
}

export interface TvShowDiscoverResult{
	page: number;
	results: TV[];
	total_results: number;
	total_pages: number;
}
