import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import {RegisterPage} from '../register/register';
import {UserLogin, AuthorizationService, AuthorizationToken} from '../../services/authService'

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public user:UserLogin;

    public constructor(public navCtrl: NavController, public authorizationService:AuthorizationService){
        this.user = new UserLogin("x","123",""); //testing user
    }

    public login():void{
        console.log(this.user);
        this.authorizationService.authorizeUser(this.user).then(data=>{
            if(data.authorized){
                this.navCtrl.push(TabsPage,{
                    authToken:data
                });
            }
        });
    }

    public register():void {
        this.navCtrl.push(RegisterPage);
    }

}