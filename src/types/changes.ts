export interface MediaChange {
  id: number;
  adult?: boolean;
}

export interface MediaChanges {
  results: MediaChange[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Changes<T> {
  changes: Change<T>[];
}

export interface Change<T> {
  key: string;
  items: ChangeItem<T>[];
}

export interface ChangeItem<T> {
  id: string;
  action: string;
  time: string;
  value: T;
  iso_639_1: string;
  original_value: T;
}
