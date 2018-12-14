import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttprequestProvider } from '../httprequest/httprequest';
import { ErrorServiceProvider } from '../error-service/error-service';

@Injectable()
export class TokenStorageProvider {

  constructor(public http: HttpClient, private httpRequest: HttprequestProvider, private errorHandler: ErrorServiceProvider) {
    console.log('Hello TokenStorageProvider Provider');

  }

  getToken(email, password) {
    console.log("getToken", email, password);
    this.httpRequest.postUserLogin(email, password).subscribe(res => {
      console.log(res.token);
      localStorage.setItem("token", res.token);
    }, (err => {
      this.errorHandler.errorHandlingLogin(err);
    }))
  }

}
