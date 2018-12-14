import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController) { }

  presentAlert(status) {
    switch (status) {
      case "Login":
        let alertLogin = this.alertCtrl.create({
          title: 'Ups!?',
          subTitle: 'Wrong EMail or Password!',
          buttons: ['OK']
        })
        alertLogin.present();
        break;
      case "SignIn": 
      let alertSignIn = this.alertCtrl.create({
        title: 'Ups!?',
        subTitle: 'EMail already exists!',
        buttons: ['OK']
      })
      alertSignIn.present();
    }
  }

  errorHandlingLogin(error) {
    console.log("ErrorHandler Login: ", error);
    this.presentAlert("Login");
  }

  errorHanlingSignIn(error) {
    console.log("ErrorHandler SignIn:", error);
    this.presentAlert("SignIn");
  }

}
