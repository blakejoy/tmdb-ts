import { ParsedUrlQueryInput } from 'querystring';

export interface Change {
  id: number;
  adult: boolean | undefined;
}

export interface ChangeOptions extends ParsedUrlQueryInput {
  end_date?: string;
  start_date?: string;
  page?: number;
}
