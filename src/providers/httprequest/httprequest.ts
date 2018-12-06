import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';




@Injectable()
export class HttprequestProvider {

  api_url: string = "http://localhost:3030/user/login";

  constructor(public http: HttpClient) {
    console.log('Hello HttprequestProvider Provider');
  }

  public postUserLogin(email, password): Observable<any> {
    console.log("Provider: ", email, password);
    return this.http.post(this.api_url, {
      "email": email,
      "password": password
    }).map(response => {
      return response;
    }).catch((err) => {
      console.log(err);
      return Observable.throw(err)
    });
  }

}
