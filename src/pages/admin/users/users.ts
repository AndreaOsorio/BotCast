import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import {Information, UsersInfoService, Usuario} from '../../../services/usersInfoService';
import * as $ from 'jquery';

@Component({
    selector: 'adminUsers',
    templateUrl: 'users.html'
})

/**
 * Admin users tab constructor
 */
export class AdminUsers {

	public usuarios: Information[] = [];
	private users: Usuario[] = [];

    public constructor(private usersInfoService: UsersInfoService,
                       public navCtrl: NavController) {
        usersInfoService.retrieveAllUsers(localStorage.authToken).then(res=>{
            this.users = res;
        });
    }

    public removeUser(e){

        let idUser = $(e.currentTarget).parent().siblings().children("input").val();

        let userIsactive = false;
        let trueIdUser   = "";

        if (idUser.indexOf("true")>0) {
            userIsactive = true;
            trueIdUser   = idUser.split("true")[0];
        } else {
            trueIdUser   = idUser.split("false")[0];
        }

        let params = {
            activo: !userIsactive,
        };

        this.usersInfoService.updateUserInfo(trueIdUser, params, localStorage.authToken).then(res=>{
            this.usersInfoService.retrieveAllUsers(localStorage.authToken).then(res=>{
                this.users = res;
            });
        });
    }
}