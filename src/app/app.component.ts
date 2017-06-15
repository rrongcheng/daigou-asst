import { Component,ViewChild,ErrorHandler } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { getPage,PageInterface,getPageByName } from './app.page.router';

export interface MenuPage {
  title: string,
  icon: string,
  page: PageInterface,
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  @ViewChild(Nav) nav: Nav;
  menuPublicPages:MenuPage[] =[
    {title: 'Dashboard',    icon: 'speedometer',    page: getPageByName('Dashboard')},
    {title: 'Waybill',    icon: 'paper-plane',    page: getPageByName('WaybillList')},
  ];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private errorHandler: ErrorHandler
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.rootPage = getPage();
  }

  openPage(page: PageInterface){
    this.nav.setRoot(page.name)
        .catch((err:Error)=>{
          this.errorHandler.handleError(err);
          console.log(`Didn't set nav root: ${err}`);
        })
  }

  isActive(page:PageInterface){
    let activeColor:string = 'primary';
    let childNav = this.nav.getActiveChildNav();
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.component){
        return activeColor;
      }
    }

    return (page && this.nav.getActive() && this.nav.getActive().name === page.name)?activeColor:'';
  }
}
