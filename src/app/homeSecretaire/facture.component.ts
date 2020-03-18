import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Patient } from "../_models/patient";
import { FactureService } from "../_services/secretaire/facture.service";
import { Facture } from "../_models/facture";
import { PayerFactureService } from "../_services/secretaire/payerfacture.service";


@Component({
    moduleId: module.id,
    templateUrl: 'facture.component.html'
})

export class FactureComponent implements OnInit {
    //users: User[] = [];
 model: any = {};
 patients: Patient[]=[];
  id_patient:number;
cin:number;
factures : Facture[]=[];
montantGlobale: number;
//
facturesmedecin : Facture[]=[];
facturespharmacien : Facture[]=[];
//

//

nbrfacturemedecin:number;
nbrfacturepharmacien:number;


//
 etablissement:string;
	 adresseEtab:string;
	numTel:number;
	numFax:number;
	numFacMedecin:number;
	numFacPharmacien:number;
     nomPreparateur:string="";
	 prenomPreparateur:string="";
	dateEdition:string;
	ribBanque:number;
	etat:string;
	typeFacture:string;
    montant:number;
typepayement:string;
//

disabled:boolean;

public type = [
    { value: 'espèce'  },
    { value:  'chèque' }
];
facturemedecin:boolean;
facturepharmacien:boolean;
//
numero: number;
      constructor(  private payerfactureservice : PayerFactureService ,private factureservice : FactureService ,private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router ) {
 //this.id = params.get('id');
    activatedRoute.queryParams.subscribe(
      data => this.id_patient=data['id']);

      console.log(this.id_patient);
     }

    ngOnInit() {
  this.factureservice.getfacture(this.id_patient)
  .subscribe(  factures => {   
this.factures=factures;
console.log(this.factures[0]);
console.log("aaaaaa");
console.log(factures );
console.log("bbbb");
this.disabled=true;
this.typepayement="";
this.montantGlobale=0;
this.facturemedecin=false;
this.facturepharmacien=false;
this.nbrfacturemedecin=0;
this.nbrfacturepharmacien=0;
for(let i = 0; i < this.factures.length; i++) {
           
            this.montantGlobale=this.montantGlobale+this.factures[i].montant;
           if( this.factures[i].typeFacture=="medecin" ) 
           { this.facturemedecin=true;
           this.nbrfacturemedecin++;
           this.facturesmedecin.push(this.factures[i]);
        }
              if( this.factures[i].typeFacture=="pharmacien" ) 
           { this.facturepharmacien=true;
            this.nbrfacturepharmacien++;
           this.facturespharmacien.push(this.factures[i]);   
        }

        }
//




this.etablissement="CNSS";
	 this.adresseEtab="36rue mohamed 5";
	this.numTel=25654852
	this.numFax=71564266;
	this.nomPreparateur="";
	 this.prenomPreparateur="";




}  




   )

    }

payer(){
if( (this.typepayement=="espèce" )|| (this.typepayement== "chèque" ) )
{console.log("bienbien");

this.factures[0].etablissement=this.etablissement;
this.factures[0].adresse_etab	 =this.adresseEtab;
this.factures[0].num_tel	=this.numTel;
this.factures[0].num_fax	=this.numFax;
this.factures[0].nom_preparateur	=this.nomPreparateur;
this.factures[0].prenom_preparateur	 =this.prenomPreparateur;
this.factures[0].typepayement     =this.typepayement;
console.log("factures");
console.log(this.factures);

this.payerfactureservice.payerfacture(this.factures)
.subscribe(   resultat =>{   
    if( resultat )
     this.router.navigate(['/homeSecretaire/identifier']);    }  );

}
console.log(this.typepayement);


}


}