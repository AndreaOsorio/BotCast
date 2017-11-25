import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';


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

    public login(email: string, password:string){
        let apiUsuariosLogin:string = 'http://localhost:3000/api/UsuariosApp/login';
        let params ={
            email: email,
            password: password
        }

        let promise = new Promise((resolve, reject) => {
            this.http.post(apiUsuariosLogin, params)
                .toPromise()
                .then(
                    res=>{
                        let params = {
                            id: res.json().id,
                            userId: res.json().userId
                        }
                        resolve(params);
                    },
                    msg => {
                        reject(msg);
                    }
                )
            }).catch(e=>{
                console.log(e)
            });

        return promise;
    }

    private createHeaders(authToken:string): RequestOptions{
        let headers = new Headers();
        headers.append('Authorization', authToken);
        return new RequestOptions({ headers: headers });
    }

    public logout(authToken:string){
        let apiUsuariosLogin:string = 'http://localhost:3000/api/UsuariosApp/logout?access_token='+authToken;
        let params ={
            access_token: authToken,
        }
        let promise = new Promise((resolve, reject) => {
            this.http.post(apiUsuariosLogin, params, this.createHeaders(authToken))
                .toPromise()
                .then(
                    res=>{
                        console.log(res.json())
                        let params = {
                            message: "logging out",
                        }
                        resolve(params);
                    },
                    msg => {
                        reject(msg);
                    }
                )
        }).catch(e=>{
            console.log(e)
        });

        return promise;
    }




    /**
     * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
     */
    apiRoot:string = '../assets/json/user/user.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    /**
     * MOCK: methods
     * This method performs a lookup in the database and checks if the credentials are valid,
     * then builds the approprite authorization for administrators, common users or rejected users.
     * @param userToBeAuthorized: user that wants to log into the system
     * @returns {Promise<T>}: returns a promise that resolves to the authoriztion token encoded in the approprite DTO
     */
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


    /**
     *
     * @returns {Promise<T>}
     */
    public retrieveUserInfo(): Promise<UserLogin[]>{

        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let info:UserLogin[] =[]
                        let infoJson = $.map(res.json(), function(e){return e});
                        console.log(infoJson)
                        $.each(infoJson, function(i,information){
                            info.push(new UserLogin(information.username,
                                information.password,
                                information.timestamp,
                                information.privilages))
                        })
                        resolve(info);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}