import {Base} from "./base";
import {Certifications} from "../types/certification";


export class Certification extends Base{

    constructor(protected readonly accessToken: string){
       super(accessToken);
    }


    async movies(): Promise<Certifications> {
        return await this.api.get<Certifications>('/certification/movie/list');

    }

    async tvShows(): Promise<Certifications> {
        return await this.api.get<Certifications>('/certification/tv/list');
    }
}
