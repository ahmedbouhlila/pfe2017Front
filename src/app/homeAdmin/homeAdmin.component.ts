import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from "@angular/router";
import { Acteur } from "../_models/acteur";
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { StatService } from "../_services/admin/stat.service";


@Component({
    moduleId: module.id,
    templateUrl: 'homeAdmin.component.html'
})

export class HomeAdminComponent implements OnInit {
    //users: User[] = [];
stats : number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
statfactures: number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
options:any;
    ngOnInit() {
        // get users from secure api end point
    //    this.userService.getUsers()
      //      .subscribe(users => {
        //        this.users = users;
           // }
          //  );
this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        }; 
  

//this.acteur.type_medecin="";
   
this.statservice.getvisite()
.subscribe ( resultat => { this.stats=resultat;
console.log(this.stats);
  this.barChartData= [
    {data: [this.stats[6], this.stats[7], this.stats[8], this.stats[9], this.stats[10], this.stats[11]], label: 'Femmes'},
    {data: [this.stats[0], this.stats[1], this.stats[2], this.stats[3], this.stats[4], this.stats[5]], label: 'Hommes'}
  ];


 } );

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


 constructor(private statservice :StatService ) {
        
    }

 public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [this.stats[6], this.stats[7], this.stats[8], this.stats[9], this.stats[10], this.stats[11]], label: 'Femmes'},
    {data: [this.stats[0], this.stats[1], this.stats[2], this.stats[3], this.stats[4], this.stats[5]], label: 'Hommes'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  
//
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
 

  // events


   
   


}