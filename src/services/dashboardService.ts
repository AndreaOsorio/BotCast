import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';


export class Visitors{
    constructor(
        public month:string,
        public visits:number
    ){}
}

export class TopSearched{
    constructor(
        public name:string,
        public searches:number
    ){}
}


@Injectable()
export class VisitorService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/dashboard/visitors.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later


    public retrieveInfo():Promise<Visitors[]>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let visits:Visitors[] =[]
                        let visitsJson = $.map(res.json(), function(e){return e});
                        console.log(visitsJson)
                        $.each(visitsJson, function(i,visit){
                            visits.push(new Visitors(
                                visit.month,
                                visit.visits)
                            )
                        });
                        resolve(visits);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}

@Injectable()
export class SearchedService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/dashboard/topsearched.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later


    public retrieveInfo():Promise<TopSearched[]>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let searches:TopSearched[] =[]
                        let searchesJson = $.map(res.json(), function(e){return e});
                        console.log(searchesJson)
                        $.each(searchesJson, function(i,top){
                            searches.push(new TopSearched(
                                top.name,
                                top.searches)
                            )
                        });
                        resolve(searches);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}