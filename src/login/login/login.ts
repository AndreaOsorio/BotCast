import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterPage } from '../register/register';
import { UserLogin, AuthorizationService } from '../../services/authService'
import { UsersInfoService } from '../../services/usersInfoService'

import {AdminDashboard} from '../../pages/admin/dashboard/dashboard'

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginPage {

    public user:UserLogin;

    public constructor(public navCtrl: NavController,
                       public authorizationService:AuthorizationService,
                       public usersInfoService:UsersInfoService,
                       public toastCtrl: ToastController){

        this.testing();
    }

    public testing(){

        let testbit = true;

        if(testbit){
            this.email = "a@real.com";
            this.password = "1234567890"
        }else{
            this.email = "admin@gmail.com";
            this.password = "1234567890"
        }
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
    public login() {
        if(this.email == "" || this.password ==""){
            this.presentEmptyFieldsToast();
        }else {
            this.authorizationService.login(this.email, this.password).then(loginData => {
                try {
                    this.usersInfoService.retrieveUserInfoById(loginData["userId"], loginData["id"]).then(res => {
                        if (res.active) {
                            const redirect = (res.credenciales == 'admin') ? AdminDashboard : TabsPage;
                            this.navCtrl.push(redirect, {
                                tokenId: loginData["id"],
                                userId: loginData["userId"]
                            });
                        } else {
                            this.presentDeactivatedAccountToast();
                        }
                    });
                } catch (e) {
                    this.presentIncorrectCredentialsToast()
                }
            });
        }
    }

    presentEmptyFieldsToast() {
        let toast = this.toastCtrl.create({
            message: 'Please fill-in all the text fields!',
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(() => {
            console.log("Bye empty fields toast!")
        });
        toast.present();
    }

    presentIncorrectCredentialsToast() {
        this.email = "";
        this.password = "";
        let toast = this.toastCtrl.create({
            message: 'Your password or email is incorrect. Please try again!',
            duration: 2000,
            position: 'middle'
        });
        toast.onDidDismiss(() => {
            console.log("Bye incorrect credentials toast!")
        });
        toast.present();
    }

    presentDeactivatedAccountToast() {
        let toast = this.toastCtrl.create({
            message: 'Your account has been suspended! Please contact an admin.',
            duration: 5000,
            position: 'bottom'
        });
        toast.onDidDismiss(() => {
            console.log("Bye suspeneded accoun toast!")
        });
        toast.present();
    }

    public register():void {
        this.navCtrl.push(RegisterPage);
    }

}