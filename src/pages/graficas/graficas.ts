import { Component, ViewChild } from '@angular/core';
import { ForecastService, NextDaysForecast } from '../../services/forecastService';
import { MyCitiesService, Ciudad } from '../../services/citiesService';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


//TODO: fix initial graph pop bug
//TODO: fix initial date bug

@Component({
    selector: 'graphs',
    templateUrl: 'graficas.html'
})


/**
 * User graph componennt, controlls the user interaction between the different fields, the API calls and the corresponding UI updates
 * This component's state contains a reference to the chart's directives, the currently selected cities, the chart's data buffer
 * retrieved from the forecasts service and the state of the form's components for frequent usage.
 */
export class GraphsPage {
    @ViewChild("baseChart") chart: BaseChartDirective;

    private ciudades: Ciudad[] = [];

    private maxDaysApiRequest:number = 7;

    currentDataBufferForGraph:Array<any> = [{data:[0,0,0,0,0], label:'Series A'}];

    private nextDaysForecastsForGraph:NextDaysForecast[] = []

    public lineChartData:Array<any>= [{data:[0,0,0,0,0,0], label:'Series A'}];
    public lineChartLabels:Array<any> = ['0','0','0','0','0','0'];

    private todaysDate:string ="";
    private maxFutureDate:string ="";

    private selectedInitDate:string = this.todaysDate;
    private selectedFinalDate:string = "";

    private currentCity:string;

    /**
     *The following objects correspond to the graph configuration arguments, including label format, colors and label display locations, among others.
     */
    private lineChartOptions:any = {
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

    private selectedCity:string;
    private selectedTempOption:string = "max";

    public lineChartColors:Array<any> = [
        {
            backgroundColor: 'rgba(30,144,255,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    /**
     * Component constructor.
     * By default it retrieves the data from the user's current location and draws the graph accordingly.
     * @param forecastService: retrieves weather data from the services
     * @param myCitiesService: retrieves currently saved cities by users
     */
    constructor(private forecastService: ForecastService,
                private myCitiesService: MyCitiesService) {

        this.currentCity = localStorage.currentCity;
        this.selectedCity = this.currentCity;

        this.forecastService.weatherNextDays(this.currentCity).then( data => {
            this.lineChartData = [{data: this.getMaxTemps(data), label: this.currentCity}];
            this.lineChartLabels = this.buildLabelArray(data);
            this.reloadChart();
        });

        this.myCitiesService.retrieveMyCities().then(data=>{
            this.ciudades = JSON.parse(localStorage.userCities)
        } );

        this.setTodayDateTime();
        this.setMaxDateTime();
        this.selectedInitDate = this.todaysDate;
        this.selectedFinalDate = this.maxFutureDate;

    }

    ngAfterContentChecked() {
        console.log(this.currentCity+" "+localStorage.currentCity)
        if(JSON.stringify(this.ciudades) != localStorage.userCities){
            this.ciudades = JSON.parse(localStorage.userCities)
        }
        if(this.currentCity != localStorage.currentCity){
            this.currentCity = localStorage.currentCity;
        }
    }

    /**
     * Makes a graph full state refresh whenever it's needed
     * This includes the data buffer and axes labels
     */
    reloadChart(){
        if (this.chart !== undefined) {
            this.chart.chart.destroy();
            this.chart.chart = 0;

            this.chart.labels = this.lineChartLabels;
            this.chart.datasets = this.lineChartData;
            this.chart.ngOnInit();
        }
    }

    /**
     * Event binding method for templates, when a new city is selected in the pop-up menu
     */
    public changeCity() {
        this.updateGraph();
    }

    /**
     * Make a char with the updated data buffers
     * @param forecastDays: what is the date range in days desired for the service query
     */
    public updateGraph(forecastDays:number = 0){
        this.forecastService.weatherNextDays(this.selectedCity, forecastDays).then( data=>{
            this.nextDaysForecastsForGraph = data;
            this.populateGraph();
        });
    }

    /**
     * Event binding method for templates, when new option (min, max or avg temperatures) is selected
     */
    public optionChanged(){
        this.populateGraph();
    }

    /**
     * Retrieve new data from the forecast services and fill the graph data buffer with this new information
     * Depending on the option selected in the UI, this will retrieve the maximum, minimum or average temperatures
     * of the desired region for a specific period.
     */
    public populateGraph(){
        let dataAux =[];
        switch(this.selectedTempOption){
            case "max":
                dataAux = [{data: this.getMaxTemps(this.nextDaysForecastsForGraph), label: this.selectedCity}];
                break;
            case "min":
                dataAux = [{data: this.getMinTemps(this.nextDaysForecastsForGraph), label: this.selectedCity}];
                break;
            case "avg":
                dataAux = [{data: this.getAvgTemps(this.nextDaysForecastsForGraph), label: this.selectedCity}];
                break;
        }

        this.lineChartLabels = this.buildLabelArray(this.nextDaysForecastsForGraph);
        this.lineChartData = dataAux;
        this.reloadChart();

    }

    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of maximum temperatures in a specific date and location
     */
    public getMaxTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempMax);
    }

    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of minumum temperatures in a specific date and location
     */
    public getMinTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempMin);
    }

    /**
     * Auxiliary function for filling data buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array and maps it it to a typical JS array
     * @returns {[number,number,number,number,number]}: array of average temperatures in a specific date and location
     */
    public getAvgTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempAvg);
    }

    /**
     * Auxiliary function for filling the label buffers in the correct format
     * @param nextDayForecasts: takes in a NextDayForecast array, takes its dates and build the label data buffer
     * @returns {[number,number,number,number,number]}: array of dates as strings in a correct format
     */
    public buildLabelArray(nextDayForecasts:NextDaysForecast[]): string[]{
        return nextDayForecasts.map(e=>this.buildLabelFromString(e.date));
    }


    /**
     * Takes a date in an YYYY-MM-dd format and pretty-formats it
     * @param date: date in YYYY-MM-dd format
     * @returns {string}: return date formatted as e.g. Jan 31
     */
    public buildLabelFromString(date:string){
        let abbreviatedMonthMap = {
            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
        }
        let d = new Date(date)
        return abbreviatedMonthMap[d.getMonth()]+" "+(d.getDate()+1);
    }

    /**
     * Get today's date in timestamp format and set it to YYYY-MM-DD format
     */
    public setTodayDateTime(){
        let today = new Date();
        this.todaysDate = today.getFullYear()+"-"+this.buildCorrectFormatMonth(today)+"-"+ this.buildCorrectFormatDay(today);

    }

    /**
     * Establish the maximum future date in which the weather forecast service can be queried
     * @param maxDays: maximum amount of days for forecast service query, depends on API restrictions
     */
    public setMaxDateTime(maxDays = (this.maxDaysApiRequest-1)){
        let maxDate = new Date((new Date().getTime()) + maxDays*24*60*60*1000);
        this.maxFutureDate= maxDate.getFullYear()+"-"+this.buildCorrectFormatMonth(maxDate)+"-"+ this.buildCorrectFormatDay(maxDate);
    }

    /**
     * Auxiliar function for formatting dates
     * @param date: take a day of the month as e.g. 23 or 1
     * @returns {string|number}: if a day is less than 10 format it as e.g. 01 or 08
     */
    public buildCorrectFormatDay(date){
        return (date.getDate()+1) < 10 ? "0"+(date.getDate()+1): (date.getDate());
    }

    /**
     * Auxiliar function for formatting dates
     * @param date: take a month as e.g. 12 or 8
     * @returns {string|number}: if a month's number is less than 10 format it as e.g. 01 or 08
     */
    public buildCorrectFormatMonth(date){
        return (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1): (date.getMonth()+1);
    }

    /**
     * Event binding function with templates, updates function once the final date date-picker has been changed
     */
    public triggerChartUpdateOnFinalDateChange(){
        this.updateGraph(this.calculateDifferenceInDaysBetweenDates());
    }

    /**
     * Axuiliary function to calculate the number of dates between the currently selected initial and final date for query
     * @returns {number}: number of dates between two days
     */
    public calculateDifferenceInDaysBetweenDates(){
        var timeDifferenceEpoch = Math.abs(new Date(this.selectedInitDate).getTime() - new Date(this.selectedFinalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference+1;
    }


}