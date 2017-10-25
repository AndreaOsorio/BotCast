import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'



@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})

export class AdminDashboard {

    public constructor(public navCtrl: NavController) {

    }

}