import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';


export class Cities{
    constructor(
        public city:string,
        public country:number,
        public status:string
    ){}
}


@Injectable()
export class CityManagerService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/citiesManager/citiesManager.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later


    public retrieveInfo():Promise<Cities[]>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let cities:Cities[] =[]
                        let citiesJson = $.map(res.json(), function(e){return e});
                        console.log(citiesJson)
                        $.each(citiesJson, function(i,city){
                            cities.push(new Cities(
                                city.city,
                                city.country,
                                city.status)
                            )
                        });
                        resolve(cities);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}