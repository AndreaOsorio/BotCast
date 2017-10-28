import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import { CityManagerService, Cities } from '../../../services/cityManagerService'

@Component({
    selector: 'adminCities',
    templateUrl: 'cities.html'
})

/**
 * Admin cities tab constructor
 */
export class AdminCities {

    public cities: Cities[] = [];

    public constructor(private cityManagerService: CityManagerService, public navCtrl: NavController) {
        cityManagerService.retrieveInfo().then(data=>this.cities=data);
    }

}