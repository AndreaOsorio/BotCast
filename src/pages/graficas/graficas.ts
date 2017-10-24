import { Component, ViewChild } from '@angular/core';
import { ForecastService, TodayForecast, HourForecast, NextDaysForecast } from '../../services/forecastService';
import { MyCitiesService, Ciudad } from '../../services/citiesService';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


//TODO: fix initial graph pop bug
//TODO: implement geoloc based initial graph
//TODO: fix initial date bug

@Component({
    selector: 'graphs',
    templateUrl: 'graficas.html'
})

export class GraphsPage {
    @ViewChild("baseChart") chart: BaseChartDirective;

    private ciudades: Ciudad[] = [];

    private maxDaysApiRequest:number = 8;

    currentDataBufferForGraph:Array<any> = [{data:[0,0,0,0,0], label:'Series A'}];

    private nextDaysForecastsForGraph:NextDaysForecast[] = []

    public lineChartData:Array<any>= [{data:[0,0,0,0,0,0], label:'Series A'}];
    public lineChartLabels:Array<any> = ['0','0','0','0','0','0'];

    private todaysDate:string ="";
    private maxFutureDate:string ="";


    private selectedInitDate:string = this.todaysDate;
    private selectedFinalDate:string = "";



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

    private fs: ForecastService;
    private mcs: MyCitiesService;

    private selectedCity:string;
    private selectedTempOption:string = "max";


    constructor(private forecastService: ForecastService, private myCitiesService: MyCitiesService) {

        this.fs = this.forecastService;
        this.mcs = this.myCitiesService;

        this.forecastService.weatherNextDays("Mexico City").then( data => {
            this.lineChartData = [{data: this.getMaxTemps(data), label: "Mexico City"}];
            this.lineChartLabels = this.buildLabelArray(data);
            this.reloadChart();
        });

        this.myCitiesService.retrieveMyCities().then(data=>{
            this.ciudades = data
        } );

        this.setTodayDateTime();
        this.setMaxDateTime();
    }

    reloadChart(){
        if (this.chart !== undefined) {
            this.chart.chart.destroy();
            this.chart.chart = 0;

            this.chart.labels = this.lineChartLabels;
            this.chart.datasets = this.lineChartData;
            this.chart.ngOnInit();
        }
    }

    public changeCity() {
        this.updateGraph();
    }

    public updateGraph(forecastDays:number = 0){
        this.forecastService.weatherNextDays(this.selectedCity, forecastDays).then( data=>{
            this.nextDaysForecastsForGraph = data;
            this.populateGraph();
        });
    }

    public optionChanged(){
        this.populateGraph();
    }

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

    public getMaxTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempMax);
    }

    public getMinTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempMin);
    }

    public getAvgTemps(nextDayForecasts:NextDaysForecast[]): number[]{
        return nextDayForecasts.map(e=>e.tempAvg);
    }

    public buildLabelArray(nextDayForecasts:NextDaysForecast[]): string[]{
        return nextDayForecasts.map(e=>this.buildLabelFromString(e.date));
    }


    public buildLabelFromString(date:string){
        let abbreviatedMonthMap = {
            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
        }
        let d = new Date(date)
        return abbreviatedMonthMap[d.getMonth()]+" "+(d.getDate()+1);

    }

    public setTodayDateTime(){
        let today = new Date();
        this.todaysDate = today.getFullYear()+"-"+this.buildCorrectFormatMonth(today)+"-"+ this.buildCorrectFormatDay(today);

    }

    public setMaxDateTime(maxDays = this.maxDaysApiRequest){
        let maxDate = new Date((new Date().getTime()) + maxDays*24*60*60*1000);
        this.maxFutureDate= maxDate.getFullYear()+"-"+this.buildCorrectFormatMonth(maxDate)+"-"+ this.buildCorrectFormatDay(maxDate);
    }

    public buildCorrectFormatDay(date){
        return (date.getDate()+1) < 10 ? "0"+(date.getDate()+1): (date.getDate()+1);
    }

    public buildCorrectFormatMonth(date){
        return (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1): (date.getMonth()+1);
    }


    public triggerChartUpdateOnFinalDateChange(){
        this.updateGraph(this.calculateDifferenceInDaysBetweenDates());
    }

    public calculateDifferenceInDaysBetweenDates(){
        var timeDifferenceEpoch = Math.abs(new Date(this.selectedInitDate).getTime() - new Date(this.selectedFinalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        console.log(dayDifference)
        return dayDifference;
    }

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

}