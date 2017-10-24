import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';


export class GraphDayForecast{
    constructor(
        public date:string,
        public tempMax:number,
        public tempMin:number,
        public condition: string
    ){}
}

@Injectable()
export class GraphsService { //for historical data, pending, API in the past and 8+ days in the future requires premium account

    apiRoot:string = 'http://api.apixu.com/v1/forecast.json';
    apiKey:String = 'e3dd4e798f1d4c61821153113172310';

    constructor(private http: Http) {
    }
}
