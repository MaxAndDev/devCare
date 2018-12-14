import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttprequestProvider } from '../httprequest/httprequest';


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
