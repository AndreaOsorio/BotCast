import { Component } from '@angular/core';
import { Ciudad } from '../../services/citiesService';
import { ForecastService, TodayForecast, HourForecast, NextDaysForecast } from '../../services/forecastService';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { GeolocationService, RawLocation, GeolocationAddress} from '../../services/geolocationService';
import { UsersInfoService, Usuario } from '../../services/usersInfoService'
import { AuthorizationService } from '../../services/authService'
import { AddCityModal } from './addCity/addCity'
import * as $ from 'jquery';
import { LoginPage } from "../../login/login/login";
import { StatService } from '../../services/statsService'

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
    private currentCity:String;

    /**
     *
     * @param myCitiesService: service that retrieves a user's saved cities
     * @param forecastService: service that retrieves today's and next week's weather forecasts
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     * @param geolocationService: service that retrieves user's current location in latLong format, then performs an external call
     * to a geocoder to get the exact address
     */
    public constructor(
        private forecastService: ForecastService,
        public navCtrl: NavController,
        public navParams: NavParams,
        private geolocationService: GeolocationService,
        public modalCtrl: ModalController,
        public usersInfoService: UsersInfoService,
        public authorizationService: AuthorizationService,
        public statService:StatService) {

        this.todaysDate = this.getTodaysDate();

        this.makeApiCalls("");

        this.usersInfoService.retrieveUserInfoById(localStorage.idUsuario, localStorage.authToken).then(
            res =>{
                this.currentUser =  res;
                console.log(this.currentUser.credenciales);
            }
        );

        this.statService.retrieveRealStats().then(res=>{
            let listaFechas   = res[0].fechas;

            const statId      = res[0].id;

            const today       = (new Date()).toISOString().substr(0,10);
            const indexDate   = listaFechas.findIndex(fecha => fecha.fecha == today);

            if (indexDate >= 0) {
                listaFechas[indexDate].contador = listaFechas[indexDate].contador + 1;
            } else {
                listaFechas.push({fecha:today, contador:1});
            }

            const params = {
                fechas: listaFechas,
                ciudades: res[0].ciudades
            }

            this.statService.udpateRealStats(statId, params).then(result=>{
                console.log("Stats upated!");
            });
        });

        this.initializeGlobalVars();
        this.checkCityAddedToFavorites();
        this.checkCityRemovedFromFavorites();
    }
    
    public logout(){
        this.authorizationService.logout(localStorage.authToken)
        localStorage.authToken = "";
        this.navCtrl.push(LoginPage);
    }

    public checkCityAddedToFavorites(){
        setInterval(()=>{
            if (localStorage.cityAddedToFavorites == 1) {
                let obj = JSON.parse(localStorage.cityAddedToFavoritesObj);
                this.ciudades.push(new Ciudad(obj.city));
                localStorage.cityAddedToFavorites = 0;
            }
        }, 1000);
    }

    public checkCityRemovedFromFavorites(){
        setInterval(()=>{
            if (localStorage.cityRemovedFromFavorites == 1) {
                let obj = JSON.parse(localStorage.cityRemovedFromFavoritesObj);
                this.ciudades = this.ciudades.filter(c=>c.name!=obj.city);
                localStorage.cityRemovedFromFavorites = 0;
            }
        }, 1000);
    }

    public initializeGlobalVars(){
        localStorage.newForecastSaved = 0;
        localStorage.citySelectedFromForecastList = 0;
        localStorage.cityAddedToFavorites = 0;
        localStorage.cityRemovedFromFavorites = 0;
        localStorage.currentCity = "";
    }

    presentAddCityModal() {
        let contactModal = this.modalCtrl.create(AddCityModal, {user: this.currentUser});
        contactModal .onDidDismiss(ciudad => {
            if(ciudad!==null && ciudad.length>0){
                let arreglo_nombres = ciudad.map(c=> new Ciudad(c.name))
                localStorage.userCities = JSON.stringify(arreglo_nombres);
                this.ciudades = arreglo_nombres
            }
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

        this.forecastService.currentWeather(city).then( data=>{
            this.todayForecast = data
            this.todayHourlyForecast = this.todayForecast[0].hourlyForecast
        });

        this.forecastService.weatherNextDays(city).then( data=>{
            this.nextDaysForecast = data
        });

        this.usersInfoService.retrieveUserInfoById(localStorage.idUsuario, localStorage.authToken).then(
            res =>{
                this.currentUser=  res;
                let arreglo_nombres = this.currentUser.cities.map(ciudad => new Ciudad(ciudad["name"]))
                this.ciudades = arreglo_nombres
                localStorage.userCities = JSON.stringify(arreglo_nombres);
            }
        );
    }

    /**
     * First acquires user's longitude and latitude with cordova's native hardware interaction API,
     * then performs an external call to retrieve the user's approximate address but, most importantly, his/her current city
     * to call makeApiCalls() and redraw the view with the current location's weather
     */
    public getMyLocation(){
        var loading_gif = $("#gif-loading-container");
        loading_gif.removeClass("x");
        loading_gif.addClass("y");
        this.geolocationService.getMyCurrentLocation().then(data => {
            this.mycurrentLocationLatLong = data;
            this.geolocationService.getMyCurrentAddressBasedOnLatLong(data).then(data => {
                this.myCurrentLocationReverseGeocoded = data;
                localStorage.currentCity = data.city;
                this.makeApiCalls(data.city)
                loading_gif.removeClass("y");
                loading_gif.addClass("x");
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
        this.currentCity = cityName;
        localStorage.currentCity = this.currentCity
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
