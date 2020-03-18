import { Component, OnInit } from '@angular/core';

//import {Prescription1, Medicament} from 'c:/Users/bo7/angular2 authentication/app/_models/index';
import { Router } from '@angular/router';
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { Prescription1 } from "../_models/prescription1";
import { Medicament } from "../_models/medicament";
import { UserService } from "../_services/user.service";
import { AjoutOrdonnanceGlobaleService } from "../_services/admin/ajourOrdonnanceGlobale.service";

@Component({
    moduleId: module.id,
    templateUrl: 'ordonnanceGlobale.component.html'
})

export class OrdonnanceGlobaleComponent implements OnInit {
        
        
        prescription1: Prescription1[]=[];
model: any = {};

medicaments: Medicament[]=[];
id: number;
ordonnance : string;
    constructor( private userservice: UserService , private ajoutordonnanceglobaleservice :AjoutOrdonnanceGlobaleService) {


     }

    ngOnInit() {
 

this.userservice.getmedicament()
.subscribe(      
medicaments =>{

this.medicaments=medicaments;
console.log(this.medicaments);

}
);
       
    }




ajout(){
console.log(this.model);

let newprescription1 : any;



newprescription1={ nbrFoisMed : this.model.nbrFoisMed,

formMed : this.model.formMed,

quantMed : this.model.quantMed,
nom:  this.model.medicament,
id : 0,
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
this.ajoutordonnanceglobaleservice.ajoutOrdonnance(this.prescription1)
.subscribe(      
result =>{
    if(result)
    console.log("c bonnnnnnnn");
    this.prescription1=[];

}
);



}


}



}