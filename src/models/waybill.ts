import {Person} from './person';
import { shipItem } from './shipitem';
import { Carrier } from './carrier';

export class Waybill {
  sendDate:Date;
  sn:string;
  carrier: Carrier;
  sender:Person;
  receiver:Person;
  shipItemList:shipItem[];
  packageCost:number = 0; // cost for packing, mainly the cost of box
  weight:number; // in kg
  estiShipCost:number;
  finalShipCost:number; 
  
  get estiTotalCost(){
    return (this.packageCost||0) + (this.estiShipCost||0) ;
  }
  
  get finalTotalCost(){
    return (this.packageCost||0) + (this.finalShipCost||0);
  }
}