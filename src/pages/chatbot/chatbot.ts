import { Component } from '@angular/core';
import { ChatbotService, Conversation, Message } from '../../services/chatbotService';



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