import { Image } from '.';

export interface NetworkDetails {
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface NetworkImages {
  id: number;
  logos: Image[];
}
