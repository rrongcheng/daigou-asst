import { Component } from '@angular/core';

import { Config, NavController } from 'ionic-angular';

import { Waybill } from '../../models/waybill';
import { WaybillDetailPage } from './waybill-detail';

@Component({
  selector: 'page-waybill-list',
  templateUrl: 'waybill-list.html'
})
export class WaybillListPage {
  waybills: Waybill[] = [];

  constructor(
    public navCtrl: NavController,
    public config: Config
  ) { }

  ionViewDidLoad() {
    // this.confData.getSpeakers().subscribe((speakers: any[]) => {
    //   this.speakers = speakers;
    // });
  }

  goToWaybillDetail(waybill: Waybill) {
    this.navCtrl.push(WaybillDetailPage, {
      waybill:waybill
    });
  }


}
