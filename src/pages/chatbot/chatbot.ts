import { Component } from '@angular/core';
import { ChatbotService, Conversation, Message } from '../../services/chatbotService';
import * as $ from 'jquery';


@Component({
    selector: 'bot',
    templateUrl: 'chatbot.html'
})

export class ChatbotPage {

    public conversation:Message[];
    public mockIsBot:boolean = false;

    public userInput:string;

    constructor(private chatbotService: ChatbotService) {
        chatbotService.retrieveUserConversation(localStorage.id_usuario).then(data=>{
            console.log(data)
            this.conversation=data
        });

        setTimeout(function(){
            var conversationContainer= $(".contenedor_conversacion");
            conversationContainer.scrollTop(conversationContainer.prop('scrollHeight'));
        }, 500)

    }

    public changeMockIsBot(){
        this.mockIsBot = !this.mockIsBot;
        console.log(this.mockIsBot)
    }

    public sendMessage(event){

        this.conversation.push(new Message(this.mockIsBot, (new Date().getTime()).toString(),this.userInput))

        let messageObject = {
            contenido: this.userInput,
            id_usuario: localStorage.id_usuario,
            esbot: this.mockIsBot
        }

        this.userInput = "";

        this.chatbotService.saveMessage(messageObject).then(data => {
            console.log(data)
        })

        setTimeout(function(){
            var conversationContainer= $(".contenedor_conversacion");
            conversationContainer.scrollTop(conversationContainer.prop('scrollHeight'));
        }, 100)
    }

}