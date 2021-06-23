# tmdb-ts


Typescript library wrapper of [TMDB API](https://developers.themoviedb.org/) v3 .


[![Version npm](https://img.shields.io/npm/v/tmdb-ts.svg?style=flat-square)](https://www.npmjs.com/package/tmdb-ts)[![npm Downloads](https://img.shields.io/npm/dm/tmdb-ts.svg?style=flat-square)](https://npmcharts.com/compare/tmdb-ts?minimal=true)
This uses new jwt authentication token for requests so there is no need to append api key to the url. 
Once you have registered for access to the api you can use your access token as follows:

Installation:
``
npm install --save tmdb-ts
``

```js
import TMDB from 'tmdb-ts';

const tmdb = new TMDB('accessToken');

try {
   const movies = await tmdb.search.movies({ query: 'American Pie' });
    console.log(movies);
} catch(err) {
   // handle error
}
```





