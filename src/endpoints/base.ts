import {Api} from "../api";


export class Base {
    protected api: Api;


    constructor(protected readonly accessToken: string){
        this.api = new Api(accessToken);
    }

}
