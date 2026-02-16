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
  TvSeasonsEndpoint,
  TvEpisodesEndpoint,
  WatchProvidersEndpoint,
} from './endpoints';
import { CompaniesEndpoint } from './endpoints/companies';
import { NetworksEndpoint } from './endpoints/networks';

export interface TMDBOptions {
  fetch?: typeof fetch;
}

export class TMDB {
  private readonly accessToken: string;
  private readonly customFetch?: typeof fetch;

  constructor(accessToken: string, options?: TMDBOptions) {
    this.accessToken = accessToken;
    this.customFetch = options?.fetch;
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.accessToken, this.customFetch);
  }

  get configuration(): ConfigurationEndpoint {
    return new ConfigurationEndpoint(this.accessToken, this.customFetch);
  }

  get certifications(): CertificationEndpoint {
    return new CertificationEndpoint(this.accessToken, this.customFetch);
  }

  get changes(): ChangeEndpoint {
    return new ChangeEndpoint(this.accessToken, this.customFetch);
  }

  get credits(): CreditsEndpoint {
    return new CreditsEndpoint(this.accessToken, this.customFetch);
  }

  get companies(): CompaniesEndpoint {
    return new CompaniesEndpoint(this.accessToken, this.customFetch);
  }

  get networks(): NetworksEndpoint {
    return new NetworksEndpoint(this.accessToken, this.customFetch);
  }

  get search(): SearchEndpoint {
    return new SearchEndpoint(this.accessToken, this.customFetch);
  }

  get genres(): GenreEndpoint {
    return new GenreEndpoint(this.accessToken, this.customFetch);
  }

  get movies(): MoviesEndpoint {
    return new MoviesEndpoint(this.accessToken, this.customFetch);
  }

  get tvShows(): TvShowsEndpoint {
    return new TvShowsEndpoint(this.accessToken, this.customFetch);
  }

  get tvEpisode(): TvEpisodesEndpoint {
    return new TvEpisodesEndpoint(this.accessToken, this.customFetch);
  }

  get discover(): DiscoverEndpoint {
    return new DiscoverEndpoint(this.accessToken, this.customFetch);
  }

  get people(): PeopleEndpoint {
    return new PeopleEndpoint(this.accessToken, this.customFetch);
  }

  get review(): ReviewEndpoint {
    return new ReviewEndpoint(this.accessToken, this.customFetch);
  }

  get trending(): TrendingEndpoint {
    return new TrendingEndpoint(this.accessToken, this.customFetch);
  }

  get find(): FindEndpoint {
    return new FindEndpoint(this.accessToken, this.customFetch);
  }

  get keywords(): KeywordsEndpoint {
    return new KeywordsEndpoint(this.accessToken, this.customFetch);
  }

  get collections(): CollectionsEndpoint {
    return new CollectionsEndpoint(this.accessToken, this.customFetch);
  }

  get tvSeasons(): TvSeasonsEndpoint {
    return new TvSeasonsEndpoint(this.accessToken, this.customFetch);
  }

  get watchProviders(): WatchProvidersEndpoint {
    return new WatchProvidersEndpoint(this.accessToken, this.customFetch);
  }
}
