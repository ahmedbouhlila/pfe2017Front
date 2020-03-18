import { Component, OnInit , Input} from '@angular/core';

import { Medecin, Creneaux, Rendez_vous, Dossier_patient } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';

import { ChargerRendez_VousService } from '../_services/secretaire/charger_rendez_vous.service';
import { ChargerDossierService } from "../_services/medecin/chargerdossier.service";
import { ChargerDetailsService } from "../_services/medecin/chargerdetails.service";

const now = new Date();
@Component({
    moduleId: module.id,
    templateUrl: 'chargerdetails.component.html',
   
  
})

export class ChargerDetailsComponent implements OnInit {
        [name: string]: any;
        dossier_patient: Dossier_patient[];
        id_patient: number;
   x : any ;
model: any={};
   
    constructor(private chargerdetailsservice: ChargerDetailsService,   private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router ) {
 
    
     
       activatedRoute.queryParams.subscribe(
      data =>{ this.id_visite=data['id']});
       console.log(this.id_visite);}

    ngOnInit() {
        

   



console.log("eeeeee")
    this.chargerdetailsservice.chargerdetails(this.id_visite)
    .subscribe(  details => {

this.details=details;
console.log("xxxx")
 console.log(this.details);
 console.log("init");
console.log(localStorage.getItem('currentUser'));
   
this.x=this.details[0].rapport;

 } );
    
}
 }   



