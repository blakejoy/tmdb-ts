import { CountryCode } from '../types';

/** A region/country with its ISO code and names. */
export interface Region {
  /** ISO 3166-1 country code. */
  iso_3166_1: CountryCode;
  english_name: string;
  native_name: string;
}
