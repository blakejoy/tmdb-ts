import { CountryCode } from '../types';

export interface Region {
  iso_3166_1: CountryCode;
  english_name: string;
  native_name: string;
}
