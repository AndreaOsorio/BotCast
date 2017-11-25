import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { UserLogin, AuthorizationService, AuthorizationToken} from '../../services/authService'
import { UsersInfoService, Usuario } from '../../services/usersInfoService'
import { PrincipalPage } from '../../pages/principal/principal'

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})

export class RegisterPage {

    private name:string ="";
    private lastname:string ="";
    private username:string ="";
    private email:string ="";
    private password:string ="";
    private confirmpassword:string ="";
    private erroList;

    /**
     *
     * @param navCtrl: application navigation controller to find your way between views
     * @param authorizationService: service that provides users with authorization tokens once registered
     * @param formBuilder: angular utility for form validation
     * Register form component basic constructor
     */
    public constructor(public navCtrl: NavController,
                       public authorizationService:AuthorizationService,
                       public userInfoService: UsersInfoService,
                       private alertCtrl: AlertController,
                       private toastCtrl: ToastController){
        this.erroList = [];
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Thanks for registering! You can now log in.',
            buttons: [{
                text: 'Ok',
                handler: () => {
                    let navTransition = alert.dismiss();
                        navTransition.then(() => {
                            this.navCtrl.pop();
                        });
                    return false;
                }
            }]
        });
        alert.present();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: this.prettyPrintErrorList(),
            showCloseButton: true,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    prettyPrintErrorList(){
        let text = "Please check the following errors:\n"
        for(let i=0;i<this.erroList.length;i++){
            text+=" *"+this.erroList[i]+"\n";
        }
        return text;
    }

    /**
     * Form fields will be validated and sent to backend for user final registration
     */
    public register():void{
        this.erroList = [];
        let messageEmptyFields = "You have empty fields!";
        this.addToErrorList(this.validateText(this.name));
        this.addToErrorList(this.validateText(this.lastname));
        this.addToErrorList(this.validateText(this.username));
        this.addToErrorList(this.validateText(this.email));
        this.addToErrorList(this.validateText(this.password));
        this.addToErrorList(this.validateText(this.confirmpassword));
        this.addToErrorList(this.validateEmail(this.email));
        this.addToErrorList(this.checkPasswordsSame(this.password, this.confirmpassword));
        this.addToErrorList(this.checkPasswordLength(this.password, this.confirmpassword));

        if (this.erroList.length==0) {
            let usuario = new Usuario("", this.name, this.lastname, this.username, this.email, this.password, [{}], true, "")
            this.userInfoService.createNewUser(usuario).then(res => {
                console.log(res);
                this.presentAlert();
            });
        } else {
            let a = this.erroList.filter( m => m == messageEmptyFields);
            if(a.length>0){
                this.erroList = this.erroList.filter( m => m != messageEmptyFields);
                this.erroList.push(messageEmptyFields)
            }
            this.presentToast();
        }
    }

    public checkPasswordsSame(a,b){
        if(a == b){
            return "ok";
        }else{
            return "Passwords don't match"
        }
    }

    public checkPasswordLength(a,b){
        if(a.length > 30 || b.length>30){
            return "Password too long (max 30)"
        }else{
            if(a.length < 8 || b.length <8){
                return "Password too short (min 10)"
            }else{
                return "ok";
            }
        }
    }

    public validateText(text){
        if(text!=null && text!=""){
            return "ok"
        }else{
            return "You have empty fields!"
        }
    }

    public validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(email)){
            return "ok";
        }else{
            return "Invalid email!"
        }
    }

    public addToErrorList(text){
        if(text!="ok") this.erroList.push(text);
    }

}