import { Component, OnInit } from '@angular/core';

//import {Prescription1, Medicament} from 'c:/Users/bo7/angular2 authentication/app/_models/index';
import { Router } from '@angular/router';
import { AjoutUserService } from "../_services/admin/ajoutUser.service";

@Component({
    moduleId: module.id,
    templateUrl: 'ajoutUser.component.html'
})

export class AjoutUserComponent implements OnInit {
      
        model: any = {};
    loading = false;
    error = '';
typeMedecin : any;
public sexs = [
    { value: 'Masculin'  },
    { value:  'Feminin' }
];

public professions = [
    { nom: 'Secretaire'},
    { nom:  'Medecin' },
    { nom: 'Pharmacien'  },
    { nom:  'Administrateur' },
    
];

disabled: boolean = true;

    constructor( private ajoutuserservice: AjoutUserService,private router :Router ) {
    }

        ngOnInit() {
           
this.model.type_medecin="";

        }


ajout(){
/*
console.log(this.model);

if(this.model.profession!="Medecin")
this.model.type_medecin="";

this.ajoutuserservice.ajoutUser(this.model.nom,this.model.prenom,this.model.cin,this.model.age,this.model.date_naiss,this.model.sex,this.model.tel,this.model.profession,this.model.email,this.model.etat_fam,this.model.login,this.model.pass,this.model.type_medecin)
           .subscribe(result => {
                if (result == true) {  this.router.navigate(['homeAdmin']);   }
   else { this.model={} }})
*/
}
toggleDisabled()
{

    if(this.model.profession=="Medecin")
    {this.disabled = !this.disabled;}
    else {

this.disabled=true;
this.model.type_medecin="";
    }

}




}