import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'



@Component({
    selector: 'stats',
    templateUrl: 'stats.html'
})

/**
 * Admin statistics tab constructor
 */
export class AdminStats {

    public constructor(public navCtrl: NavController) {

    }

}