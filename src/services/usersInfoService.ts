import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import * as $ from 'jquery';

export class Information{
    /**
     * @param name: name of the user
     * @param age: age of the user
     * @param username: username of the user
     * @param email: email of the user
     * @param logins: number of logins from the user
     * @param lastlogin: Date in which the user last connected
     * @param lastlocation: Last location from where the user connected
     */
    constructor(
        public name:string,
        public age:number,
        public username:string,
        public email:string,
        public logins:number,
        public lastlogin:string,
        public lastlocation:string
    ){}
}

export class Usuario{
    /**
     * Utility class for standard user information transmission
     * @param name
     * @param lastname
     * @param username
     * @param email
     * @param password
     * @param cities
     */
    constructor(
        public name:string,
        public lastname:string,
        public username:string,
        public email:string,
        public password:string,
        public cities: [object]
    ){}
}

export class UsuarioLogin{
    constructor(
        public name:string,
        public email: string,
        public id:string
    ){}
}


@Injectable()
export class UsersInfoService {

    constructor(private http: Http) {
    }

    /**
     * Backend REST endpoint URL to retrieve the user info from JSON
     */
    apiRoot:string = '../assets/json/admin/usersinfo/usersinfo.json';
    // apiRootUsuario:string = 'http://localhost:3000/api/Usuarios';

    private createHeaders(authToken:string): RequestOptions{
        let headers = new Headers();
        headers.append('Authorization', authToken);
        return new RequestOptions({ headers: headers });

    }

    public retrieveUserInfoById(idUsuario:string, authToken:string):Promise<Usuario>{
        let apiRootUsuario:string = 'http://localhost:3000/api/UsuariosApp';
        let apiURL = `${apiRootUsuario}/${idUsuario}`;
        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL, this.createHeaders(authToken))
                .toPromise()
                .then(
                    res=>{
                        let user = res.json()
                        console.log(user)
                        resolve(new Usuario(
                            user.nombre,
                            user.apellido,
                            user.usuario,
                            user.email,
                            null,
                            user.ciudades
                        ))
                    },
                    msg => {
                        reject(msg);
                    }
                )
        });
        return promise;
    }

    /**
     * Retrieve user information for admin stat analysis
     * @returns {Promise<T>}
     */
    public retrieveInfo():Promise<Information[]>{
        let apiURL = `${this.apiRoot}`;

        let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => {
                        let infos:Information[] =[]
                        let infosJson = $.map(res.json(), function(e){return e});
                        console.log(infosJson)
                        $.each(infosJson, function(i,info){
                            infos.push(new Information(
                                info.name,
                                info.age,
                                info.username,
                                info.email,
                                info.logins,
                                info.lastlogin,
                                info.lastlocation)
                            )
                        });
                        resolve(infos);
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });

        return promise;
    }

    /**
     * Register a new user
     * @param usuario
     * @returns {Promise<T>}
     */
    public createNewUser(usuario:Usuario): Promise<UsuarioLogin>{
        let apiRootUsuario:string = 'http://localhost:3000/api/UsuariosApp';
        let apiURL = `${apiRootUsuario}`;
        console.log(usuario)
        let params = {
            nombre: usuario.name,
            apellido: usuario.lastname,
            email: usuario.email,
            password: usuario.password,
            usuario: usuario.username,
            ciudades: []
        }
        console.log(params)
        let promise = new Promise((resolve, reject) => {
            this.http.post(apiURL, params)
                .toPromise()
                .then(
                    res=>{
                        console.log(res)
                        let user = res.json()
                        resolve(new UsuarioLogin(
                            user.nombre,
                            user.email,
                            user.id
                        ))
                    },
                    msg => {
                        reject(msg);
                    }
                )
        });
        return promise;
    }

    /**
     * Update a user's info
     * @param idUsuario
     * @param params
     * @returns {Promise<T>}
     */

    public updateUserInfo(idUsuario:string, params, authToken):Promise<Usuario>{
        let apiRootUsuario:string = 'http://localhost:3000/api/UsuariosApp';
        let apiURL = `${apiRootUsuario}/${idUsuario}`;
        console.log(apiURL)
        let promise = new Promise((resolve, reject) => {
            this.http.patch(apiURL, params, this.createHeaders(authToken))
                .toPromise()
                .then(
                    res=>{
                        let user = res.json()
                        resolve(new Usuario(
                            user.nombre,
                            user.apellido,
                            user.usuario,
                            user.email,
                            null,
                            user.ciudades
                        ))
                    },
                    msg => {
                        reject(msg);
                    }
                )
        });
        return promise;
    }

}