import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninStorageProvider } from '../../providers/signin-storage/signin-storage';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  email: String;
  password: String;
  company: String;
  name: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private SignIn: SigninStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onRegister() {
    console.log("onRegister()", this.email, this.password, this.company, this.name);
    this.SignIn.doSignIn(this.email, this.password, this.company, this.name);
  }

}
