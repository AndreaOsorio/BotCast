import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';;
import {LocationStrategy} from '@angular/common';

import { BotCast } from './app.component';
import {HttpModule, Http, Response} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { PrincipalPage } from '../pages/principal/principal';
import { MyCitiesService } from '../services/citiesService';
import { ForecastService } from '../services/forecastService';
import { GraphsService } from '../services/graphsService';
import { ChatbotService } from '../services/chatbotService';

import { GraphsPage } from '../pages/graficas/graficas';

import { ChartsModule } from 'ng2-charts';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatbotPage } from '../pages/chatbot/chatbot';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    BotCast,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrincipalPage,
    GraphsPage,
    ChatbotPage
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrincipalPage,
    GraphsPage,
    ChatbotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyCitiesService,
    ForecastService,
    GraphsService,
    ChatbotService,
    {provide: {ErrorHandler, LocationStrategy}, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
