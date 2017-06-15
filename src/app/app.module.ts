import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PageArrayType, getPageArray } from './app.page.router';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ].concat(getPageArray(PageArrayType.Module_Declarations)),
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{links:getPageArray(PageArrayType.IonicModuleLink)})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,HomePage
  ].concat(getPageArray(PageArrayType.Module_EntryComponents)),
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
