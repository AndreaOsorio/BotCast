import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import {Information, UsersInfoService} from '../../../services/usersInfoService';

@Component({
    selector: 'adminUsers',
    templateUrl: 'users.html'
})

/**
 * Admin users tab constructor
 */
export class AdminUsers {

	public information: Information[] = [];

    public constructor(private usersInfoService: UsersInfoService, public navCtrl: NavController) {
        usersInfoService.retrieveInfo().then(data=>this.information=data);
    }
    
}