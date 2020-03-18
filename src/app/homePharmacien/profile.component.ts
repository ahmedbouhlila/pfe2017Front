import { Component, OnInit } from '@angular/core';

//import {Prescription1, Medicament} from 'c:/Users/bo7/angular2 authentication/app/_models/index';
import { Router } from '@angular/router';
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { Prescription1 } from "../_models/prescription1";
import { Medicament } from "../_models/medicament";
import { UserService } from "../_services/user.service";
import { AjoutOrdonnanceGlobaleService } from "../_services/admin/ajourOrdonnanceGlobale.service";
import { Acteur } from "app/_models";

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
        
        acteur : Acteur=new Acteur();
        acteur1: Acteur= new Acteur();
public sexs = [
    { value: 'Masculin'  },
    { value:  'Feminin' }
];
public situationFams =  [
    { value: 'Célibataire'  },
    { value:  'Marié(e)' },
    { value:  'Divorcé(e)' },
    { value:  'Veuf(ve)' },
];


ancienpass: string;
nouveaulogin: string;
nouveaupass: string;
nouveaupass1: string;
    constructor( private ajoutuserservice : AjoutUserService) {


     }

    ngOnInit() {
    this.getuser();

   }


getuser(){

this.ajoutuserservice.chargerprofile()
.subscribe(  result => {  this.acteur=result   
console.log(this.acteur);
this.acteur1=result;


}    );


}


modifier(){
    
   this.ajoutuserservice.modifierUser(this.acteur)
      .subscribe(result => {
     if(result)
     {

localStorage.removeItem('currentUser');
let token="";

let role

 switch (this.acteur.profession)
  {
      
  case 'Secretaire' :
    role=1;
    break;
  case 'Medecin' :
  role=3;
    break;
case 'Pharmacien' :
  role=4;
    break;
    case 'Administrateur' :
 role=2;
    break;

default : 
role=0;
;


}   

 localStorage.setItem('currentUser', JSON.stringify({ username: this.acteur.login, password: this.acteur.pass ,token: token ,nom : this.acteur.nom, prenom : this.acteur.prenom ,id_user: this.acteur.id_user , role :  role}));



this.ngOnInit();

     }    
 
      });
}

modifier1(){
    
if(  (this.acteur1.pass== this.ancienpass ) &&( this.nouveaupass==this.nouveaupass1   ) )
{    this.acteur1.pass=this.nouveaupass1;
    console.log("aaaaa");
    console.log(this.acteur1);
   this.ajoutuserservice.modifierUser(this.acteur1)
      .subscribe(result => {
     if(result)
     {
         this.ancienpass="";
this.nouveaupass="";
this.nouveaupass1="";

localStorage.removeItem('currentUser');
let token="";

let role

 switch (this.acteur1.profession)
  {
      
  case 'Secretaire' :
    role=1;
    break;
  case 'Medecin' :
  role=3;
    break;
case 'Pharmacien' :
  role=4;
    break;
    case 'Administrateur' :
 role=2;
    break;

default : 
role=0;
;


}   

 localStorage.setItem('currentUser', JSON.stringify({ username: this.acteur1.login, password: this.acteur1.pass ,token: token ,nom : this.acteur1.nom, prenom : this.acteur1.prenom ,id_user: this.acteur1.id_user , role :  role}));

this.ngOnInit();

     }    
 else{
this.ancienpass="";
this.nouveaupass="";
this.nouveaupass1="";
this.ngOnInit();

 }

      });
}
else {
this.ancienpass="";
this.nouveaupass="";
this.nouveaupass1="";
this.ngOnInit();

}


}


}