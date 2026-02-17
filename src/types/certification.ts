/** A content rating certification for a specific country. */
export interface Certification {
  /** The certification code (e.g. "PG-13", "R"). */
  certification: string;
  /** A description of what the certification means. */
  meaning: string;
  /** The display order of this certification. */
  order: number;
}

/**
 * A map of country codes to their available content certifications.
 *
 * @see https://developer.themoviedb.org/reference/certification-movie-list
 * @see https://developer.themoviedb.org/reference/certifications-tv-list
 */
export interface Certifications {
  certifications: {
    AR: Certification[];
    AT: Certification[];
    AU: Certification[];
    BG: Certification[];
    BR: Certification[];
    CA: Certification[];
    'CA-QC': Certification[];
    CH: Certification[];
    CL: Certification[];
    CZ: Certification[];
    DE: Certification[];
    DK: Certification[];
    ES: Certification[];
    FI: Certification[];
    FR: Certification[];
    GB: Certification[];
    GR: Certification[];
    HK: Certification[];
    HU: Certification[];
    ID: Certification[];
    IE: Certification[];
    IL: Certification[];
    IN: Certification[];
    IT: Certification[];
    JP: Certification[];
    KR: Certification[];
    LT: Certification[];
    LU: Certification[];
    LV: Certification[];
    MO: Certification[];
    MX: Certification[];
    MY: Certification[];
    NL: Certification[];
    NO: Certification[];
    NZ: Certification[];
    PH: Certification[];
    PL: Certification[];
    PR: Certification[];
    PT: Certification[];
    RO: Certification[];
    RU: Certification[];
    SE: Certification[];
    SG: Certification[];
    SK: Certification[];
    TH: Certification[];
    TR: Certification[];
    TW: Certification[];
    UA: Certification[];
    US: Certification[];
    VI: Certification[];
    ZA: Certification[];
  };
}
