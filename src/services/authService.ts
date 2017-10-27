import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';


/**
 * Data transfer object that encodes the credentials of a potential user that wants to login into the system
 */
export class UserLogin{
    /**
     * @param username: potential user username
     * @param password: potential user password
     * @param timestamp: time at which the login was attempted
     * @param privileges: what kind of user, admin or common
     */
    constructor(
        public username:string,
        public password:string,
        public timestamp:string,
        public privileges:string
    ){}
}

/**
 * Data transfer object that serves as an authentication token for logged users
 */
export class AuthorizationToken{
    /**
     * @param authorized: the user is authorized
     * @param timestamp: authorization operation timestamp
     * @param validUntil: time at which the token expires, users will be logged out if this happens
     * @param privileges: what kind of user, admin or common
     */
    constructor(
        public authorized:boolean,
        public timestamp:string,
        public validUntil:string,
        public privileges:string
    ){}
}

/**
 * Service that provides authentication mechanisms for the login workflow
 */
@Injectable()
export class AuthorizationService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
     */
    apiRoot:string = '../assets/json/user/user.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    /**
     * This method performs a lookup in the database and checks if the credentials are valid,
     * then builds the approprite authorization for administrators, common users or rejected users.
     * @param userToBeAuthorized: user that wants to log into the system
     * @returns {Promise<T>}: returns a promise that resolves to the authoriztion token encoded in the approprite DTO
     */
    //TODO: determine token expiration mechanisms, maybe set a default amount of time and extend based on activity??
    public authorizeUser(userToBeAuthorized:UserLogin):Promise<AuthorizationToken>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {

                        let users = $.map(res.json(), function(e){return e});

                        let authorized:boolean = false;
                        let timestamp:string = (new Date())+"";
                        let validUntil:string = "0000";
                        let authTokenPrivileges:string = "user";

                        $.each(users, function(i,user){
                            console.log(user)
                            if(userToBeAuthorized.password == user.password && userToBeAuthorized.username == user.username){
                                authorized = true;
                                validUntil = "1111";
                                if(user.privileges == "admin"){
                                    authTokenPrivileges="admin";
                                }
                            }
                        });

                        resolve(new AuthorizationToken(authorized,timestamp,validUntil, authTokenPrivileges));

                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}