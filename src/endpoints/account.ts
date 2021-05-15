import { Api } from "../api";
import {Base} from "./base";



export class Account extends Base{

    constructor(accessToken: string){
        super(accessToken);
    }


    async details(): Promise<any> {
        return await this.api.get('/account');

    }
}
