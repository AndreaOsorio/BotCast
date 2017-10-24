import { Component } from '@angular/core';
import { MyCitiesService, Ciudad } from '../../services/citiesService';
import { ForecastService, TodayForecast, HourForecast, NextDaysForecast } from '../../services/forecastService';

//TODO: fix hour change bug based on location, should take 10 mins...
//TODO: implement geoloc based forecast
//TODO: background gif changes as a function of weather

@Component({
  selector: 'principal',
  templateUrl: 'principal.html'
})

export class PrincipalPage {
    private ciudades: Ciudad[] = [];
    private todayForecast:TodayForecast[] = [];
    private todayHourlyForecast: HourForecast[] = [];
    private nextDaysForecast: NextDaysForecast[] = [];
    private todaysDate:string;

    private mcs: MyCitiesService;
    private fs: ForecastService;

  public constructor(private myCitiesService: MyCitiesService, private forecastService: ForecastService) {

      this.todaysDate = this.getTodaysDate();
      this.mcs = this.myCitiesService;
      this.fs = this.forecastService;

      this.makeApiCalls("");
  }

  public makeApiCalls(city:string){

      if(city == undefined || city == "") city = "Mexico City"; //implementar geolocalizacion aqui

      this.myCitiesService.retrieveMyCities().then(data=>{
          this.ciudades = data
      } );

      this.forecastService.currentWeather(city).then( data=>{
          this.todayForecast = data
          this.todayHourlyForecast = this.todayForecast[0].hourlyForecast
          console.log(this.todayForecast)
      });

      this.forecastService.weatherNextDays(city).then( data=>{
          this.nextDaysForecast = data
      });
  }

  public changeCity(cityName:string){
    this.makeApiCalls(cityName);
  }

  public getTodaysDate(){
    let dayOfWeekMap = {
          0: "Sunday",
          1: "Monday",
          2: "Tuesday",
          3: "Wednesday",
          4: "Thursday",
          5: "Friday",
          6: "Saturday",
    }

    let monthMap= {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }
    let today = new Date();
    let dayOfweek= dayOfWeekMap[today.getDay()];
    let dayOfMonth = today.getDate();
    let monthString = monthMap[today.getMonth()]
    return dayOfweek+", "+monthString+" "+dayOfMonth+", "+today.getFullYear();
  }
}
