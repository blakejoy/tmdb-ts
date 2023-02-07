import { PersonDetail, PersonMovieCredit, PersonTvShowCredit } from '../types';
import { BaseEndpoint } from './base';

const BASE_PERSON = '/person';



export class PeopleEndpoint extends BaseEndpoint {
	constructor(accessToken: string) {
		super(accessToken);
	}

	async details(id: number): Promise<PersonDetail> {
		return await this.api.get<PersonDetail>(`${BASE_PERSON}/${id}`);
	}

	async movieCredits(
		id: number
	): Promise<PersonMovieCredit> {
		return await this.api.get<PersonMovieCredit>(
			`${BASE_PERSON}/${id}/movie_credits`
		);
	}

	async tvShowCredits(
		id: number
	): Promise<PersonTvShowCredit> {
		return await this.api.get<PersonTvShowCredit>(
			`${BASE_PERSON}/${id}/tv_credits`
		);
	}
}
