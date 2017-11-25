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

export class ActiveCity{
    constructor(
        public id: string,
        public name:string,
        public province:string,
        public country: string,
        public active: boolean
    ){}
}


@Injectable()
export class CityManagerService {

    constructor(private http: Http) {
    }

    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/citiesManager/citiesManager.json';
    apiRoot2:string = 'http://localhost:3000/api/CiudadesCatalogo';
    apiCiudadesActivas: string = 'http://localhost:3000/api/CiudadesActivas';

    /**
     * Look up a city by its name or the name of its country, admin operation
     */
    public retrieveSearchedCityInfo(cityToSearch: string):Promise<Cities[]>{
        let query = {
            where: {
                or: [
                    {country: {
                        like: cityToSearch
                    }
                    },
                    {city: {
                        like: cityToSearch
                    }
                    }
                ]
            }
        }

        let promise = null;

        if(cityToSearch === "" || cityToSearch === undefined){
            promise =  new Promise((resolve, reject)=>{
                let arr = []
                arr.push(new Cities("",0,""));
                resolve(arr);
            })
        }else{
            let apiURL2 = `${this.apiRoot2}?filter=${JSON.stringify(query)}`;

            promise = new Promise((resolve, reject) => {
                this.http.get(apiURL2)
                    .toPromise()
                    .then(
                        res => {
                            let cities:Cities[] =[]
                            let citiesJson = $.map(res.json(), function(e){return e});
                            $.each(citiesJson, function(i,city){
                                cities.push(new Cities(
                                    city.city,
                                    city.country,
                                    city.province)
                                )
                            });
                            resolve(cities);
                        },
                        msg => {
                            reject(msg);
                        }
                    );
            });
        }

        return promise;
    }


    /**
     * Add a city to the list of active cities, admin operation
     */
    public addToActiveCitiesService(cityName:string, cityProvince:string, countryName: string): Promise<ActiveCity>{

        let apiURL = this.apiCiudadesActivas;
        let params = {
            nombre: cityName,
            provincia: cityProvince,
            pais: countryName,
            activa: true
        }

        let promise = new Promise((resolve, reject) => {
            this.http.post(apiURL, params)
                .toPromise()
                .then(
                    res => {
                        let newCityJson = res.json();
                        resolve(new ActiveCity(
                            newCityJson.id,
                            newCityJson.nombre,
                            newCityJson.provincia,
                            newCityJson.pais,
                            newCityJson.activa
                        ));
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    /**
     * Remove a city from the list of active cities, admin operation
     */
    public removeCity(id){

        let apiURL2 = `${this.apiCiudadesActivas}/${id}`;

        let promise = new Promise((resolve, reject) => {
            this.http.delete(apiURL2)
                .toPromise()
                .then(
                    res => {
                        resolve({message: "Erased from active cities"});
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;

    }


    /**
     * Retrieve the list of active cities, determined by an administrator
     */
    public retrieveActiveCities():Promise<ActiveCity[]>{

        let promise = new Promise((resolve, reject) => {
            this.http.get(this.apiCiudadesActivas)
                .toPromise()
                .then(
                    res => {
                        let cities:ActiveCity[] =[]
                        let citiesJson = $.map(res.json(), function(e){return e});
                        $.each(citiesJson, function(i,city){
                            cities.push(new ActiveCity(
                                city.id,
                                city.nombre,
                                city.provincia,
                                city.pais,
                                city.activa)
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