import { ParsedUrlQueryInput } from 'querystring';

export interface Change {
  id: number;
  adult: boolean | undefined;
}

export interface Changes{
  results: Change[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ChangeOptions extends ParsedUrlQueryInput {
  end_date?: string;
  start_date?: string;
  page?: number;
}
