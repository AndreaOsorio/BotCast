import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import { UserLogin, AuthorizationService} from '../../../services/authService';



@Component({
    selector: 'myaccount',
    templateUrl: 'myaccount.html'
})

export class AdminMyAccount {

    private info: UserLogin[] = [];

    public constructor(private myInfo: AuthorizationService, public navCtrl: NavController) {

        myInfo.retrieveUserInfo().then(data=>this.info=data);

    }

}