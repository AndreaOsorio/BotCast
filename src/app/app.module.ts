import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';;
import {LocationStrategy} from '@angular/common';


import { BotCast } from './app.component';
import {HttpModule, Http, Response} from '@angular/http';

import { PrincipalPage } from '../pages/principal/principal';
import { MyCitiesService } from '../services/citiesService';
import { ForecastService } from '../services/forecastService';
import { GraphsService } from '../services/graphsService';
import { ChatbotService } from '../services/chatbotService';
import { AuthorizationService } from '../services/authService';
import {GeolocationService} from '../services/geolocationService';

import { MyForecastService } from '../services/myForecastService';
import { StatService } from '../services/statsService';

import { GraphsPage } from '../pages/graficas/graficas';
import { ChartsModule } from 'ng2-charts';

import { TabsPage } from '../pages/tabs/tabs';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { MyForecastsPage } from '../pages/myforecasts/myforecasts';

import { LoginPage } from '../login/login/login';
import { RegisterPage } from '../login/register/register';

import { NavBar } from '../pages/admin/navbar/navbar';

import {AdminDashboard} from '../pages/admin/dashboard/dashboard';

import {AdminCities} from '../pages/admin/cities/cities';
import {AdminMyAccount} from '../pages/admin/myaccount/myaccount';
import {AdminStats} from '../pages/admin/stats/stats';
import {AdminUsers} from '../pages/admin/users/users';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder} from '@ionic-native/native-geocoder';


/**
 * Register components, import plugins and angular core utilities, Register providers for services
 */

@NgModule({
  declarations: [
    BotCast,
    TabsPage,
    PrincipalPage,
    GraphsPage,
    MyForecastsPage,
    ChatbotPage,
    LoginPage,
    RegisterPage,
    AdminDashboard,
    NavBar,
    AdminCities,
    AdminUsers,
    AdminMyAccount,
    AdminStats,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(BotCast)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BotCast,
    TabsPage,
    PrincipalPage,
    GraphsPage,
    MyForecastsPage,
    ChatbotPage,
    LoginPage,
    RegisterPage,
    AdminDashboard,
    NavBar,
    AdminCities,
    AdminUsers,
    AdminMyAccount,
    AdminStats,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyCitiesService,
    ForecastService,
    GraphsService,
    ChatbotService,
    AuthorizationService,
    Geolocation,
    NativeGeocoder,
    GeolocationService,
    MyForecastService,
    StatService,
    {provide: {ErrorHandler, LocationStrategy}, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
