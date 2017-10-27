import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

/**
 * Data object that represents the user's approximate address, city and country specified in different
 * fields for faster referencing
 */
export class GeolocationAddress{
    constructor(
        public latlong:RawLocation,
        public address:string,
        public city:string,
        public country:string
    ){}
}

/**
 * Data object that corresponds to the user's current location in longitude and latitude
 */
export class RawLocation{
    constructor(
        public latitude:number,
        public longitude:number
    ){}
}

/**
 * Service that retrieves a user's current location using cordova's native hardware plugin and
 * then performs an external query to reverse geocode the user's approximate address
 */
@Injectable()
export class GeolocationService {

    constructor(private http: Http,
                private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder){
    }

    /**
     * Google Maps api root and free API key generated for this project
     */
    apiRoot:string='https://maps.googleapis.com/maps/api/geocode/json'
    apiKey:string='AIzaSyDbAbiXC0l2fZUSmPGlHZayA-KzUIfLVLo'

    /**
     * Retrieves a user's address using his/her raw location (lat and long) using the Google Maps API for reverse geocoding
     * @param latlng: the user's latitude and longitude object retrieved from the other native geolocation service
     * @returns {Promise<T>}: return a promise that contains the user's approximate address encoded in the appropriate data object
     */
    public getMyCurrentAddressBasedOnLatLong(latlng:RawLocation): Promise<GeolocationAddress> {
        let apiURL = `${this.apiRoot}?latlng=${latlng.latitude},${latlng.longitude}&key=${this.apiKey}`;
        console.log(apiURL)
        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        console.log(res.json());
                        resolve(new GeolocationAddress(
                            new RawLocation(latlng.latitude,latlng.longitude),
                            res.json().results[0].formatted_address,
                            res.json().results[5].formatted_address.split(",")[0],
                            res.json().results[5].formatted_address.split(",")[1]));
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
        return promise;
    }


    /**
     * Retrieve's a user's current lat and longitude using the device's hardware through cordova
     * @returns {Promise<T>}: returns a promise with the user's current latitude and longitude encoded in the appropriate data object
     */
    public getMyCurrentLocation():Promise<RawLocation>{
        let pseudoPromise = new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition()
                .then(
                    res=>{
                        resolve(new RawLocation(res.coords.latitude, res.coords.longitude));
                    },
                    msg => {
                        reject(msg);
                    }
                )
        });
        return pseudoPromise;
    }
}

