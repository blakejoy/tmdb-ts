import {
  AccountEndpoint,
  CertificationEndpoint,
  ChangeEndpoint,
  CreditsEndpoint,
  GenreEndpoint,
  MoviesEndpoint,
  SearchEndpoint,
  TvShowsEndpoint,
  ConfigurationEndpoint,
  DiscoverEndpoint,
  PeopleEndpoint,
  ReviewEndpoint,
  TrendingEndpoint,
  FindEndpoint,
  KeywordsEndpoint,
  CollectionsEndpoint,
} from './endpoints';

export default class TMDB {
  private readonly accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.accessToken);
  }

  get configuration(): ConfigurationEndpoint {
    return new ConfigurationEndpoint(this.accessToken);
  }

  get certifications(): CertificationEndpoint {
    return new CertificationEndpoint(this.accessToken);
  }

  get changes(): ChangeEndpoint {
    return new ChangeEndpoint(this.accessToken);
  }

  get credits(): CreditsEndpoint {
    return new CreditsEndpoint(this.accessToken);
  }

  get search(): SearchEndpoint {
    return new SearchEndpoint(this.accessToken);
  }

  get genres(): GenreEndpoint {
    return new GenreEndpoint(this.accessToken);
  }

  get movies(): MoviesEndpoint {
    return new MoviesEndpoint(this.accessToken);
  }

  get tvShows(): TvShowsEndpoint {
    return new TvShowsEndpoint(this.accessToken);
  }

  get discover(): DiscoverEndpoint {
    return new DiscoverEndpoint(this.accessToken);
  }

  get people(): PeopleEndpoint {
    return new PeopleEndpoint(this.accessToken);
  }

  get review(): ReviewEndpoint {
    return new ReviewEndpoint(this.accessToken);
  }

  get trending(): TrendingEndpoint {
    return new TrendingEndpoint(this.accessToken);
  }

  get find(): FindEndpoint {
    return new FindEndpoint(this.accessToken);
  }

  get keywords(): KeywordsEndpoint {
    return new KeywordsEndpoint(this.accessToken);
  }

  get collections(): CollectionsEndpoint {
    return new CollectionsEndpoint(this.accessToken);
  }
}
