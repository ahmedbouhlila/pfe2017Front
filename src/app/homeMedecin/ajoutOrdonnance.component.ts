import { Component, OnInit } from '@angular/core';

//import {Prescription1, Medicament} from 'c:/Users/bo7/angular2 authentication/app/_models/index';

import { UserService } from '../_services/index';
import { AjoutOrdonnanceService } from '../_services/medecin/ajoutOrdonnance.service'
import { Prescription1, Medicament } from "../_models/index";
import { Ordonnance } from "app/_models/ordonnance";
import { ChargerOrdonnanceService } from "app/_services/medecin/chargerOrdonnance.service";
import { Router, NavigationExtras } from "@angular/router";
@Component({
    moduleId: module.id,
    templateUrl: 'ajoutOrdonnance.component.html'
})

export class AjoutOrdonnanceComponent implements OnInit {
  prescription1: Prescription1[]=[];
model: any = {};

medicaments: Medicament[]=[];
id: number;
ordonnance : string;

//
newOrdonnance :boolean;
idOrdonnace : any;
ordonnances      : Ordonnance[]=[];
displayDialog : boolean=false;
    constructor( private userservice: UserService , private router: Router,private ajoutordonnanceservice :AjoutOrdonnanceService, private chargerordonnanceservice:ChargerOrdonnanceService) {


     }

    ngOnInit() {
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.id=currentUser.id_user;

this.userservice.getmedicament()
.subscribe(      
medicaments =>{

this.medicaments=medicaments;
console.log(this.medicaments);

}
);


 
this.getordonnance();
  

  }

getordonnance()

{
   this.chargerordonnanceservice.chargerordonnance()
.subscribe(   ordonnances=>{ this.ordonnances=ordonnances ;} ); 

}





ajout(){
console.log(this.model);

let newprescription1 : any;



newprescription1={ nbrFoisMed : this.model.nbrFoisMed,

formMed : this.model.formMed,

quantMed : this.model.quantMed,
nom:  this.model.medicament,
id : this.id,
ordonnance: ""
    }
//newprescription1.formMed=this.model.formMed;
//newprescription1.nbrFoisMed=this.model.nbrFoisMed;
//newprescription1.quantMed=this.model.quantMed;
//newprescription1.idMedicaments=this.model.medicament;
console.log(newprescription1);
this.prescription1.push(newprescription1);
console.log(this.prescription1);
console.log("ok");
this.model={};

}


ajoutordonnance() {

if(this.prescription1.length!=0){

   this.prescription1[0].ordonnance=this.ordonnance;
this.ajoutordonnanceservice.ajoutOrdonnance(this.prescription1)
.subscribe(      
result =>{
    if(result)
    console.log("c bonnnnnnnn");
    this.prescription1=[];
this.getordonnance();
}
);



}


}



   onRowSelect(event: any) {
        this.newOrdonnance = false;
        this.idOrdonnace = event.data.id_ordonnance_type;
        this.displayDialog = true;

console.log(this.newOrdonnance);
console.log(this.idOrdonnace );
console.log(this.displayDialog);
    }

showDialogToAdd() {
        this.newOrdonnance  = true;
        this.prescription1=[];
        this.displayDialog = true;
   
}



voirordonnance(event: any){
    this.idOrdonnace=event.id_ordonnance_type;
 console.log(this.idOrdonnace);

let navigationExtras: NavigationExtras = {
      queryParams: { 'idordonnance': this.idOrdonnace,
      'nom': event.nom 
   
 },
      
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/homeMedecin/modifierordonnance'], navigationExtras);



}
effacerordonnace(event: any){
    this.idOrdonnace=event.id_ordonnance_type;
 console.log(this.idOrdonnace);
this.ajoutordonnanceservice.effacerOrdonnance(this.idOrdonnace)
.subscribe(      
result =>{
    if(result)
    
this.getordonnance();



}
);}

ecrireordonnance()
{

this.router.navigate(['/homeMedecin/ecrireordonnance']);

}


}