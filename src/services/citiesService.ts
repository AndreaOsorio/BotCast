
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

export class Ciudad {
    constructor(
        public name: string
    ) {
    }
}

@Injectable()
export class MyCitiesService {

    apiRoot:string = '../assets/json/cities/mycities.json';

    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    constructor(private http: Http) {
    }

    retrieveMyCities(): Promise<Ciudad[]>{

        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let ciudades:Ciudad[] =[]
                        let citiesJson = $.map(res.json(), function(e){return e});
                        console.log(citiesJson)
                        $.each(citiesJson, function(i,city){
                            ciudades.push(new Ciudad(city.name))
                        });
                        resolve(ciudades);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }
}