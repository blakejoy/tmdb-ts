export interface MediaChange {
  id: number;
  adult: boolean | undefined;
}

export interface MediaChanges {
  results: MediaChange[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface ChangeOptions {
  end_date?: string;
  start_date?: string;
  page?: number;
}

export interface Changes {
  changes: Change[];
}

export interface Change {
  key: string;
  items: ChangeItem[];
}

export interface ChangeItem {
  id: string;
  action: string;
  time: string;
  value: Array<number>;
  iso_639_1: string;
  original_value: Array<number>;
}
