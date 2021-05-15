import {
  AccountEndpoint,
  CertificationEndpoint,
  ChangeEndpoint,
  CreditsEndpoint,
  GenreEndpoint,
  MoviesEndpoint,
  SearchEndpoint,
} from './endpoints';

export default class TMDB {
  private readonly accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  get account(): AccountEndpoint {
    return new AccountEndpoint(this.accessToken);
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

  get search(): SearchEndpoint{
    return new SearchEndpoint(this.accessToken);
  }

  get genres(): GenreEndpoint{
    return new GenreEndpoint(this.accessToken);
  }

  get movies(): MoviesEndpoint{
    return new MoviesEndpoint(this.accessToken);
  }
}
