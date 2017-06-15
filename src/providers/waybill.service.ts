import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import { Waybill } from '../models/waybill';

@Injectable()
export class WaybillService {
  data : Waybill[];
  
  constructor(private http:Http){}
  
  load():Observable<Waybill[]>{
    if (this.data){ // use in memory data first
      return Observable.of(this.data);
    }else{// if not in memory, get via http
      return this.http.get('assets/data/waybills.json')
        .map(this.processData, this);
    }
  }
  
  processData(response:any){
    // save the http resonse to memory
    this.data = response.json().data as Waybill[];
    return this.data;
  }
  
  getWaybills(params:any){
    return this.load().map((data:Waybill[])=>data.sort((a:Waybill,b:Waybill)=>+(a.sendDate>b.sendDate)));
    
  }
  
}