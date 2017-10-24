import { Component } from '@angular/core';
import { ChatbotService, Conversation, Message } from '../../services/chatbotService';

//TODO: fix hour change bug based on location, should take 10 mins...
//TODO: implement geoloc based forecast
//TODO: background gif changes as a function of weather

@Component({
    selector: 'bot',
    templateUrl: 'chatbot.html'
})

export class ChatbotPage {

    public conversation:Conversation;

    constructor(private chatbotService: ChatbotService) {
        chatbotService.retrieveConversation().then(data=>this.conversation=data);
    }

}