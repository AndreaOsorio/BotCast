import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CityManagerService, Cities, ActiveCity } from '../../../services/cityManagerService'
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';
import * as $ from 'jquery';

@Component({
    selector: 'adminCities',
    templateUrl: 'cities.html'
})

/**
 * Admin cities tab constructor
 */
export class AdminCities {

    public cities: ActiveCity[] = [];
    public citiesSearch: Cities[] = [];
    private subject: Subject<string> = new Subject();

    public constructor(private cityManagerService: CityManagerService, public navCtrl: NavController) {
        cityManagerService.retrieveActiveCities().then(data=>this.cities=data);
    }

    ngOnInit() {
        this.subject.debounceTime(500).subscribe(citySearch => {
            this.handleSearch(citySearch);
        });

        $("#ion-grid-search-results-container").hide();
    }

    onKeyUp(citySearch: string){
        this.subject.next(citySearch);

    }

    handleSearch(searchedCity){
        if(searchedCity==""){
            $("#ion-grid-search-results-container").hide();
        }else{
            $("#ion-grid-search-results-container").show();
        }

        this.cityManagerService.retrieveSearchedCityInfo(searchedCity).then(data => this.citiesSearch = data);
    }

    removeFromActiveCities = function(e){
        let idCityToDelete = $(e.currentTarget).parent().siblings().children("input").val();
        this.cityManagerService.removeCity(idCityToDelete).then( res=> {
            console.log(res.message);
            //TODO: display modal window, city erased or something
            this.cities = this.cities.filter(function (city) {
                return city.id !== idCityToDelete;
            });
        });

    }

    addToActiveCities = function(e){
        let arr =[];
        $(e.currentTarget).parent().siblings().each(function(){
            arr.push($(this).text())
        });

        this.cityManagerService.addToActiveCitiesService(
            arr[0].split(",")[0],
            arr[0].split(",")[1],
            arr[1]).then(res=>{
                this.cities.push(new ActiveCity(res.id,arr[0].split(",")[0],arr[0].split(",")[1], arr[1], true))
            }
        );

    }


}