import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../../../login/login/login'
import { StatService, Stat } from '../../../services/statsService';

declare var google;


@Component({
    selector: 'stats',
    templateUrl: 'stats.html'
})

export class AdminStats {

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    private stats: Stat[] = [];

    public constructor(private statService: StatService, public navCtrl: NavController) {
        statService.retrieveStats().then(data=>this.stats=data);

    }

    ionViewDidLoad(){
        this.loadMap();
    }

    loadMap(){

        let latLng = new google.maps.LatLng(-34.9290, 138.6010);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }

}