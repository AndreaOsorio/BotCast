import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersInfoService } from './usersInfoService'
import { CityManagerService } from './cityManagerService'

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

    constructor(private http: Http,
                private usersInfoService: UsersInfoService,
                private cityManagerService:CityManagerService) {
    }

    public saveMessage(mensaje): Promise<Message>{
        let apiURL:string = 'http://localhost:3000/api/Mensajes';
        let params = {
            contenido: mensaje["contenido"],
            id_usuario:mensaje["id_usuario"],
            timestamp: new Date().getTime(),
            esbot: mensaje["esbot"]
        }
        let promise = new Promise((resolve, reject) => {
            this.http.post(apiURL, params)
                .toPromise()
                .then(
                    res => {
                        let message = res.json();
                        resolve(new Message(
                            message.esbot,
                            message.timestamp,
                            message.contenido
                        ));
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    /**
     * Function that performs a REST call to the backend and retrieves a user's conversation with the chatbot in an array of messages
     * @returns {Promise<T>}: promise that resolves to a user-chatbot conversation in the appropriate DTO
     */
    public retrieveUserConversation(id_usuario): Promise<Message[]>{
        let apiURL:string = 'http://localhost:3000/api/Mensajes';
        let params = {
            id_usuario: id_usuario
        }
        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL, params)
                .toPromise()
                .then(
                    res => {
                        let messages:Message[] =[]
                        let messagesJson = $.map(res.json(), function(e){return e});
                        $.each(messagesJson, function(i,message){
                            messages.push(new Message(
                                message.esbot,
                                message.timestamp,
                                message.contenido)
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

    public callBotAPI(message:string, id_usuario:string){

        let token ="TFJ52Y4QJQFUMIOTLVGMYNI2TAXQYFSY"
        let apiURL:string = 'https://api.wit.ai/message?v=20171118&q='+message

        let headers = new Headers({'Authorization': 'Bearer '+token });
        let options = new RequestOptions({ headers: headers });

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL, options)
                .toPromise()
                .then(
                    res => {
                        console.log(res.json())
                        let entities= res.json().entities;

                        let response;
                        if (entities.intent) {
                            let intent = entities.intent[0].value;
                            response = this.intentDispatcher(intent, entities, id_usuario);
                        } else {
                            response = "Sorry couldn't catch that!"
                        }
                        resolve(response);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

    /**
     * Manages the bot API response according to intent
     */
    public intentDispatcher(intent:string, entities, id_usuario:string){

        if(intent == "add_city" || intent == "remove_city"){
           return this.botAddRemoveCityHandler(intent,entities, id_usuario)
        }

    }

    /**
     * Handles a user's bot request to add or remove a city from the favorites list
     * @param intent: what the user pretends to do (add or remove)
     * @param entities: contains the city that wants to be removed
     * @param id_usuario: what user is making the request?
     * @returns {Promise<TResult2|any|any|any|string>}
     */
    public botAddRemoveCityHandler(intent:string, entities, id_usuario:string){
        let textResponse = "";
        let location = "";
        if(entities.location){
            location = entities.location[0].value
            return this.usersInfoService.retrieveUserInfoById(id_usuario).then(data => {
                let userData = data;
                let locationToAdd = data.cities.find(c=> c["name"] == location);

                let evalClause = (intent == "add_city")? locationToAdd: !locationToAdd

                if (evalClause){
                    textResponse = (intent == "add_city")?
                        "You already have that city!!":
                        "Can't find that city in your preferences";
                } else{
                    return this.cityManagerService.retrieveActiveCities().then(activeCities => {
                        locationToAdd = activeCities.find(city=> city["name"] == location);
                        if(locationToAdd){
                            return this.cityManagerService.retrieveSearchedCityInfo(locationToAdd["name"]).then(cityRes=>{
                                let arrAux = [];

                                if (intent == "add_city") {
                                    userData.cities.push({id:locationToAdd["id"],
                                        name: locationToAdd["name"],
                                        country:locationToAdd["country"] })
                                    arrAux = userData.cities
                                } else {
                                    arrAux = userData.cities.filter(ciudad=>ciudad["name"]!=locationToAdd["name"])
                                }

                                let params = {
                                    nombre: userData.name,
                                    apellido:userData.lastname,
                                    email:userData.email,
                                    password: userData.password,
                                    usuario: userData.username,
                                    ciudades: arrAux
                                }
                                return this.usersInfoService.updateUserInfo(id_usuario, params).then(usuarioActualizado=>{
                                    textResponse = (intent == "add_city")?
                                        (locationToAdd["name"]+" was added to your favorite cities!"):
                                        (locationToAdd["name"]+" was removed from your list of cities.");

                                    if(intent == "add_city"){
                                        localStorage.cityAddedToFavoritesObj = JSON.stringify({city:locationToAdd["name"]})
                                        localStorage.cityAddedToFavorites = 1;

                                    }else{
                                        localStorage.cityRemovedFromFavoritesObj = JSON.stringify({city:locationToAdd["name"]})
                                        localStorage.cityRemovedFromFavorites = 1;
                                    }


                                    return textResponse;
                                })
                            })
                        } else{
                            return "That place is not in active cities! Please contact an admin to add it!";
                        }
                    })
                }
                return textResponse;
            });
        }
    }



}
