import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenStorageProvider } from '../../providers/token-storage/token-storage';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;


  constructor(public navCtrl: NavController, private tokenStorage: TokenStorageProvider) {

  }

  onLogin() {
    console.log("Login", this.email, this.password);
    this.tokenStorage.getToken(this.email, this.password);
  }

  onSignin() {
    console.log("Signin", this.email, this.password);
    this.navCtrl.push(SigninPage);
  }

}
