import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttprequestProvider } from '../providers/httprequest/httprequest';
import { TokenStorageProvider } from '../providers/token-storage/token-storage';
import { InterceptorProvider } from '../providers/interceptor/interceptor';
import { SigninPage } from '../pages/signin/signin';
import { SigninStorageProvider } from '../providers/signin-storage/signin-storage';
import { ErrorServiceProvider } from '../providers/error-service/error-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    HttprequestProvider,
    TokenStorageProvider,
    InterceptorProvider,
    SigninStorageProvider,
    ErrorServiceProvider
  ]
})
export class AppModule { }
