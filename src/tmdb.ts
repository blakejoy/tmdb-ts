import { Account } from "./endpoints/account";
import {config} from "./config";
import fetch from "node-fetch";

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


const tmdb = new TMDB(config.accessToken!);


(async () => {
   const changes =  await tmdb.changes.movies()
   console.log(changes);
})()



