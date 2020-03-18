import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, NavigationExtras } from "@angular/router";
import { Patient } from "../_models/patient";
import { IdentifierPatienttService } from "../_services/pharmacien/identifierpatient.service";

@Component({
    moduleId: module.id,
    templateUrl: 'Identifier.component.html'
})

export class IdentifierComponent implements OnInit {
        
       model: any = {};
 patients: Patient[]=[];
  id:number;
cin:number;
identifier: Boolean;
 
  

    //users: User[] = [];


    constructor(private identifierpatienttservice: IdentifierPatienttService,private userService: UserService,private router :Router) { }

    ngOnInit() {
       this.identifier=false; 
    }
gestionmedicaments()
{
console.log("xxxxx");

 let navigationExtras: NavigationExtras = {
      queryParams: {      
 },
      
      fragment: 'anchor'
    };
      
     
    


  
    this.router.navigate(['/homePharmacien/ajoutMedicaments'], navigationExtras);


}
getpatient() {
    
   this.patients=[];
  this.identifier=false;
   this.identifierpatienttservice.identifierpatient(this.model.cin)
    .subscribe(patients => {

 
this.patients=patients;
console.log("aaaaa");
 console.log(patients);
 console.log(this.patients)
if(patients.length>0)
{this.identifier=true;}
else{this.identifier=false;}
console.log(this.identifier);
 }
   
      ); 
  }
gestionordonnances()
{
    this.id=this.patients[0].id_patient;
console.log("xxxxx");

 let navigationExtras: NavigationExtras = {
      queryParams: {   'id': this.id  
 },
      
      fragment: 'anchor'
    };
      this.identifier=false;
     
    


  
    this.router.navigate(['/homePharmacien/afficherdossier'], navigationExtras);


}
}