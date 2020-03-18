import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutCreneauxService } from "app/_services/medecin/ajoutcreneaux.service";
import { Rendez_vousMedecin } from "app/_models";
import { Conger } from "app/_models/conger";

@Component({
  templateUrl: 'gestionConger.component.html'
})
export class GestionCongerComponent implements OnInit {
        displayDialog: boolean = false;
       
model1: any={};      

rendezVousConger: Rendez_vousMedecin[] = [];
    listconger: Conger[]=[];
   
  constructor(private ajoutcreneauxservice:AjoutCreneauxService,private router :Router ) { }
 


  ngOnInit() {
            
this.ajoutcreneauxservice.listconger()
.subscribe(  result=> {  this.listconger=result;   } );

this.displayDialog=false;
        }





ajoutconger(){
console.log(this.model1.dateDebut);
console.log(this.model1.dateFin)
this.ajoutcreneauxservice.ajoutconger(this.model1.dateDebut,this.model1.dateFin)
 .subscribe(result => {
      
    this.rendezVousConger=result;
this.displayDialog=true;
console.log(this.rendezVousConger);
 });


}


confirmerconger(){
console.log(this.model1.dateDebut);
console.log(this.model1.dateFin)

this.ajoutcreneauxservice.validerconger(this.model1.dateDebut,this.model1.dateFin,this.rendezVousConger)
.subscribe(result => {
               if (result === true) {
     console.log("gggggggggggggggggggg");
    
this.ngOnInit();
this.model1={};  
this.displayDialog=false; 
 this.router.navigate(['/homeMedecin/gestionconger']);             
 }});



}







}