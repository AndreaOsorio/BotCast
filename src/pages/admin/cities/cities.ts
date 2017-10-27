import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'



@Component({
    selector: 'adminCities',
    templateUrl: 'cities.html'
})

/**
 * Admin cities tab constructor
 */
export class AdminCities {

    public constructor(public navCtrl: NavController) {

    }

}