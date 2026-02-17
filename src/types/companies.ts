import { Image } from '.';

/**
 * Detailed information about a production company.
 *
 * @see https://developer.themoviedb.org/reference/company-details
 */
export interface CompanyDetails {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company?: ParentCompany;
}

/** A parent company that owns or controls another company. */
export interface ParentCompany {
  name: string;
  id: number;
  logo_path: string;
}

/**
 * A list of alternative names for a company or network.
 *
 * @see https://developer.themoviedb.org/reference/company-alternative-names
 */
export interface AlternativeNames {
  id: number;
  results: Name[];
}

/** An alternative name entry. */
export interface Name {
  name: string;
  type: string;
}

/**
 * A list of logos for a company.
 *
 * @see https://developer.themoviedb.org/reference/company-images
 */
export interface CompanyImages {
  id: number;
  logos: Image[];
}
