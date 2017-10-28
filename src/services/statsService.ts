import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

export class Stat{
    constructor(
      public users: string,
      public activeUsers: string,
      public maxUsers:string,
      public favoriteCity:string
    ){}
}

@Injectable()
export class StatService {

    apiRoot:string = '../assets/json/stats/stats.json';

    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    constructor(private http: Http) {
    }

    retrieveStats(): Promise<Stat[]>{

        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let stats:Stat[] =[]
                        let statJson = $.map(res.json(), function(e){return e});
                        console.log(statJson)
                        $.each(statJson, function(i,stat){
                            stats.push(new Stat(stat.users,
                                                        stat.activeUsers,
                                                        stat.maxUsers,
                                                        stat.favoriteCity))
                        })
                        resolve(stats);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }
}