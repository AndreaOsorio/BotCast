import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { MyForecastService, MyForecast } from '../../services/myForecastService';
import { ForecastDetail } from './forecastDetail/forecastDetail'
import * as $ from 'jquery';

@Component({
    selector: 'myforecasts',
    templateUrl: 'myforecasts.html'
})

/**
 * Component that contains the user's saved forecasts
 */
export class MyForecastsPage {

    private forecasts: MyForecast[] = [];
    private userId:string;

    /**
     * Component constructor
     * @param navCtrl: application navigation controller
     * @param navParams: parameters to be passed between different screens
     */
    public constructor(public navCtrl: NavController,
                       public navParams: NavParams,
                       private myForecastService: MyForecastService,
                       public modalCtrl: ModalController,) {

        this.userId = localStorage.idUsuario
        console.log(this.userId);
        this.buildForecastList();
        this.checkSavedForecastChanges();
    }

    public checkSavedForecastChanges(){
        setInterval(()=>{
            if (localStorage.newForecastSaved == 1) {
                this.buildForecastList();
                localStorage.newForecastSaved = 0;
            }
        }, 1000);
    }

    public buildForecastList(){
        this.myForecastService.getForecastList(this.userId).then( data=> {
            var arr: MyForecast[] = [];
            for(var i=0;i<data.length;i++) {
                arr.push(new MyForecast(data[i].cityName,
                    data[i].condition,
                    this.buildLabelFromString(data[i].startDate),
                    this.buildLabelFromString(data[i].endDate)))
            }
            this.forecasts = arr
        });
    }

    public buildLabelFromString(date:string) {
        let abbreviatedMonthMap = {
            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
        }
        let d = new Date(date)
        return abbreviatedMonthMap[d.getMonth()] + " " + (d.getDate()+1);
    }


    public showForecastModal(event){
        let currentRow = $(event.currentTarget);
        let arrForecast = [];
        $.each(currentRow.children(), function(){
            arrForecast.push(($(this).text().trim()))
        })

        let forecastModal = this.modalCtrl.create(ForecastDetail, {forecast: arrForecast});
        forecastModal.onDidDismiss(datos => {
            localStorage.citySelectedFromForecastList = 1
            if(datos.show_graph){
                this.navCtrl.parent.select(1);
            }
        });
        forecastModal.present();
    }

}
