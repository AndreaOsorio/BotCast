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

/**
 * Admin navigation bar component, corresponds to the reusable visual element displayed at the top of all administrator views
 */
export class NavBar {

    /**
     * Navigation bar constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     * @param appCtrl: application general controler
     */
    public constructor(public navCtrl: NavController,public viewCtrl: ViewController, public appCtrl: App) {

    }

    /**
     * Event binding function with template.
     * When dashboard button is pressed, change the current view to the dashboard tab
     */
    public toDashboardAdminPage():void{
        this.navCtrl.push(AdminDashboard,{}, {animate: false})
    }

    /**
     * Event binding function with template.
     * When users admin button is pressed, change the current view to the active users tab
     */
    public toUsersAdminPage():void{
        this.navCtrl.push(AdminUsers,{}, {animate: false})
    }

    /**
     * Event binding function with template.
     * When statistics button is pressed, change the current view to the statistics tab
     */
    public toStatsAdminPage():void{

        this.navCtrl.push(AdminStats,{}, {animate: false})
    }

    /**
     * Event binding function with template.
     * When cities button is pressed, change the current view to the cities tab
     */
    public toCitiesAdminPage():void{
        this.navCtrl.push(AdminCities,{}, {animate: false})
    }

    /**
     * Event binding function with template.
     * When admin account button is pressed, change the current view to the admin account tab
     */
    public toAccountAdminPage():void{
        this.navCtrl.push(AdminMyAccount,{}, {animate: false})
    }

}