import { Component, OnInit , Input} from '@angular/core';

import { Medecin, Creneaux, Rendez_vous, Dossier_patient } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';

import { ChargerRendez_VousService } from '../_services/secretaire/charger_rendez_vous.service';
import { ChargerDossierService } from "../_services/medecin/chargerdossier.service";
import { AfficherDossierService } from "../_services/pharmacien/afficherdossier.service";

const now = new Date();
@Component({
    moduleId: module.id,
    templateUrl: 'afficherdossier.component.html',
   
  
})

export class AfficherDossierComponent implements OnInit {
       emptymessage : string ="Aucun resultat"; 
        dossier_patient: Dossier_patient[];
        id_patient: number;
   selected:Dossier_patient;
model: any={};
   
    constructor(private afficherdossierservice: AfficherDossierService,   private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router ) {
 
    
     
       activatedRoute.queryParams.subscribe(
      data =>{ this.id_patient=data['id']});
       console.log(this.id_patient);}

    ngOnInit() {
        

   



console.log("eeeeee")
    this.afficherdossierservice.afficherdossier(this.id_patient)
    .subscribe(  dossier => {

this.dossier_patient=dossier;
console.log("xxxx")
 console.log(this.dossier_patient);
 console.log("init");
console.log(localStorage.getItem('currentUser'));
    } )
    
;
    
}
afficherdetails()
{
console.log("xxxxx");
console.log(this.selected);
let id_visite=this.selected.id_visite;
 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': id_visite,
    
 },
      
      fragment: 'anchor'
    };

console.log(localStorage.getItem('currentUser'));

    // Navigate to the login page with extras
    this.router.navigate(['/homePharmacien/afficherdetails'], navigationExtras);




}  
 }   



