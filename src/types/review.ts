import { Review } from './';

/**
 * Detailed review information including the associated media.
 *
 * @see https://developer.themoviedb.org/reference/review-details
 */
export interface ReviewDetails extends Review {
  /** ISO 639-1 language code. */
  iso_639_1: string;
  media_id: number;
  media_title: number;
  media_type: number;
}
