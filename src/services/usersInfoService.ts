import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';


export class Information{
    /**
     * @param name: name of the user
     * @param age: age of the user
     * @param username: username of the user
     * @param email: email of the user
     * @param logins: number of logins from the user
     * @param lastlogin: Date in which the user last connected
     * @param lastlocation: Last location from where the user connected
     */
    constructor(
        public name:string,
        public age:number,
        public username:string,
        public email:string,
        public logins:number,
        public lastlogin:string,
        public lastlocation:string
    ){}
}


@Injectable()
export class UsersInfoService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/usersinfo/usersinfo.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later


    public retrieveInfo():Promise<Information[]>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let infos:Information[] =[]
                        let infosJson = $.map(res.json(), function(e){return e});
                        console.log(infosJson)
                        $.each(infosJson, function(i,info){
                            infos.push(new Information(
                                info.name,
                                info.age,
                                info.username,
                                info.email,
                                info.logins,
                                info.lastlogin,
                                info.lastlocation)
                            )
                        });
                        resolve(infos);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}