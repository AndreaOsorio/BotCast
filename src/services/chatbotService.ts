import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';

export class Message{
    constructor(
        public isBotMessage:boolean,
        public timestamp:string,
        public content:string
    ){}
}

export class Conversation{
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

    apiRoot:string = '../assets/json/chatbot/conversation.json';
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later

    retrieveConversation():Promise<Conversation>{
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
