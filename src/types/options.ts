import {
  Credits,
  Images,
  Keywords,
  Recommendations,
  Reviews,
  Translations,
  Videos,
} from '.';

export interface LanguageOption {
  language?: string;
}

export interface RegionOption {
  region?: string;
}

export interface PageOption {
  page?: number;
}

export type AppendToResponseKeys =
  | 'images'
  | 'videos'
  | 'credits'
  | 'recommendations'
  | 'reviews'
  | 'keywords';

export type AppendToResponse<
  K,
  T extends AppendToResponseKeys[] | undefined
> = K &
  (T extends undefined
    ? object
    : T extends Array<unknown>
    ? ('credits' extends T[number] ? { credits: Omit<Credits, 'id'> } : object) &
        ('videos' extends T[number] ? { videos: Omit<Videos, 'id'> } : object) &
        ('images' extends T[number] ? { images: Omit<Images, 'id'> } : object) &
        ('recommendations' extends T[number]
          ? { recommendations: Recommendations }
          : object) &
        ('reviews' extends T[number] ? { reviews: Omit<Reviews, 'id'> } : object) &
        ('reviews' extends T[number]
          ? { reviews: Omit<Translations, 'id'> }
          : object) &
        ('keywords' extends T[number] ? { keywords: Omit<Keywords, 'id'> } : object)
    : never);
