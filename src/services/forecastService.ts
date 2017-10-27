import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

/**
 * Data object that encodes a specific hour's weather forecast
 */
export class HourForecast{
    /**
     *
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param temp: that hour's average temperature
     * @param time: the timestamp of that hour at the first second
     */
    constructor(
      public condition:string,
      public temp: number,
      public time: string
    ){}
}

/**
 * Data object that encodes the current's date weather forecast
 */
export class TodayForecast{
    /**
     *
     * @param cityName
     * @param avgTemp
     * @param tempMax
     * @param tempMin
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param hourlyForecast
     */
    constructor(
      public cityName: string,
      public avgTemp: number,
      public tempMax: number,
      public tempMin: number,
      public condition: string,
      public hourlyForecast: HourForecast[]
    ){}
}

/**
 * Data object that encapsulates a future's day weather forecast
 */
export class NextDaysForecast{
    /**
     * @param dayOfWeek: day of the week as a string (e.g. Thursday)
     * @param tempMax: max temperature of that date
     * @param tempMin: min temperature of that date
     * @param tempAvg: average temperature of that date
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param date: that day's date in a YYYY-MM-DD format
     */
    constructor(
      public dayOfWeek:string,
      public tempMax:number,
      public tempMin:number,
      public tempAvg:number,
      public condition: string,
      public date:string
    ){}
}

/**
 * Service that retrieves forecast data from the APIXU open API
 */
@Injectable()
export class ForecastService {

    /**
     * Map for building the appropriate icons in the main users forecast tab based on
     * the apixu API data
     */
    private iconMap ={
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
    }

    /**
     * Utility map for pretty-printing dates
     */
    private dayOfWeekMap = {
        6: "Sunday",
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
    }

    /**
     * APIXU API root url and key generated for the project
     */
    apiRoot:string = 'http://api.apixu.com/v1/forecast.json';
    apiKey:String = 'e3dd4e798f1d4c61821153113172310';

    constructor(private http: Http) {
    }

    /**
     * Retrieves a specific city's weather forecast for today.
     * Optimized for retrieving less data if the requested hours are in the same day. If the requested hours go well into the next day, then
     * a heavier query is performed that contains weather hourly data for 2 days.
     * @param ciudad: city whose weather forecast wants to be known
     * @returns {Promise<T>}: promise that resolves to the appropriate data object format
     */
    public currentWeather(ciudad: string): Promise<TodayForecast[]>{

        let apiURL = `${this.apiRoot}?key=${this.apiKey}&q=${ciudad}`;
        let currentHour = new Date().getHours();

        if((currentHour+5) > 23) apiURL+="&days=2";

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let forecast= res.json().forecast.forecastday[0]
                        let hours:HourForecast[] = [];
                        let i = 0;
                        let j = 0;
                        let h = null;

                        let flagDayTransition = false;

                        while(i<5) {
                            if((currentHour+i)>23 && !flagDayTransition){
                                currentHour = 0;
                                forecast= res.json().forecast.forecastday[1]
                                flagDayTransition=true;
                            }

                            if(flagDayTransition){
                                h = forecast.hour[currentHour+j];
                                j++;
                            }else{
                                h = forecast.hour[currentHour+i];
                            }
                            let numericHour = new Date(h.time).getHours();
                            let stringHour = numericHour <10 ? "0"+numericHour+":00" : numericHour+":00";

                            hours.push(new HourForecast(this.iconMap[h.condition.text], h.temp_c, stringHour))
                            console.log(h.condition.text)
                            i++;
                        }
                        let todayForecastArray:TodayForecast[] = []
                        todayForecastArray.push(new TodayForecast(
                            res.json().location.name,
                            res.json().current.temp_c,
                            forecast.day.maxtemp_c,
                            forecast.day.mintemp_c,
                            this.iconMap[res.json().current.condition.text],
                            hours)
                        );
                        resolve(todayForecastArray);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

    /**
     * Retrieves the weather forecast of a specific city for the required number of days
     * @param ciudad: city whose weather forecast wants to be known
     * @param numberOfDays: required number of days for the forecast query
     * @returns {Promise<T>}: returns a promise that resolves to an array of data objects that contain the day-by-day forecasts
     */
    public weatherNextDays(ciudad: string, numberOfDays: number = 0): Promise<NextDaysForecast[]>{

        const maxDaysForecast = 7;
        if(numberOfDays == 0 || numberOfDays == undefined) numberOfDays = maxDaysForecast;

        let apiURL = `${this.apiRoot}?key=${this.apiKey}&q=${ciudad}&days=${numberOfDays}`;
        let promise = new Promise((resolve, reject) => {


            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let nextDaysForecasts:NextDaysForecast[] = [];

                        let days= res.json().forecast.forecastday
                        let i = 0;
                        while(i < numberOfDays){

                            let dayOfWeekString = (i==0) ?  "Today" : this.dayOfWeekMap[new Date(days[i].date).getDay()];
                            nextDaysForecasts.push(
                                new NextDaysForecast(
                                    dayOfWeekString,
                                    days[i].day.maxtemp_c,
                                    days[i].day.mintemp_c,
                                    days[i].day.avgtemp_c,
                                    this.iconMap[days[i].day.condition.text],
                                    days[i].date
                                )
                            );
                            i++;
                        }
                        resolve(nextDaysForecasts);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }
}