import { ParsedUrlQueryInput } from 'querystring';

export interface LanguageOption extends ParsedUrlQueryInput {
	language?: string;
}

export interface PageOption extends ParsedUrlQueryInput {
	page?: number;
}
