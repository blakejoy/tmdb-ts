# tmdb-ts

[![CI](https://github.com/blakejoy/tmdb-ts/workflows/CI/badge.svg)](https://github.com/blakejoy/tmdb-ts/actions)
[![Version npm](https://img.shields.io/npm/v/tmdb-ts.svg?style=flat-square)](https://www.npmjs.com/package/tmdb-ts)
[![npm Downloads](https://img.shields.io/npm/dm/tmdb-ts.svg?style=flat-square)](https://npmcharts.com/compare/tmdb-ts?minimal=true)

TypeScript library wrapper for [TMDB API](https://developers.themoviedb.org/) v3.

## Features

- **Full TypeScript support** with comprehensive type definitions
- **Modern authentication** using JWT access tokens (no API key in URLs)
- **Complete API coverage** for TMDB v3 endpoints
- **Promise-based** async/await interface
- **Zero configuration** - just provide your access token
- **Isomorphic** - works in Node.js (18+) and modern browsers
- **Zero dependencies** - uses native fetch API

## Installation

```bash
npm install --save tmdb-ts
```

## Usage

This library uses JWT authentication tokens for requests, so there is no need to append an API key to the URL. Once you have registered for access to the API, you can use your access token as follows:

> **Note:** Version 1.0 removed the default import. Make sure to use named imports.

```js
import { TMDB } from 'tmdb-ts';

const tmdb = new TMDB('accessToken');

try {
  const movies = await tmdb.search.movies({ query: 'American Pie' });
  console.log(movies);
} catch (err) {
  // handle error
}
```

## Custom Fetch

You can pass a custom `fetch` implementation via the options parameter. This is useful for frameworks like Next.js that patch the global `fetch` for caching, or for adding logging, interceptors, or using a different HTTP library.

```ts
const tmdb = new TMDB('accessToken', { fetch: customFetch });
```

### Next.js

Next.js patches the global `fetch` with caching support. Since tmdb-ts uses native `fetch` by default, this works automatically. However, you can explicitly pass it for clarity or to customize caching:

```ts
const tmdb = new TMDB('accessToken', {
  fetch: (url, init) =>
    fetch(url, { ...init, next: { revalidate: 3600 } }),
});
```

### undici

```ts
import { fetch as undiciFetch } from 'undici';

const tmdb = new TMDB('accessToken', { fetch: undiciFetch });
```

### cross-fetch

```ts
import crossFetch from 'cross-fetch';

const tmdb = new TMDB('accessToken', { fetch: crossFetch });
```

### node-fetch

```ts
import nodeFetch from 'node-fetch';

const tmdb = new TMDB('accessToken', { fetch: nodeFetch as unknown as typeof fetch });
```

### axios

Axios has a different API shape, so it needs a small wrapper:

```ts
import axios from 'axios';
import { TMDB } from 'tmdb-ts';

const axiosFetch: typeof fetch = async (input, init) => {
  const { data, status, statusText, headers } = await axios({
    url: input.toString(),
    method: init?.method ?? 'GET',
    headers: init?.headers as Record<string, string>,
    data: init?.body,
  });

  return new Response(JSON.stringify(data), {
    status,
    statusText,
    headers: new Headers(headers as Record<string, string>),
  });
};

const tmdb = new TMDB('accessToken', { fetch: axiosFetch });

// Now all requests go through axios
const movie = await tmdb.movies.details(550);
console.log(movie.title); // "Fight Club"

const results = await tmdb.search.movies({ query: 'Inception' });
console.log(results.results[0].title); // "Inception"
```

### got

got also needs a wrapper since it has a different API:

```ts
import got from 'got';

const gotFetch: typeof fetch = async (input, init) => {
  const response = await got(input.toString(), {
    method: init?.method as any,
    headers: init?.headers as Record<string, string>,
    body: init?.body as string,
  });

  return new Response(response.body, {
    status: response.statusCode,
    statusText: response.statusMessage,
    headers: new Headers(response.headers as Record<string, string>),
  });
};

const tmdb = new TMDB('accessToken', { fetch: gotFetch });
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.





