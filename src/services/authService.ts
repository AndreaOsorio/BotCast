import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import {timestamp} from "rxjs/operator/timestamp";

export class UserLogin{
    constructor(
        public username:string,
        public password:string,
        public timestamp:string
    ){}
}

export class AuthorizationToken{
    constructor(
        public authorized:boolean,
        public timestamp:string,
        public validUntil:string
    ){}
}

@Injectable()
export class AuthorizationService {

    constructor(private http: Http) {
    }

    apiRoot:string = '../assets/json/user/user.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    authorizeUser(userToBeAuthorized:UserLogin):Promise<AuthorizationToken>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let user = res.json();
                        let authorized:boolean = false;
                        let timestamp:string = (new Date())+"";
                        let validUntil:string = "0000";

                        if(userToBeAuthorized.password == user.password && userToBeAuthorized.username == user.username){
                            authorized = true;
                            validUntil = "1111";
                        }

                        resolve(new AuthorizationToken(authorized,timestamp,validUntil));
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}