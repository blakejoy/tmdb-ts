import fetch from 'cross-fetch';
import { parseOptions } from './utils';
import { ErrorResponse } from './types';

const BASE_URL_V3 = 'https://api.themoviedb.org/3';

export default class Api {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async get<T>(path: string, options?: Record<string, any>): Promise<T> {
    const params = parseOptions(options);
    const response = await fetch(`${BASE_URL_V3}${path}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error((json as ErrorResponse).status_message);
    }
    return json as T;
  }
}
