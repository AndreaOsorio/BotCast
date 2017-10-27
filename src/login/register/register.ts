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
    /**
     *
     * @param navCtrl: application navigation controller to find your way between views
     * @param authorizationService: service that provides users with authorization tokens once registered
     * @param formBuilder: angular utility for form validation
     * Register form component basic constructor
     */
    public constructor(public navCtrl: NavController, public authorizationService:AuthorizationService, public formBuilder: FormBuilder){
        this.slideOneForm = formBuilder.group({
            name: [''],
            email: [''],
            username: [''],
            password: [''],
            confirmpassword: ['']
        });
    }

    /**
     * Form fields will be validated and sent to backend for user final registration
     */
    public register():void{
        //TODO: implement here call to POST API endpoint when backend is ready
        this.navCtrl.push(LoginPage);
    }

}