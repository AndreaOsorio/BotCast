import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import {TopSearched, Visitors, VisitorService, SearchedService} from '../../../services/dashboardService';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})

/**
 * Admin main dashboard tab constructor
 */
export class AdminDashboard {

	/**
	 *	Chart implementation for monthly visitors 
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


    public constructor(private visitorService: VisitorService, private seachedService: SearchedService,  public navCtrl: NavController) {
  
        seachedService.retrieveInfo().then(data=>this.tops=data);

        //visitorService.retrieveInfo().then(data=>this.visitors=data);

        visitorService.retrieveInfo().then(data => 
        {
        	this.lineChartData = [{data: this.getVisits(data), label: "Monthly visits"}];
            this.lineChartLabels = this.buildLabelArray(data);
            this.reloadChart();
        });
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
     * Auxiliary function for filling data buffers in the correct format
     * @param visitors: takes in a Visitors array and maps it it to a typical JS array
     * @returns {number,number,number,number,number]}: array of number of visits according to Json data
     */
    public getVisits(visitors:Visitors[]): number[]{
        return visitors.map(e=>e.visits);
    }

    /**
     * Auxiliary function for filling the label buffers in the correct format
     * @param visitors: takes in a Visitors array, takes its months and build the label data buffer
     * @returns {[string,string,string,string,string]}: array of months as strings in a correct format
     */
	public buildLabelArray(visitors:Visitors[]): string[]{
        return visitors.map(e=>e.month);
    }

    
}