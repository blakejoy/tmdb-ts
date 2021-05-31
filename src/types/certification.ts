export interface Certification {
  certification: string;
  meaning: string;
  order: number;
}

export interface Certifications {
  certifications: {
    US: Certification[],
    CA: Certification[],
    DE: Certification[],
    GB: Certification[],
    AU: Certification[],
    BR: Certification[],
    FR: Certification[],
    NZ: Certification[],
    IN: Certification[],
  }
}
