import fetch from 'node-fetch';


const BASE_URL_V3 = 'https://api.themoviedb.org/3'

export class Api{

    constructor(private accessToken: string){
        this.accessToken = accessToken
    }

    async get<T>(path: string): Promise<T> {
        const response = await fetch(`${BASE_URL_V3}${path}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        return await response.json() as T;
    }
}
