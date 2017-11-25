import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TopSearched, Visitors } from '../../../services/dashboardService';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { StatService } from '../../../services/statsService'


@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})

/**
 * Admin main dashboard tab constructor
 */
export class AdminDashboard {

	/**
	 *	Chart implementation for dialy visitors
	 */
	@ViewChild("baseChart") chart: BaseChartDirective;

	public lineChartData:Array<any>= [{data:[0,0,0,0,0,0], label:'Series A'}];
    public lineChartLabels:Array<any> = ['0','0','0','0','0','0'];


	/**
     *The following objects correspond to the graph configuration arguments, including label format, colors and label display locations, among others.
     */
    private lineChartOptions:any = {
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


    public tops: TopSearched[] = [];
	public visitors: Visitors[] = [];


    public constructor(public navCtrl: NavController,
                       public navParams: NavParams,
                       public statService:StatService) {

        localStorage.authToken = navParams.get('tokenId');
        localStorage.idUsuario = navParams.get('userId');

        this.displayDashboardData();

    }

    /**
     * Retrieve stat data to build dashboard data elements periodically
     */
    displayDashboardData(){
        this.statService.retrieveRealStats().then(data=>{
            this.buildVisitorsGraph(data);
            this.buildTopCitiesTable(data);
        })
    }

    /**
     * Build visitor chart with stat service information
     * @param data
     */
    buildVisitorsGraph(data){
        let fechas = data[0].fechas;
        this.lineChartData = [{data: fechas.map(fecha=>fecha.contador), label: "Daily visits"}];
        this.lineChartLabels = fechas.map(f=>f.fecha);
        this.reloadChart();
    }

    /**
     * Build top favorite cities table with stat service information
     * @param data
     */
    buildTopCitiesTable(data){
        let ciudades = data[0].ciudades;
        ciudades.sort(function(city1, city2){
            return city1.contador - city2.contador
        });
        ciudades.reverse();
        ciudades = ciudades.slice(0,8);

        this.tops = ciudades
        console.log(this.tops);
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

}