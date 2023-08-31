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

export interface ChangeOption extends PageOption {
  start_date?: Date;
  end_date?: Date;
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
  Media extends AppendToResponseMediaType
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
        ('videos' extends T[number] ? { videos: Omit<Videos, 'id'> } : object) &
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
