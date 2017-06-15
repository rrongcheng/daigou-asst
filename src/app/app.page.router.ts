import { DashboardPage } from '../pages/dashboard/dashboard';
import { WaybillListPage } from '../pages/waybill/waybill-list';
import { WaybillDetailPage } from '../pages/waybill/waybill-detail';

const defaultRootPage:any = DashboardPage;
export function getPage(pageType?:string){
  return defaultRootPage;
}

const arrayModuleDeclarations = [
  DashboardPage,
  WaybillListPage,
  WaybillDetailPage,
];
export interface PageInterface {
  component: any;
  name: string;
  segment: string; // name within URL, such as sessionDetail/:name
  notEntryComponents?:boolean;
}

const pages:PageInterface[] = [
  {component: DashboardPage, name:'DashboardPage', segment:'dashboard'},
  {component: WaybillListPage, name:'WaybillList', segment:'waybillList'},
  {component: WaybillDetailPage, name:'WaybillDetail', segment:'waybilldetail',notEntryComponents:true},
]

export enum PageArrayType{
  Module_Declarations,
  Module_EntryComponents,
  IonicModuleLink,
}
export function getPageArray(arrayType:PageArrayType):any[]{
  if(arrayType === PageArrayType.Module_Declarations){
    return pages.map((page)=>page.component);
  }
  if(arrayType === PageArrayType.Module_EntryComponents){
    return pages.filter((page)=>(!page.notEntryComponents)||true)
                .map((page)=>page.component);
  }
  if(arrayType === PageArrayType.IonicModuleLink){
    return pages.filter((page)=>(page.segment));
  }
  return [];
}

export function getPageByName(name:string):PageInterface{
  //let filtered = pages.filter((page)=>(page.name == name));
  let filtered = pages.filter((page)=>{
    if(page.name == name){
      return true;
    }
    return false;
  });
  return (filtered.length > 0)?filtered[0]:null;
}
