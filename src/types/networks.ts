import { Image } from '.';

/**
 * Detailed information about a TV network.
 *
 * @see https://developer.themoviedb.org/reference/network-details
 */
export interface NetworkDetails {
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

/** The logos for a TV network. */
export interface NetworkImages {
  id: number;
  logos: Image[];
}
