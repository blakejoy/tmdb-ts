/** A media item that has been changed recently. */
export interface MediaChange {
  id: number;
  adult?: boolean;
}

/**
 * A paginated list of media IDs that have changed within a date range.
 *
 * @see https://developer.themoviedb.org/reference/changes-movie-list
 * @see https://developer.themoviedb.org/reference/changes-tv-list
 * @see https://developer.themoviedb.org/reference/changes-people-list
 */
export interface MediaChanges {
  results: MediaChange[];
  page: number;
  total_pages: number;
  total_results: number;
}

/** A set of change entries grouped by a field key (e.g. "title", "overview"). */
export interface Changes<T> {
  changes: Change<T>[];
}

/** A group of individual change items for a specific field. */
export interface Change<T> {
  /** The field that was changed (e.g. "title", "overview", "images"). */
  key: string;
  items: ChangeItem<T>[];
}

/** An individual change record with before and after values. */
export interface ChangeItem<T> {
  id: string;
  /** The type of change (e.g. "added", "updated", "deleted"). */
  action: string;
  /** ISO 8601 timestamp of when the change occurred. */
  time: string;
  /** The new value after the change. */
  value: T;
  /** ISO 639-1 language code for the change. */
  iso_639_1: string;
  /** The previous value before the change. */
  original_value: T;
}
