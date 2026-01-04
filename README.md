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

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.





