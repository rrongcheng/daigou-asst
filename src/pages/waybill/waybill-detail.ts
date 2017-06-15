import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Waybill } from '../../models/waybill';

@Component({
  selector: 'page-waybill-detail',
  templateUrl: 'waybill-detail.html'
})
export class WaybillDetailPage {
  waybill: Waybill;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.waybill = this.navParams.data.waybill || {};
  }

}
