
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

//TODO: determine final DTO format for saved cities, should probably include location to use in geoloc services
export class Ciudad {
    constructor(
        public name: string
    ) {
    }
}

/**
 * Service that retrieves a user's saved cities to be displayed in the main tab of the mobile page.
 */
@Injectable()
export class MyCitiesService {

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the saved cities and its corresponding key (if any)
     */
    apiRoot:string = '../assets/json/cities/mycities.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //when the actual backend endpoints work

    constructor(private http: Http) {
    }

    /**
     * Function that performs a REST call to the backend and retrieves a user's saved cities as a list of cities...
     * @returns {Promise<T>}: promise that resolves to an array of a user's saved cities in the appropriate DTO object
     */
    public retrieveMyCities(): Promise<Ciudad[]>{

        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let ciudades:Ciudad[] =[]
                        let citiesJson = $.map(res.json(), function(e){return e});
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