import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';

import { Router, NavigationExtras } from '@angular/router';
import { Patient } from "../_models/patient";


@Component({
    moduleId: module.id,
    templateUrl: 'identifier.component.html',
    
})

export class IdentifierComponent implements OnInit {
    //users: User[] = [];
 model: any = {};
 patients: Patient[]=[];
  id:number;
cin:number;
identifier: Boolean;

    constructor(private identifierpatienttservice: IdentifierPatienttService,private router: Router) { }

    ngOnInit() {
        // get users from secure api end point
    //    this.userService.getUsers()
      //      .subscribe(users => {
        //        this.users = users;
           // }
          //  );
this.identifier=false;    
}



getpatient() {
   this.patients=[];
   this.identifier=false;
   this.identifierpatienttservice.identifierpatient(this.model.cin)
    .subscribe(patients => {
/*  let x=  JSON.stringify(users);
 let y=   JSON.parse(x)
this.users[0]=y.nom_patient;
this.users[1]=y.prenom_patient;
this.users[2]=y.email_patient;
this.users[3]=y.age;
this.users[4]=y.profession_patient;
*/




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


rendezvous()
{  

this.id=this.patients[0].id_patient;
 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.id },
      fragment: 'anchor'
    };
this.identifier=false;
    // Navigate to the login page with extras
    this.router.navigate(['/homeSecretaire/rendezvous'], navigationExtras);


//this.router.navigate(['/rendezvous',this.id] );


}




modifierpatient()
{  
this.cin=this.patients[0].cin;
 let navigationExtras: NavigationExtras = {
      queryParams: { 'cin': this.cin },
      fragment: 'anchor'
    };
this.identifier=false;
    // Navigate to the login page with extras
    this.router.navigate(['/homeSecretaire/modifierpatient'], navigationExtras);




}



facture(){

this.id=this.patients[0].id_patient;
 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.id },
      fragment: 'anchor'
    };
this.identifier=false;
    // Navigate to the login page with extras
    this.router.navigate(['/homeSecretaire/facturepatient'], navigationExtras);




    
}


}