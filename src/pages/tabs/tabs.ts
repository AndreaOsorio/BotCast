import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PrincipalPage } from '../principal/principal'
import { GraphsPage } from '../graficas/graficas'
import { ChatbotPage } from '../chatbot/chatbot'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PrincipalPage;
  tab2Root = GraphsPage;
  tab3Root = ChatbotPage;
  tab4Root = HomePage;

  constructor() {

  }
}
