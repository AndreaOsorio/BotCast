import { Component } from '@angular/core';
import { ForecastService, NextDaysForecast } from '../../../services/forecastService';
import { ViewController, NavParams} from 'ionic-angular';
import { CityManagerService } from '../../../services/cityManagerService'
import { UsersInfoService} from '../../../services/usersInfoService'

@Component({
    selector: 'forecastDetail',
    templateUrl: 'forecastDetail.html'
})

export class ForecastDetail {

    private forecast= [];
    private forecasts: NextDaysForecast[];
    private diffDays;

    public constructor(public params: NavParams,
                       public viewCtrl: ViewController,
                       private forecastService: ForecastService) {

        this.forecast = params.get('forecast');
        let date1 = this.buildLabelFromString(this.forecast[2])
        let date2 = this.buildLabelFromString(this.forecast[3])
        this.diffDays = this.calculateDifferenceInDaysBetweenDates(date1,date2);

        this.forecastService.weatherNextDays(this.forecast[0], this.diffDays).then(data => {
            for(var i=0;i<data.length;i++){
                data[i].dayOfWeek = this.buildAbbreviatedDate(data[i].date);
            }
            this.forecasts = data;
        })
    }

    public buildAbbreviatedDate(date:string){
        let abbreviatedMonthMap = {
            0:"Jan", 1:"Feb", 2:"Mar", 3:"Apr", 4:"May", 5:"Jun", 6:"Jul", 7:"Aug", 8:"Sep", 9:"Oct", 10:"Nov", 11:"Dec"
        }
        let d = new Date(date)
        return abbreviatedMonthMap[d.getMonth()]+" "+(d.getDate()+1);
    }


    public calculateDifferenceInDaysBetweenDates(initDate, finalDate){
        var timeDifferenceEpoch = Math.abs(new Date(initDate).getTime() - new Date(finalDate).getTime());
        var dayDifference = Math.ceil(timeDifferenceEpoch / (1000 * 3600 * 24));
        return dayDifference+1;
    }

    public buildLabelFromString(date:string){
        let monthMap = {
            "Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12
        }
        let year = (new Date()).getFullYear()
        let month = monthMap[date.split(" ")[0]];
        let day =  date.split(" ")[1];
        let dayCorrect = parseInt(day) <10? "0"+day: day;
        return year+"-"+month+"-"+dayCorrect;
    }


    showGraph() {
        let obj ={
            city: this.forecast[0],
            days: this.diffDays
        }

        localStorage.selectedForecastForGraph = JSON.stringify(obj)
        this.viewCtrl.dismiss({show_graph: true})
    }

    dismiss() {
        this.viewCtrl.dismiss({a:"b"});
    }


}