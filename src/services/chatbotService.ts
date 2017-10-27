import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';
/**
 * Data transfer objects that specifies the encoding data of a message between a user and the chatbot
 */
export class Message{
    /**
     * @param isBotMessage: the message is form a user or the bot
     * @param timestamp: time and date in which the message was sent
     * @param content: the content of the message, can be information for graphs and what not
     */
    constructor(
        public isBotMessage:boolean,
        public timestamp:string,
        public content:string
    ){}
}

/**
 * Data transfer object that codifies the conversation between a user and the chatbot
 */
export class Conversation{
    /**
     * @param messages: array of messages that constitute the actual conversation
     * @param init_time: timestamp of when the conversation began
     * @param end_time: timestamp of when the conversation ended
     */
    constructor(
        public messages:Message[],
        public init_time:string,
        public end_time:string
    ){}
}


@Injectable()
export class ChatbotService {

    constructor(private http: Http) {
    }

    //Currently a dummy call to a local json
    /**
     * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
     */
    apiRoot:string = '../assets/json/chatbot/conversation.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    /**
     * Function that performs a REST call to the backend and retrieves a user's conversation with the chatbot in an array of messages
     * @returns {Promise<T>}: promise that resolves to a user-chatbot conversation in the appropriate DTO
     */
    public retrieveConversation():Promise<Conversation>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let messages:Message[] =[]
                        let messagesJson = $.map(res.json(), function(e){return e});
                        console.log(messagesJson)
                        $.each(messagesJson, function(i,message){
                            messages.push(new Message(
                                message.isBotMessage,
                                message.timestamp,
                                message.content)
                            )
                        });
                        resolve(messages);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

}
