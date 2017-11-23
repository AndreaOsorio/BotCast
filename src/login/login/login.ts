import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import {RegisterPage} from '../register/register';
import {UserLogin, AuthorizationService, AuthorizationToken} from '../../services/authService'

import {AdminDashboard} from '../../pages/admin/dashboard/dashboard'
import {PrincipalPage} from "../../pages/principal/principal";

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public user:UserLogin;

    public constructor(public navCtrl: NavController, public authorizationService:AuthorizationService){
        this.user = new UserLogin("x","123","",""); //testing user
    }

    private email:string = "";
    private password:string = "";

    /**
     * Makes a call to authorize users according to their credentials
     * Currently, only 2 types of users exist: administrators and common users
     * Administrators are redirected to the admin dashboard, while common users are directed to the main mobile
     * page with current a list of currently registered cities.
     * An authorization token is provided to every user which specifies his/her privileges and expiration time
     */
    public login(){

        this.authorizationService.login(this.email, this.password).then(loginData=>{

            console.log(loginData);

            try {
                this.navCtrl.push(TabsPage,
                    {
                        tokenId: loginData["id"],
                        userId: loginData["userId"]
                    });
            } catch(e) {
                console.log(e);
                console.log("Oh no there was an error!!!");

            }
        });
    }

    public register():void {
        this.navCtrl.push(RegisterPage);
    }

}