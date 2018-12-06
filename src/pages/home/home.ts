import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttprequestProvider } from '../../providers/httprequest/httprequest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email:string;
  password:string;
  token:string;

  constructor(public navCtrl: NavController, private httpReq: HttprequestProvider) {

  }

  onLogin(){
    console.log("Login", this.email, this.password);
    this.httpReq.postUserLogin(this.email, this.password);
  }

  onSignin(){
    console.log("Signin", this.email, this.password);

  }

}
