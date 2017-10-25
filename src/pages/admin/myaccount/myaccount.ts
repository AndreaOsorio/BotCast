import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'



@Component({
    selector: 'myaccount',
    templateUrl: 'myaccount.html'
})

export class AdminMyAccount {

    public constructor(public navCtrl: NavController) {

    }

}