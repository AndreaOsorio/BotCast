import { Component } from '@angular/core';
import { ViewController, NavParams} from 'ionic-angular';
import { CityManagerService} from '../../../services/cityManagerService'
import { UsersInfoService, Usuario } from '../../../services/usersInfoService'
import { StatService } from '../../../services/statsService'
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
                       private usersInfoService:UsersInfoService,
                       private statService:StatService) {

        cityManagerService.retrieveActiveCities().then(res => {
            this.cities = res;
        });

        this.currentUser = params.get('user');
    }

    actualizarEstadisticas() {
        this.statService.retrieveRealStats().then(res=>{

            let listaCiudades    = res[0].ciudades;
            const statId         = res[0].id;
            const selectedCities = this.selectedCities

            for(let ciudad of selectedCities){
                const indexCiudad = listaCiudades.findIndex(c => c.nombre == ciudad.name);
                if (indexCiudad >= 0) {
                    listaCiudades[indexCiudad].contador = listaCiudades[indexCiudad].contador + 1;
                } else {
                    listaCiudades.push({nombre:ciudad.name, contador:1});
                }
            }


            const params = {
                fechas: res[0].fechas,
                ciudades: listaCiudades
            }


            this.statService.udpateRealStats(statId, params).then(result=>{
                console.log(params)
                console.log("Stats upated!");
            });
        });
    }

    addRemoveCity(event) {
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
            usuario: this.currentUser.username,
            ciudades: this.selectedCities
        }

        this.usersInfoService.updateUserInfo(localStorage.idUsuario, params, localStorage.authToken).then(res=>{
            console.log("Cambios a lista guardados!")
            this.viewCtrl.dismiss(this.selectedCities);
        })

        this.actualizarEstadisticas()

    }

}