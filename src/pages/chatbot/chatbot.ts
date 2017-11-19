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
        chatbotService.retrieveUserConversation(localStorage.idUsuario).then(data=>{
            console.log(data)
            this.conversation=data
        });

        this.scrollConversation(500);

    }

    public changeMockIsBot(){
        this.mockIsBot = !this.mockIsBot;
        console.log(this.mockIsBot)
    }

    public sendMessage(event){

        let textoUsuario = this.userInput;
        let messageObject = {
            contenido: textoUsuario,
            id_usuario: localStorage.idUsuario,
            esbot: false
        }

        this.chatbotService.saveMessage(messageObject).then(data => {
            this.conversation.push(new Message(false,
                (new Date().getTime()).toString(),
                textoUsuario))
            console.log(data)
        });

        this.chatbotService.callBotAPI(this.userInput, localStorage.idUsuario).then(response=> {
            let textResponse = response.toString()
            let messageObject = {
                contenido: textResponse,
                id_usuario: localStorage.idUsuario,
                esbot: true
            }
            this.chatbotService.saveMessage(messageObject).then(data => {
                this.conversation.push(new Message(true,
                    (new Date().getTime()).toString(),
                    textResponse))
                this.scrollConversation(500);
            });
        });

        this.userInput = "";
        this.scrollConversation(100);

    }

    public scrollConversation(time){
        setTimeout(function(){
            var conversationContainer= $(".contenedor_conversacion");
            conversationContainer.scrollTop(conversationContainer.prop('scrollHeight'));
        }, time)
    }

}