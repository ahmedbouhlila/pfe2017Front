import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { Patient } from "../_models/patient";
import { IdentifierPatienttService } from "../_services/pharmacien/identifierpatient.service";
import { ChargerFactureService } from "../_services/pharmacien/chargerfacture.service";
import { OrdonnancePharmacien } from "../_models/ordonnancePharmacien";
import { ValiderFactureService } from "../_services/pharmacien/validerfacture.service";

@Component({
    moduleId: module.id,
    templateUrl: 'facturePharmacien.component.html'
})

export class FacturePharmacienComponent implements OnInit {
      montant : number;      
      id_visite : number;
   details :  OrdonnancePharmacien[]=[] ; 
      constructor( private validerfactureservice:ValiderFactureService,private chargerfactureservice:ChargerFactureService  ,private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router ) {
 
    
     
       activatedRoute.queryParams.subscribe(
      data =>{ this.id_visite=data['id']});
       console.log(this.id_visite);}
      
      
        ngOnInit(){
            
this.chargerfactureservice.chargerfacture(this.id_visite)
.subscribe(details=> {

this.details=details;
console.log("azertyyyyyyyyy");
console.log(this.details);

this.montant=0;
  for(let i = 0; i < this.details.length; i++) {
           
            this.montant=this.montant+details[i].prixTotale;
            
        }

console.log(this.montant);


}
);



        }



validation()
{/*
this.validerfactureservice.validation(this.montant,this.id_visite,this.details)
 .subscribe(   resultat => {  
if ( resultat  )
{
this.router.navigate(['/homePharmacien/identifier']);

}



 }     );


*/

}



}