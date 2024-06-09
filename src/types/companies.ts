import { Image } from '.';

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

export interface ParentCompany {
  name: string;
  id: number;
  logo_path: string;
}

export interface AlternativeNames {
  id: number;
  results: Name[];
}

export interface Name {
  name: string;
  type: string;
}

export interface CompanyImages {
  id: number;
  logos: Image[];
}
