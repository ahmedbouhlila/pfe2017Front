import { Component, OnInit , Input} from '@angular/core';

import { Medecin, Creneaux, Rendez_vous, Dossier_patient } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/pharmacien/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';

import { ChargerRendez_VousService } from '../_services/secretaire/charger_rendez_vous.service';
import { ChargerDossierService } from "../_services/medecin/chargerdossier.service";
import { ChargerDetailsService } from "../_services/medecin/chargerdetails.service";
import { AfficherDetailsService } from "../_services/pharmacien/afficherdetails.service";
import { OrdonnancePharmacien } from "../_models/ordonnancePharmacien";
import { OrdonnancePharmacien1 } from "app/_models/OrdonnancePharmacien1";
import { ValiderFactureService } from "app/_services/pharmacien/validerfacture.service";

const now = new Date();
@Component({
    moduleId: module.id,
    templateUrl: 'afficherdetails.component.html',
   
  
})

export class AfficherDetailsComponent implements OnInit {
       
id_visite : number;

details : OrdonnancePharmacien1[]=[];
   
   detailsnondisponible : OrdonnancePharmacien1[]=[];
  detailsfacture :  OrdonnancePharmacien1[]=[];
  montant : number=0;  
  displayDialog : boolean =false;
    constructor(private validerfactureservice:ValiderFactureService,private afficherdetailsservice: AfficherDetailsService,   private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router ) {
 
    
     
       activatedRoute.queryParams.subscribe(
      data =>{ this.id_visite=data['id']});
       }

    ngOnInit() {
        

    this.afficherdetailsservice.afficherdetails1(this.id_visite)
    .subscribe(  details => {

this.details=details;} );



  
}

afficherfacture()
{/*
console.log("xxxxx");

 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.id_visite,
    
 },
      
      fragment: 'anchor'
    };

console.log(localStorage.getItem('currentUser'));
 console.log(this.id_visite);
    // Navigate to the login page with extras
    this.router.navigate(['/homePharmacien/facturepharmacien'], navigationExtras);

*/
this.detailsnondisponible=[];
this.displayDialog=true;
 this.detailsfacture=[];
for(let i = 0; i < this.details.length; i++){

if( this.details[i].check   )
{

this.details[i].prixTotale=this.details[i].prixUnitaire*this.details[i].quantprise;
this.montant+=this.details[i].prixTotale;
if(   this.details[i].quantprise> 0  )
    {this.detailsfacture.push(this.details[i]);}

if(  (this.details[i].quantmax==0 ) || (this.details[i].quantMed != this.details[i].quantprise    )   )
{
this.detailsnondisponible.push( this.details[i] );

}


}




}



} 
//

	


//
imprimer(): void {
    let printContents, popupWin;
   // printContents = document.getElementById('print-section').innerHTML;
printContents="<table> <tr><th>Nom medicament</th> <th>Forme Médicament</th> <th>Nombre de Fois (jours)</th> <th>Médicaments Restants</th> </tr>";

for(let i = 0; i < this.detailsnondisponible.length; i++)
{
    let x = this.detailsnondisponible[i].quantMed-this.detailsnondisponible[i].quantprise;
printContents= printContents+ "<tr> <td align=center  width=\" 30% \">" +this.detailsnondisponible[i].nom+"</td><td align=center width=\" 30% \">"+this.detailsnondisponible[i].formMed+
"</td><td align=center width=\" 20% \"> "+this.detailsnondisponible[i].nbrFoisMed+
"</td><td align=center width=\" 20% \">"+x+"</td></tr>";

}
    printContents= printContents+ " </table>"

    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
     
      <head>
       
         <p>Rue du lac de constance 
       Berges du lac–Tunis</p>
       <p>Tel:(+216) 74267693</p>
       <p>Fax:(+216) 74960309</p>
       <p>Mail:polyclinique.wevioo@gnet.tn</p>
     
        
    </head>
      <img src="/src/img/xxx.png" id="bg" alt=""   style="position:absolute;top:1px;right:1px;">
         
    
   
   
    <body  onload="window.print();window.close()">
    
    
                
                  
            
<div style="text-align:center">
 <br><br><br><br><br><br>
                
               <font size=50>${printContents}</font>          







      
              
         
 </body>
    
 <br><br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br>
    <img src="/src/img/images.jpg" id="bg" alt="">
    
    </html>`
    );
    popupWin.document.close();
}

valider()

{
this.validerfactureservice.validation(this.montant,this.id_visite,this.detailsfacture)
 .subscribe(   resultat => {  
if ( resultat  )
{
 this.displayDialog =false; 
this.router.navigate(['/homePharmacien/identifier']);

}



 }     );



}




 }   



