import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/storage";
var Angularconfig = {
  apiKey: "AIzaSyBqRG6hky0CCcsmaoTATLpdhmB14ERNbHw",
  authDomain: "devdactictest-b9282.firebaseapp.com",
  databaseURL: "https://devdactictest-b9282.firebaseio.com",
  projectId: "devdactictest-b9282",
  storageBucket: "devdactictest-b9282.appspot.com",
  messagingSenderId: "254464293827"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(Angularconfig),AngularFireDatabaseModule,AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
