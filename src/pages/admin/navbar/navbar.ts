import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'

import {AdminDashboard} from '../dashboard/dashboard'
import {AdminCities} from '../cities/cities'
import {AdminMyAccount} from '../myaccount/myaccount'
import {AdminStats} from '../stats/stats'
import {AdminUsers} from '../users/users'

import { App, ViewController } from 'ionic-angular';



@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})

export class NavBar {

    public constructor(public navCtrl: NavController,public viewCtrl: ViewController, public appCtrl: App) {

    }

    public toDashboardAdminPage():void{
        this.navCtrl.push(AdminDashboard,{}, {animate: false})
    }

    public toUsersAdminPage():void{
        this.navCtrl.push(AdminUsers,{}, {animate: false})
    }

    public toStatsAdminPage():void{

        this.navCtrl.push(AdminStats,{}, {animate: false})
    }

    public toCitiesAdminPage():void{
        this.navCtrl.push(AdminCities,{}, {animate: false})
    }

    public toAccountAdminPage():void{
        this.navCtrl.push(AdminMyAccount,{}, {animate: false})
    }

}