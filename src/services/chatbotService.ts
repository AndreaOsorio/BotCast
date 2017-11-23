import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersInfoService } from './usersInfoService'
import { CityManagerService } from './cityManagerService'
import { ForecastService } from './forecastService'

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
                private cityManagerService:CityManagerService,
                private forecastService:ForecastService) {
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
        let query = {
            where: {
                id_usuario:{
                    like:id_usuario
                }
            }
        }

        let apiURL:string = 'http://localhost:3000/api/Mensajes?filter='+JSON.stringify(query);
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
                            response = this.buildSorryString();
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

    public buildSorryString(){
        let n= this.random(1,3);
        let mes ="";
        switch(n){
            case 1:
                mes = "Sorry, couldn't catch that!"
                break;
            case 2:
                mes = "Sorry, could you rephrase that?"
                break;
            case 3:
                mes = "Ummm... please say again?"
                break;
        }
        return mes;
    }

    /**
     * Manages the bot API response according to intent
     */
    public intentDispatcher (intent:string, entities, id_usuario:string) {
        if(intent == "add_city" || intent == "remove_city"){
            return this.botAddRemoveCityHandler(intent,entities, id_usuario)
        }

        if(intent == "query_weather" ){
            return this.botWeatherQueriesHandler(intent,entities, id_usuario)
        }
    }

    public todayToString(){
        let x= new Date()
        return x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate()+"T00:00:00.000-06:00"
    }

    public calculateDifferenceInDaysBetweenDates(initDate, finalDate){
        var timeDifferenceEpoch = Math.abs(new Date(initDate).getTime() - new Date(finalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference+1;
    }

    public buildAbbreviatedDate(date:string){
        let abbreviatedMonthMap = {
            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
        }
        let d = new Date(date)
        return abbreviatedMonthMap[d.getMonth()]+" "+(d.getDate()+1)+", "+d.getFullYear();
    }


    public botWeatherQueriesHandler(intent:string, entities, id_usuario:string){
        console.log(entities)

        let min_temp = (entities.min_temp != undefined);
        let max_temp = (entities.max_temp != undefined);

        let location = "";
        let datetime = {grain:"", value:""};

        if(entities.datetime!=undefined){
            datetime = entities.datetime[0]
        }else{
            datetime.grain = "day";
            datetime.value = this.todayToString();
        }
        const ent_location = entities.location[0]

        if(ent_location){
            location = ent_location.value;
        }else{ //No entity location assumes current location
            if(localStorage.currentLocation!=""){
                location = localStorage.currentLocation;
            }else{
                return "Sorry could not determine your current location! (Click 'My Location' in the main panel)"
            }
        }

        const diff = this.calculateDifferenceInDaysBetweenDates(this.todayToString().split("T")[0], datetime.value.split("T")[0]);
        if(diff>7){
            return "Sorry that date is out of range!";
        }

        return this.forecastService.weatherNextDays(location, diff).then( res => {
            console.log("SHELLER")
            console.log(res)
            let forecast = res[res.length-1]
            if (datetime.grain=="day") {
                if(min_temp || max_temp){
                    if(min_temp){
                        return this.buildDayForecastMinTemp(forecast, location)
                    }else{
                        return this.buildDayForecastMaxTemp(forecast, location)
                    }
                }else{
                    return this.buildDayForecastString(forecast, location);
                }
            } else{ //Other grains, assume hour
                let hour = parseInt(datetime.value.split("T")[1].substring(0,2));
                return this.buildHourForecastString(forecast, location, hour)
            }
        })
    }

    public random(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public buildDayForecastMaxTemp(forecast, loc){
        let dayAux = (forecast.dayOfWeek ==  "Today")?"":"on";
        return "A max temperature of "+forecast.tempMax+ "C° is expected in "+loc+", "+dayAux+ forecast.dayOfWeek+", "+
            this.buildAbbreviatedDate(forecast.date)
    }
    public buildDayForecastMinTemp(forecast, loc){
        let dayAux = (forecast.dayOfWeek ==  "Today")?"":"on";
        return "A min temperature of "+forecast.tempMin+ "C° is expected in "+loc+", "+dayAux+ forecast.dayOfWeek+", "+
            this.buildAbbreviatedDate(forecast.date)
    }

    public buildDayForecastString(forecast, loc){
        let n = this.random(1,3);
        let message = "";
        let dayAux = (forecast.dayOfWeek ==  "Today")?"":"On";

        switch(n){
            case 1:
                message = forecast.dayOfWeek+", "+
                this.buildAbbreviatedDate(forecast.date)+", will be "+
                forecast.tempAvg+"C°, with a high of "+forecast.tempMax+
                "C° and a low of "+forecast.tempMin+"C° in "+loc+". "+this.formatCondition(forecast.conditionString);
                break;
            case 2:
                message = dayAux+forecast.dayOfWeek+", "+
                    this.buildAbbreviatedDate(forecast.date)+", "+loc+" will be "+
                    forecast.tempAvg+"C° on average, with a high of "+forecast.tempMax+
                    "C° and a low of "+forecast.tempMin+"C°"+". "+this.formatCondition(forecast.conditionString);
                break;
            case 3:
                message = loc+" will be "+
                    forecast.tempAvg+"C°, with a high of "+forecast.tempMax+
                    "C° and a low of "+forecast.tempMin+"C° on "+this.buildAbbreviatedDate(forecast.date)+", "+forecast.dayOfWeek
                    +". "+this.formatCondition(forecast.conditionString);
                break;
        }
        return message;
    }

    // For emojis
    public formatCondition(condition){

        let emojiMap ={
            "Partly cloudy": 0x26C5,
            "Overcast": 0x2601,
            "Light rain": 0x2614,
            "Sunny": 0x2600,
            "Mist": 0x2601,
            "Cloudy": 0x2601,
            "Fog":0x2601,
            "Clear":0x2600,
            "Light rain shower": 0x2614,
            "Moderate rain at times": 0x2614,
            "Heavy snow": 0x2744,
            "Heavy rain": 0x2614,
            "Patchy rain possible":0x2614,
            "Light snow":0x2744,
            "Moderate snow":0x2744
        };
        let symbol = String.fromCodePoint(emojiMap[condition])
        return "\nCondition: "+condition+" "+symbol+symbol+symbol
    }

    public buildHourForecastString(forecast, loc, hour){
        let hourData =  forecast.forecasts[forecast.forecasts.length-1].hour[hour];
        let temp = hourData.temp_c;
        let h = (hour<12)?"AM":"PM";
        return  forecast.dayOfWeek+", "+
            this.buildAbbreviatedDate(forecast.date)+" "+hour+":00 "+h+", will be "+
            temp+"C° on average in "+loc;
    }

    /**
     * Handles a user's bot request to add or remove a city from the favorites list
     * @param intent: what the user pretends to do (add or remove)
     * @param entities: contains the city that wants to be removed
     * @param id_usuario: what user is making the request?
     * @returns {Promise<TResult2|any|any|any|string>}
     */
    public botAddRemoveCityHandler (intent:string, entities, id_usuario:string) {
        let textResponse = "";
        let location = "";
        if(entities.location){
            location = entities.location[0].value
            return this.usersInfoService.retrieveUserInfoById(id_usuario, localStorage.authToken).then(data => {
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
                                return this.usersInfoService.updateUserInfo(id_usuario, params, localStorage.authToken).then(usuarioActualizado=>{
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
