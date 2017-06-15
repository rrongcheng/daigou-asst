import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WaybillListPage } from '../waybill/waybill-list';

@Component({
  selector: 'page-dashboard',
  templateUrl:'dashboard.html',
})
export class DashboardPage {
  constructor(public navCtrl: NavController){}
  
  goToWaybillList(){
    this.navCtrl.push(WaybillListPage);
  }
}