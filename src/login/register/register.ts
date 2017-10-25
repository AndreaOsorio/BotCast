import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { UserLogin, AuthorizationService, AuthorizationToken} from '../../services/authService'
import { LoginPage } from '../login/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})

export class RegisterPage {

    slideOneForm: FormGroup;


    //TODO: implement form validators
    public constructor(public navCtrl: NavController, public authorizationService:AuthorizationService, public formBuilder: FormBuilder){
        this.slideOneForm = formBuilder.group({
            name: [''],
            email: [''],
            username: [''],
            password: [''],
            confirmpassword: ['']
        });
    }

    public register():void{
        //TODO: implement here call to POST API endpoint when backend is ready
        this.navCtrl.push(LoginPage);
    }

}