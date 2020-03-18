import { Component, OnInit , Input} from '@angular/core';


import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';


import { AjoutPatientService } from '../_services/secretaire/ajoutpatient.service';
import {ChargerOrdonnanceService} from '../_services/medecin/chargerOrdonnance.service';
import {ChargerPrescriptionService} from'../_services/medecin/chargerPrescription.service';

import { AjoutVisiteService } from '../_services/medecin/ajoutVisite.service';
import { Ordonnance } from "../_models/ordonnance";
import { Prescription1 } from "../_models/index";
import { Medicament } from "../_models/medicament";
import { Visite } from "../_models/visite";
import { Patient } from "app/_models/patient";


@Component({
    moduleId: module.id,
    templateUrl: 'visite.component.html',
     styleUrls: ['visite.component.scss'],
  
})

export class VisiteComponent implements OnInit {
 id_patient :any;
    ordonnances      : Ordonnance[]=[];
idOrdonnance : number;
 prescription1 : Prescription1[]=[];
ordonnancesglobale :  Ordonnance[]=[];
idOrdonnanceglobale : number;
medicaments: Medicament[]=[];
model: any = {};
idrdv : number;
rapport : string;
visite : Visite[]=[];
//
listordonnances: Ordonnance[]=[];
index: number;
patient: Patient=new Patient()
//
 displayDialog: boolean=false;
   prescription: Prescription1=new Prescription1();
   num: any;
text: string;
ecrire: boolean = false;

public formes =  [
    { value: 'Avant le repas'  },
    { value:  'Aprés le repas' },
    { value:  'Avant de dormir' },
    
];



     constructor(  private ajoutvisiteservice :AjoutVisiteService ,private userservice :UserService ,private chargerprescriptionservice:ChargerPrescriptionService, private activatedRoute: ActivatedRoute,private router: Router ,private chargerordonnanceservice: ChargerOrdonnanceService) {
 //this.id = params.get('id');

console.log("hoho");
    activatedRoute.queryParams.subscribe(
      data =>{ this.id_patient=data['id'],
    
  this.idrdv=data['idrdv']
});
console.log("gogo");
     
      
     }

    ngOnInit() {
this.idOrdonnanceglobale=0;
this.idOrdonnance=0;
this.chargerordonnanceservice.chargerordonnance()
.subscribe(   ordonnances=>{ this.ordonnances=ordonnances ;
    console.log("toull"+ordonnances.length);
for  ( let i =0; i<ordonnances.length ; i++  )
{
this.listordonnances.push( ordonnances[i]  );


}


this.userservice.getOrdonnances()
.subscribe(   ordonnances=>{ this.ordonnancesglobale =ordonnances ;

    console.log("toull"+ordonnances.length);
for  ( let i =0; i<ordonnances.length ; i++  )
{
    let x=new Ordonnance();
    x.nom=ordonnances[i].nom+" (globale)";
x.id_ordonnance_globale=ordonnances[i].id_ordonnance_globale;
x.date_ord=ordonnances[i].date_ord;

this.listordonnances.push( x );


}

console.log(this.listordonnances);


}    );





}    );




this.userservice.getmedicament()
.subscribe(      
medicaments =>{

this.medicaments=medicaments;

}
);

this.userservice.chargerpatient(this.id_patient)
.subscribe(
result=> { this.patient=result;

console.log("patient");
console.log(this.patient);

   }


)

}


SelectOrdonnance(){

console.log("aaaa "+this.index);


console.log(this.listordonnances[this.index].id_ordonnance_globale);

if(this.listordonnances[this.index].id_ordonnance_globale>0)
{
console.log("globale" );
this.prescription1=[];

  this.chargerprescriptionservice.chargerprescriptionglobale(this.listordonnances[this.index].id_ordonnance_globale)
  .subscribe(
    prescription1=>{
        
        this.prescription1=prescription1;

    }

  
   );




}
else{
console.log("hhhhh ",this.listordonnances[this.index].id_ordonnance_type );

 this.prescription1=[];

  this.chargerprescriptionservice.chargerprescription(this.listordonnances[this.index].id_ordonnance_type)
  .subscribe(
    prescription1=>{
        
        this.prescription1=prescription1;

    }

  
   );



}



}
annulerord()
{
this.prescription1=[];
this.index=-1;






}



SelectOrdonnanceType()
{this.idOrdonnanceglobale=0;
 this.prescription1=[];
if (this.idOrdonnance!=0){
  this.chargerprescriptionservice.chargerprescription(this.idOrdonnance)
  .subscribe(
    prescription1=>{
        
        this.prescription1=prescription1;

    }

  
   );
 console.log(this.ordonnancesglobale); 
    console.log("qsdfg");
console.log(this.ordonnances);
console.log(this.idOrdonnance);

}
}


annuler(){
    this.prescription1=[];
this.idOrdonnance=0;

}

SelectOrdonnanceGlobale()
{
    this.idOrdonnance=0;
 this.prescription1=[];
if (this.idOrdonnanceglobale!=0){
  this.chargerprescriptionservice.chargerprescriptionglobale(this.idOrdonnanceglobale)
  .subscribe(
    prescription1=>{
        
        this.prescription1=prescription1;

    }

  
   );





}
}


annuler1(){
    this.prescription1=[];
this.idOrdonnanceglobale=0;

}


ajout(){
console.log(this.model);

let newprescription1 : any;



newprescription1={ nbrFoisMed : this.model.nbrFoisMed,

formMed : this.model.formMed,

quantMed : this.model.quantMed,
nom:  this.model.medicament,
//id : 0,
//ordonnance: ""
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

annulertout(){

this.model={};
this.idOrdonnance=0;
 this.prescription1=[];
 this.idOrdonnanceglobale=0;


}

finvisite()
{
console.log(this.rapport);

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 let idUser=currentUser.id_user;

for (let prescrip of this.prescription1) {
     

let visite : any;



visite={ 
     idRdv: this.idrdv,
	
    rapport : this.rapport,	
	idUser:idUser,
	idPatient: this.id_patient,
	
	nbrFoisMed :prescrip.nbrFoisMed,

	formMed : prescrip.formMed,

	quantMed : prescrip.quantMed,
	 nom: prescrip.nom ,


    }
//newprescription1.formMed=this.model.formMed;
//newprescription1.nbrFoisMed=this.model.nbrFoisMed;
//newprescription1.quantMed=this.model.quantMed;
//newprescription1.idMedicaments=this.model.medicament;

this.visite.push(visite);





}

this.ajoutvisiteservice.ajoutOrdonnance(this.visite)
 .subscribe(result => {
                if (result === true) {
     console.log("gggggggggggggggggggg");
    
    this.router.navigate(['/homeMedecin/homeMedecin']);


}  } );

 }

afficherdossier(){

 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.id_patient
   
 },
      
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/homeMedecin/chargerdossier'], navigationExtras);


}


effacer(i : any)
{

  console.log(i);
this.prescription1.splice(i,1);


}

modifier(i : any)
{
this.prescription=this.prescription1[i];
this.num=i;

this.displayDialog=true;

}
confirmermodifier()

{
this.prescription1[this.num].formMed=this.prescription.formMed;
this.prescription1[this.num].nbrFoisMed=this.prescription.nbrFoisMed;
this.prescription1[this.num].quantMed=this.prescription.quantMed;
this.displayDialog=false;

}

ecrire1(){ 
this.ecrire=true;


   }
imprimer()
{
  this.ecrire;
    let printContents, popupWin;
   // printContents = document.getElementById('print-section').innerHTML;
printContents=this.text;
  

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

}
