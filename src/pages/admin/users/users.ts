import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'

@Component({
    selector: 'adminUsers',
    templateUrl: 'users.html'
})

/**
 * Admin users tab constructor
 */
export class AdminUsers {

    public constructor(public navCtrl: NavController) {

    }

}