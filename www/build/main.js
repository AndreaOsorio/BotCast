webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authService__ = __webpack_require__(56);
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
        this.email = "";
        this.password = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_4__services_authService__["b" /* UserLogin */]("x", "123", "", ""); //testing user
    }
    /**
     * Makes a call to authorize users according to their credentials
     * Currently, only 2 types of users exist: administrators and common users
     * Administrators are redirected to the admin dashboard, while common users are directed to the main mobile
     * page with current a list of currently registered cities.
     * An authorization token is provided to every user which specifies his/her privileges and expiration time
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authorizationService.login(this.email, this.password).then(function (loginData) {
            console.log(loginData);
            try {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], {
                    tokenId: loginData["id"],
                    userId: loginData["userId"]
                });
            }
            catch (e) {
                console.log(e);
                console.log("Oh no there was an error!!!");
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
        selector: 'login',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/'<!--Login Componente HTML Structure-->\n<ion-content has-header="true" padding="true" class="contenido_login">\n    <ion-grid>\n    <ion-row></ion-row>\n\n\n    <ion-row>\n        <ion-col col-12 class="titulo_bot_cast">\n            <b>Botcast</b>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12 class="botcast_icon">\n            <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <ion-list inset class="contenedorCamposLogin">\n                <ion-item>\n                    <ion-input type="text" placeholder="Email" name="username" [(ngModel)]="email" required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n\n    </ion-row>\n\n\n        <ion-row>\n            <ion-col class="signup-col">\n                <button ion-button class="submit-btn" full (click)="login()" type="submit" >Login</button>\n                <button ion-button class="register-btn" block clear (click)="register()">Sign up</button>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* AuthorizationService */]) === "function" && _b || Object])
], LoginPage);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ciudad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyCitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(33);
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









//TODO: determine final DTO format for saved cities, should probably include location to use in geoloc services
var Ciudad = (function () {
    function Ciudad(name) {
        this.name = name;
    }
    return Ciudad;
}());

/**
 * Service that retrieves a user's saved cities to be displayed in the main tab of the mobile page.
 */
var MyCitiesService = (function () {
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //when the actual backend endpoints work
    function MyCitiesService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the saved cities and its corresponding key (if any)
         */
        this.apiRoot = '../assets/json/cities/mycities.json';
    }
    /**
     * Function that performs a REST call to the backend and retrieves a user's saved cities as a list of cities...
     * @returns {Promise<T>}: promise that resolves to an array of a user's saved cities in the appropriate DTO object
     */
    MyCitiesService.prototype.retrieveMyCities = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var ciudades = [];
                var citiesJson = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MyCitiesService);

//# sourceMappingURL=citiesService.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyForecastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(33);
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









var MyForecast = (function () {
    function MyForecast(cityName, condition, startDate, endDate) {
        this.cityName = cityName;
        this.condition = condition;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return MyForecast;
}());

var MyForecastService = (function () {
    function MyForecastService(http) {
        this.http = http;
        this.apiRoot = '../assets/json/forecast/myforecasts.json';
    }
    MyForecastService.prototype.retrieveMyForecasts = function () {
        var _this = this;
        var iconMap = {
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
            "Patchy rain possible": "md-rainy",
            "Light snow": "md-snow",
            "Moderate snow": "md-snow",
            "Blizzard": "md-snow",
            "Patchy moderate snow": "md-snow",
            "Blowing snow": "md-snow",
            "Light drizzle": "md-umbrella",
            "Light freezing rain": "md-snow",
            "Moderate or heavy rain shower": "md-umbrella",
            "Heavy rain at times": "md-umbrella"
        };
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var abbreviatedMonthMap = {
                    0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
                };
                var forecasts = [];
                var forecastsJson = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
                __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](forecastsJson, function (i, forecast) {
                    var d1 = new Date(forecast.startDate);
                    var d2 = new Date(forecast.endDate);
                    var init_date = abbreviatedMonthMap[d1.getMonth()] + " " + (d1.getDate());
                    var final_date = abbreviatedMonthMap[d2.getMonth()] + " " + (d2.getDate());
                    console.log(forecast);
                    forecasts.push(new MyForecast(forecast.cityName, iconMap[forecast.condition], init_date, final_date));
                });
                resolve(forecasts);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    MyForecastService.prototype.saveForecast = function (forecastObj) {
        var _this = this;
        var apiURL = 'http://localhost:3000/api/Pronosticos';
        var params = {
            ciudad: forecastObj["nombre"],
            fecha_inicial: forecastObj["fecha_inicial"],
            fecha_final: forecastObj["fecha_final"],
            condicion: forecastObj["condicion"],
            id_usuario: forecastObj["id_usuario"],
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiURL, params)
                .toPromise()
                .then(function (res) {
                var pronostico = res.json();
                resolve(new MyForecast(pronostico.ciudad, pronostico.condicion, pronostico.fecha_inicial, pronostico.fecha_final));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    MyForecastService.prototype.getForecastList = function (id_usuario) {
        var _this = this;
        var query = {
            where: {
                id_usuario: {
                    like: id_usuario
                }
            }
        };
        var apiURL = 'http://localhost:3000/api/Pronosticos?filter=' + JSON.stringify(query);
        console.log(apiURL);
        console.log(apiURL);
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var arr = [];
                var pronosticos = res.json();
                if (pronosticos.length > 0) {
                    for (var i = 0; i < pronosticos.length; i++) {
                        arr.push(new MyForecast(pronosticos[i]["ciudad"], pronosticos[i]["condicion"], pronosticos[i]["fecha_inicial"], pronosticos[i]["fecha_final"]));
                    }
                }
                resolve(arr);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return MyForecastService;
}());
MyForecastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MyForecastService);

//# sourceMappingURL=myForecastService.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Visitors */
/* unused harmony export TopSearched */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisitorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(16);
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









var Visitors = (function () {
    function Visitors(month, visits) {
        this.month = month;
        this.visits = visits;
    }
    return Visitors;
}());

var TopSearched = (function () {
    function TopSearched(name, searches) {
        this.name = name;
        this.searches = searches;
    }
    return TopSearched;
}());

var VisitorService = (function () {
    function VisitorService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/dashboard/visitors.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    VisitorService.prototype.retrieveInfo = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var visits = [];
                var visitsJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                console.log(visitsJson);
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](visitsJson, function (i, visit) {
                    visits.push(new Visitors(visit.month, visit.visits));
                });
                resolve(visits);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return VisitorService;
}());
VisitorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], VisitorService);

var SearchedService = (function () {
    function SearchedService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/dashboard/topsearched.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    SearchedService.prototype.retrieveInfo = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var searches = [];
                var searchesJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                console.log(searchesJson);
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](searchesJson, function (i, top) {
                    searches.push(new TopSearched(top.name, top.searches));
                });
                resolve(searches);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return SearchedService;
}());
SearchedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SearchedService);

//# sourceMappingURL=dashboardService.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal_principal__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficas_graficas__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatbot_chatbot__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myforecasts_myforecasts__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
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
    function TabsPage(navParams, navController) {
        this.navParams = navParams;
        this.navController = navController;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__principal_principal__["a" /* PrincipalPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__graficas_graficas__["a" /* GraphsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chatbot_chatbot__["a" /* ChatbotPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__myforecasts_myforecasts__["a" /* MyForecastsPage */];
        localStorage.authToken = navParams.get('tokenId');
        localStorage.idUsuario = navParams.get('userId');
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/tabs/tabs.html"*/'<!--User Tabs Root Component HTML Structure-->\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Cities" tabIcon="md-globe"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Graphs" tabIcon="md-trending-up"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bot" tabIcon="md-chatboxes"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Forecasts" tabIcon="md-rainy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/tabs/tabs.html"*/
    })
    /**
     * Tabs Root Component Class: declare here any additional tabs for user main mobile view, then map to appropriate HTML ionic tags in template
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_citiesService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forecastService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geolocationService__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usersInfoService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addCity_addCity__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_login__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PrincipalPage = (function () {
    /**
     *
     * @param myCitiesService: service that retrieves a user's saved cities
     * @param forecastService: service that retrieves today's and next week's weather forecasts
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     * @param geolocationService: service that retrieves user's current location in latLong format, then performs an external call
     * to a geocoder to get the exact address
     */
    function PrincipalPage(forecastService, navCtrl, navParams, geolocationService, modalCtrl, usersInfoService, authorizationService) {
        var _this = this;
        this.forecastService = forecastService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocationService = geolocationService;
        this.modalCtrl = modalCtrl;
        this.usersInfoService = usersInfoService;
        this.authorizationService = authorizationService;
        this.ciudades = [];
        this.todayForecast = [];
        this.todayHourlyForecast = [];
        this.nextDaysForecast = [];
        this.todaysDate = this.getTodaysDate();
        this.makeApiCalls("");
        console.log("AUTHTOKEN");
        console.log(localStorage.authToken);
        console.log(navParams.get('tokenId'));
        usersInfoService.retrieveUserInfoById(localStorage.idUsuario, localStorage.authToken).then(function (res) {
            _this.currentUser = res;
            console.log(_this.currentUser);
        });
        console.log("IDUSUARIO IN LOCALSTORAGE");
        console.log(localStorage.idUsuario);
        localStorage.newForecastSaved = 0;
        localStorage.citySelectedFromForecastList = 0;
        localStorage.cityAddedToFavorites = 0;
        localStorage.cityRemovedFromFavorites = 0;
        localStorage.currentCity = "";
        this.checkCityAddedToFavorites();
        this.checkCityRemovedFromFavorites();
    }
    PrincipalPage.prototype.logout = function () {
        this.authorizationService.logout(localStorage.authToken);
        localStorage.authToken = "";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login_login__["a" /* LoginPage */]);
    };
    PrincipalPage.prototype.checkCityAddedToFavorites = function () {
        var _this = this;
        setInterval(function () {
            if (localStorage.cityAddedToFavorites == 1) {
                var obj = JSON.parse(localStorage.cityAddedToFavoritesObj);
                _this.ciudades.push(new __WEBPACK_IMPORTED_MODULE_1__services_citiesService__["a" /* Ciudad */](obj.city));
                localStorage.cityAddedToFavorites = 0;
            }
        }, 1000);
    };
    PrincipalPage.prototype.checkCityRemovedFromFavorites = function () {
        var _this = this;
        setInterval(function () {
            if (localStorage.cityRemovedFromFavorites == 1) {
                var obj_1 = JSON.parse(localStorage.cityRemovedFromFavoritesObj);
                _this.ciudades = _this.ciudades.filter(function (c) { return c.name != obj_1.city; });
                localStorage.cityRemovedFromFavorites = 0;
            }
        }, 1000);
    };
    PrincipalPage.prototype.presentAddCityModal = function () {
        var _this = this;
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__addCity_addCity__["a" /* AddCityModal */], { user: this.currentUser });
        contactModal.onDidDismiss(function (ciudad) {
            if (ciudad !== null && ciudad.length > 0) {
                console.log(ciudad);
                var arreglo_nombres = ciudad.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__services_citiesService__["a" /* Ciudad */](c.name); });
                localStorage.userCities = JSON.stringify(arreglo_nombres);
                _this.ciudades = arreglo_nombres;
            }
        });
        contactModal.present();
    };
    /**
     * @param city: city whose current and future weather wants to be known
     * This method calls all the different services to retrieve the selected city's weather and then redraws
     * the whole view with the retrieved data in the appropriate format
     */
    PrincipalPage.prototype.makeApiCalls = function (city) {
        var _this = this;
        if (city == undefined || city == "") {
            //TODO: uncomment in prod
            // this.getMyLocation();
            city = "Amsterdam";
        }
        this.forecastService.currentWeather(city).then(function (data) {
            _this.todayForecast = data;
            _this.todayHourlyForecast = _this.todayForecast[0].hourlyForecast;
            console.log(_this.todayForecast);
        });
        this.forecastService.weatherNextDays(city).then(function (data) {
            _this.nextDaysForecast = data;
            console.log(_this.nextDaysForecast);
        });
        this.usersInfoService.retrieveUserInfoById(localStorage.idUsuario, localStorage.authToken).then(function (res) {
            _this.currentUser = res;
            var arreglo_nombres = _this.currentUser.cities.map(function (ciudad) { return new __WEBPACK_IMPORTED_MODULE_1__services_citiesService__["a" /* Ciudad */](ciudad["name"]); });
            _this.ciudades = arreglo_nombres;
            localStorage.userCities = JSON.stringify(arreglo_nombres);
        });
    };
    /**
     * First acquires user's longitude and latitude with cordova's native hardware interaction API,
     * then performs an external call to retrieve the user's approximate address but, most importantly, his/her current city
     * to call makeApiCalls() and redraw the view with the current location's weather
     */
    PrincipalPage.prototype.getMyLocation = function () {
        var _this = this;
        var loading_gif = __WEBPACK_IMPORTED_MODULE_8_jquery__("#gif-loading-container");
        loading_gif.removeClass("x");
        loading_gif.addClass("y");
        this.geolocationService.getMyCurrentLocation().then(function (data) {
            _this.mycurrentLocationLatLong = data;
            _this.geolocationService.getMyCurrentAddressBasedOnLatLong(data).then(function (data) {
                _this.myCurrentLocationReverseGeocoded = data;
                localStorage.currentCity = data.city;
                _this.makeApiCalls(data.city);
                loading_gif.removeClass("y");
                loading_gif.addClass("x");
            });
        });
    };
    /**
     *
     * @param cityName: city parameter used in templates to know which city has been selected from the slider
     * Event binding function to retrieve users current location and update screen
     */
    PrincipalPage.prototype.changeCity = function (cityName) {
        this.makeApiCalls(cityName);
        this.currentCity = cityName;
        localStorage.currentCity = this.currentCity;
    };
    PrincipalPage.prototype.moveToAddCityWindow = function () {
        console.log("moving window!");
    };
    /**
     *
     * @returns {string} returns today's date in a pretty format (DayOfWeek, MonthName DayOfMonth, CurrentYear e.g. Thursday, January 20, 2099)
     * Auxiliary method for date formatting
     */
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
        selector: 'principal',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/'<!--User Main Tab Component HTML Structure-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your locations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides class="cities-slider">\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let ciudad of ciudades" class="my-cities-element" (click)="changeCity(ciudad.name)">\n            {{ciudad.name}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <button ion-button color="primary" class="my-location-button" (click)="getMyLocation()">My location</button>\n          </ion-col>\n          <ion-col >\n            <button ion-button color="secondary" class="add-city-button" (click)="presentAddCityModal()">Manage cities</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <button ion-button color="danger" class="logout-button" (click)="logout()">Log out</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n  <div id="gif-loading-container">\n    <img src="../../assets/imgs/loading.gif" id="gif-loading"/>\n    <div id="message">Retrieving your location...</div>\n  </div>\n\n  <ion-grid class="ion_grid_forecasts">\n    <ion-row>\n      <ion-col *ngFor="let today of todayForecast">\n        <img src="../../assets/imgs/rainy.gif"/>\n\n        <div class="location-content">\n          <div class="location-city-name">\n            {{today.cityName}}\n          </div>\n\n          <div class="location-avg-temp">\n            {{today.avgTemp}}<span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-max-min-temps">\n            High:<b>{{today.tempMax}}</b><span class="centigrade-symbol">°C</span>\n            Low:<b>{{today.tempMin}}</b><span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-todays-data">\n            {{this.todaysDate}}\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row-container-hourly-forecasts">\n      <ion-col *ngFor="let hourForecast of todayHourlyForecast" class="col-hourly-forecasts">\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.time}}\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          <ion-icon name={{hourForecast.condition}}></ion-icon>\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.temp}} <span class="centigrade-symbol">°C</span>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let day of nextDaysForecast" class="row-forecasts">\n      <ion-col class="col-day-of-week-forecasts">{{day.dayOfWeek}}</ion-col>\n      <ion-col><ion-icon name={{day.condition}} class="icon-forecasts"></ion-icon></ion-col>\n      <ion-col>{{day.tempMax}} <span class="centigrade-symbol">°C</span></ion-col>\n      <ion-col>{{day.tempMin}} <span class="centigrade-symbol">°C</span></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/
    })
    /**
     * Component for user main interface, user can add cities, select cities, select current location and
     * today's weather along withnext week's forecasts will be displayed.
     * This component's state contains the user's currently saved cities, today's and next week's weather, today's date,
     * the user's current location in latitude and longitude (raw format) and the user's approximate address.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_forecastService__["a" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_geolocationService__["a" /* GeolocationService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__services_usersInfoService__["a" /* UsersInfoService */],
        __WEBPACK_IMPORTED_MODULE_6__services_authService__["a" /* AuthorizationService */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeolocationAddress */
/* unused harmony export RawLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Data object that represents the user's approximate address, city and country specified in different
 * fields for faster referencing
 */
var GeolocationAddress = (function () {
    function GeolocationAddress(latlong, address, city, country) {
        this.latlong = latlong;
        this.address = address;
        this.city = city;
        this.country = country;
    }
    return GeolocationAddress;
}());

/**
 * Data object that corresponds to the user's current location in longitude and latitude
 */
var RawLocation = (function () {
    function RawLocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return RawLocation;
}());

/**
 * Service that retrieves a user's current location using cordova's native hardware plugin and
 * then performs an external query to reverse geocode the user's approximate address
 */
var GeolocationService = (function () {
    function GeolocationService(http, geolocation, nativeGeocoder) {
        this.http = http;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        /**
         * Google Maps api root and free API key generated for this project
         */
        this.apiRoot = 'https://maps.googleapis.com/maps/api/geocode/json';
        this.apiKey = 'AIzaSyDbAbiXC0l2fZUSmPGlHZayA-KzUIfLVLo';
    }
    /**
     * Retrieves a user's address using his/her raw location (lat and long) using the Google Maps API for reverse geocoding
     * @param latlng: the user's latitude and longitude object retrieved from the other native geolocation service
     * @returns {Promise<T>}: return a promise that contains the user's approximate address encoded in the appropriate data object
     */
    GeolocationService.prototype.getMyCurrentAddressBasedOnLatLong = function (latlng) {
        var _this = this;
        var apiURL = this.apiRoot + "?latlng=" + latlng.latitude + "," + latlng.longitude + "&key=" + this.apiKey;
        console.log(apiURL);
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                resolve(new GeolocationAddress(new RawLocation(latlng.latitude, latlng.longitude), res.json().results[0].formatted_address, res.json().results[5].formatted_address.split(",")[0], res.json().results[5].formatted_address.split(",")[1]));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Retrieve's a user's current lat and longitude using the device's hardware through cordova
     * @returns {Promise<T>}: returns a promise with the user's current latitude and longitude encoded in the appropriate data object
     */
    GeolocationService.prototype.getMyCurrentLocation = function () {
        var _this = this;
        var pseudoPromise = new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition()
                .then(function (res) {
                resolve(new RawLocation(res.coords.latitude, res.coords.longitude));
            }, function (msg) {
                reject(msg);
            });
        });
        return pseudoPromise;
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], GeolocationService);

//# sourceMappingURL=geolocationService.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCityModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usersInfoService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCityModal = (function () {
    function AddCityModal(params, viewCtrl, cityManagerService, usersInfoService) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.cityManagerService = cityManagerService;
        this.usersInfoService = usersInfoService;
        this.cities = [];
        this.selectedCities = [];
        this.selectedMap = new Map();
        cityManagerService.retrieveActiveCities().then(function (res) {
            _this.cities = res;
        });
        console.log(params.get('user'));
        this.currentUser = params.get('user');
    }
    AddCityModal.prototype.addRemoveCity = function (event) {
        var currentRow = __WEBPACK_IMPORTED_MODULE_4_jquery__(event.currentTarget);
        var currentRowId = currentRow.children("input").val();
        if (!this.selectedMap.get(currentRowId)) {
            currentRow.addClass("active-city");
            var cityCountry_1 = "";
            __WEBPACK_IMPORTED_MODULE_4_jquery__["each"](currentRow.children(), function () {
                cityCountry_1 += __WEBPACK_IMPORTED_MODULE_4_jquery__(this).html().trim() + ",";
            });
            this.selectedMap.set(currentRowId, cityCountry_1);
        }
        else {
            this.selectedMap.delete(currentRowId);
            currentRow.removeClass("active-city");
        }
    };
    AddCityModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.selectedCities);
    };
    AddCityModal.prototype.saveCities = function () {
        var _this = this;
        this.selectedCities.length = 0;
        var aux = this.selectedCities;
        this.selectedMap.forEach(function (value, key, map) {
            aux.push({
                id: key,
                name: value.split(",")[1],
                country: value.split(",")[2],
            });
        });
        this.selectedCities = aux;
        console.log(this.currentUser);
        var params = {
            nombre: this.currentUser.name,
            apellido: this.currentUser.lastname,
            email: this.currentUser.email,
            usuario: this.currentUser.username,
            ciudades: this.selectedCities
        };
        this.usersInfoService.updateUserInfo(localStorage.idUsuario, params, localStorage.authToken).then(function (res) {
            console.log("Cambios a lista guardados!");
            console.log(res);
            _this.viewCtrl.dismiss(_this.selectedCities);
        });
    };
    return AddCityModal;
}());
AddCityModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addCity',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/addCity/addCity.html"*/'<ion-content padding class="contenido-lista-ciudades-activas">\n\n    <ion-header>\n        <ion-navbar>\n            <ion-title>Available Cities</ion-title>\n            <button ion-button small color="danger" (click)="dismiss()">\n                Close\n            </button>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-grid class="grid-ciudades-activas">\n        <ion-row>\n        </ion-row>\n        <ion-row *ngFor = "let ciudad of cities" class="ciudad-row" (click)="addRemoveCity($event)">\n            <input type="hidden" value={{ciudad.id}} />\n            <ion-col class = "col-city-name">\n                {{ciudad.name}}\n            </ion-col>\n            <ion-col>\n                {{ciudad.country}}\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <button full ion-button color="secondary" (click)="saveCities()">Save cities</button>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/addCity/addCity.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__["b" /* CityManagerService */],
        __WEBPACK_IMPORTED_MODULE_3__services_usersInfoService__["a" /* UsersInfoService */]])
], AddCityModal);

//# sourceMappingURL=addCity.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forecastService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_citiesService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_myForecastService__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
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
//TODO: fix initial date bug
var GraphsPage = (function () {
    /**
     * Component constructor.
     * By default it retrieves the data from the user's current location and draws the graph accordingly.
     * @param forecastService: retrieves weather data from the services
     * @param myCitiesService: retrieves currently saved cities by users
     */
    function GraphsPage(forecastService, myCitiesService, myForecastService, toastCtrl) {
        var _this = this;
        this.forecastService = forecastService;
        this.myCitiesService = myCitiesService;
        this.myForecastService = myForecastService;
        this.toastCtrl = toastCtrl;
        this.ciudades = [];
        this.maxDaysApiRequest = 7;
        this.currentDataBufferForGraph = [{ data: [0, 0, 0, 0, 0], label: 'Series A' }];
        this.nextDaysForecastsForGraph = [];
        this.lineChartData = [{ data: [0, 0, 0, 0, 0, 0], label: 'Series A' }];
        this.lineChartLabels = ['0', '0', '0', '0', '0', '0'];
        this.todaysDate = "";
        this.maxFutureDate = "";
        this.selectedInitDate = this.todaysDate;
        this.selectedFinalDate = "";
        /**
         *The following objects correspond to the graph configuration arguments, including label format, colors and label display locations, among others.
         */
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
        this.currentCity = localStorage.currentCity;
        this.selectedCity = this.currentCity;
        this.forecastService.weatherNextDays(this.currentCity).then(function (data) {
            var conditions = data.map(function (forecast) { return forecast.condition; });
            //TODO: put this icon somewhere visible
            _this.mostFrequentCondition = _this.calculateMostFrequentCondition(conditions);
            _this.lineChartData = [{ data: _this.getMaxTemps(data), label: _this.currentCity }];
            _this.lineChartLabels = _this.buildLabelArray(data);
            _this.reloadChart();
        });
        this.myCitiesService.retrieveMyCities().then(function (data) {
            _this.ciudades = JSON.parse(localStorage.userCities);
        });
        this.setTodayDateTime();
        this.setMaxDateTime();
        this.selectedInitDate = this.todaysDate;
        this.selectedFinalDate = this.maxFutureDate;
        this.checkCitySelectedFromForecastList();
    }
    GraphsPage.prototype.presentForecastSavedToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Forecast successfully saved!',
            duration: 1500,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log("Bye forecast toast!");
        });
        toast.present();
    };
    GraphsPage.prototype.ngAfterContentChecked = function () {
        if (JSON.stringify(this.ciudades) != localStorage.userCities) {
            this.ciudades = JSON.parse(localStorage.userCities);
        }
        if (this.currentCity != localStorage.currentCity) {
            this.currentCity = localStorage.currentCity;
        }
    };
    /**
     * Makes a graph full state refresh whenever it's needed
     * This includes the data buffer and axes labels
     */
    GraphsPage.prototype.reloadChart = function () {
        if (this.chart !== undefined) {
            this.chart.chart.destroy();
            this.chart.chart = 0;
            this.chart.labels = this.lineChartLabels;
            this.chart.datasets = this.lineChartData;
            this.chart.ngOnInit();
        }
    };
    /**
     * Event binding method for templates, when a new city is selected in the pop-up menu
     */
    GraphsPage.prototype.changeCity = function () {
        this.updateGraph();
    };
    /**
     * Make a char with the updated data buffers
     * @param forecastDays: what is the date range in days desired for the service query
     */
    GraphsPage.prototype.updateGraph = function (forecastDays) {
        var _this = this;
        if (forecastDays === void 0) { forecastDays = 0; }
        this.forecastService.weatherNextDays(this.selectedCity, forecastDays).then(function (data) {
            var conditions = data.map(function (forecast) { return forecast.condition; });
            _this.mostFrequentCondition = _this.calculateMostFrequentCondition(conditions);
            _this.nextDaysForecastsForGraph = data;
            _this.populateGraph();
        });
    };
    /**
     * Event binding method for templates, when new option (min, max or avg temperatures) is selected
     */
    GraphsPage.prototype.optionChanged = function () {
        this.populateGraph();
    };
    /**
     * Retrieve new data from the forecast services and fill the graph data buffer with this new information
     * Depending on the option selected in the UI, this will retrieve the maximum, minimum or average temperatures
     * of the desired region for a specific period.
     */
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
    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of maximum temperatures in a specific date and location
     */
    GraphsPage.prototype.getMaxTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempMax; });
    };
    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of minumum temperatures in a specific date and location
     */
    GraphsPage.prototype.getMinTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempMin; });
    };
    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of average temperatures in a specific date and location
     */
    GraphsPage.prototype.getAvgTemps = function (nextDayForecasts) {
        return nextDayForecasts.map(function (e) { return e.tempAvg; });
    };
    /**
     * Auxiliary function for filling the label buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array, takes its dates and build the label data buffer
     * @returns {[number,number,number,number,number]}: array of dates as strings in a correct format
     */
    GraphsPage.prototype.buildLabelArray = function (nextDayForecasts) {
        var _this = this;
        return nextDayForecasts.map(function (e) { return _this.buildLabelFromString(e.date); });
    };
    GraphsPage.prototype.checkCitySelectedFromForecastList = function () {
        var _this = this;
        setInterval(function () {
            if (localStorage.citySelectedFromForecastList == 1) {
                var obj = JSON.parse(localStorage.selectedForecastForGraph);
                _this.selectedCity = obj.city;
                _this.updateGraph(parseInt(obj.days));
                localStorage.citySelectedFromForecastList = 0;
            }
        }, 100);
    };
    /**
     * Takes a date in an YYYY-MM-dd format and pretty-formats it
     * @param date: date in YYYY-MM-dd format
     * @returns {string}: return date formatted as e.g. Jan 31
     */
    GraphsPage.prototype.buildLabelFromString = function (date) {
        var abbreviatedMonthMap = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
        };
        var d = new Date(date);
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate() + 1);
    };
    /**
     * Get today's date in timestamp format and set it to YYYY-MM-DD format
     */
    GraphsPage.prototype.setTodayDateTime = function () {
        var today = new Date();
        this.todaysDate = today.getFullYear() + "-" + this.buildCorrectFormatMonth(today) + "-" + this.buildCorrectFormatDay(today);
    };
    /**
     * Establish the maximum future date in which the weather forecast service can be queried
     * @param maxDays: maximum amount of days for forecast service query, depends on API restrictions
     */
    GraphsPage.prototype.setMaxDateTime = function (maxDays) {
        if (maxDays === void 0) { maxDays = (this.maxDaysApiRequest - 1); }
        var maxDate = new Date((new Date().getTime()) + maxDays * 24 * 60 * 60 * 1000);
        this.maxFutureDate = maxDate.getFullYear() + "-" + this.buildCorrectFormatMonth(maxDate) + "-" + this.buildCorrectFormatDay(maxDate);
    };
    /**
     * Auxiliar function for formatting dates
     * @param date: take a day of the month as e.g. 23 or 1
     * @returns {string|number}: if a day is less than 10 format it as e.g. 01 or 08
     */
    GraphsPage.prototype.buildCorrectFormatDay = function (date) {
        return (date.getDate() + 1) < 10 ? "0" + (date.getDate() + 1) : (date.getDate());
    };
    /**
     * Auxiliar function for formatting dates
     * @param date: take a month as e.g. 12 or 8
     * @returns {string|number}: if a month's number is less than 10 format it as e.g. 01 or 08
     */
    GraphsPage.prototype.buildCorrectFormatMonth = function (date) {
        return (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    };
    /**
     * Event binding function with templates, updates function once the final date date-picker has been changed
     */
    GraphsPage.prototype.triggerChartUpdateOnFinalDateChange = function () {
        this.updateGraph(this.calculateDifferenceInDaysBetweenDates());
    };
    /**
     * Axuiliary function to calculate the number of dates between the currently selected initial and final date for query
     * @returns {number}: number of dates between two days
     */
    GraphsPage.prototype.calculateDifferenceInDaysBetweenDates = function () {
        var timeDifferenceEpoch = Math.abs(new Date(this.selectedInitDate).getTime() - new Date(this.selectedFinalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference + 1;
    };
    /**
     * Add a forecast to the user's list of saved forecasts
     */
    GraphsPage.prototype.saveForecast = function () {
        var _this = this;
        var forecastToSave = {
            nombre: this.selectedCity,
            fecha_inicial: this.selectedInitDate,
            fecha_final: this.selectedFinalDate,
            id_usuario: localStorage.idUsuario,
            condicion: this.mostFrequentCondition
        };
        this.myForecastService.saveForecast(forecastToSave).then(function (data) {
            _this.presentForecastSavedToast();
            localStorage.newForecastSaved = 1;
        });
    };
    /**
     * Determine the most frequent weather condition in the required forecast days
     * @param conditions
     * @returns {string}
     */
    GraphsPage.prototype.calculateMostFrequentCondition = function (conditions) {
        var arr = [];
        for (var i = 0; i < conditions.length; i++) {
            if (!arr[conditions[i]]) {
                arr[conditions[i]] = 1;
            }
            else {
                arr[conditions[i]]++;
            }
        }
        var max = 0;
        var maxVal = "";
        for (var x in arr) {
            if (arr[x] > max) {
                max = arr[x];
                maxVal = x;
            }
        }
        return maxVal;
    };
    return GraphsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"])
], GraphsPage.prototype, "chart", void 0);
GraphsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'graphs',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/'<!--Graphs User Tab Component HTML Structure-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Forecasts graph</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row >\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select temp</ion-label>\n                <ion-select [(ngModel)]="selectedTempOption" multiple="false" (ngModelChange)="optionChanged($event)">\n                    <ion-option value="max">Max temperatures </ion-option>\n                    <ion-option value="min">Min temperatures </ion-option>\n                    <ion-option value="avg">Average temperatures </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="container-graph">\n        <ion-col>\n            <div>\n                <canvas baseChart width="350" height="250"  #baseChart="base-chart"\n                        [datasets]="lineChartData"\n                        [labels]="lineChartLabels"\n                        [options]="lineChartOptions"\n                        [colors]="lineChartColors"\n                        [legend]="lineChartLegend"\n                        [chartType]="lineChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-bottom: 10px">\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select city</ion-label>\n                <ion-select [(ngModel)]="selectedCity" multiple="false" (ngModelChange)="changeCity($event)">\n                    <ion-option *ngFor="let c of ciudades"\n                                [selected]="c.name == currentCity ? true : null"> {{c.name}} </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-item>\n            <ion-label>Initial date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{todaysDate}} [(ngModel)]="selectedInitDate"></ion-datetime>\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-item>\n            <ion-label>Final date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{maxFutureDate}} [(ngModel)]="selectedFinalDate" (ngModelChange)="triggerChartUpdateOnFinalDateChange($event)"></ion-datetime>\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button outline class="save-forecast" (click)="saveForecast()">Save this forecast</button>\n        </ion-col>\n    </ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/
    })
    /**
     * User graph componennt, controlls the user interaction between the different fields, the API calls and the corresponding UI updates
     * This component's state contains a reference to the chart's directives, the currently selected cities, the chart's data buffer
     * retrieved from the forecasts service and the state of the form's components for frequent usage.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_forecastService__["a" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_2__services_citiesService__["b" /* MyCitiesService */],
        __WEBPACK_IMPORTED_MODULE_3__services_myForecastService__["b" /* MyForecastService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ToastController */]])
], GraphsPage);

//# sourceMappingURL=graficas.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chatbotService__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatbotPage = (function () {
    function ChatbotPage(chatbotService) {
        var _this = this;
        this.chatbotService = chatbotService;
        this.mockIsBot = false;
        console.log(localStorage.idUsuario);
        console.log(localStorage.idUsuario == "5a1280b7f266795bde5ec74f");
        chatbotService.retrieveUserConversation(localStorage.idUsuario).then(function (data) {
            console.log(data);
            _this.conversation = data;
        });
        this.scrollConversation(500);
    }
    ChatbotPage.prototype.changeMockIsBot = function () {
        this.mockIsBot = !this.mockIsBot;
        console.log(this.mockIsBot);
    };
    ChatbotPage.prototype.sendMessage = function (event) {
        var _this = this;
        var textoUsuario = this.userInput;
        var messageObject = {
            contenido: textoUsuario,
            id_usuario: localStorage.idUsuario,
            esbot: false
        };
        this.chatbotService.saveMessage(messageObject).then(function (data) {
            _this.conversation.push(new __WEBPACK_IMPORTED_MODULE_1__services_chatbotService__["b" /* Message */](false, (new Date().getTime()).toString(), textoUsuario));
            console.log(data);
        });
        this.chatbotService.callBotAPI(this.userInput, localStorage.idUsuario).then(function (response) {
            var textResponse = response.toString();
            var messageObject = {
                contenido: textResponse,
                id_usuario: localStorage.idUsuario,
                esbot: true
            };
            _this.chatbotService.saveMessage(messageObject).then(function (data) {
                _this.conversation.push(new __WEBPACK_IMPORTED_MODULE_1__services_chatbotService__["b" /* Message */](true, (new Date().getTime()).toString(), textResponse));
                _this.scrollConversation(500);
            });
        });
        this.userInput = "";
        this.scrollConversation(100);
    };
    ChatbotPage.prototype.scrollConversation = function (time) {
        setTimeout(function () {
            var conversationContainer = __WEBPACK_IMPORTED_MODULE_2_jquery__(".contenedor_conversacion");
            conversationContainer.scrollTop(conversationContainer.prop('scrollHeight'));
        }, time);
    };
    return ChatbotPage;
}());
ChatbotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/'<!--Chatbot User Tab Component HTML Structure-->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>Botcast</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="yo">\n    <div class="contenedor_conversacion">\n        <ion-grid>\n            <ion-row *ngFor="let message of conversation; let i = index">\n                <ion-row *ngIf="message.isBotMessage == false" col-12>\n                    <ion-col col-1>\n                        <ion-icon name="ios-contact-outline" class="icon-user-chatbot"></ion-icon>\n                    </ion-col>\n                    <ion-col class="user-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-4></ion-col>\n                </ion-row>\n                <ion-row *ngIf="message.isBotMessage == true" col-12>\n                    <ion-col col-4></ion-col>\n                    <ion-col class="bot-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-1>\n                        <ion-icon name="ios-ionitron-outline"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n\n<ion-input placeholder="Say something..." class="mensaje-caja-texto" [(ngModel)] = "userInput" type="text"></ion-input>\n<button ion-button class="boton-enviar-mensaje" (click)="sendMessage($event)">Send</button>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chatbotService__["a" /* ChatbotService */]])
], ChatbotPage);

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Message; });
/* unused harmony export Conversation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersInfoService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cityManagerService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forecastService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Data transfer objects that specifies the encoding data of a message between a user and the chatbot
 */
var Message = (function () {
    /**
     * @param isBotMessage: the message is form a user or the bot
     * @param timestamp: time and date in which the message was sent
     * @param content: the content of the message, can be information for graphs and what not
     */
    function Message(isBotMessage, timestamp, content) {
        this.isBotMessage = isBotMessage;
        this.timestamp = timestamp;
        this.content = content;
    }
    return Message;
}());

/**
 * Data transfer object that codifies the conversation between a user and the chatbot
 */
var Conversation = (function () {
    /**
     * @param messages: array of messages that constitute the actual conversation
     * @param init_time: timestamp of when the conversation began
     * @param end_time: timestamp of when the conversation ended
     */
    function Conversation(messages, init_time, end_time) {
        this.messages = messages;
        this.init_time = init_time;
        this.end_time = end_time;
    }
    return Conversation;
}());

var ChatbotService = (function () {
    function ChatbotService(http, usersInfoService, cityManagerService, forecastService) {
        this.http = http;
        this.usersInfoService = usersInfoService;
        this.cityManagerService = cityManagerService;
        this.forecastService = forecastService;
    }
    ChatbotService.prototype.saveMessage = function (mensaje) {
        var _this = this;
        var apiURL = 'http://localhost:3000/api/Mensajes';
        var params = {
            contenido: mensaje["contenido"],
            id_usuario: mensaje["id_usuario"],
            timestamp: new Date().getTime(),
            esbot: mensaje["esbot"]
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiURL, params)
                .toPromise()
                .then(function (res) {
                var message = res.json();
                resolve(new Message(message.esbot, message.timestamp, message.contenido));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Function that performs a REST call to the backend and retrieves a user's conversation with the chatbot in an array of messages
     * @returns {Promise<T>}: promise that resolves to a user-chatbot conversation in the appropriate DTO
     */
    ChatbotService.prototype.retrieveUserConversation = function (id_usuario) {
        var _this = this;
        var query = {
            where: {
                id_usuario: {
                    like: id_usuario
                }
            }
        };
        var apiURL = 'http://localhost:3000/api/Mensajes?filter=' + JSON.stringify(query);
        var params = {
            id_usuario: id_usuario
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL, params)
                .toPromise()
                .then(function (res) {
                var messages = [];
                var messagesJson = __WEBPACK_IMPORTED_MODULE_11_jquery__["map"](res.json(), function (e) { return e; });
                __WEBPACK_IMPORTED_MODULE_11_jquery__["each"](messagesJson, function (i, message) {
                    messages.push(new Message(message.esbot, message.timestamp, message.contenido));
                });
                resolve(messages);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ChatbotService.prototype.callBotAPI = function (message, id_usuario) {
        var _this = this;
        var token = "TFJ52Y4QJQFUMIOTLVGMYNI2TAXQYFSY";
        var apiURL = 'https://api.wit.ai/message?v=20171118&q=' + message;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL, options)
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                var entities = res.json().entities;
                var response;
                if (entities.intent) {
                    var intent = entities.intent[0].value;
                    response = _this.intentDispatcher(intent, entities, id_usuario);
                }
                else {
                    response = _this.buildSorryString();
                }
                resolve(response);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ChatbotService.prototype.buildSorryString = function () {
        var n = this.random(1, 3);
        var mes = "";
        switch (n) {
            case 1:
                mes = "Sorry, couldn't catch that!";
                break;
            case 2:
                mes = "Sorry, could you rephrase that?";
                break;
            case 3:
                mes = "Ummm... please say again?";
                break;
        }
        return mes;
    };
    /**
     * Manages the bot API response according to intent
     */
    ChatbotService.prototype.intentDispatcher = function (intent, entities, id_usuario) {
        if (intent == "add_city" || intent == "remove_city") {
            return this.botAddRemoveCityHandler(intent, entities, id_usuario);
        }
        if (intent == "query_weather") {
            return this.botWeatherQueriesHandler(intent, entities, id_usuario);
        }
    };
    ChatbotService.prototype.todayToString = function () {
        var x = new Date();
        return x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate() + "T00:00:00.000-06:00";
    };
    ChatbotService.prototype.calculateDifferenceInDaysBetweenDates = function (initDate, finalDate) {
        var timeDifferenceEpoch = Math.abs(new Date(initDate).getTime() - new Date(finalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference + 1;
    };
    ChatbotService.prototype.buildAbbreviatedDate = function (date) {
        var abbreviatedMonthMap = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
        };
        var d = new Date(date);
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate() + 1) + ", " + d.getFullYear();
    };
    ChatbotService.prototype.botWeatherQueriesHandler = function (intent, entities, id_usuario) {
        var _this = this;
        console.log(entities);
        var min_temp = (entities.min_temp != undefined);
        var max_temp = (entities.max_temp != undefined);
        var location = "";
        var datetime = { grain: "", value: "" };
        if (entities.datetime != undefined) {
            datetime = entities.datetime[0];
        }
        else {
            datetime.grain = "day";
            datetime.value = this.todayToString();
        }
        var ent_location = entities.location[0];
        if (ent_location) {
            location = ent_location.value;
        }
        else {
            if (localStorage.currentLocation != "") {
                location = localStorage.currentLocation;
            }
            else {
                return "Sorry could not determine your current location! (Click 'My Location' in the main panel)";
            }
        }
        var diff = this.calculateDifferenceInDaysBetweenDates(this.todayToString().split("T")[0], datetime.value.split("T")[0]);
        if (diff > 7) {
            return "Sorry that date is out of range!";
        }
        return this.forecastService.weatherNextDays(location, diff).then(function (res) {
            console.log("SHELLER");
            console.log(res);
            var forecast = res[res.length - 1];
            if (datetime.grain == "day") {
                if (min_temp || max_temp) {
                    if (min_temp) {
                        return _this.buildDayForecastMinTemp(forecast, location);
                    }
                    else {
                        return _this.buildDayForecastMaxTemp(forecast, location);
                    }
                }
                else {
                    return _this.buildDayForecastString(forecast, location);
                }
            }
            else {
                var hour = parseInt(datetime.value.split("T")[1].substring(0, 2));
                return _this.buildHourForecastString(forecast, location, hour);
            }
        });
    };
    ChatbotService.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ChatbotService.prototype.buildDayForecastMaxTemp = function (forecast, loc) {
        var dayAux = (forecast.dayOfWeek == "Today") ? "" : "on";
        return "A max temperature of " + forecast.tempMax + "C° is expected in " + loc + ", " + dayAux + forecast.dayOfWeek + ", " +
            this.buildAbbreviatedDate(forecast.date);
    };
    ChatbotService.prototype.buildDayForecastMinTemp = function (forecast, loc) {
        var dayAux = (forecast.dayOfWeek == "Today") ? "" : "on";
        return "A min temperature of " + forecast.tempMin + "C° is expected in " + loc + ", " + dayAux + forecast.dayOfWeek + ", " +
            this.buildAbbreviatedDate(forecast.date);
    };
    ChatbotService.prototype.buildDayForecastString = function (forecast, loc) {
        var n = this.random(1, 3);
        var message = "";
        var dayAux = (forecast.dayOfWeek == "Today") ? "" : "On";
        switch (n) {
            case 1:
                message = forecast.dayOfWeek + ", " +
                    this.buildAbbreviatedDate(forecast.date) + ", will be " +
                    forecast.tempAvg + "C°, with a high of " + forecast.tempMax +
                    "C° and a low of " + forecast.tempMin + "C° in " + loc + ". " + this.formatCondition(forecast.conditionString);
                break;
            case 2:
                message = dayAux + forecast.dayOfWeek + ", " +
                    this.buildAbbreviatedDate(forecast.date) + ", " + loc + " will be " +
                    forecast.tempAvg + "C° on average, with a high of " + forecast.tempMax +
                    "C° and a low of " + forecast.tempMin + "C°" + ". " + this.formatCondition(forecast.conditionString);
                break;
            case 3:
                message = loc + " will be " +
                    forecast.tempAvg + "C°, with a high of " + forecast.tempMax +
                    "C° and a low of " + forecast.tempMin + "C° on " + this.buildAbbreviatedDate(forecast.date) + ", " + forecast.dayOfWeek
                    + ". " + this.formatCondition(forecast.conditionString);
                break;
        }
        return message;
    };
    // For emojis
    ChatbotService.prototype.formatCondition = function (condition) {
        var emojiMap = {
            "Partly cloudy": 0x26C5,
            "Overcast": 0x2601,
            "Light rain": 0x2614,
            "Sunny": 0x2600,
            "Mist": 0x2601,
            "Cloudy": 0x2601,
            "Fog": 0x2601,
            "Clear": 0x2600,
            "Light rain shower": 0x2614,
            "Moderate rain at times": 0x2614,
            "Heavy snow": 0x2744,
            "Heavy rain": 0x2614,
            "Patchy rain possible": 0x2614,
            "Light snow": 0x2744,
            "Moderate snow": 0x2744
        };
        var symbol = String.fromCodePoint(emojiMap[condition]);
        return "\nCondition: " + condition + " " + symbol + symbol + symbol;
    };
    ChatbotService.prototype.buildHourForecastString = function (forecast, loc, hour) {
        var hourData = forecast.forecasts[forecast.forecasts.length - 1].hour[hour];
        var temp = hourData.temp_c;
        var h = (hour < 12) ? "AM" : "PM";
        return forecast.dayOfWeek + ", " +
            this.buildAbbreviatedDate(forecast.date) + " " + hour + ":00 " + h + ", will be " +
            temp + "C° on average in " + loc;
    };
    /**
     * Handles a user's bot request to add or remove a city from the favorites list
     * @param intent: what the user pretends to do (add or remove)
     * @param entities: contains the city that wants to be removed
     * @param id_usuario: what user is making the request?
     * @returns {Promise<TResult2|any|any|any|string>}
     */
    ChatbotService.prototype.botAddRemoveCityHandler = function (intent, entities, id_usuario) {
        var _this = this;
        var textResponse = "";
        var location = "";
        if (entities.location) {
            location = entities.location[0].value;
            return this.usersInfoService.retrieveUserInfoById(id_usuario, localStorage.authToken).then(function (data) {
                var userData = data;
                var locationToAdd = data.cities.find(function (c) { return c["name"] == location; });
                var evalClause = (intent == "add_city") ? locationToAdd : !locationToAdd;
                if (evalClause) {
                    textResponse = (intent == "add_city") ?
                        "You already have that city!!" :
                        "Can't find that city in your preferences";
                }
                else {
                    return _this.cityManagerService.retrieveActiveCities().then(function (activeCities) {
                        locationToAdd = activeCities.find(function (city) { return city["name"] == location; });
                        if (locationToAdd) {
                            return _this.cityManagerService.retrieveSearchedCityInfo(locationToAdd["name"]).then(function (cityRes) {
                                var arrAux = [];
                                if (intent == "add_city") {
                                    userData.cities.push({ id: locationToAdd["id"],
                                        name: locationToAdd["name"],
                                        country: locationToAdd["country"] });
                                    arrAux = userData.cities;
                                }
                                else {
                                    arrAux = userData.cities.filter(function (ciudad) { return ciudad["name"] != locationToAdd["name"]; });
                                }
                                var params = {
                                    nombre: userData.name,
                                    apellido: userData.lastname,
                                    email: userData.email,
                                    password: userData.password,
                                    usuario: userData.username,
                                    ciudades: arrAux
                                };
                                return _this.usersInfoService.updateUserInfo(id_usuario, params, localStorage.authToken).then(function (usuarioActualizado) {
                                    textResponse = (intent == "add_city") ?
                                        (locationToAdd["name"] + " was added to your favorite cities!") :
                                        (locationToAdd["name"] + " was removed from your list of cities.");
                                    if (intent == "add_city") {
                                        localStorage.cityAddedToFavoritesObj = JSON.stringify({ city: locationToAdd["name"] });
                                        localStorage.cityAddedToFavorites = 1;
                                    }
                                    else {
                                        localStorage.cityRemovedFromFavoritesObj = JSON.stringify({ city: locationToAdd["name"] });
                                        localStorage.cityRemovedFromFavorites = 1;
                                    }
                                    return textResponse;
                                });
                            });
                        }
                        else {
                            return "That place is not in active cities! Please contact an admin to add it!";
                        }
                    });
                }
                return textResponse;
            });
        }
    };
    return ChatbotService;
}());
ChatbotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__usersInfoService__["a" /* UsersInfoService */],
        __WEBPACK_IMPORTED_MODULE_3__cityManagerService__["b" /* CityManagerService */],
        __WEBPACK_IMPORTED_MODULE_4__forecastService__["a" /* ForecastService */]])
], ChatbotService);

//# sourceMappingURL=chatbotService.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForecastsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_myForecastService__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forecastDetail_forecastDetail__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyForecastsPage = (function () {
    /**
     * Component constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     */
    function MyForecastsPage(navCtrl, navParams, myForecastService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myForecastService = myForecastService;
        this.modalCtrl = modalCtrl;
        this.forecasts = [];
        this.userId = localStorage.idUsuario;
        console.log(this.userId);
        this.buildForecastList();
        this.checkSavedForecastChanges();
    }
    MyForecastsPage.prototype.checkSavedForecastChanges = function () {
        var _this = this;
        setInterval(function () {
            if (localStorage.newForecastSaved == 1) {
                _this.buildForecastList();
                localStorage.newForecastSaved = 0;
            }
        }, 1000);
    };
    MyForecastsPage.prototype.buildForecastList = function () {
        var _this = this;
        this.myForecastService.getForecastList(this.userId).then(function (data) {
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push(new __WEBPACK_IMPORTED_MODULE_2__services_myForecastService__["a" /* MyForecast */](data[i].cityName, data[i].condition, _this.buildLabelFromString(data[i].startDate), _this.buildLabelFromString(data[i].endDate)));
            }
            _this.forecasts = arr;
        });
    };
    MyForecastsPage.prototype.buildLabelFromString = function (date) {
        var abbreviatedMonthMap = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
        };
        var d = new Date(date);
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate() + 1);
    };
    MyForecastsPage.prototype.showForecastModal = function (event) {
        var _this = this;
        var currentRow = __WEBPACK_IMPORTED_MODULE_4_jquery__(event.currentTarget);
        var arrForecast = [];
        __WEBPACK_IMPORTED_MODULE_4_jquery__["each"](currentRow.children(), function () {
            arrForecast.push((__WEBPACK_IMPORTED_MODULE_4_jquery__(this).text().trim()));
        });
        var forecastModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__forecastDetail_forecastDetail__["a" /* ForecastDetail */], { forecast: arrForecast });
        forecastModal.onDidDismiss(function (datos) {
            localStorage.citySelectedFromForecastList = 1;
            if (datos.show_graph) {
                _this.navCtrl.parent.select(1);
            }
        });
        forecastModal.present();
    };
    return MyForecastsPage;
}());
MyForecastsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myforecasts',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/myforecasts.html"*/'<!--User saved forecasts Tab Component HTML Structure-->\n<ion-content>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>My saved forecasts</ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n            <ion-grid>\n                <ion-row>\n                        <ion-col ><b>City</b></ion-col>\n                        <ion-col ><b>Condition</b></ion-col>\n                        <ion-col class="temp"><b>Init date</b></ion-col>\n                        <ion-col class="temp"><b>Final date</b></ion-col>\n                </ion-row>\n                <ion-row *ngFor="let forecast of forecasts" class="row-myforecasts" (click)="showForecastModal($event)">\n\n                    <ion-col class="city-forecast">\n                        {{forecast.cityName}}\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-icon name={{forecast.condition}} class="icon-forecasts"></ion-icon>\n                    </ion-col>\n\n                    <ion-col>\n                        {{forecast.startDate}}\n\n                    </ion-col>\n\n                    <ion-col>\n                        {{forecast.endDate}}\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n    </ion-content>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/myforecasts.html"*/
    })
    /**
     * Component that contains the user's saved forecasts
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_myForecastService__["b" /* MyForecastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], MyForecastsPage);

//# sourceMappingURL=myforecasts.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forecastService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForecastDetail = (function () {
    function ForecastDetail(params, viewCtrl, forecastService) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.forecastService = forecastService;
        this.forecast = [];
        this.forecast = params.get('forecast');
        var date1 = this.buildLabelFromString(this.forecast[2]);
        var date2 = this.buildLabelFromString(this.forecast[3]);
        this.diffDays = this.calculateDifferenceInDaysBetweenDates(date1, date2);
        this.forecastService.weatherNextDays(this.forecast[0], this.diffDays).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].dayOfWeek = _this.buildAbbreviatedDate(data[i].date);
            }
            _this.forecasts = data;
        });
    }
    ForecastDetail.prototype.buildAbbreviatedDate = function (date) {
        var abbreviatedMonthMap = {
            0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
        };
        var d = new Date(date);
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate() + 1);
    };
    ForecastDetail.prototype.calculateDifferenceInDaysBetweenDates = function (initDate, finalDate) {
        var timeDifferenceEpoch = Math.abs(new Date(initDate).getTime() - new Date(finalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference + 1;
    };
    ForecastDetail.prototype.buildLabelFromString = function (date) {
        var monthMap = {
            "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
        };
        var year = (new Date()).getFullYear();
        var month = monthMap[date.split(" ")[0]];
        var day = date.split(" ")[1];
        var dayCorrect = parseInt(day) < 10 ? "0" + day : day;
        return year + "-" + month + "-" + dayCorrect;
    };
    ForecastDetail.prototype.showGraph = function () {
        var obj = {
            city: this.forecast[0],
            days: this.diffDays
        };
        localStorage.selectedForecastForGraph = JSON.stringify(obj);
        this.viewCtrl.dismiss({ show_graph: true });
    };
    ForecastDetail.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ a: "b" });
    };
    return ForecastDetail;
}());
ForecastDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forecastDetail',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/forecastDetail/forecastDetail.html"*/'<ion-content>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>Forecast detail</ion-title>\n            <button ion-button small color="danger" (click)="dismiss()">\n                Close\n            </button>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-grid class="grid-forecast-detail">\n        <ion-row>\n            <ion-col ><b>Date</b></ion-col>\n            <ion-col ><b>Condition</b></ion-col>\n            <ion-col class="temp"><b>Max T</b></ion-col>\n            <ion-col class="temp"><b>Min T</b></ion-col>\n        </ion-row>\n        <ion-row *ngFor="let day of forecasts" class="row-forecasts">\n            <ion-col class="col-day-of-week-forecasts">{{day.dayOfWeek}}</ion-col>\n            <ion-col><ion-icon name={{day.condition}} class="icon-forecasts"></ion-icon></ion-col>\n            <ion-col>{{day.tempMax}} <span class="centigrade-symbol">°C</span></ion-col>\n            <ion-col>{{day.tempMin}} <span class="centigrade-symbol">°C</span></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button ion-button outline class="show-graph" (click)="showGraph()">Show graph</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/forecastDetail/forecastDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__services_forecastService__["a" /* ForecastService */]])
], ForecastDetail);

//# sourceMappingURL=forecastDetail.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usersInfoService__ = __webpack_require__(47);
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
    /**
     *
     * @param navCtrl: application navigation controller to find your way between views
     * @param authorizationService: service that provides users with authorization tokens once registered
     * @param formBuilder: angular utility for form validation
     * Register form component basic constructor
     */
    function RegisterPage(navCtrl, authorizationService, userInfoService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.name = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmpassword = "";
        this.erroList = [];
    }
    RegisterPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Thanks for registering! You can now log in.',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        var navTransition = alert.dismiss();
                        navTransition.then(function () {
                            _this.navCtrl.pop();
                        });
                        return false;
                    }
                }]
        });
        alert.present();
    };
    RegisterPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: this.prettyPrintErrorList(),
            showCloseButton: true,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.prettyPrintErrorList = function () {
        var text = "Please check the following errors:\n";
        for (var i = 0; i < this.erroList.length; i++) {
            text += " *" + this.erroList[i] + "\n";
        }
        return text;
    };
    /**
     * Form fields will be validated and sent to backend for user final registration
     */
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.erroList = [];
        var messageEmptyFields = "You have empty fields!";
        this.addToErrorList(this.validateText(this.name));
        this.addToErrorList(this.validateText(this.lastname));
        this.addToErrorList(this.validateText(this.username));
        this.addToErrorList(this.validateText(this.email));
        this.addToErrorList(this.validateText(this.password));
        this.addToErrorList(this.validateText(this.confirmpassword));
        this.addToErrorList(this.validateEmail(this.email));
        this.addToErrorList(this.checkPasswordsSame(this.password, this.confirmpassword));
        this.addToErrorList(this.checkPasswordLength(this.password, this.confirmpassword));
        if (this.erroList.length == 0) {
            var usuario = new __WEBPACK_IMPORTED_MODULE_3__services_usersInfoService__["b" /* Usuario */](this.name, this.lastname, this.username, this.email, this.password, [{}]);
            this.userInfoService.createNewUser(usuario).then(function (res) {
                console.log(res);
                _this.presentAlert();
            });
        }
        else {
            var a = this.erroList.filter(function (m) { return m == messageEmptyFields; });
            if (a.length > 0) {
                this.erroList = this.erroList.filter(function (m) { return m != messageEmptyFields; });
                this.erroList.push(messageEmptyFields);
            }
            this.presentToast();
        }
    };
    RegisterPage.prototype.checkPasswordsSame = function (a, b) {
        if (a == b) {
            return "ok";
        }
        else {
            return "Passwords don't match";
        }
    };
    RegisterPage.prototype.checkPasswordLength = function (a, b) {
        if (a.length > 30 || b.length > 30) {
            return "Password too long (max 30)";
        }
        else {
            if (a.length < 8 || b.length < 8) {
                return "Password too short (min 10)";
            }
            else {
                return "ok";
            }
        }
    };
    RegisterPage.prototype.validateText = function (text) {
        if (text != null && text != "") {
            return "ok";
        }
        else {
            return "You have empty fields!";
        }
    };
    RegisterPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return "ok";
        }
        else {
            return "Invalid email!";
        }
    };
    RegisterPage.prototype.addToErrorList = function (text) {
        if (text != "ok")
            this.erroList.push(text);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/'<!--Register Componente HTML Structure-->\n<ion-content>\n    <ion-list no-lines>\n        <ion-grid>\n\n            <ion-row>\n                <ion-col col-12 class="titulo_bot_cast">\n                    <b>Botcast</b>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12 class="botcast_icon">\n                    <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12>\n                    <form>\n                        <ion-item>\n                            <ion-input [(ngModel)]="name" name="name" placeholder="Name(s)" type="text"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input [(ngModel)]="lastname" name="lastname" placeholder="Lastname(s)" type="text"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input [(ngModel)]="email" name="email" placeholder="E-mail" type="text"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input [(ngModel)]="username" name="username" placeholder="Username" type="text"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input [(ngModel)]="password" name="password" placeholder="Password" type="password"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input [(ngModel)]="confirmpassword"  name="confirmpassword" placeholder="Confirm password"type="password"></ion-input>\n                        </ion-item>\n                    </form>\n\n                    <button ion-button class="botonRegistrarse" full color="primary" (click)="register()">Create Account!</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */],
        __WEBPACK_IMPORTED_MODULE_3__services_usersInfoService__["a" /* UsersInfoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(33);
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









var Stat = (function () {
    function Stat(users, activeUsers, maxUsers, favoriteCity) {
        this.users = users;
        this.activeUsers = activeUsers;
        this.maxUsers = maxUsers;
        this.favoriteCity = favoriteCity;
    }
    return Stat;
}());

var StatService = (function () {
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    function StatService(http) {
        this.http = http;
        this.apiRoot = '../assets/json/stats/stats.json';
    }
    StatService.prototype.retrieveStats = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var stats = [];
                var statJson = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
                console.log(statJson);
                __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](statJson, function (i, stat) {
                    stats.push(new Stat(stat.users, stat.activeUsers, stat.maxUsers, stat.favoriteCity));
                });
                resolve(stats);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return StatService;
}());
StatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StatService);

//# sourceMappingURL=statsService.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboardService__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(223);
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




var AdminDashboard = (function () {
    function AdminDashboard(visitorService, seachedService, navCtrl) {
        var _this = this;
        this.visitorService = visitorService;
        this.seachedService = seachedService;
        this.navCtrl = navCtrl;
        this.lineChartData = [{ data: [0, 0, 0, 0, 0, 0], label: 'Series A' }];
        this.lineChartLabels = ['0', '0', '0', '0', '0', '0'];
        /**
         *The following objects correspond to the graph configuration arguments, including label format, colors and label display locations, among others.
         */
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: '# of visits'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
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
        this.tops = [];
        this.visitors = [];
        seachedService.retrieveInfo().then(function (data) { return _this.tops = data; });
        //visitorService.retrieveInfo().then(data=>this.visitors=data);
        visitorService.retrieveInfo().then(function (data) {
            _this.lineChartData = [{ data: _this.getVisits(data), label: "Monthly visits" }];
            _this.lineChartLabels = _this.buildLabelArray(data);
            _this.reloadChart();
        });
    }
    /**
     * Makes a graph full state refresh whenever it's needed
     * This includes the data buffer and axes labels
     */
    AdminDashboard.prototype.reloadChart = function () {
        if (this.chart !== undefined) {
            this.chart.chart.destroy();
            this.chart.chart = 0;
            this.chart.labels = this.lineChartLabels;
            this.chart.datasets = this.lineChartData;
            this.chart.ngOnInit();
        }
    };
    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param visitors: takes in a Visitors array and maps it it to a typical JS array
     * @returns {number,number,number,number,number]}: array of number of visits according to Json data
     */
    AdminDashboard.prototype.getVisits = function (visitors) {
        return visitors.map(function (e) { return e.visits; });
    };
    /**
     * Auxiliary function for filling the label buffers in the correct format
     * @param visitors: takes in a Visitors array, takes its months and build the label data buffer
     * @returns {[string,string,string,string,string]}: array of months as strings in a correct format
     */
    AdminDashboard.prototype.buildLabelArray = function (visitors) {
        return visitors.map(function (e) { return e.month; });
    };
    return AdminDashboard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"])
], AdminDashboard.prototype, "chart", void 0);
AdminDashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/dashboard/dashboard.html"*/'<!--Administrator Dashoboard Tab Component HTML Structure-->\n<ion-content >\n  <navbar></navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div>\n            <h2>Top Searched Cities</h2>\n            <ion-grid>\n              <ion-row >\n                <ion-col><h4>City</h4></ion-col>\n                <ion-col><h4>Visits</h4></ion-col>\n              </ion-row>\n              <ion-row *ngFor="let top of tops" class="row-visits">\n                <ion-col>{{top.name}}</ion-col>\n                <ion-col>{{top.searches}}</ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n\n        </ion-col>\n        <ion-col>\n\n          <h2>Monthly Visitors</h2>\n          <div class="container-graph">\n            <canvas baseChart width="350" height="250"  #baseChart="base-chart"\n              [datasets]="lineChartData"\n              [labels]="lineChartLabels"\n              [options]="lineChartOptions"\n              [colors]="lineChartColors"\n              [legend]="lineChartLegend"\n              [chartType]="lineChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n </ion-content> \n\n      \n  \n<!-- Monthly visitors grid\n  <div>\n    <h2>Monthly Visitors</h2>\n    <ion-grid>\n      <ion-row>\n        <ion-col><h4>Month</h4></ion-col>\n        <ion-col><h4>Visits</h4></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let visit of visitors">\n        <ion-col>{{visit.month}}</ion-col>\n        <ion-col>{{visit.visits}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n-->\n  \n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/dashboard/dashboard.html"*/
    })
    /**
     * Admin main dashboard tab constructor
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_dashboardService__["b" /* VisitorService */], __WEBPACK_IMPORTED_MODULE_2__services_dashboardService__["a" /* SearchedService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdminDashboard);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminCities = (function () {
    function AdminCities(cityManagerService, navCtrl) {
        var _this = this;
        this.cityManagerService = cityManagerService;
        this.navCtrl = navCtrl;
        this.cities = [];
        this.citiesSearch = [];
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.removeFromActiveCities = function (e) {
            var _this = this;
            var idCityToDelete = __WEBPACK_IMPORTED_MODULE_5_jquery__(e.currentTarget).parent().siblings().children("input").val();
            this.cityManagerService.removeCity(idCityToDelete).then(function (res) {
                console.log(res.message);
                //TODO: display modal window, city erased or something
                _this.cities = _this.cities.filter(function (city) {
                    return city.id !== idCityToDelete;
                });
            });
        };
        this.addToActiveCities = function (e) {
            var _this = this;
            var arr = [];
            __WEBPACK_IMPORTED_MODULE_5_jquery__(e.currentTarget).parent().siblings().each(function () {
                arr.push(__WEBPACK_IMPORTED_MODULE_5_jquery__(this).text());
            });
            this.cityManagerService.addToActiveCitiesService(arr[0].split(",")[0], arr[0].split(",")[1], arr[1]).then(function (res) {
                _this.cities.push(new __WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__["a" /* ActiveCity */](res.id, arr[0].split(",")[0], arr[0].split(",")[1], arr[1], true));
            });
        };
        cityManagerService.retrieveActiveCities().then(function (data) { return _this.cities = data; });
    }
    AdminCities.prototype.ngOnInit = function () {
        var _this = this;
        this.subject.debounceTime(500).subscribe(function (citySearch) {
            _this.handleSearch(citySearch);
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#ion-grid-search-results-container").hide();
    };
    AdminCities.prototype.onKeyUp = function (citySearch) {
        this.subject.next(citySearch);
    };
    AdminCities.prototype.handleSearch = function (searchedCity) {
        var _this = this;
        if (searchedCity == "") {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#ion-grid-search-results-container").hide();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#ion-grid-search-results-container").show();
        }
        this.cityManagerService.retrieveSearchedCityInfo(searchedCity).then(function (data) { return _this.citiesSearch = data; });
    };
    return AdminCities;
}());
AdminCities = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adminCities',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/cities/cities.html"*/'<!--Administrator City Tab Component HTML Structure-->\n<ion-content>\n    <navbar></navbar>\n    <div>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <ion-searchbar\n              placeholder = "Search by City"\n              id="citySearch" #citySearch\n              (keyup)="onKeyUp(citySearch.value)" >\n            </ion-searchbar></ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <div>\n        <div id="ion-grid-search-results-container">\n            <h3 class="search-results-cities">Search results</h3>\n        <ion-grid>\n            <ion-row >\n                <ion-col><h4>City, province</h4></ion-col>\n                <ion-col><h4>Country</h4></ion-col>\n                <ion-col></ion-col>\n            </ion-row>\n            <ion-row *ngFor="let city of citiesSearch" class="row-cities">\n                <ion-col>{{city.city+", "+city.status}}</ion-col>\n                <ion-col>{{city.country}}</ion-col>\n                <ion-col><button ion-button icon-only clear item-right class="button-add-city" (click)="addToActiveCities($event)"><ion-icon name="add"></ion-icon></button></ion-col>\n            </ion-row>\n        </ion-grid>\n        </div>\n        <div id="ion-grid-active-cities">\n        <h3 class="search-results-cities">Active cities</h3>\n        <ion-grid >\n            <ion-row>\n                <ion-col><h4>City</h4></ion-col>\n                <ion-col><h4>Country</h4></ion-col>\n                <ion-col><h4>Status</h4></ion-col>\n                <ion-col><h4></h4></ion-col>\n            </ion-row>\n            <ion-row *ngFor="let city of cities" class="row-cities">\n                <ion-col><input type="hidden" value={{city.id}} />{{city.name+", "+city.province}}</ion-col>\n                <ion-col>{{city.country}}</ion-col>\n                <ion-col>{{city.active}}</ion-col>\n                <ion-col>\n                    <button ion-button icon-only clear item-right (click)="removeFromActiveCities($event)"><ion-icon name="close-circle"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        </div>\n    </div>\n</ion-content> \n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/cities/cities.html"*/
    })
    /**
     * Admin cities tab constructor
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__["b" /* CityManagerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdminCities);

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMyAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminMyAccount = (function () {
    function AdminMyAccount(myInfo, navCtrl) {
        var _this = this;
        this.myInfo = myInfo;
        this.navCtrl = navCtrl;
        this.info = [];
        myInfo.retrieveUserInfo().then(function (data) { return _this.info = data; });
    }
    return AdminMyAccount;
}());
AdminMyAccount = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myaccount',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/myaccount/myaccount.html"*/'<!--Administrator Account Detail Tab Component HTML Structure-->\n<ion-content>\n\n    <navbar></navbar>\n    <div>\n\n\n        <ion-grid>\n            <ion-title><h2>Account information</h2></ion-title>\n            <ion-col *ngFor="let x of info; let i = index" class="profileInfo">\n                <ion-row>\n                <ion-col *ngIf="i==0">\n                    <ion-row>\n                        <ion-col class="label-campo-admin2">Username</ion-col>\n                        <ion-col class="campo-nombre-usuario">{{x.username}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="label-campo-admin">Password</ion-col>\n                        <ion-col><ion-input placeholder="Type current password" clearInput></ion-input></ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="label-campo-admin">New password</ion-col>\n                        <ion-col><ion-input placeholder="Type new password" clearInput></ion-input></ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="label-campo-admin">Confirm new password</ion-col>\n                        <ion-col><ion-input placeholder="Confirm..." clearInput></ion-input></ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-buttons class="editButton">\n                        <button ion-button (click)="addMarker()" >Save changes</button>\n                        </ion-buttons>\n                    </ion-row>\n                </ion-col>\n                </ion-row>\n            </ion-col>\n\n        </ion-grid>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/myaccount/myaccount.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdminMyAccount);

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statsService__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminStats = (function () {
    function AdminStats(statService, navCtrl) {
        var _this = this;
        this.statService = statService;
        this.navCtrl = navCtrl;
        this.stats = [];
        statService.retrieveStats().then(function (data) { return _this.stats = data; });
    }
    AdminStats.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    AdminStats.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return AdminStats;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], AdminStats.prototype, "mapElement", void 0);
AdminStats = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stats',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/stats/stats.html"*/'<!--Administrator Statistics Tab Component HTML Structure-->\n\n<ion-content>\n    <navbar></navbar>\n\n    <ion-grid class="ion-grid-stats">\n        <ion-row class="mapFrame">\n            <iframe\n            width="600"\n            height="450"\n            frameborder="0" style="border:0"\n            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD0tHxsyV4X0BNu3WarQAts8gy8_Q2dh9k&q=center=-33.8569,151.2152\n            &zoom=18" allowfullscreen>\n            </iframe>\n\n        </ion-row>\n        <ion-row>\n            <ion-buttons end class="endB">\n                <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n            </ion-buttons>\n        </ion-row>\n        <ion-row >\n                <ion-col><h4>Registered Users</h4></ion-col>\n                <ion-col><h4>Active Users</h4></ion-col>\n                <ion-col><h4>Max Users Streak</h4></ion-col>\n                <ion-col><h4>Favorite City</h4></ion-col>\n              </ion-row>\n        <ion-row *ngFor="let stat of stats" class="row-stats">\n            <ion-col class="stat-data-column">\n                {{stat.users}}\n            </ion-col>\n\n            <ion-col class="stat-data-column">\n                {{stat.activeUsers}}\n            </ion-col>\n\n            <ion-col class="stat-data-column">\n                {{stat.maxUsers}}\n            </ion-col>\n\n            <ion-col class="stat-data-column">\n                {{stat.favoriteCity}}\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/stats/stats.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_statsService__["a" /* StatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdminStats);

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usersInfoService__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUsers = (function () {
    function AdminUsers(usersInfoService, navCtrl) {
        var _this = this;
        this.usersInfoService = usersInfoService;
        this.navCtrl = navCtrl;
        this.information = [];
        usersInfoService.retrieveInfo().then(function (data) { return _this.information = data; });
    }
    return AdminUsers;
}());
AdminUsers = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adminUsers',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/users/users.html"*/'<!--Administrator User Control Tab Component HTML Structure-->\n\n<ion-content>\n  <navbar></navbar>\n  <div>\n    <ion-grid class="searchBarGrid">\n      <ion-row>\n        <ion-col><ion-searchbar \n          placeholder="Search by User"\n          [(ngModel)]="myInput"\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n        </ion-searchbar></ion-col>\n        <ion-col> <button ion-button icon-only clear item-right (click)="remove()"><ion-icon name="add"></ion-icon></button></ion-col>  \n      </ion-row>\n    </ion-grid>\n  </div>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col><h4>Name</h4></ion-col>\n        <ion-col><h4>Age</h4></ion-col>\n        <ion-col><h4>Username</h4></ion-col>\n        <ion-col><h4>Email</h4></ion-col>\n        <ion-col><h4># of Logins</h4></ion-col>\n        <ion-col><h4>Last Login</h4></ion-col>\n        <ion-col><h4>Last Location</h4></ion-col>\n        <ion-col><h4></h4></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let info of information" class="row-users">\n        <ion-col>{{info.name}}</ion-col>\n        <ion-col>{{info.age}}</ion-col>\n        <ion-col>{{info.username}}</ion-col>\n        <ion-col>{{info.email}}</ion-col>\n        <ion-col>{{info.logins}}</ion-col>\n        <ion-col>{{info.lastlogin}}</ion-col>\n        <ion-col>{{info.lastlocation}}</ion-col>\n        <ion-col>\n          <button ion-button icon-only clear item-right (click)="remove()"><ion-icon name="close-circle"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n </ion-content> \n\n\n\n\n\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/users/users.html"*/
    })
    /**
     * Admin users tab constructor
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_usersInfoService__["a" /* UsersInfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdminUsers);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_principal_addCity_addCity__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_myforecasts_forecastDetail_forecastDetail__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_citiesService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_forecastService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_graphsService__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_chatbotService__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_geolocationService__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_usersInfoService__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cityManagerService__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_dashboardService__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_myForecastService__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_statsService__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_graficas_graficas__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chatbot_chatbot__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myforecasts_myforecasts__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_admin_navbar_navbar__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_admin_dashboard_dashboard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_cities_cities__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_admin_myaccount_myaccount__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_admin_stats_stats__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_admin_users_users__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_geolocation__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_native_geocoder__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



;



































/**
 * Register components, import plugins and angular core utilities, Register providers for services
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_principal_addCity_addCity__["a" /* AddCityModal */],
            __WEBPACK_IMPORTED_MODULE_20__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_myforecasts_myforecasts__["a" /* MyForecastsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_25__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_26__login_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_admin_dashboard_dashboard__["a" /* AdminDashboard */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_navbar_navbar__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_cities_cities__["a" /* AdminCities */],
            __WEBPACK_IMPORTED_MODULE_32__pages_admin_users_users__["a" /* AdminUsers */],
            __WEBPACK_IMPORTED_MODULE_30__pages_admin_myaccount_myaccount__["a" /* AdminMyAccount */],
            __WEBPACK_IMPORTED_MODULE_31__pages_admin_stats_stats__["a" /* AdminStats */],
            __WEBPACK_IMPORTED_MODULE_8__pages_myforecasts_forecastDetail_forecastDetail__["a" /* ForecastDetail */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_principal_addCity_addCity__["a" /* AddCityModal */],
            __WEBPACK_IMPORTED_MODULE_20__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_myforecasts_myforecasts__["a" /* MyForecastsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_25__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_26__login_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_admin_dashboard_dashboard__["a" /* AdminDashboard */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_navbar_navbar__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_cities_cities__["a" /* AdminCities */],
            __WEBPACK_IMPORTED_MODULE_32__pages_admin_users_users__["a" /* AdminUsers */],
            __WEBPACK_IMPORTED_MODULE_30__pages_admin_myaccount_myaccount__["a" /* AdminMyAccount */],
            __WEBPACK_IMPORTED_MODULE_31__pages_admin_stats_stats__["a" /* AdminStats */],
            __WEBPACK_IMPORTED_MODULE_8__pages_myforecasts_forecastDetail_forecastDetail__["a" /* ForecastDetail */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__services_citiesService__["b" /* MyCitiesService */],
            __WEBPACK_IMPORTED_MODULE_10__services_forecastService__["a" /* ForecastService */],
            __WEBPACK_IMPORTED_MODULE_11__services_graphsService__["a" /* GraphsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_chatbotService__["a" /* ChatbotService */],
            __WEBPACK_IMPORTED_MODULE_13__services_authService__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_15__services_usersInfoService__["a" /* UsersInfoService */],
            __WEBPACK_IMPORTED_MODULE_16__services_cityManagerService__["b" /* CityManagerService */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_14__services_geolocationService__["a" /* GeolocationService */],
            __WEBPACK_IMPORTED_MODULE_17__services_dashboardService__["a" /* SearchedService */],
            __WEBPACK_IMPORTED_MODULE_17__services_dashboardService__["b" /* VisitorService */],
            __WEBPACK_IMPORTED_MODULE_18__services_myForecastService__["b" /* MyForecastService */],
            __WEBPACK_IMPORTED_MODULE_19__services_statsService__["a" /* StatService */],
            { provide: { ErrorHandler: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], LocationStrategy: __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */] }, useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotCast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_login__ = __webpack_require__(120);
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
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return BotCast;
}());
BotCast = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/app/app.html"*/
    })
    /**
     * Initialize application, register platform and aux services
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], BotCast);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 230,
	"./af.js": 230,
	"./ar": 231,
	"./ar-dz": 232,
	"./ar-dz.js": 232,
	"./ar-kw": 233,
	"./ar-kw.js": 233,
	"./ar-ly": 234,
	"./ar-ly.js": 234,
	"./ar-ma": 235,
	"./ar-ma.js": 235,
	"./ar-sa": 236,
	"./ar-sa.js": 236,
	"./ar-tn": 237,
	"./ar-tn.js": 237,
	"./ar.js": 231,
	"./az": 238,
	"./az.js": 238,
	"./be": 239,
	"./be.js": 239,
	"./bg": 240,
	"./bg.js": 240,
	"./bn": 241,
	"./bn.js": 241,
	"./bo": 242,
	"./bo.js": 242,
	"./br": 243,
	"./br.js": 243,
	"./bs": 244,
	"./bs.js": 244,
	"./ca": 245,
	"./ca.js": 245,
	"./cs": 246,
	"./cs.js": 246,
	"./cv": 247,
	"./cv.js": 247,
	"./cy": 248,
	"./cy.js": 248,
	"./da": 249,
	"./da.js": 249,
	"./de": 250,
	"./de-at": 251,
	"./de-at.js": 251,
	"./de-ch": 252,
	"./de-ch.js": 252,
	"./de.js": 250,
	"./dv": 253,
	"./dv.js": 253,
	"./el": 254,
	"./el.js": 254,
	"./en-au": 255,
	"./en-au.js": 255,
	"./en-ca": 256,
	"./en-ca.js": 256,
	"./en-gb": 257,
	"./en-gb.js": 257,
	"./en-ie": 258,
	"./en-ie.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es.js": 261,
	"./et": 263,
	"./et.js": 263,
	"./eu": 264,
	"./eu.js": 264,
	"./fa": 265,
	"./fa.js": 265,
	"./fi": 266,
	"./fi.js": 266,
	"./fo": 267,
	"./fo.js": 267,
	"./fr": 268,
	"./fr-ca": 269,
	"./fr-ca.js": 269,
	"./fr-ch": 270,
	"./fr-ch.js": 270,
	"./fr.js": 268,
	"./fy": 271,
	"./fy.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./gom-latn": 274,
	"./gom-latn.js": 274,
	"./he": 275,
	"./he.js": 275,
	"./hi": 276,
	"./hi.js": 276,
	"./hr": 277,
	"./hr.js": 277,
	"./hu": 278,
	"./hu.js": 278,
	"./hy-am": 279,
	"./hy-am.js": 279,
	"./id": 280,
	"./id.js": 280,
	"./is": 281,
	"./is.js": 281,
	"./it": 282,
	"./it.js": 282,
	"./ja": 283,
	"./ja.js": 283,
	"./jv": 284,
	"./jv.js": 284,
	"./ka": 285,
	"./ka.js": 285,
	"./kk": 286,
	"./kk.js": 286,
	"./km": 287,
	"./km.js": 287,
	"./kn": 288,
	"./kn.js": 288,
	"./ko": 289,
	"./ko.js": 289,
	"./ky": 290,
	"./ky.js": 290,
	"./lb": 291,
	"./lb.js": 291,
	"./lo": 292,
	"./lo.js": 292,
	"./lt": 293,
	"./lt.js": 293,
	"./lv": 294,
	"./lv.js": 294,
	"./me": 295,
	"./me.js": 295,
	"./mi": 296,
	"./mi.js": 296,
	"./mk": 297,
	"./mk.js": 297,
	"./ml": 298,
	"./ml.js": 298,
	"./mr": 299,
	"./mr.js": 299,
	"./ms": 300,
	"./ms-my": 301,
	"./ms-my.js": 301,
	"./ms.js": 300,
	"./my": 302,
	"./my.js": 302,
	"./nb": 303,
	"./nb.js": 303,
	"./ne": 304,
	"./ne.js": 304,
	"./nl": 305,
	"./nl-be": 306,
	"./nl-be.js": 306,
	"./nl.js": 305,
	"./nn": 307,
	"./nn.js": 307,
	"./pa-in": 308,
	"./pa-in.js": 308,
	"./pl": 309,
	"./pl.js": 309,
	"./pt": 310,
	"./pt-br": 311,
	"./pt-br.js": 311,
	"./pt.js": 310,
	"./ro": 312,
	"./ro.js": 312,
	"./ru": 313,
	"./ru.js": 313,
	"./sd": 314,
	"./sd.js": 314,
	"./se": 315,
	"./se.js": 315,
	"./si": 316,
	"./si.js": 316,
	"./sk": 317,
	"./sk.js": 317,
	"./sl": 318,
	"./sl.js": 318,
	"./sq": 319,
	"./sq.js": 319,
	"./sr": 320,
	"./sr-cyrl": 321,
	"./sr-cyrl.js": 321,
	"./sr.js": 320,
	"./ss": 322,
	"./ss.js": 322,
	"./sv": 323,
	"./sv.js": 323,
	"./sw": 324,
	"./sw.js": 324,
	"./ta": 325,
	"./ta.js": 325,
	"./te": 326,
	"./te.js": 326,
	"./tet": 327,
	"./tet.js": 327,
	"./th": 328,
	"./th.js": 328,
	"./tl-ph": 329,
	"./tl-ph.js": 329,
	"./tlh": 330,
	"./tlh.js": 330,
	"./tr": 331,
	"./tr.js": 331,
	"./tzl": 332,
	"./tzl.js": 332,
	"./tzm": 333,
	"./tzm-latn": 334,
	"./tzm-latn.js": 334,
	"./tzm.js": 333,
	"./uk": 335,
	"./uk.js": 335,
	"./ur": 336,
	"./ur.js": 336,
	"./uz": 337,
	"./uz-latn": 338,
	"./uz-latn.js": 338,
	"./uz.js": 337,
	"./vi": 339,
	"./vi.js": 339,
	"./x-pseudo": 340,
	"./x-pseudo.js": 340,
	"./yo": 341,
	"./yo.js": 341,
	"./zh-cn": 342,
	"./zh-cn.js": 342,
	"./zh-hk": 343,
	"./zh-hk.js": 343,
	"./zh-tw": 344,
	"./zh-tw.js": 344
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
webpackContext.id = 465;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Information */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Usuario; });
/* unused harmony export UsuarioLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(16);
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









var Information = (function () {
    /**
     * @param name: name of the user
     * @param age: age of the user
     * @param username: username of the user
     * @param email: email of the user
     * @param logins: number of logins from the user
     * @param lastlogin: Date in which the user last connected
     * @param lastlocation: Last location from where the user connected
     */
    function Information(name, age, username, email, logins, lastlogin, lastlocation) {
        this.name = name;
        this.age = age;
        this.username = username;
        this.email = email;
        this.logins = logins;
        this.lastlogin = lastlogin;
        this.lastlocation = lastlocation;
    }
    return Information;
}());

var Usuario = (function () {
    /**
     * Utility class for standard user information transmission
     * @param name
     * @param lastname
     * @param username
     * @param email
     * @param password
     * @param cities
     */
    function Usuario(name, lastname, username, email, password, cities) {
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cities = cities;
    }
    return Usuario;
}());

var UsuarioLogin = (function () {
    function UsuarioLogin(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    return UsuarioLogin;
}());

var UsersInfoService = (function () {
    function UsersInfoService(http) {
        this.http = http;
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/usersinfo/usersinfo.json';
    }
    // apiRootUsuario:string = 'http://localhost:3000/api/Usuarios';
    UsersInfoService.prototype.createHeaders = function (authToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', authToken);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    UsersInfoService.prototype.retrieveUserInfoById = function (idUsuario, authToken) {
        var _this = this;
        var apiRootUsuario = 'http://localhost:3000/api/UsuariosApp';
        var apiURL = apiRootUsuario + "/" + idUsuario;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL, _this.createHeaders(authToken))
                .toPromise()
                .then(function (res) {
                var user = res.json();
                console.log(user);
                resolve(new Usuario(user.nombre, user.apellido, user.usuario, user.email, null, user.ciudades));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Retrieve user information for admin stat analysis
     * @returns {Promise<T>}
     */
    UsersInfoService.prototype.retrieveInfo = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var infos = [];
                var infosJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                console.log(infosJson);
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](infosJson, function (i, info) {
                    infos.push(new Information(info.name, info.age, info.username, info.email, info.logins, info.lastlogin, info.lastlocation));
                });
                resolve(infos);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Register a new user
     * @param usuario
     * @returns {Promise<T>}
     */
    UsersInfoService.prototype.createNewUser = function (usuario) {
        var _this = this;
        var apiRootUsuario = 'http://localhost:3000/api/UsuariosApp';
        var apiURL = "" + apiRootUsuario;
        console.log(usuario);
        var params = {
            nombre: usuario.name,
            apellido: usuario.lastname,
            email: usuario.email,
            password: usuario.password,
            usuario: usuario.username,
            ciudades: []
        };
        console.log(params);
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiURL, params)
                .toPromise()
                .then(function (res) {
                console.log(res);
                var user = res.json();
                resolve(new UsuarioLogin(user.nombre, user.email, user.id));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Update a user's info
     * @param idUsuario
     * @param params
     * @returns {Promise<T>}
     */
    UsersInfoService.prototype.updateUserInfo = function (idUsuario, params, authToken) {
        var _this = this;
        var apiRootUsuario = 'http://localhost:3000/api/UsuariosApp';
        var apiURL = apiRootUsuario + "/" + idUsuario;
        console.log(apiURL);
        var promise = new Promise(function (resolve, reject) {
            _this.http.patch(apiURL, params, _this.createHeaders(authToken))
                .toPromise()
                .then(function (res) {
                var user = res.json();
                resolve(new Usuario(user.nombre, user.apellido, user.usuario, user.email, null, user.ciudades));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return UsersInfoService;
}());
UsersInfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UsersInfoService);

//# sourceMappingURL=usersInfoService.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GraphDayForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(33);
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








/**
 * Model for information transmission object between this service and the user graph view
 */
var GraphDayForecast = (function () {
    /**
     *
     * @param date: forecast date/historical data point date
     * @param tempMax: that day's maximum temperature
     * @param tempMin: that day's minimum temperature
     * @param condition: that day's weather condition e.g. "Light snow" or "Overcast"
     */
    function GraphDayForecast(date, tempMax, tempMin, condition) {
        this.date = date;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.condition = condition;
    }
    return GraphDayForecast;
}());

/**
 * Service that build the array of weather historical data for the user graphs tab
 */
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GraphsService);

//# sourceMappingURL=graphsService.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cities_cities__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myaccount_myaccount__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavBar = (function () {
    /**
     * Navigation bar constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     * @param appCtrl: application general controler
     */
    function NavBar(navCtrl, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
    }
    /**
     * Event binding function with template.
     * When dashboard button is pressed, change the current view to the dashboard tab
     */
    NavBar.prototype.toDashboardAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* AdminDashboard */], {}, { animate: false });
    };
    /**
     * Event binding function with template.
     * When users admin button is pressed, change the current view to the active users tab
     */
    NavBar.prototype.toUsersAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__users_users__["a" /* AdminUsers */], {}, { animate: false });
    };
    /**
     * Event binding function with template.
     * When statistics button is pressed, change the current view to the statistics tab
     */
    NavBar.prototype.toStatsAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stats_stats__["a" /* AdminStats */], {}, { animate: false });
    };
    /**
     * Event binding function with template.
     * When cities button is pressed, change the current view to the cities tab
     */
    NavBar.prototype.toCitiesAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cities_cities__["a" /* AdminCities */], {}, { animate: false });
    };
    /**
     * Event binding function with template.
     * When admin account button is pressed, change the current view to the admin account tab
     */
    NavBar.prototype.toAccountAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__myaccount_myaccount__["a" /* AdminMyAccount */], {}, { animate: false });
    };
    return NavBar;
}());
NavBar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/navbar/navbar.html"*/'<!--Administrator Navigation Bar Component HTML Structure-->\n<ion-navbar primary class="back">\n\n    <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title class="titulo-barra">\n        Admin portal\n    </ion-title>\n\n    <ion-buttons end >\n        <button ion-button icon-only (click)="toDashboardAdminPage()" class="selected">\n            <ion-item class="bt1">\n                <ion-icon class="icono-boton" name="ios-speedometer-outline" ></ion-icon>\n                Dashboard\n            </ion-item>\n        </button>\n    </ion-buttons>\n\n\n    <ion-buttons end >\n        <button ion-button icon-only (click)="toStatsAdminPage()">\n            <ion-item class="bt2">\n                <ion-icon class="icono-boton" name="ios-pie-outline" ></ion-icon>\n                Stats\n            </ion-item>\n        </button>\n    </ion-buttons>\n\n    <ion-buttons end >\n        <button ion-button icon-only (click)="toUsersAdminPage()">\n            <ion-item class="bt3">\n                <ion-icon class="icono-boton" name="ios-people-outline"></ion-icon>\n                Users\n            </ion-item>\n        </button>\n    </ion-buttons>\n\n        <ion-buttons end >\n        <button ion-button icon-only (click)="toCitiesAdminPage()">\n            <ion-item class="bt4">\n                <ion-icon class="icono-boton" name="md-globe" ></ion-icon>\n                Cities\n            </ion-item>\n        </button>\n        </ion-buttons>\n\n            <ion-buttons end >\n        <button ion-button icon-only (click)="toAccountAdminPage()">\n            <ion-item class="bt5">\n                <ion-icon  class="icono-boton" name="ios-body-outline"></ion-icon>\n                My Account\n            </ion-item>\n        </button>\n            </ion-buttons>\n\n\n\n</ion-navbar>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/navbar/navbar.html"*/
    })
    /**
     * Admin navigation bar component, corresponds to the reusable visual element displayed at the top of all administrator views
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], NavBar);

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HourForecast */
/* unused harmony export TodayForecast */
/* unused harmony export NextDaysForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(33);
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








/**
 * Data object that encodes a specific hour's weather forecast
 */
var HourForecast = (function () {
    /**
     *
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param temp: that hour's average temperature
     * @param time: the timestamp of that hour at the first second
     */
    function HourForecast(condition, temp, time) {
        this.condition = condition;
        this.temp = temp;
        this.time = time;
    }
    return HourForecast;
}());

/**
 * Data object that encodes the current's date weather forecast
 */
var TodayForecast = (function () {
    /**
     *
     * @param cityName
     * @param avgTemp
     * @param tempMax
     * @param tempMin
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param hourlyForecast
     */
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

/**
 * Data object that encapsulates a future's day weather forecast
 */
var NextDaysForecast = (function () {
    /**
     * @param dayOfWeek: day of the week as a string (e.g. Thursday)
     * @param tempMax: max temperature of that date
     * @param tempMin: min temperature of that date
     * @param tempAvg: average temperature of that date
     * @param condition: description of that day's weather conditions e.g. Heavy Thunderstorms or Sunny
     * @param date: that day's date in a YYYY-MM-DD format
     */
    function NextDaysForecast(dayOfWeek, tempMax, tempMin, tempAvg, condition, date, forecasts, conditionString) {
        this.dayOfWeek = dayOfWeek;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.tempAvg = tempAvg;
        this.condition = condition;
        this.date = date;
        this.forecasts = forecasts;
        this.conditionString = conditionString;
    }
    return NextDaysForecast;
}());

/**
 * Service that retrieves forecast data from the APIXU open API
 */
var ForecastService = (function () {
    function ForecastService(http) {
        this.http = http;
        /**
         * Map for building the appropriate icons in the main users forecast tab based on
         * the apixu API data
         */
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
            "Patchy rain possible": "md-rainy",
            "Light snow": "md-snow",
            "Moderate snow": "md-snow",
            "Blizzard": "md-snow",
            "Patchy moderate snow": "md-snow",
            "Blowing snow": "md-snow",
            "Light drizzle": "md-umbrella",
            "Light freezing rain": "md-snow",
            "Moderate or heavy rain shower": "md-umbrella",
            "Heavy rain at times": "md-umbrella"
        };
        /**
         * Utility map for pretty-printing dates
         */
        this.dayOfWeekMap = {
            6: "Sunday",
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday",
            5: "Saturday",
        };
        /**
         * APIXU API root url and key generated for the project
         */
        this.apiRoot = 'http://api.apixu.com/v1/forecast.json';
        this.apiKey = 'e3dd4e798f1d4c61821153113172310';
    }
    /**
     * Retrieves a specific city's weather forecast for today.
     * Optimized for retrieving less data if the requested hours are in the same day. If the requested hours go well into the next day, then
     * a heavier query is performed that contains weather hourly data for 2 days.
     * @param ciudad: city whose weather forecast wants to be known
     * @returns {Promise<T>}: promise that resolves to the appropriate data object format
     */
    ForecastService.prototype.currentWeather = function (ciudad, days) {
        var _this = this;
        if (days === void 0) { days = 1; }
        var apiURL = this.apiRoot + "?key=" + this.apiKey + "&q=" + ciudad;
        var currentHour = new Date().getHours();
        if (days == 1) {
            if ((currentHour + 5) > 23)
                days = 2;
        }
        console.log();
        apiURL += "&days=" + days;
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
                var todayForecastArray = [];
                todayForecastArray.push(new TodayForecast(res.json().location.name, res.json().current.temp_c, forecast.day.maxtemp_c, forecast.day.mintemp_c, _this.iconMap[res.json().current.condition.text], hours));
                resolve(todayForecastArray);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Retrieves the weather forecast of a specific city for the required number of days
     * @param ciudad: city whose weather forecast wants to be known
     * @param numberOfDays: required number of days for the forecast query
     * @returns {Promise<T>}: returns a promise that resolves to an array of data objects that contain the day-by-day forecasts
     */
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
                var nextDaysForecasts = [];
                console.log("Weather NExt Days");
                console.log(res.json());
                var days = res.json().forecast.forecastday;
                var i = 0;
                while (i < numberOfDays) {
                    var dayOfWeekString = (i == 0) ? "Today" : _this.dayOfWeekMap[new Date(days[i].date).getDay()];
                    console.log(days[i].day.condition.text);
                    nextDaysForecasts.push(new NextDaysForecast(dayOfWeekString, days[i].day.maxtemp_c, days[i].day.mintemp_c, days[i].day.avgtemp_c, _this.iconMap[days[i].day.condition.text], days[i].date, days, days[i].day.condition.text));
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ForecastService);

//# sourceMappingURL=forecastService.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserLogin; });
/* unused harmony export AuthorizationToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Data transfer object that encodes the credentials of a potential user that wants to login into the system
 */
var UserLogin = (function () {
    /**
     * @param username: potential user username
     * @param password: potential user password
     * @param timestamp: time at which the login was attempted
     * @param privileges: what kind of user, admin or common
     */
    function UserLogin(username, password, timestamp, privileges) {
        this.username = username;
        this.password = password;
        this.timestamp = timestamp;
        this.privileges = privileges;
    }
    return UserLogin;
}());

/**
 * Data transfer object that serves as an authentication token for logged users
 */
var AuthorizationToken = (function () {
    /**
     * @param authorized: the user is authorized
     * @param timestamp: authorization operation timestamp
     * @param validUntil: time at which the token expires, users will be logged out if this happens
     * @param privileges: what kind of user, admin or common
     */
    function AuthorizationToken(authorized, timestamp, validUntil, privileges) {
        this.authorized = authorized;
        this.timestamp = timestamp;
        this.validUntil = validUntil;
        this.privileges = privileges;
    }
    return AuthorizationToken;
}());

/**
 * Service that provides authentication mechanisms for the login workflow
 */
var AuthorizationService = (function () {
    function AuthorizationService(http) {
        this.http = http;
        /**
         * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
         */
        this.apiRoot = '../assets/json/user/user.json';
    }
    AuthorizationService.prototype.login = function (email, password) {
        var _this = this;
        var apiUsuariosLogin = 'http://localhost:3000/api/UsuariosApp/login';
        var params = {
            email: email,
            password: password
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiUsuariosLogin, params)
                .toPromise()
                .then(function (res) {
                var params = {
                    id: res.json().id,
                    userId: res.json().userId
                };
                resolve(params);
            }, function (msg) {
                reject(msg);
            });
        }).catch(function (e) {
            console.log(e);
        });
        return promise;
    };
    AuthorizationService.prototype.createHeaders = function (authToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', authToken);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    AuthorizationService.prototype.logout = function (authToken) {
        var _this = this;
        var apiUsuariosLogin = 'http://localhost:3000/api/UsuariosApp/logout?access_token=' + authToken;
        var params = {
            access_token: authToken,
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiUsuariosLogin, params, _this.createHeaders(authToken))
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                var params = {
                    message: "logging out",
                };
                resolve(params);
            }, function (msg) {
                reject(msg);
            });
        }).catch(function (e) {
            console.log(e);
        });
        return promise;
    };
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    /**
     * This method performs a lookup in the database and checks if the credentials are valid,
     * then builds the approprite authorization for administrators, common users or rejected users.
     * @param userToBeAuthorized: user that wants to log into the system
     * @returns {Promise<T>}: returns a promise that resolves to the authoriztion token encoded in the approprite DTO
     */
    //TODO: determine token expiration mechanisms, maybe set a default amount of time and extend based on activity??
    AuthorizationService.prototype.authorizeUser = function (userToBeAuthorized) {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var users = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
                var authorized = false;
                var timestamp = (new Date()) + "";
                var validUntil = "0000";
                var authTokenPrivileges = "user";
                __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](users, function (i, user) {
                    console.log(user);
                    if (userToBeAuthorized.password == user.password && userToBeAuthorized.username == user.username) {
                        authorized = true;
                        validUntil = "1111";
                        if (user.privileges == "admin") {
                            authTokenPrivileges = "admin";
                        }
                    }
                });
                resolve(new AuthorizationToken(authorized, timestamp, validUntil, authTokenPrivileges));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    AuthorizationService.prototype.retrieveUserInfo = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var info = [];
                var infoJson = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](res.json(), function (e) { return e; });
                console.log(infoJson);
                __WEBPACK_IMPORTED_MODULE_2_jquery__["each"](infoJson, function (i, information) {
                    info.push(new UserLogin(information.username, information.password, information.timestamp, information.privilages));
                });
                resolve(info);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthorizationService);

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CityManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(16);
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









var Cities = (function () {
    function Cities(city, country, status) {
        this.city = city;
        this.country = country;
        this.status = status;
    }
    return Cities;
}());

var ActiveCity = (function () {
    function ActiveCity(id, name, province, country, active) {
        this.id = id;
        this.name = name;
        this.province = province;
        this.country = country;
        this.active = active;
    }
    return ActiveCity;
}());

var CityManagerService = (function () {
    function CityManagerService(http) {
        this.http = http;
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/citiesManager/citiesManager.json';
        this.apiRoot2 = 'http://localhost:3000/api/CiudadesCatalogo';
        this.apiCiudadesActivas = 'http://localhost:3000/api/CiudadesActivas';
    }
    /**
     * Look up a city by its name or the name of its country, admin operation
     */
    CityManagerService.prototype.retrieveSearchedCityInfo = function (cityToSearch) {
        var _this = this;
        var query = {
            where: {
                or: [
                    { country: {
                            like: cityToSearch
                        }
                    },
                    { city: {
                            like: cityToSearch
                        }
                    }
                ]
            }
        };
        var apiURL2 = this.apiRoot2 + "?filter=" + JSON.stringify(query);
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL2)
                .toPromise()
                .then(function (res) {
                var cities = [];
                var citiesJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](citiesJson, function (i, city) {
                    cities.push(new Cities(city.city, city.country, city.province));
                });
                resolve(cities);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Add a city to the list of active cities, admin operation
     */
    CityManagerService.prototype.addToActiveCitiesService = function (cityName, cityProvince, countryName) {
        var _this = this;
        var apiURL = this.apiCiudadesActivas;
        var params = {
            nombre: cityName,
            provincia: cityProvince,
            pais: countryName,
            activa: true
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(apiURL, params)
                .toPromise()
                .then(function (res) {
                var newCityJson = res.json();
                resolve(new ActiveCity(newCityJson.id, newCityJson.nombre, newCityJson.provincia, newCityJson.pais, newCityJson.activa));
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Remove a city from the list of active cities, admin operation
     */
    CityManagerService.prototype.removeCity = function (id) {
        var _this = this;
        var apiURL2 = this.apiCiudadesActivas + "/" + id;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete(apiURL2)
                .toPromise()
                .then(function (res) {
                resolve({ message: "Erased from active cities" });
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /**
     * Retrieve the list of active cities, determined by an administrator
     */
    CityManagerService.prototype.retrieveActiveCities = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.apiCiudadesActivas)
                .toPromise()
                .then(function (res) {
                var cities = [];
                var citiesJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](citiesJson, function (i, city) {
                    cities.push(new ActiveCity(city.id, city.nombre, city.provincia, city.pais, city.activa));
                });
                resolve(cities);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    return CityManagerService;
}());
CityManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CityManagerService);

//# sourceMappingURL=cityManagerService.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map