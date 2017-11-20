import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import {ActiveCity} from "./cityManagerService";

export class MyForecast{
    constructor(
      public cityName: string,
      public condition: string,
      public startDate:string,
      public endDate:string
    ){}
}

@Injectable()
export class MyForecastService {


    apiRoot:string = '../assets/json/forecast/myforecasts.json';

    constructor(private http: Http) {
    }

    retrieveMyForecasts(): Promise<MyForecast[]>{

    let iconMap ={
            "Partly cloudy": "md-partly-sunny",
            "Overcast": "md-cloudy",
            "Light rain":"md-umbrella",
            "Sunny":"md-sunny",
            "Mist": "md-cloudy",
            "Cloudy": "md-cloudy",
            "Fog":"md-cloudy",
            "Clear":"md-moon",
            "Light rain shower":"md-rainy",
            "Moderate rain at times":"md-rainy",
            "Heavy snow":"md-snow",
            "Heavy rain":"md-umbrella",
            "Patchy rain possible":"md-rainy",
            "Light snow":"md-snow",
            "Moderate snow":"md-snow"
        };


        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let abbreviatedMonthMap = {
                            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
                        }
                        let forecasts:MyForecast[] =[]
                        let forecastsJson = $.map(res.json(), function(e){return e});
                        $.each(forecastsJson, function(i,forecast){

                            let d1 = new Date(forecast.startDate)
                            let d2 = new Date(forecast.endDate)
                            let init_date = abbreviatedMonthMap[d1.getMonth()]+" "+(d1.getDate());
                            let final_date = abbreviatedMonthMap[d2.getMonth()]+" "+(d2.getDate());

                            console.log(forecast)
                            forecasts.push(new MyForecast(forecast.cityName,
                                iconMap[forecast.condition],
                                init_date,
                                final_date))
                        })
                        resolve(forecasts);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

    public saveForecast(forecastObj): Promise<ActiveCity>{

        let apiURL:string = 'http://localhost:3000/api/Pronosticos';
        let params = {
            ciudad: forecastObj["nombre"],
            fecha_inicial: forecastObj["fecha_inicial"],
            fecha_final: forecastObj["fecha_final"],
            condicion: forecastObj["condicion"],
            id_usuario: forecastObj["id_usuario"],
        }


        let promise = new Promise((resolve, reject) => {
            this.http.post(apiURL, params)
                .toPromise()
                .then(
                    res => {
                        let pronostico = res.json();
                        resolve(new MyForecast(
                            pronostico.ciudad,
                            pronostico.condicion,
                            pronostico.fecha_inicial,
                            pronostico.fecha_final
                        ));
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    public getForecastList(id_usuario:string): Promise<MyForecast[]>{
        let query = {
            id_usuario:{
                like:id_usuario
            }
        }

        let apiURL:string = 'http://localhost:3000/api/Pronosticos?filter='+JSON.stringify(query);
        console.log(apiURL)
        console.log(apiURL);
        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let arr = [];
                        let pronosticos = res.json();
                        if(pronosticos.length>0){
                            for(var i=0;i<pronosticos.length;i++){
                                arr.push(new MyForecast(
                                    pronosticos[i]["ciudad"],
                                    pronosticos[i]["condicion"],
                                    pronosticos[i]["fecha_inicial"],
                                    pronosticos[i]["fecha_final"]
                                ))
                            }
                        }
                        resolve(arr);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
        return promise;
    }



}