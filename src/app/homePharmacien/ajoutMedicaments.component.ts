import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from "@angular/router";

import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { Medicament } from "../_models/medicament";
import { AjoutMedicamentsService } from "../_services/pharmacien/ajoutMedicaments.service";

declare var jsPDF: any;
@Component({
    moduleId: module.id,
    templateUrl: 'ajoutMedicaments.component.html'
})

export class AjoutMedicamentsComponent implements OnInit {
         
        
       
        
       
   emptymessage : string ="Aucun resultat";     
       
   
medicaments: Medicament[]=[];

 displayDialog: boolean;


  medicament : Medicament = new Medicament(); 
   
    selectedMedicament : Medicament;
   
newMedicament : boolean;



disabled: boolean = true;


    constructor(private userservice:UserService ,private ajoutmedicamentsservice: AjoutMedicamentsService,private router :Router) { }

    ngOnInit() {
       

 
this.getmed();
//this.acteur.type_medecin="";
    }

getmed(){

 this.userservice.getmedicament( )
       .subscribe(  medicaments =>  {
               this.medicaments =medicaments;
               
            } );

}


ajoutmedicaments(){

console.log("eeeee");
console.log(this.medicament);

  this.ajoutmedicamentsservice.ajoutMedicaments(this.medicament.nom,this.medicament.prix,this.medicament.nbr)
           .subscribe(result => {
          console.log("aaaaaa");
 console.log(this.medicament);      
               
 this.medicaments=[];
     this.getmed();
     console.log("aaaaaa");
 console.log(this.medicament);
           })

}

exportPDF() {
           let rows : Medicament[] = [];
            var doc = new jsPDF('p', 'pt');
            var columns = [
    {title: "Nom Med", dataKey: "nom"},
    {title: "Nombre", dataKey: "nbr"}, 
    {title: "Prix", dataKey: "prix"}, 
   
    
];

console.log("aaa");
for (var i = 0; i < this.medicaments.length; i++) { 
     
     let x :any= {nom:this.medicaments[i].nom,
                    nbr:this.medicaments[i].nbr,
                    prix:this.medicaments[i].prix,
                  
                    
                
            
        
    };
      rows.push( x ); 
}               
 var displayDate = new Date().toLocaleDateString();
    doc.text(200, 25, 'Liste des Medicaments le : '+displayDate);
   doc.autoTable(columns, rows);
    doc.save("Liste des Medicaments  ("+displayDate+").pdf");
   
        
}



modifier(){
   this.ajoutmedicamentsservice.modifierMedicaments(this.medicament.id_medicaments, this.medicament.nom,this.medicament.nbr,this.medicament.prix)
    .subscribe(result => {

 this.medicaments=[];
     this.getmed();
  

    })

}



 showDialogToAdd() {
      
        this.newMedicament = true;
        this.medicament = new Medicament();
        this.displayDialog = true;
        
          
   }
    
    save() {

console.log("aaaaaaa");
console.log(this.medicament);

        if(this.newMedicament)
            
                this.ajoutmedicaments();

        else
            
       this.modifier();     
   
        this.medicament = null;
        
        this.displayDialog = false;
     

    }
    
   effacermedicaments(id_medicaments:number)
{
this.ajoutmedicamentsservice.effacerMedicaments(id_medicaments)
.subscribe(result => {

 this.medicaments=[];
     this.getmed();

    })


}
    delete() {
       // console.log(this.findSelectedActeurIndex());
        this.effacermedicaments(this.medicaments[this.findSelectedMedicamentIndex()].id_medicaments);
      //  this.acteurs.splice(this.findSelectedActeurIndex(), 1);
        this.medicament = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event: any) {
        this.newMedicament = false;
        this.medicament= this.cloneMedicament(event.data);
        this.displayDialog = true;
    }
    
    cloneMedicament(c: Medicament): Medicament {
        let medicament = new Medicament();
        for(let prop in c) {
            medicament[prop] = c[prop];
        }
        return medicament;
    }
    
    findSelectedMedicamentIndex(): number {
        return this.medicaments.indexOf(this.selectedMedicament);
    }










}