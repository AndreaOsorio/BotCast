import { Component } from '@angular/core';
import { MyCitiesService, Ciudad } from '../../../services/citiesService';
import { ForecastService, TodayForecast, HourForecast, NextDaysForecast } from '../../../services/forecastService';
import { ModalController,ViewController, NavController, NavParams} from 'ionic-angular';
import { GeolocationService, RawLocation, GeolocationAddress} from '../../../services/geolocationService';
import { CityManagerService, Cities, ActiveCity } from '../../../services/cityManagerService'
import { UsersInfoService, Usuario } from '../../../services/usersInfoService'
import * as $ from 'jquery';

@Component({
    selector: 'addCity',
    templateUrl: 'addCity.html'
})

export class AddCityModal {

    public cities = [];
    public selectedCities = [];
    public currentUser:Usuario;
    public selectedMap = new Map();
    
    public constructor(public params: NavParams,
                       public viewCtrl: ViewController,
                       private cityManagerService: CityManagerService,
                       private usersInfoService:UsersInfoService) {

        cityManagerService.retrieveActiveCities().then(res => {
            this.cities = res;
        });

        this.currentUser = params.get('user');
    }

    addRemoveCity(event){
        let currentRow = $(event.currentTarget);
        let currentRowId = currentRow.children("input").val();
        if(!this.selectedMap.get(currentRowId)){
            currentRow.addClass("active-city");
            let cityCountry = "";
            $.each(currentRow.children(),function(){
                cityCountry+=$(this).html().trim()+",";
            });

            this.selectedMap.set(currentRowId,cityCountry);

        }else{
            this.selectedMap.delete(currentRowId);
            currentRow.removeClass("active-city");
        }
    }

    dismiss(){
        this.viewCtrl.dismiss(this.selectedCities);
    }

    saveCities(){
        this.selectedCities.length = 0;

        let aux = this.selectedCities;

        this.selectedMap.forEach(function(value,key,map) {
            aux.push(
                {
                    id:key,
                    name: value.split(",")[1],
                    country: value.split(",")[2],
                }
            );
        });

        this.selectedCities = aux;

        let params = {
            nombre: this.currentUser.name,
            apellido:this.currentUser.lastname,
            email:this.currentUser.email,
            password: this.currentUser.password,
            usuario: this.currentUser.username,
            ciudades: this.selectedCities
        }

        this.usersInfoService.updateUserInfo(localStorage.idUsuario, params).then(res=>{
            console.log("Cambios a lista guardados!")
            console.log(res)
        })
    }

}