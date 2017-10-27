import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';


/**
 * Model for information transmission object between this service and the user graph view
 */
export class GraphDayForecast{
    /**
     *
     * @param date: forecast date/historical data point date
     * @param tempMax: that day's maximum temperature
     * @param tempMin: that day's minimum temperature
     * @param condition: that day's weather condition e.g. "Light snow" or "Overcast"
     */
    constructor(
        public date:string,
        public tempMax:number,
        public tempMin:number,
        public condition: string
    ){}
}

/**
 * Service that build the array of weather historical data for the user graphs tab
 */
@Injectable()
export class GraphsService { //for historical data, pending, API in the past and 8+ days in the future requires premium account

    apiRoot:string = 'http://api.apixu.com/v1/forecast.json';
    apiKey:String = 'e3dd4e798f1d4c61821153113172310';

    constructor(private http: Http) {
    }
}
