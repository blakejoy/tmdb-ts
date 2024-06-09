import {
  AlternativeTitles,
  Changes,
  ContentRatings,
  Credits,
  EpisodeGroups,
  ExternalIds,
  Images,
  Keywords,
  MovieLists,
  PeopleImages,
  PersonTranslations,
  PersonCombinedCredits,
  PersonMovieCredit,
  PersonTvShowCredit,
  Recommendations,
  ReleaseDates,
  Reviews,
  ScreenedTheatrically,
  SimilarMovies,
  SimilarTvShows,
  TaggedImages,
  Translations,
  Videos,
  WatchProviders,
  PersonChangeValue,
  MovieChangeValue,
  TvShowChangeValue,
  TvEpisodeChangeValue,
  TvEpisodeCredit,
  TvEpisodeTranslations,
  TvSeasonChangeValue,
  CountryCode,
} from '.';

export const AvailableLanguages = [
  'af-ZA',
  'ar-AE',
  'ar-BH',
  'ar-EG',
  'ar-IQ',
  'ar-JO',
  'ar-LY',
  'ar-MA',
  'ar-QA',
  'ar-SA',
  'ar-TD',
  'ar-YE',
  'be-BY',
  'bg-BG',
  'bn-BD',
  'br-FR',
  'ca-AD',
  'ca-ES',
  'ch-GU',
  'cs-CZ',
  'cy-GB',
  'da-DK',
  'de-AT',
  'de-CH',
  'de-DE',
  'el-CY',
  'el-GR',
  'en-AG',
  'en-AU',
  'en-BB',
  'en-BZ',
  'en-CA',
  'en-CM',
  'en-GB',
  'en-GG',
  'en-GH',
  'en-GI',
  'en-GY',
  'en-IE',
  'en-JM',
  'en-KE',
  'en-LC',
  'en-MW',
  'en-NZ',
  'en-PG',
  'en-TC',
  'en-US',
  'en-ZM',
  'en-ZW',
  'eo-EO',
  'es-AR',
  'es-CL',
  'es-DO',
  'es-EC',
  'es-ES',
  'es-GQ',
  'es-GT',
  'es-HN',
  'es-MX',
  'es-NI',
  'es-PA',
  'es-PE',
  'es-PY',
  'es-SV',
  'es-UY',
  'et-EE',
  'eu-ES',
  'fa-IR',
  'fi-FI',
  'fr-BF',
  'fr-CA',
  'fr-CD',
  'fr-CI',
  'fr-FR',
  'fr-GF',
  'fr-GP',
  'fr-MC',
  'fr-ML',
  'fr-MU',
  'fr-PF',
  'ga-IE',
  'gd-GB',
  'gl-ES',
  'he-IL',
  'hi-IN',
  'hr-HR',
  'hu-HU',
  'id-ID',
  'it-IT',
  'it-VA',
  'ja-JP',
  'ka-GE',
  'kk-KZ',
  'kn-IN',
  'ko-KR',
  'ky-KG',
  'lt-LT',
  'lv-LV',
  'ml-IN',
  'mr-IN',
  'ms-MY',
  'ms-SG',
  'nb-NO',
  'nl-BE',
  'nl-NL',
  'no-NO',
  'pa-IN',
  'pl-PL',
  'pt-AO',
  'pt-BR',
  'pt-MZ',
  'pt-PT',
  'ro-MD',
  'ro-RO',
  'ru-RU',
  'si-LK',
  'sk-SK',
  'sl-SI',
  'sq-AL',
  'sq-XK',
  'sr-ME',
  'sr-RS',
  'sv-SE',
  'sw-TZ',
  'ta-IN',
  'te-IN',
  'th-TH',
  'tl-PH',
  'tr-TR',
  'uk-UA',
  'ur-PK',
  'vi-VN',
  'zh-CN',
  'zh-HK',
  'zh-SG',
  'zh-TW',
  'zu-ZA',
] as const;

export type AvailableLanguage = (typeof AvailableLanguages)[number];

export interface LanguageOption {
  language?: AvailableLanguage;
}

export interface WatchRegionOption {
  watch_region?: CountryCode;
}

export interface RegionOption {
  region?: string;
}

export interface TimezoneOption {
  timezone?: string;
}

export interface PageOption {
  page?: number;
}

export interface ChangeOption extends PageOption {
  start_date?: string;
  end_date?: string;
}

export type AppendToResponseMovieKey =
  | 'images'
  | 'videos'
  | 'credits'
  | 'recommendations'
  | 'reviews'
  | 'changes'
  | 'similar'
  | 'lists'
  | 'release_dates'
  | 'alternative_titles'
  | 'external_ids'
  | 'translations'
  | 'watch/providers'
  | 'keywords';

export type AppendToResponseTvKey =
  | 'content_ratings'
  | 'images'
  | 'videos'
  | 'credits'
  | 'recommendations'
  | 'reviews'
  | 'changes'
  | 'similar'
  | 'alternative_titles'
  | 'external_ids'
  | 'translations'
  | 'watch/providers'
  | 'aggregate_credits'
  | 'episode_groups'
  | 'screened_theatrically'
  | 'keywords';

export type AppendToResponsePersonKey =
  | 'images'
  | 'changes'
  | 'movie_credits'
  | 'tv_credits'
  | 'combined_credits'
  | 'external_ids'
  | 'tagged_images'
  | 'translations';

export type AppendToResponseTvEpisodeKey =
  | 'images'
  | 'credits'
  | 'external_ids'
  | 'videos'
  | 'translations';

export type AppendToResponseTvSeasonKey =
  | 'images'
  | 'credits'
  | 'external_ids'
  | 'videos'
  | 'aggregate_credits'
  | 'translations';

type AppendToResponseAllKeys =
  | AppendToResponseTvKey
  | AppendToResponseMovieKey
  | AppendToResponseTvEpisodeKey
  | AppendToResponseTvSeasonKey
  | AppendToResponsePersonKey;

export type AppendToResponseMediaType =
  | 'movie'
  | 'tvShow'
  | 'person'
  | 'tvSeason'
  | 'tvEpisode';

export type AppendToResponse<
  K,
  T extends AppendToResponseAllKeys[] | undefined,
  Media extends AppendToResponseMediaType,
> = K &
  (T extends undefined
    ? object
    : T extends Array<unknown>
      ? ('credits' extends T[number]
          ? {
              credits: Media extends 'tvEpisode'
                ? TvEpisodeCredit
                : Omit<Credits, 'id'>;
            }
          : object) &
          ('videos' extends T[number]
            ? { videos: Omit<Videos, 'id'> }
            : object) &
          ('images' extends T[number]
            ? {
                images: Omit<
                  Media extends 'person' ? PeopleImages : Images,
                  'id'
                >;
              }
            : object) &
          ('recommendations' extends T[number]
            ? { recommendations: Recommendations }
            : object) &
          ('reviews' extends T[number]
            ? { reviews: Omit<Reviews, 'id'> }
            : object) &
          ('reviews' extends T[number]
            ? { reviews: Omit<Translations, 'id'> }
            : object) &
          ('changes' extends T[number]
            ? {
                changes: Changes<
                  Media extends 'person'
                    ? PersonChangeValue
                    : Media extends 'movie'
                      ? MovieChangeValue
                      : Media extends 'tvShow'
                        ? TvShowChangeValue
                        : Media extends 'tvSeason'
                          ? TvSeasonChangeValue
                          : TvEpisodeChangeValue
                >;
              }
            : object) &
          ('keywords' extends T[number]
            ? { keywords: Omit<Keywords, 'id'> }
            : object) &
          ('lists' extends T[number]
            ? { lists: Omit<MovieLists, 'id'> }
            : object) &
          ('release_dates' extends T[number]
            ? { release_dates: Omit<ReleaseDates, 'id'> }
            : object) &
          ('alternative_titles' extends T[number]
            ? { alternative_titles: Omit<AlternativeTitles, 'id'> }
            : object) &
          ('external_ids' extends T[number]
            ? { external_ids: Omit<ExternalIds, 'id'> }
            : object) &
          ('translations' extends T[number]
            ? {
                translations: Omit<
                  Media extends 'person'
                    ? PersonTranslations
                    : Media extends 'tvEpisode'
                      ? TvEpisodeTranslations
                      : Translations,
                  'id'
                >;
              }
            : object) &
          ('watch/providers' extends T[number]
            ? { 'watch/providers': Omit<WatchProviders, 'id'> }
            : object) &
          ('aggregate_credits' extends T[number]
            ? { aggregate_credits: Omit<Credits, 'id'> }
            : object) &
          ('episode_groups' extends T[number]
            ? { episode_groups: Omit<EpisodeGroups, 'id'> }
            : object) &
          ('screened_theatrically' extends T[number]
            ? { screened_theatrically: Omit<ScreenedTheatrically, 'id'> }
            : object) &
          ('similar' extends T[number]
            ? {
                similar: Media extends 'movie'
                  ? SimilarMovies
                  : Media extends 'tvShow'
                    ? SimilarTvShows
                    : unknown;
              }
            : object) &
          ('content_ratings' extends T[number]
            ? { content_ratings: Omit<ContentRatings, 'id'> }
            : object) &
          ('movie_credits' extends T[number]
            ? { movie_credits: Omit<PersonMovieCredit, 'id'> }
            : object) &
          ('tv_credits' extends T[number]
            ? { tv_credits: Omit<PersonTvShowCredit, 'id'> }
            : object) &
          ('combined_credits' extends T[number]
            ? { combined_credits: Omit<PersonCombinedCredits, 'id'> }
            : object) &
          ('tagged_images' extends T[number]
            ? { tagged_images: TaggedImages }
            : object)
      : never);
