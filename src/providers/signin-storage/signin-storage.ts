import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttprequestProvider } from '../httprequest/httprequest';

/*
  Generated class for the SigninStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SigninStorageProvider {

  constructor(public http: HttpClient, private httpReq: HttprequestProvider) {
    console.log('Hello SigninStorageProvider Provider');
  }

  doSignIn(email, password, company, name) {
    this.httpReq.postUserSignIn(email, password, company, name).subscribe(res => {
      console.log(res);
      return res;
    }, err => {
      console.log(err);
      return (err);
    })
  }

}
