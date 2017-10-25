import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import {RegisterPage} from '../register/register';
import {UserLogin, AuthorizationService, AuthorizationToken} from '../../services/authService'

import {AdminDashboard} from '../../pages/admin/dashboard/dashboard'

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public user:UserLogin;

    public constructor(public navCtrl: NavController, public authorizationService:AuthorizationService){
        this.user = new UserLogin("y","123","",""); //testing user
    }

    public login():void{
        console.log("SHI!")
        console.log(this.user);
        this.authorizationService.authorizeUser(this.user).then(data=>{
            if(data.authorized){
                if(data.privileges=="admin"){
                    this.navCtrl.push(AdminDashboard,{
                        authToken:data
                    });
                }else{
                    this.navCtrl.push(TabsPage,{
                        authToken:data
                    });
                }

            }
        });
    }

    public register():void {
        this.navCtrl.push(RegisterPage);
    }

}