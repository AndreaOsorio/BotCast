import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal'
import { GraphsPage } from '../graficas/graficas'
import { ChatbotPage } from '../chatbot/chatbot'
import { MyForecastsPage } from '../myforecasts/myforecasts'
import { ViewController, NavParams, NavController} from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})

/**
 * Tabs Root Component Class: declare here any additional tabs for user main mobile view, then map to appropriate HTML ionic tags in template
 */
export class TabsPage {

  tab1Root = PrincipalPage;
  tab2Root = GraphsPage;
  tab3Root = ChatbotPage;
  tab4Root = MyForecastsPage;

  constructor(private navParams:NavParams,
              private navController:NavController) {

    localStorage.authToken = navParams.get('tokenId');
    localStorage.idUsuario = navParams.get('userId');

  }
}
