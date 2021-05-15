# tmdb-ts


Typescript library wrapper of [TMDB API](https://developers.themoviedb.org/) v3 .


This uses new jwt authentication token for requests so there is no need to append api key to the url. 
Once you have registered for access to the api you can use your access token as follows:

`import TMDB from 'tmdb-ts';`

`const tmdb = new TMDB(accessToken);`

`tmdb.search.movies({query: 'American Pie'})`



