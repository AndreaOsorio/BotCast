webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_dashboard_dashboard__ = __webpack_require__(120);
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
        this.user = new __WEBPACK_IMPORTED_MODULE_4__services_authService__["b" /* UserLogin */]("y", "123", "", ""); //testing user
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
        console.log(this.user);
        this.authorizationService.authorizeUser(this.user).then(function (data) {
            if (data.authorized) {
                if (data.privileges == "admin") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_admin_dashboard_dashboard__["a" /* AdminDashboard */], {
                        authToken: data
                    });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], {
                        authToken: data
                    });
                }
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
        selector: 'login',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/'<!--Login Componente HTML Structure-->\n<ion-content has-header="true" padding="true" class="contenido_login">\n    <ion-grid>\n    <ion-row></ion-row>\n\n\n    <ion-row>\n        <ion-col col-12 class="titulo_bot_cast">\n            <b>Botcast</b>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-12 class="botcast_icon">\n            <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <ion-list inset class="contenedorCamposLogin">\n                <ion-item>\n                    <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="user.username" required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n\n    </ion-row>\n\n\n        <ion-row>\n            <ion-col class="signup-col">\n                <button ion-button class="submit-btn" full (click)="login()" type="submit" >Login</button>\n                <button ion-button class="register-btn" block clear (click)="register()">Sign up</button>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* AuthorizationService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ciudad */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(32);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MyCitiesService);

//# sourceMappingURL=citiesService.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HourForecast */
/* unused harmony export TodayForecast */
/* unused harmony export NextDaysForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
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
            "Moderate snow": "md-snow"
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboardService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(220);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_dashboardService__["b" /* VisitorService */], __WEBPACK_IMPORTED_MODULE_2__services_dashboardService__["a" /* SearchedService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AdminDashboard);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Visitors */
/* unused harmony export TopSearched */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisitorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(38);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SearchedService);

//# sourceMappingURL=dashboardService.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal_principal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficas_graficas__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatbot_chatbot__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myforecasts_myforecasts__ = __webpack_require__(344);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__principal_principal__["a" /* PrincipalPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__graficas_graficas__["a" /* GraphsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chatbot_chatbot__["a" /* ChatbotPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__myforecasts_myforecasts__["a" /* MyForecastsPage */];
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
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_citiesService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forecastService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geolocationService__ = __webpack_require__(216);
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
//TODO: background gif changes as a function of weather
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
    function PrincipalPage(myCitiesService, forecastService, navCtrl, navParams, geolocationService) {
        this.myCitiesService = myCitiesService;
        this.forecastService = forecastService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocationService = geolocationService;
        this.ciudades = [];
        this.todayForecast = [];
        this.todayHourlyForecast = [];
        this.nextDaysForecast = [];
        this.todaysDate = this.getTodaysDate();
        this.makeApiCalls("");
        //TODO: through auth token get user info and retrieve preferences, forecasts, etc, when backend is ready
        console.log(this.navParams.data);
    }
    /**
     *
     * @param city: city whose current and future weather wants to be known
     * This method calls all the different services to retrieve the selected city's weather and then redraws
     * the whole view with the retrieved data in the appropriate format
     */
    PrincipalPage.prototype.makeApiCalls = function (city) {
        var _this = this;
        if (city == undefined || city == "")
            city = "Amsterdam";
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
            console.log(_this.nextDaysForecast);
        });
    };
    /**
     * First acquires user's longitude and latitude with cordova's native hardware interaction API,
     * then performs an external call to retrieve the user's approximate address but, most importantly, his/her current city
     * to call makeApiCalls() and redraw the view with the current location's weather
     */
    PrincipalPage.prototype.getMyLocation = function () {
        var _this = this;
        this.geolocationService.getMyCurrentLocation().then(function (data) {
            _this.mycurrentLocationLatLong = data;
            _this.geolocationService.getMyCurrentAddressBasedOnLatLong(data).then(function (data) {
                _this.myCurrentLocationReverseGeocoded = data;
                _this.makeApiCalls(data.city);
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
        //TODO: implement here changes to classes when users selects a particular city
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
        selector: 'principal',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/'<!--User Main Tab Component HTML Structure-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your locations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides class="cities-slider">\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let ciudad of ciudades" class="my-cities-element" (click)="changeCity(ciudad.name)">\n            {{ciudad.name}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <button ion-button color="primary" class="my-location-button" (click)="getMyLocation()">My location</button>\n          </ion-col>\n          <ion-col >\n            <button ion-button color="secondary" class="add-city-button">Add city</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid class="ion_grid_forecasts">\n    <ion-row>\n      <ion-col *ngFor="let today of todayForecast">\n        <img src="../../assets/imgs/rainy.gif"/>\n\n        <div class="location-content">\n          <div class="location-city-name">\n            {{today.cityName}}\n          </div>\n\n          <div class="location-avg-temp">\n            {{today.avgTemp}}<span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-max-min-temps">\n            High:<b>{{today.tempMax}}</b><span class="centigrade-symbol">°C</span>\n            Low:<b>{{today.tempMin}}</b><span class="centigrade-symbol">°C</span>\n          </div>\n\n          <div class="location-todays-data">\n            {{this.todaysDate}}\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row-container-hourly-forecasts">\n      <ion-col *ngFor="let hourForecast of todayHourlyForecast" class="col-hourly-forecasts">\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.time}}\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          <ion-icon name={{hourForecast.condition}}></ion-icon>\n        </ion-row>\n        <ion-row class="row-hourly-forecast">\n          {{hourForecast.temp}} <span class="centigrade-symbol">°C</span>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let day of nextDaysForecast" class="row-forecasts">\n      <ion-col class="col-day-of-week-forecasts">{{day.dayOfWeek}}</ion-col>\n      <ion-col><ion-icon name={{day.condition}} class="icon-forecasts"></ion-icon></ion-col>\n      <ion-col>{{day.tempMax}} <span class="centigrade-symbol">°C</span></ion-col>\n      <ion-col>{{day.tempMin}} <span class="centigrade-symbol">°C</span></ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/principal/principal.html"*/
    })
    /**
     * Component for user main interface, user can add cities, select cities, select current location and
     * today's weather along withnext week's forecasts will be displayed.
     * This component's state contains the user's currently saved cities, today's and next week's weather, today's date,
     * the user's current location in latitude and longitude (raw format) and the user's approximate address.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_citiesService__["a" /* MyCitiesService */],
        __WEBPACK_IMPORTED_MODULE_2__services_forecastService__["a" /* ForecastService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_geolocationService__["a" /* GeolocationService */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GeolocationAddress */
/* unused harmony export RawLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(218);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], GeolocationService);

//# sourceMappingURL=geolocationService.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forecastService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_citiesService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(220);
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
//TODO: fix initial date bug
var GraphsPage = (function () {
    /**
     * Component constructor.
     * By default it retrieves the data from the user's current location and draws the graph accordingly.
     * @param forecastService: retrieves weather data from the services
     * @param myCitiesService: retrieves currently saved cities by users
     */
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
        if (maxDays === void 0) { maxDays = this.maxDaysApiRequest; }
        var maxDate = new Date((new Date().getTime()) + maxDays * 24 * 60 * 60 * 1000);
        this.maxFutureDate = maxDate.getFullYear() + "-" + this.buildCorrectFormatMonth(maxDate) + "-" + this.buildCorrectFormatDay(maxDate);
    };
    /**
     * Auxiliar function for formatting dates
     * @param date: take a day of the month as e.g. 23 or 1
     * @returns {string|number}: if a day is less than 10 format it as e.g. 01 or 08
     */
    GraphsPage.prototype.buildCorrectFormatDay = function (date) {
        return (date.getDate() + 1) < 10 ? "0" + (date.getDate() + 1) : (date.getDate() + 1);
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
        selector: 'graphs',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/'<!--Graphs User Tab Component HTML Structure-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Forecasts graph</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row >\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select temp</ion-label>\n                <ion-select [(ngModel)]="selectedTempOption" multiple="false" (ngModelChange)="optionChanged($event)">\n                    <ion-option value="max">Max temperatures </ion-option>\n                    <ion-option value="min">Min temperatures </ion-option>\n                    <ion-option value="avg">Average temperatures </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="container-graph">\n        <ion-col>\n            <div>\n                <canvas baseChart width="350" height="250"  #baseChart="base-chart"\n                        [datasets]="lineChartData"\n                        [labels]="lineChartLabels"\n                        [options]="lineChartOptions"\n                        [colors]="lineChartColors"\n                        [legend]="lineChartLegend"\n                        [chartType]="lineChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-bottom: 10px">\n        <ion-col col-12>\n            <ion-item>\n                <ion-label>Select city</ion-label>\n                <ion-select [(ngModel)]="selectedCity" multiple="false" (ngModelChange)="changeCity($event)">\n                    <ion-option *ngFor="let c of ciudades"> {{c.name}} </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-item>\n            <ion-label>Initial date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{todaysDate}} [(ngModel)]="selectedInitDate"></ion-datetime>\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-item>\n            <ion-label>Final date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" initialValue = {{todaysDate}} min={{todaysDate}} max={{maxFutureDate}} [(ngModel)]="selectedFinalDate" (ngModelChange)="triggerChartUpdateOnFinalDateChange($event)"></ion-datetime>\n        </ion-item>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button outline class="save-forecast">Save this forecast</button>\n        </ion-col>\n    </ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/graficas/graficas.html"*/
    })
    /**
     * User graph componennt, controlls the user interaction between the different fields, the API calls and the corresponding UI updates
     * This component's state contains a reference to the chart's directives, the currently selected cities, the chart's data buffer
     * retrieved from the forecasts service and the state of the form's components for frequent usage.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_forecastService__["a" /* ForecastService */], __WEBPACK_IMPORTED_MODULE_2__services_citiesService__["a" /* MyCitiesService */]])
], GraphsPage);

//# sourceMappingURL=graficas.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chatbotService__ = __webpack_require__(343);
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
        chatbotService.retrieveConversation().then(function (data) { return _this.conversation = data; });
    }
    return ChatbotPage;
}());
ChatbotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bot',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/'<!--Chatbot User Tab Component HTML Structure-->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>Botcast</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="yo">\n    <div class="contenedor_conversacion">\n        <ion-grid>\n            <ion-row *ngFor="let message of conversation; let i = index">\n                <ion-row *ngIf="i%2==0" col-12>\n                    <ion-col col-1>\n                        <ion-icon name="ios-contact-outline" class="icon-user-chatbot"></ion-icon>\n                    </ion-col>\n                    <ion-col class="user-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-4></ion-col>\n                </ion-row>\n                <ion-row *ngIf="i%2!=0" col-12>\n                    <ion-col col-4></ion-col>\n                    <ion-col class="bot-message-content">\n                        {{message.content}}\n                    </ion-col>\n                    <ion-col col-1>\n                        <ion-icon name="ios-ionitron-outline"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n\n<ion-input placeholder="Say something..." class="mensaje-caja-texto" type="text"></ion-input>\n<button ion-button class="boton-enviar-mensaje">Send</button>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/chatbot/chatbot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chatbotService__["a" /* ChatbotService */]])
], ChatbotPage);

//# sourceMappingURL=chatbot.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* unused harmony export Conversation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(38);
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
    function ChatbotService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
         */
        this.apiRoot = '../assets/json/chatbot/conversation.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    /**
     * Function that performs a REST call to the backend and retrieves a user's conversation with the chatbot in an array of messages
     * @returns {Promise<T>}: promise that resolves to a user-chatbot conversation in the appropriate DTO
     */
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForecastsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_myForecastService__ = __webpack_require__(345);
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
     * Componennt constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     */
    function MyForecastsPage(navCtrl, navParams, myForecastService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myForecastService = myForecastService;
        // constructor(
        //     public cityName: string,
        //     public condition: string,
        //     public startDate:string,
        //     public endDate:string
        // ){}
        this.forecasts = [];
        this.myForecastService.retrieveMyForecasts().then(function (data) { return _this.forecasts = data; });
    }
    return MyForecastsPage;
}());
MyForecastsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myforecasts',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/myforecasts.html"*/'<!--User saved forecasts Tab Component HTML Structure-->\n<ion-content>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>Your saved Forecasts</ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n            <ion-grid>\n                <ion-row *ngFor="let forecast of forecasts" class="row-myforecasts">\n\n                    <ion-col class="city-forecast">\n                        {{forecast.cityName}}\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-icon name={{forecast.condition}} class="icon-forecasts"></ion-icon>\n                    </ion-col>\n\n                    <ion-col>\n                        {{forecast.startDate}}\n\n                    </ion-col>\n\n                    <ion-col>\n                        {{forecast.endDate}}\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n    </ion-content>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/myforecasts/myforecasts.html"*/
    })
    /**
     * Component that contains the user's saved forecasts
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_myForecastService__["a" /* MyForecastService */]])
], MyForecastsPage);

//# sourceMappingURL=myforecasts.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForecastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(32);
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
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
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
            "Moderate snow": "md-snow"
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
    return MyForecastService;
}());
MyForecastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MyForecastService);

//# sourceMappingURL=myForecastService.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
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
    /**
     *
     * @param navCtrl: application navigation controller to find your way between views
     * @param authorizationService: service that provides users with authorization tokens once registered
     * @param formBuilder: angular utility for form validation
     * Register form component basic constructor
     */
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
    /**
     * Form fields will be validated and sent to backend for user final registration
     */
    RegisterPage.prototype.register = function () {
        //TODO: implement here call to POST API endpoint when backend is ready
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/'<!--Register Componente HTML Structure-->\n<ion-content>\n    <ion-list no-lines>\n        <ion-grid>\n\n            <ion-row>\n                <ion-col col-12 class="titulo_bot_cast">\n                    <b>Botcast</b>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12 class="botcast_icon">\n                    <img src="../assets/imgs/bot_icon.png" height="100" width="100"/>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12>\n                    <form [formGroup]="slideOneForm">\n\n                        <ion-item>\n                            <ion-input formControlName="name" placeholder="Name" type="text"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input formControlName="email" placeholder="E-mail" type="text"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input formControlName="username" placeholder="Username" type="number"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input formControlName="password" placeholder="Password" type="password"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input formControlName="confirmpassword"  placeholder="Confirm password"type="password"></ion-input>\n                        </ion-item>\n                    </form>\n\n                    <button ion-button class="botonRegistrarse" full color="primary" (click)="register()">Create Account!</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/login/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Information */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(38);
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

var UsersInfoService = (function () {
    function UsersInfoService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/usersinfo/usersinfo.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
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
    return UsersInfoService;
}());
UsersInfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UsersInfoService);

//# sourceMappingURL=usersInfoService.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(38);
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

var CityManagerService = (function () {
    function CityManagerService(http) {
        this.http = http;
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the user info from JSON
         */
        this.apiRoot = '../assets/json/admin/citiesManager/citiesManager.json';
    }
    // apiKey:String = '68940978733581cc8ee68abc6610f53e'; //for later
    CityManagerService.prototype.retrieveInfo = function () {
        var _this = this;
        var apiURL = "" + this.apiRoot;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                var cities = [];
                var citiesJson = __WEBPACK_IMPORTED_MODULE_8_jquery__["map"](res.json(), function (e) { return e; });
                console.log(citiesJson);
                __WEBPACK_IMPORTED_MODULE_8_jquery__["each"](citiesJson, function (i, city) {
                    cities.push(new Cities(city.city, city.country, city.status));
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CityManagerService);

//# sourceMappingURL=cityManagerService.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__(32);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], StatService);

//# sourceMappingURL=statsService.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__ = __webpack_require__(348);
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
        cityManagerService.retrieveInfo().then(function (data) { return _this.cities = data; });
    }
    return AdminCities;
}());
AdminCities = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adminCities',template:/*ion-inline-start:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/cities/cities.html"*/'<!--Administrator City Tab Component HTML Structure-->\n<ion-content>\n    <navbar></navbar>\n    <div>\n        <ion-grid>\n          <ion-row>\n            <ion-col><ion-searchbar \n              placeholder="Search by City"\n              [(ngModel)]="myInput"\n              [showCancelButton]="shouldShowCancel"\n              (ionInput)="onInput($event)"\n              (ionCancel)="onCancel($event)">\n            </ion-searchbar></ion-col>\n            <ion-col> <button ion-button icon-only clear item-right (click)="remove()"><ion-icon name="add"></ion-icon></button></ion-col>  \n          </ion-row>\n        </ion-grid>\n    </div>\n    <div>\n        <ion-grid>\n            <ion-row>\n                <ion-col><h4>City</h4></ion-col>\n                <ion-col><h4>Country</h4></ion-col>\n                <ion-col><h4>Status</h4></ion-col>\n                <ion-col><h4></h4></ion-col>\n            </ion-row>\n            <ion-row *ngFor="let city of cities" class="row-cities">\n                <ion-col>{{city.city}}</ion-col>\n                <ion-col>{{city.country}}</ion-col>\n                <ion-col>{{city.status}}</ion-col>\n                <ion-col>\n                    <button ion-button icon-only clear item-right (click)="remove()"><ion-icon name="close-circle"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content> \n'/*ion-inline-end:"/Users/Versatran/Desktop/ITESM/9 Noveno Semestre/Dev Apps Web/ProyectoTabs/src/pages/admin/cities/cities.html"*/
    })
    /**
     * Admin cities tab constructor
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cityManagerService__["a" /* CityManagerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AdminCities);

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMyAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(69);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AdminMyAccount);

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statsService__ = __webpack_require__(349);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_statsService__["a" /* StatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AdminStats);

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usersInfoService__ = __webpack_require__(347);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_usersInfoService__["a" /* UsersInfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AdminUsers);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_citiesService__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_forecastService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_graphsService__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_chatbotService__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_geolocationService__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_usersInfoService__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cityManagerService__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_dashboardService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_myForecastService__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_statsService__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_graficas_graficas__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatbot_chatbot__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myforecasts_myforecasts__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_register_register__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_navbar_navbar__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_admin_dashboard_dashboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_admin_cities_cities__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_admin_myaccount_myaccount__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_stats_stats__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_admin_users_users__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_geolocation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_native_geocoder__ = __webpack_require__(218);
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
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_myforecasts_myforecasts__["a" /* MyForecastsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_23__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__login_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_admin_dashboard_dashboard__["a" /* AdminDashboard */],
            __WEBPACK_IMPORTED_MODULE_25__pages_admin_navbar_navbar__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_cities_cities__["a" /* AdminCities */],
            __WEBPACK_IMPORTED_MODULE_30__pages_admin_users_users__["a" /* AdminUsers */],
            __WEBPACK_IMPORTED_MODULE_28__pages_admin_myaccount_myaccount__["a" /* AdminMyAccount */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_stats_stats__["a" /* AdminStats */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* BotCast */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_graficas_graficas__["a" /* GraphsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_myforecasts_myforecasts__["a" /* MyForecastsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chatbot_chatbot__["a" /* ChatbotPage */],
            __WEBPACK_IMPORTED_MODULE_23__login_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__login_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_admin_dashboard_dashboard__["a" /* AdminDashboard */],
            __WEBPACK_IMPORTED_MODULE_25__pages_admin_navbar_navbar__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_27__pages_admin_cities_cities__["a" /* AdminCities */],
            __WEBPACK_IMPORTED_MODULE_30__pages_admin_users_users__["a" /* AdminUsers */],
            __WEBPACK_IMPORTED_MODULE_28__pages_admin_myaccount_myaccount__["a" /* AdminMyAccount */],
            __WEBPACK_IMPORTED_MODULE_29__pages_admin_stats_stats__["a" /* AdminStats */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__services_citiesService__["a" /* MyCitiesService */],
            __WEBPACK_IMPORTED_MODULE_8__services_forecastService__["a" /* ForecastService */],
            __WEBPACK_IMPORTED_MODULE_9__services_graphsService__["a" /* GraphsService */],
            __WEBPACK_IMPORTED_MODULE_10__services_chatbotService__["a" /* ChatbotService */],
            __WEBPACK_IMPORTED_MODULE_11__services_authService__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_usersInfoService__["a" /* UsersInfoService */],
            __WEBPACK_IMPORTED_MODULE_14__services_cityManagerService__["a" /* CityManagerService */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_12__services_geolocationService__["a" /* GeolocationService */],
            __WEBPACK_IMPORTED_MODULE_15__services_dashboardService__["a" /* SearchedService */],
            __WEBPACK_IMPORTED_MODULE_15__services_dashboardService__["b" /* VisitorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_myForecastService__["a" /* MyForecastService */],
            __WEBPACK_IMPORTED_MODULE_17__services_statsService__["a" /* StatService */],
            { provide: { ErrorHandler: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], LocationStrategy: __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */] }, useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotCast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_login__ = __webpack_require__(117);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], BotCast);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bn": 238,
	"./bn.js": 238,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es.js": 258,
	"./et": 260,
	"./et.js": 260,
	"./eu": 261,
	"./eu.js": 261,
	"./fa": 262,
	"./fa.js": 262,
	"./fi": 263,
	"./fi.js": 263,
	"./fo": 264,
	"./fo.js": 264,
	"./fr": 265,
	"./fr-ca": 266,
	"./fr-ca.js": 266,
	"./fr-ch": 267,
	"./fr-ch.js": 267,
	"./fr.js": 265,
	"./fy": 268,
	"./fy.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-latn": 271,
	"./gom-latn.js": 271,
	"./he": 272,
	"./he.js": 272,
	"./hi": 273,
	"./hi.js": 273,
	"./hr": 274,
	"./hr.js": 274,
	"./hu": 275,
	"./hu.js": 275,
	"./hy-am": 276,
	"./hy-am.js": 276,
	"./id": 277,
	"./id.js": 277,
	"./is": 278,
	"./is.js": 278,
	"./it": 279,
	"./it.js": 279,
	"./ja": 280,
	"./ja.js": 280,
	"./jv": 281,
	"./jv.js": 281,
	"./ka": 282,
	"./ka.js": 282,
	"./kk": 283,
	"./kk.js": 283,
	"./km": 284,
	"./km.js": 284,
	"./kn": 285,
	"./kn.js": 285,
	"./ko": 286,
	"./ko.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mr": 296,
	"./mr.js": 296,
	"./ms": 297,
	"./ms-my": 298,
	"./ms-my.js": 298,
	"./ms.js": 297,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 463;

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GraphDayForecast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(32);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GraphsService);

//# sourceMappingURL=graphsService.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cities_cities__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myaccount_myaccount__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users__ = __webpack_require__(353);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], NavBar);

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserLogin; });
/* unused harmony export AuthorizationToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
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
        //Currently a dummy call to a local json
        /**
         * Backend REST endpoint URL to retrieve the conversation between a user and the chatbot
         */
        this.apiRoot = '../assets/json/user/user.json';
    }
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthorizationService);

//# sourceMappingURL=authService.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map