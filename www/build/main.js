webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ciudad */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Ciudad = (function () {
    function Ciudad(name) {
        this.name = name;
    }
    return Ciudad;
}());

var MyCitiesService = (function () {
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    function MyCitiesService(http) {
        this.http = http;
        this.apiRoot = '../assets/json/cities/mycities.json';
    }
    MyCitiesService.prototype.retrieveMyCities = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var ciudades = [];
                var citiesJson = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
                console.log(citiesJson);
                __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](citiesJson, function (i, city) {
                    ciudades.push(new Ciudad(city.name));
                });
                resolve(ciudades);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return MyCitiesService;
}());
MyCitiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MyCitiesService);

//# sourceMappingURL=citiesService.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HourForecast */
/* unused harmony export TodayForecast */
/* unused harmony export NextDaysForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HourForecast = (function () {
    function HourForecast(condition, temp, time) {
        this.condition = condition;
        this.temp = temp;
        this.time = time;
    }
    return HourForecast;
}());

var TodayForecast = (function () {
    function TodayForecast(cityName, avgTemp, tempMax, tempMin, condition, hourlyForecast) {
        this.cityName = cityName;
        this.avgTemp = avgTemp;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.condition = condition;
        this.hourlyForecast = hourlyForecast;
    }
    return TodayForecast;
}());

var NextDaysForecast = (function () {
    function NextDaysForecast(dayOfWeek, tempMax, tempMin, tempAvg, condition, date) {
        this.dayOfWeek = dayOfWeek;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.tempAvg = tempAvg;
        this.condition = condition;
        this.date = date;
    }
    return NextDaysForecast;
}());

var ForecastService = (function () {
    function ForecastService(http) {
        this.http = http;
        this.iconMap = {
            "Partly cloudy": "md-partly-sunny",
            "Overcast": "md-cloudy",
            "Light rain": "md-umbrella",
            "Sunny": "md-sunny",
            "Mist": "md-cloudy",
            "Cloudy": "md-cloudy",
            "Fog": "md-cloudy",
            "Clear": "md-moon",
            "Light rain shower": "md-rainy",
            "Moderate rain at times": "md-rainy",
            "Heavy snow": "md-snow",
            "Heavy rain": "md-umbrella",
            "Patchy rain possible": "md-rainy"
        };
        this.dayOfWeekMap = {
            6: "Sunday",
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday",
            5: "Saturday",
        };
        this.apiRoot = 'http://api.apixu.com/v1/forecast.json';
        this.apiKey = 'e3dd4e798f1d4c61821153113172310';
    }
    ForecastService.prototype.currentWeather = function (ciudad) {
        var _this = this;
        var apiURL = this.apiRoot + "?key=" + this.apiKey + "&q=" + ciudad;
        var currentHour = new Date().getHours();
        if ((currentHour + 5) > 23)
            apiURL += "&days=2";
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var forecast = res.json().forecast.forecastday[0];
                var hours = [];
                var i = 0;
                var j = 0;
                var h = null;
                var flagDayTransition = false;
                while (i < 5) {
                    if ((currentHour + i) > 23 && !flagDayTransition) {
                        currentHour = 0;
                        forecast = res.json().forecast.forecastday[1];
                        flagDayTransition = true;
                    }
                    if (flagDayTransition) {
                        h = forecast.hour[currentHour + j];
                        j++;
                    }
                    else {
                        h = forecast.hour[currentHour + i];
                    }
                    var numericHour = new Date(h.time).getHours();
                    var stringHour = numericHour < 10 ? "0" + numericHour + ":00" : numericHour + ":00";
                    hours.push(new HourForecast(_this.iconMap[h.condition.text], h.temp_c, stringHour));
                    console.log(h.condition.text);
                    i++;
                }
                var x = [];
                var t = new TodayForecast(res.json().location.name, res.json().current.temp_c, forecast.day.maxtemp_c, forecast.day.mintemp_c, _this.iconMap[res.json().current.condition.text], hours);
                x.push(t);
                resolve(x);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ForecastService.prototype.weatherNextDays = function (ciudad, numberOfDays) {
        var _this = this;
        if (numberOfDays === void 0) { numberOfDays = 0; }
        var maxDaysForecast = 7;
        if (numberOfDays == 0 || numberOfDays == undefined)
            numberOfDays = maxDaysForecast;
        var apiURL = this.apiRoot + "?key=" + this.apiKey + "&q=" + ciudad + "&days=" + numberOfDays;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                console.log(apiURL);
                console.log(res.json());
                var nextDaysForecasts = [];
                var days = res.json().forecast.forecastday;
                var i = 0;
                while (i < numberOfDays) {
                    var dayOfWeekString = (i == 0) ? "Today" : _this.dayOfWeekMap[new Date(days[i].date).getDay()];
                    nextDaysForecasts.push(new NextDaysForecast(dayOfWeekString, days[i].day.maxtemp_c, days[i].day.mintemp_c, days[i].day.avgtemp_c, _this.iconMap[days[i].day.condition.text], days[i].date));
                    i++;
                }
                resolve(nextDaysForecasts);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return ForecastService;
}());
ForecastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ForecastService);

//# sourceMappingURL=forecastService.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserLogin; });
/* unused harmony export AuthorizationToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLogin = (function () {
    function UserLogin(username, password, timestamp) {
        this.username = username;
        this.password = password;
        this.timestamp = timestamp;
    }
    return UserLogin;
}());

var AuthorizationToken = (function () {
    function AuthorizationToken(authorized, timestamp, validUntil) {
        this.authorized = authorized;
        this.timestamp = timestamp;
        this.validUntil = validUntil;
    }
    return AuthorizationToken;
}());

var AuthorizationService = (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.apiRoot = '../assets/json/user/user.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    AuthorizationService.prototype.authorizeUser = function (userToBeAuthorized) {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var user = res.json();
                var authorized = false;
                var timestamp = (new Date()) + "";
                var validUntil = "0000";
                if (userToBeAuthorized.password == user.password && userToBeAuthorized.username == user.username) {
                    authorized = true;
                    validUntil = "1111";
                }
                resolve(new AuthorizationToken(authorized, timestamp, validUntil));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthorizationService);

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authService__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, authorizationService) {
        this.navCtrl = navCtrl;
        this.authorizationService = authorizationService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__services_authService__["b" /* UserLogin */]("x", "123", ""); //testing user
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.authorizationService.authorizeUser(this.user).then(function (data) {
            if (data.authorized) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], {
                    authToken: data
                });
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/'<ion-content has-header="true" padding="true" class="contenido_login">\n    <ion-grid>\n    <ion-row></ion-row>\n\n\n    <ion-row>\n        <ion-col col-12 class="titulo_bot_cast">\n            <b>Botcast</b>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12>\n            <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <ion-list inset>\n\n                <ion-item>\n                    <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="user.username" required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n\n    </ion-row>\n\n\n        <ion-row>\n            <ion-col class="signup-col">\n                <button ion-button class="submit-btn" full (click)="login()" type="submit" >Login</button>\n                <button ion-button class="register-btn" block clear (click)="register()">Sign up</button>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* AuthorizationService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graficas_graficas__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatbot_chatbot__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__graficas_graficas__["a" /* GraphsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__chatbot_chatbot__["a" /* ChatbotPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Cities" tabIcon="md-globe"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Graphs" tabIcon="md-trending-up"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bot" tabIcon="md-chatboxes"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Forecasts" tabIcon="md-rainy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_citiesService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forecastService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//TODO: fix hour change bug based on location, should take 10 mins...
//TODO: implement geoloc based forecast
//TODO: background gif changes as a function of weather
var PrincipalPage = (function () {
    function PrincipalPage(myCitiesService, forecastService, navCtrl, navParams) {
        this.myCitiesService = myCitiesService;
        this.forecastService = forecastService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ciudades = [];
        this.todayForecast = [];
        this.todayHourlyForecast = [];
        this.nextDaysForecast = [];
        this.todaysDate = this.getTodaysDate();
        this.mcs = this.myCitiesService;
        this.fs = this.forecastService;
        this.makeApiCalls("");
        //TODO: through auth token get user info and retrieve preferences, forecasts, etc
        console.log(this.navParams.data);
    }
    PrincipalPage.prototype.makeApiCalls = function (city) {
        var _this = this;
        if (city == undefined || city == "")
            city = "Mexico City"; //implementar geolocalizacion aqui
        this.myCitiesService.retrieveMyCities().then(function (data) {
            _this.ciudades = data;
        });
        this.forecastService.currentWeather(city).then(function (data) {
            _this.todayForecast = data;
            _this.todayHourlyForecast = _this.todayForecast[0].hourlyForecast;
            console.log(_this.todayForecast);
        });
        this.forecastService.weatherNextDays(city).then(function (data) {
            _this.nextDaysForecast = data;
        });
    };
    PrincipalPage.prototype.changeCity = function (cityName) {
        this.makeApiCalls(cityName);
    };
    PrincipalPage.prototype.getTodaysDate = function () {
        var dayOfWeekMap = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        };
        var monthMap = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December",
        };
        var today = new Date();
        var dayOfweek = dayOfWeekMap[today.getDay()];
        var dayOfMonth = today.getDate();
        var monthString = monthMap[today.getMonth()];
        return dayOfweek + ", " + monthString + " " + dayOfMonth + ", " + today.getFullYear();
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'principal',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your locations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let ciudad of ciudades" class="my-cities-element" (click)="changeCity(ciudad.name)">\n        {{ciudad.name}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let today of todayForecast">\n        <img src="../../assets/imgs/rainy.gif"/>\n\n        <div class="location-content">\n          <div class="location-city-name">\n            {{today.cityName}}\n          </div>\n\n          <div class="location-avg-temp">\n            {{today.avgTemp}}<span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-max-min-temps">\n            High:<b>{{today.tempMax}}</b><span class="centigrade-symbol">°C</span>\n            Low:<b>{{today.tempMin}}</b><span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-todays-data">\n            {{this.todaysDate}}\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row-container-hourly-forecasts">\n      <ion-col *ngFor="let hourForecast of todayHourlyForecast" class="col-hourly-forecasts">\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.time}}\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          <ion-icon name={{hourForecast.condition}}></ion-icon>\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.temp}} <span class="centigrade-symbol">°C</span>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let day of nextDaysForecast" class="row-forecasts">\n      <ion-col class="col-day-of-week-forecasts">{{day.dayOfWeek}}</ion-col>\n      <ion-col><ion-icon name={{day.condition}} class="icon-forecasts"></ion-icon></ion-col>\n      <ion-col>{{day.tempMax}} <span class="centigrade-symbol">°C</span></ion-col>\n      <ion-col>{{day.tempMin}} <span class="centigrade-symbol">°C</span></ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_citiesService__["a" /* MyCitiesService */],
        __WEBPACK_IMPORTED_MODULE_2__services_forecastService__["a" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forecastService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_citiesService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//TODO: fix initial graph pop bug
//TODO: implement geoloc based initial graph
//TODO: fix initial date bug
var GraphsPage = (function () {
    function GraphsPage(forecastService, myCitiesService) {
        var _this = this;
        this.forecastService = forecastService;
        this.myCitiesService = myCitiesService;
        this.ciudades = [];
        this.maxDaysApiRequest = 8;
        this.currentDataBufferForGraph = [{ data: [0, 0, 0, 0, 0], label: 'Series A' }];
        this.nextDaysForecastsForGraph = [];
        this.lineChartData = [{ data: [0, 0, 0, 0, 0, 0], label: 'Series A' }];
        this.lineChartLabels = ['0', '0', '0', '0', '0', '0'];
        this.todaysDate = "";
        this.maxFutureDate = "";
        this.selectedInitDate = this.todaysDate;
        this.selectedFinalDate = "";
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature (°C)'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.selectedTempOption = "max";
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(30,144,255,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.fs = this.forecastService;
        this.mcs = this.myCitiesService;
        this.forecastService.weatherNextDays("Mexico City").then(function (data) {
            _this.lineChartData = [{ data: _this.getMaxTemps(data), label: "Mexico City" }];
            _this.lineChartLabels = _this.buildLabelArray(data);
            _this.reloadChart();
        });
        this.myCitiesService.retrieveMyCities().then(function (data) {
            _this.ciudades = data;
        });
        this.setTodayDateTime();
        this.setMaxDateTime();
    }
    GraphsPage.prototype.reloadChart = function () {
        if (this.chart !== undefined) {
            this.chart.chart.destroy();
            this.chart.chart = 0;
            this.chart.labels = this.lineChartLabels;
            this.chart.datasets = this.lineChartData;
            this.chart.ngOnInit();
        }
    };
    GraphsPage.prototype.changeCity = function () {
        this.updateGraph();
    };
    GraphsPage.prototype.updateGraph = function (forecastDays) {
        var _this = this;
        if (forecastDays === void 0) { forecastDays = 0; }
        this.forecastService.weatherNextDays(this.selectedCity, forecastDays).then(function (data) {
            _this.nextDaysForecastsForGraph = data;
            _this.populateGraph();
        });
    };
    GraphsPage.prototype.optionChanged = function () {
        this.populateGraph();
    };
    GraphsPage.prototype.populateGraph = function () {
        var dataAux = [];
        switch (this.selectedTempOption) {
            case "max":
                dataAux = [{ data: this.getMaxTemps(this.nextDaysForecastsForGraph), label: this.selectedCity }];
                break;
            case "min":
                dataAux = [{ data: this.getMinTemps(this.nextDaysForecastsForGraph), label: this.selectedCity }];
                break;
            case "avg":
                dataAux = [{ data: this.getAvgTemps(this.nextDaysForecastsForGraph), label: this.selectedCity }];
                break;
        }
        this.lineChartLabels = this.buildLabelArray(this.nextDaysForecastsForGraph);
        this.lineChartData = dataAux;
        this.reloadChart();
    };
    GraphsPage.prototype.getMaxTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempMax; });
    };
    GraphsPage.prototype.getMinTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempMin; });
    };
    GraphsPage.prototype.getAvgTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempAvg; });
    };
    GraphsPage.prototype.buildLabelArray = function (nextDayForecasts) {
        var _this = this;
        return nextDayForecasts.map(function (e) { return _this.buildLabelFromString(e.date); });
    };
    GraphsPage.prototype.buildLabelFromString = function (date) {
        var abbreviatedMonthMap = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
        };
        var d = new Date(date);
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate() + 1);
    };
    GraphsPage.prototype.setTodayDateTime = function () {
        var today = new Date();
        this.todaysDate = today.getFullYear() + "-" + this.buildCorrectFormatMonth(today) + "-" + this.buildCorrectFormatDay(today);
    };
    GraphsPage.prototype.setMaxDateTime = function (maxDays) {
        if (maxDays === void 0) { maxDays = this.maxDaysApiRequest; }
        var maxDate = new Date((new Date().getTime()) + maxDays * 24 * 60 * 60 * 1000);
        this.maxFutureDate = maxDate.getFullYear() + "-" + this.buildCorrectFormatMonth(maxDate) + "-" + this.buildCorrectFormatDay(maxDate);
    };
    GraphsPage.prototype.buildCorrectFormatDay = function (date) {
        return (date.getDate() + 1) < 10 ? "0" + (date.getDate() + 1) : (date.getDate() + 1);
    };
    GraphsPage.prototype.buildCorrectFormatMonth = function (date) {
        return (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    };
    GraphsPage.prototype.triggerChartUpdateOnFinalDateChange = function () {
        this.updateGraph(this.calculateDifferenceInDaysBetweenDates());
    };
    GraphsPage.prototype.calculateDifferenceInDaysBetweenDates = function () {
        var timeDifferenceEpoch = Math.abs(new Date(this.selectedInitDate).getTime() - new Date(this.selectedFinalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        console.log(dayDifference);
        return dayDifference;
    };
    return GraphsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"])
], GraphsPage.prototype, "chart", void 0);
GraphsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'graphs',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Your locations</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row >\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select temp</ion-label>\n                <ion-select [(ngModel)]="selectedTempOption" multiple="false" (ngModelChange)="optionChanged($event)">\n                    <ion-option value="max">Max temperatures </ion-option>\n                    <ion-option value="min">Min temperatures </ion-option>\n                    <ion-option value="avg">Average temperatures </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="container-graph">\n        <ion-col>\n            <div>\n                <canvas baseChart width="350" height="250"  #baseChart="base-chart"\n                        [datasets]="lineChartData"\n                        [labels]="lineChartLabels"\n                        [options]="lineChartOptions"\n                        [colors]="lineChartColors"\n                        [legend]="lineChartLegend"\n                        [chartType]="lineChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-bottom: 10px">\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select city</ion-label>\n                <ion-select [(ngModel)]="selectedCity" multiple="false" (ngModelChange)="changeCity($event)">\n                    <ion-option *ngFor="let c of ciudades"> {{c.name}} </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-item>\n            <ion-label>Initial date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{todaysDate}} [(ngModel)]="selectedInitDate"></ion-datetime>\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-item>\n            <ion-label>Final date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{maxFutureDate}} [(ngModel)]="selectedFinalDate" (ngModelChange)="triggerChartUpdateOnFinalDateChange($event)"></ion-datetime>\n        </ion-item>\n    </ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_forecastService__["a" /* ForecastService */], __WEBPACK_IMPORTED_MODULE_2__services_citiesService__["a" /* MyCitiesService */]])
], GraphsPage);

//# sourceMappingURL=graficas.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chatbotService__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//TODO: fix hour change bug based on location, should take 10 mins...
//TODO: implement geoloc based forecast
//TODO: background gif changes as a function of weather
var ChatbotPage = (function () {
    function ChatbotPage(chatbotService) {
        var _this = this;
        this.chatbotService = chatbotService;
        chatbotService.retrieveConversation().then(function (data) { return _this.conversation = data; });
    }
    return ChatbotPage;
}());
ChatbotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/'\n<ion-content padding>\n    <div class="contenedor_conversacion">\n        <ion-grid>\n            <ion-row *ngFor="let message of conversation; let i = index">\n                <ion-row *ngIf="i%2==0" col-12>\n                    <ion-col col-1>\n                        <ion-icon name="md-contact" class="icon-user-chatbot"></ion-icon>\n                    </ion-col>\n                    <ion-col class="user-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-4></ion-col>\n                </ion-row>\n\n\n                <ion-row *ngIf="i%2!=0" col-12>\n                    <ion-col col-4></ion-col>\n                    <ion-col class="bot-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-1>\n                        <ion-icon name="md-cloud"></ion-icon>\n                    </ion-col>\n\n                </ion-row>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n    <!--<div class = "contenedor_mensaje">-->\n        <!--<div class="item item-input-inset">-->\n            <!--<label class="item item-input-wrapper">-->\n                <!--<i class="icon ion-edit ion-paper-airplane"></i>-->\n                <!--<input type="text" placeholder = "{{enviar_mensaje}}" />-->\n            <!--</label>-->\n        <!--</div>-->\n    <!--</div>-->\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chatbotService__["a" /* ChatbotService */]])
], ChatbotPage);

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* unused harmony export Conversation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Message = (function () {
    function Message(isBotMessage, timestamp, content) {
        this.isBotMessage = isBotMessage;
        this.timestamp = timestamp;
        this.content = content;
    }
    return Message;
}());

var Conversation = (function () {
    function Conversation(messages, init_time, end_time) {
        this.messages = messages;
        this.init_time = init_time;
        this.end_time = end_time;
    }
    return Conversation;
}());

var ChatbotService = (function () {
    function ChatbotService(http) {
        this.http = http;
        this.apiRoot = '../assets/json/chatbot/conversation.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    ChatbotService.prototype.retrieveConversation = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var messages = [];
                var messagesJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                console.log(messagesJson);
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](messagesJson, function (i, message) {
                    messages.push(new Message(message.isBotMessage, message.timestamp, message.content));
                });
                resolve(messages);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return ChatbotService;
}());
ChatbotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ChatbotService);

//# sourceMappingURL=chatbotService.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    //TODO: implement form validators
    function RegisterPage(navCtrl, authorizationService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authorizationService = authorizationService;
        this.formBuilder = formBuilder;
        this.slideOneForm = formBuilder.group({
            name: [''],
            email: [''],
            username: [''],
            password: [''],
            confirmpassword: ['']
        });
    }
    RegisterPage.prototype.register = function () {
        //TODO: implement here call to POST API endpoint when backend is ready
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/'<ion-content>\n    <ion-list no-lines>\n        <ion-grid>\n\n            <ion-row>\n                <ion-col col-12 class="titulo_bot_cast">\n                    <b>Botcast</b>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12>\n                    <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12>\n                    <form [formGroup]="slideOneForm">\n\n                        <ion-item>\n                            <ion-label floating>Name</ion-label>\n                            <ion-input formControlName="name" type="text"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>E-mail</ion-label>\n                            <ion-input formControlName="email" type="text"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Username</ion-label>\n                            <ion-input formControlName="username" type="number"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input formControlName="password" type="password"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>Confirm password</ion-label>\n                            <ion-input formControlName="confirmpassword" type="password"></ion-input>\n                        </ion-item>\n                    </form>\n\n                    <button ion-button full color="primary" (click)="register()">Create Account!</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], RegisterPage);

var _a, _b, _c;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_citiesService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_forecastService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_graphsService__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_chatbotService__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authService__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_graficas_graficas__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chatbot_chatbot__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_register_register__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



;




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__login_register_register__["a" /* RegisterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__login_register_register__["a" /* RegisterPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__services_citiesService__["a" /* MyCitiesService */],
            __WEBPACK_IMPORTED_MODULE_9__services_forecastService__["a" /* ForecastService */],
            __WEBPACK_IMPORTED_MODULE_10__services_graphsService__["a" /* GraphsService */],
            __WEBPACK_IMPORTED_MODULE_11__services_chatbotService__["a" /* ChatbotService */],
            __WEBPACK_IMPORTED_MODULE_12__services_authService__["a" /* AuthorizationService */],
            { provide: { ErrorHandler: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], LocationStrategy: __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */] }, useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotCast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_login__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BotCast = (function () {
    function BotCast(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__login_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return BotCast;
}());
BotCast = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], BotCast);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 222,
	"./af.js": 222,
	"./ar": 223,
	"./ar-dz": 224,
	"./ar-dz.js": 224,
	"./ar-kw": 225,
	"./ar-kw.js": 225,
	"./ar-ly": 226,
	"./ar-ly.js": 226,
	"./ar-ma": 227,
	"./ar-ma.js": 227,
	"./ar-sa": 228,
	"./ar-sa.js": 228,
	"./ar-tn": 229,
	"./ar-tn.js": 229,
	"./ar.js": 223,
	"./az": 230,
	"./az.js": 230,
	"./be": 231,
	"./be.js": 231,
	"./bg": 232,
	"./bg.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./eo": 252,
	"./eo.js": 252,
	"./es": 253,
	"./es-do": 254,
	"./es-do.js": 254,
	"./es.js": 253,
	"./et": 255,
	"./et.js": 255,
	"./eu": 256,
	"./eu.js": 256,
	"./fa": 257,
	"./fa.js": 257,
	"./fi": 258,
	"./fi.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./gd": 264,
	"./gd.js": 264,
	"./gl": 265,
	"./gl.js": 265,
	"./gom-latn": 266,
	"./gom-latn.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it.js": 274,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./th": 320,
	"./th.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 329,
	"./uz-latn": 330,
	"./uz-latn.js": 330,
	"./uz.js": 329,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 450;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Sheller\n</ion-content>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GraphDayForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GraphDayForecast = (function () {
    function GraphDayForecast(date, tempMax, tempMin, condition) {
        this.date = date;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.condition = condition;
    }
    return GraphDayForecast;
}());

var GraphsService = (function () {
    function GraphsService(http) {
        this.http = http;
        this.apiRoot = 'http://api.apixu.com/v1/forecast.json';
        this.apiKey = 'e3dd4e798f1d4c61821153113172310';
    }
    return GraphsService;
}());
GraphsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GraphsService);

//# sourceMappingURL=graphsService.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map