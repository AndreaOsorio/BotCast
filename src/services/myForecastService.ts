import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

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

    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

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
                        let forecasts:MyForecast[] =[]
                        let forecastsJson = $.map(res.json(), function(e){return e});
                        $.each(forecastsJson, function(i,forecast){
                            console.log(forecast)
                            forecasts.push(new MyForecast(forecast.cityName,
                                iconMap[forecast.condition],
                                forecast.startDate,
                                forecast.endDate))
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
}