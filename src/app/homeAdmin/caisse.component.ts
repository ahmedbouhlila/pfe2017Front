import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, NavigationExtras } from "@angular/router";
import { Acteur } from "../_models/acteur";
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { StatService } from "../_services/admin/stat.service";
import {CalendarModule} from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Facture } from "app/_models/facture";
import { IdentifierCaisseService } from "app/_services/admin/caisse.service";


@Component({
    moduleId: module.id,
    templateUrl: 'caisse.component.html'
})

export class CaisseComponent implements OnInit {
    list: any[];
    
     nom;
   prenom;
    sales;
   model: any = {};
 factures: Facture[]=[];
  id:number;
cin:number;
identifier: Boolean;
    
  listsecretaires : any[];
  listmontants : any [];
    //users: User[] = [];
stats : number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
statfactures: number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
options: any;

// date1  et date 2
    date1: string;
    date2: string;
    overlays: any[];
    ngOnInit() {
      this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        }; 



        this.statservice.getfacture()
.subscribe(  result =>{
    this.statfactures=result;
this.lineChartData= [
    {data: [this.statfactures[0], this.statfactures[1], this.statfactures[2], this.statfactures[3], this.statfactures[4], this.statfactures[5]], label: 'Medecin'},
    {data: [this.statfactures[6], this.statfactures[7], this.statfactures[8], this.statfactures[9], this.statfactures[10], this.statfactures[11]], label: 'Pharmacien'},
    {data: [this.statfactures[0]+this.statfactures[6], this.statfactures[1]+this.statfactures[7], this.statfactures[2]+this.statfactures[8], this.statfactures[3]+this.statfactures[9], this.statfactures[4]+this.statfactures[10], this.statfactures[5]+this.statfactures[11]], label: 'Total'}
    
  ];


}    );


 }


  

 constructor(private statservice :StatService , private identifiercaisseservice: IdentifierCaisseService, private router: Router) {
        
}
public lineChartData:Array<any> = [
    {data: [0, 0, 0, 0, 0, 0], label: 'Medecin'},
    {data: [0, 0, 0, 0, 0, 0], label: 'Pharmacien'},
    {data: [0, 0, 0, 0, 0, 0], label: 'Total'}
    
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },    
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  


getCaisse() {
 
   console.log(this.date1);
    console.log("aaaaa");
  
  this.identifiercaisseservice.identifiercaisse(this.date1, this.date2)
    .subscribe(list => {

this.listsecretaires=list[0];
this.listmontants=list[1];

console.log(this.listsecretaires);

console.log(this.listmontants);
console.log("aaaaa");

  
 
 
}
  
      ); 
  }
}