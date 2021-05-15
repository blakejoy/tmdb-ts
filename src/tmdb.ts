import { Account } from "./endpoints/account";

import {Certification} from "./endpoints/certification";
import {Change} from "./endpoints/changes";

export class TMDB {
    private accessToken: string;

    constructor(accessToken: string){
        this.accessToken = accessToken;
    }

    get account(){
        return new Account(this.accessToken);
    }

    get certifications(){
        return new Certification(this.accessToken);
    }

    get changes(){
        return new Change(this.accessToken);
    }

}



