import { BaseEndpoint } from './base';
import {
  AlternativeTitles,
  AppendToResponse,
  AppendToResponseMovieKey,
  ChangeOption,
  Changes,
  Credits,
  ExternalIds,
  Images,
  Keywords,
  LanguageOption,
  LatestMovie,
  MovieChangeValue,
  MovieDetails,
  MovieLists,
  MoviesPlayingNow,
  PageOption,
  PopularMovies,
  Recommendations,
  RegionOption,
  ReleaseDates,
  Reviews,
  SimilarMovies,
  TopRatedMovies,
  Translations,
  UpcomingMovies,
  Videos,
  WatchProviders,
} from '../types';

const BASE_MOVIE = '/movie';

export interface MoviesImageSearchOptions extends LanguageOption {
  /**
   * a list of ISO-639-1 values to query
   */
  include_image_language?: string[];
}

export class MoviesEndpoint extends BaseEndpoint {
  constructor(
    protected readonly accessToken: string,
    customFetch?: typeof fetch
  ) {
    super(accessToken, customFetch);
  }

  /**
   * Get the top-level details of a movie by ID.
   *
   * @param id - The movie ID.
   * @param appendToResponse - Additional requests to append to the response (e.g. videos, credits).
   * @param language - ISO 639-1 language code.
   * @see https://developer.themoviedb.org/reference/movie-details
   */
  async details<T extends AppendToResponseMovieKey[] | undefined>(
    id: number,
    appendToResponse?: T,
    language?: string
  ) {
    const options = {
      append_to_response: appendToResponse
        ? appendToResponse.join(',')
        : undefined,
      language: language,
    };

    return await this.api.get<AppendToResponse<MovieDetails, T, 'movie'>>(
      `${BASE_MOVIE}/${id}`,
      options
    );
  }

  /**
   * Get all of the alternative titles for a movie.
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-alternative-titles
   */
  async alternativeTitles(id: number): Promise<AlternativeTitles> {
    return await this.api.get<AlternativeTitles>(
      `${BASE_MOVIE}/${id}/alternative_titles`
    );
  }

  /**
   * Get the changes for a movie. By default, only the last 24 hours are returned.
   *
   * @param id - The movie ID.
   * @param options - Filter by start/end date and page.
   * @see https://developer.themoviedb.org/reference/movie-changes
   */
  async changes(
    id: number,
    options?: ChangeOption
  ): Promise<Changes<MovieChangeValue>> {
    return await this.api.get<Changes<MovieChangeValue>>(
      `${BASE_MOVIE}/${id}/changes`,
      options
    );
  }

  /**
   * Get the cast and crew for a movie.
   *
   * @param id - The movie ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/movie-credits
   */
  async credits(id: number, options?: LanguageOption): Promise<Credits> {
    return await this.api.get<Credits>(`${BASE_MOVIE}/${id}/credits`, options);
  }

  /**
   * Get the external IDs for a movie (e.g. IMDb, Facebook, Instagram, Twitter).
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-external-ids
   */
  async externalIds(id: number): Promise<ExternalIds> {
    return await this.api.get<ExternalIds>(`${BASE_MOVIE}/${id}/external_ids`);
  }

  /**
   * Get the images that belong to a movie (posters, backdrops, logos).
   *
   * @param id - The movie ID.
   * @param options - Language and image language filter options.
   * @see https://developer.themoviedb.org/reference/movie-images
   */
  async images(
    id: number,
    options?: MoviesImageSearchOptions
  ): Promise<Images> {
    const computedOptions = {
      include_image_language: options?.include_image_language?.join(','),
      language: options?.language,
    };
    return await this.api.get<Images>(
      `${BASE_MOVIE}/${id}/images`,
      computedOptions
    );
  }

  /**
   * Get the keywords that have been added to a movie.
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-keywords
   */
  async keywords(id: number): Promise<Keywords> {
    return await this.api.get<Keywords>(`${BASE_MOVIE}/${id}/keywords`);
  }

  /**
   * Get the lists that a movie has been added to.
   *
   * @param id - The movie ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/movie-lists
   */
  async lists(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<MovieLists> {
    return await this.api.get<MovieLists>(`${BASE_MOVIE}/${id}/lists`, options);
  }

  /**
   * Get a list of recommended movies for a movie.
   *
   * @param id - The movie ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/movie-recommendations
   */
  async recommendations(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Recommendations> {
    return await this.api.get<Recommendations>(
      `${BASE_MOVIE}/${id}/recommendations`,
      options
    );
  }

  /**
   * Get the release dates and certifications for a movie.
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-release-dates
   */
  async releaseDates(id: number): Promise<ReleaseDates> {
    return await this.api.get<ReleaseDates>(
      `${BASE_MOVIE}/${id}/release_dates`
    );
  }

  /**
   * Get the user reviews for a movie.
   *
   * @param id - The movie ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/movie-reviews
   */
  async reviews(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<Reviews> {
    return await this.api.get<Reviews>(`${BASE_MOVIE}/${id}/reviews`, options);
  }

  /**
   * Get a list of similar movies. This is not the same as the "Recommendation" system.
   *
   * @param id - The movie ID.
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/movie-similar
   */
  async similar(
    id: number,
    options?: LanguageOption & PageOption
  ): Promise<SimilarMovies> {
    return await this.api.get<SimilarMovies>(
      `${BASE_MOVIE}/${id}/similar`,
      options
    );
  }

  /**
   * Get the translations for a movie.
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-translations
   */
  async translations(id: number): Promise<Translations> {
    return await this.api.get<Translations>(`${BASE_MOVIE}/${id}/translations`);
  }

  /**
   * Get the videos that have been added to a movie (trailers, teasers, clips, etc.).
   *
   * @param id - The movie ID.
   * @param options - Language options.
   * @see https://developer.themoviedb.org/reference/movie-videos
   */
  async videos(id: number, options?: LanguageOption): Promise<Videos> {
    return await this.api.get<Videos>(`${BASE_MOVIE}/${id}/videos`, options);
  }

  /**
   * Get the watch providers (streaming, rent, buy) for a movie. Powered by JustWatch.
   *
   * @param id - The movie ID.
   * @see https://developer.themoviedb.org/reference/movie-watch-providers
   */
  async watchProviders(id: number): Promise<WatchProviders> {
    return await this.api.get<WatchProviders>(
      `${BASE_MOVIE}/${id}/watch/providers`
    );
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   *
   * @see https://developer.themoviedb.org/reference/movie-latest-id
   */
  async latest(): Promise<LatestMovie> {
    return await this.api.get<LatestMovie>(`${BASE_MOVIE}/latest`);
  }

  /**
   * Get a list of movies that are currently in theatres.
   *
   * @param options - Page, language, and region options.
   * @see https://developer.themoviedb.org/reference/movie-now-playing-list
   */
  async nowPlaying(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<MoviesPlayingNow> {
    return await this.api.get<MoviesPlayingNow>(
      `${BASE_MOVIE}/now_playing`,
      options
    );
  }

  /**
   * Get a list of movies ordered by popularity.
   *
   * @param options - Language and pagination options.
   * @see https://developer.themoviedb.org/reference/movie-popular-list
   */
  async popular(options?: LanguageOption & PageOption): Promise<PopularMovies> {
    return await this.api.get<PopularMovies>(`${BASE_MOVIE}/popular`, options);
  }

  /**
   * Get a list of movies ordered by rating.
   *
   * @param options - Page, language, and region options.
   * @see https://developer.themoviedb.org/reference/movie-top-rated-list
   */
  async topRated(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<TopRatedMovies> {
    return await this.api.get<TopRatedMovies>(
      `${BASE_MOVIE}/top_rated`,
      options
    );
  }

  /**
   * Get a list of movies that are being released soon.
   *
   * @param options - Page, language, and region options.
   * @see https://developer.themoviedb.org/reference/movie-upcoming-list
   */
  async upcoming(
    options?: PageOption & LanguageOption & RegionOption
  ): Promise<UpcomingMovies> {
    return await this.api.get<UpcomingMovies>(
      `${BASE_MOVIE}/upcoming`,
      options
    );
  }
}
