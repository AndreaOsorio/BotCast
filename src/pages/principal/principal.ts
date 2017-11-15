import { Component } from '@angular/core';
import { MyCitiesService, Ciudad } from '../../services/citiesService';
import { ForecastService, TodayForecast, HourForecast, NextDaysForecast } from '../../services/forecastService';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { GeolocationService, RawLocation, GeolocationAddress} from '../../services/geolocationService';
import { CityManagerService, Cities, ActiveCity } from '../../services/cityManagerService'
import { UsersInfoService, Usuario } from '../../services/usersInfoService'
import { AddCityModal } from './addCity/addCity'
import * as $ from 'jquery';


//TODO: fix hour change bug based on location, should take 10 mins...
//TODO: background gif changes as a function of weather

@Component({
  selector: 'principal',
  templateUrl: 'principal.html'
})
/**
 * Component for user main interface, user can add cities, select cities, select current location and
 * today's weather along withnext week's forecasts will be displayed.
 * This component's state contains the user's currently saved cities, today's and next week's weather, today's date,
 * the user's current location in latitude and longitude (raw format) and the user's approximate address.
 */
export class PrincipalPage {
    private ciudades: Ciudad[] = [];
    private todayForecast:TodayForecast[] = [];
    private todayHourlyForecast: HourForecast[] = [];
    private nextDaysForecast: NextDaysForecast[] = [];
    private todaysDate:string;
    private mycurrentLocationLatLong:RawLocation;
    private myCurrentLocationReverseGeocoded:GeolocationAddress;

    private currentUser:Usuario;

    private activeCitiesCurrentUser = [];

    /**
     *
     * @param myCitiesService: service that retrieves a user's saved cities
     * @param forecastService: service that retrieves today's and next week's weather forecasts
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     * @param geolocationService: service that retrieves user's current location in latLong format, then performs an external call
     * to a geocoder to get the exact address
     */
  public constructor(private myCitiesService: MyCitiesService,
                     private forecastService: ForecastService,
                     public navCtrl: NavController,
                     public navParams: NavParams,
                     private geolocationService: GeolocationService,
                     private cityManagerService: CityManagerService,
                     public modalCtrl: ModalController,
                     public usersInfoService: UsersInfoService) {

        this.todaysDate = this.getTodaysDate();

        this.makeApiCalls("");

        //TODO: through auth token get user info and retrieve preferences, forecasts, etc, when backend is ready
        console.log(this.navParams.data)

        usersInfoService.retrieveUserInfoById(localStorage.idUsuario).then(
            res =>{
                this.currentUser=  res;
            }
        );
        this.navParams.data={a:"sheller"};

  }


  presentAddCityModal() {
      let contactModal = this.modalCtrl.create(AddCityModal, {user: this.currentUser});
      contactModal .onDidDismiss(usuario => {
          this.ciudades = usuario.cities;
          console.log(usuario.cities)
          console.log(this.ciudades);
      });
      contactModal.present();
  }

    /**
     * @param city: city whose current and future weather wants to be known
     * This method calls all the different services to retrieve the selected city's weather and then redraws
     * the whole view with the retrieved data in the appropriate format
     */
  public makeApiCalls(city:string) {

      if(city == undefined || city == ""){
          //TODO: uncomment in prod
          // this.getMyLocation();
          city = "Amsterdam";
      }

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
          console.log(this.nextDaysForecast)
      });
  }

    /**
     * First acquires user's longitude and latitude with cordova's native hardware interaction API,
     * then performs an external call to retrieve the user's approximate address but, most importantly, his/her current city
     * to call makeApiCalls() and redraw the view with the current location's weather
     */
  public getMyLocation(){
      $("#gif-loading-container").removeClass("x");
      $("#gif-loading-container").addClass("y");
      this.geolocationService.getMyCurrentLocation().then(data => {
          this.mycurrentLocationLatLong = data;
          this.geolocationService.getMyCurrentAddressBasedOnLatLong(data).then(data => {
              this.myCurrentLocationReverseGeocoded = data;
              this.makeApiCalls(data.city)
              $("#gif-loading-container").removeClass("y");
              $("#gif-loading-container").addClass("x");
          });
      });
  }

    /**
     *
     * @param cityName: city parameter used in templates to know which city has been selected from the slider
     * Event binding function to retrieve users current location and update screen
     */
  public changeCity(cityName:string) {
      this.makeApiCalls(cityName);
      //TODO: implement here changes to classes when users selects a particular city
  }

  public moveToAddCityWindow() {
      console.log("moving window!");
  }


    /**
     *
     * @returns {string} returns today's date in a pretty format (DayOfWeek, MonthName DayOfMonth, CurrentYear e.g. Thursday, January 20, 2099)
     * Auxiliary method for date formatting
     */
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
