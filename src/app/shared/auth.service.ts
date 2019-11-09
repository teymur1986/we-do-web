import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ILogin {
    password: string;
    email: string;
}

export interface ISignUp extends ILogin {
    firstName: string;
    lastName: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private baseURL = 'http://localhost:3000/workers/';

    constructor(
        private httpClient: HttpClient,
    ) {/** NOP */}

    async signUp(d: ISignUp) {
        return await this.httpClient.post(`${this.baseURL}signup`, d);
    }

    async login(d: ILogin) {
        return await this.httpClient.post(`${this.baseURL}login`, d);
    }

}
