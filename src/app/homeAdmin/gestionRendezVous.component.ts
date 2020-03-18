import { Component, OnInit } from '@angular/core';
import { GestionRendezVousService } from "../_services/admin/gestionRendezVous.service";
import { RendezVousAdmin } from "../_models/rendezVousAdmin";
import { ChargerRendez_VousService } from "../_services/secretaire/charger_rendez_vous.service";
import { UserService } from "../_services/user.service";
import { Patient } from "../_models/patient";
import { Medecin } from "../_models/medecin";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Creneaux } from "../_models/creneaux";
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';

declare var jsPDF: any;


@Component({
    moduleId: module.id,
    templateUrl: 'gestionRendezVous.component.html'
})



export class GestionRendezVousComponent implements OnInit {

rendezvous: RendezVousAdmin[]=[];
emptymessage : string ="Aucun resultat";
selected : RendezVousAdmin;
patients: Patient[]=[];
 patient : Patient = new Patient(); 
 //
displayDialog: boolean;
 nomPatient:any;
filteredPatient: Patient []=[];
//
medecins: Medecin[] = [];
model: any = {};
creneaux: Creneaux[]=[];
//
    constructor(private ajoutrendez_vousservice :AjoutRendez_VousService   ,private chargerrendez_vousservice:ChargerRendez_VousService,private gestionrendezvousservice:GestionRendezVousService,  private userService: UserService) { }

    ngOnInit() {


this.selected=null;
this.allrendezvous();
this.getpatient();
    }


   
exportPDF() {
           let rows : RendezVousAdmin[] = [];
            var doc = new jsPDF('p', 'pt');
            var columns = [
    {title: "Jour", dataKey: "jour"},
    {title: "hdebut", dataKey: "hdebut"}, 
    {title: "hfin", dataKey: "hfin"}, 
    {title: "mdebut", dataKey: "mdebut"},
    {title: "mfin", dataKey: "mfin"},
    {title: "Nom Medecin", dataKey: "nomMedecin"},
    {title: "Prenom Medecin", dataKey: "prenomMedecin"},
    {title: "Type Medecin ", dataKey: "type_medecin"},
    
     {title: "Nom Patient", dataKey: "nom_patient"},
    {title: "Prenom Patient", dataKey: "prenom_patient"},
    
];

console.log("aaa");
for (var i = 0; i < this.rendezvous.length; i++) { 
     
     let y:any=this.rendezvous[i];
     let x :any= {jour:this.rendezvous[i].jour,
                    hdebut:y.hdebut,
                    hfin:y.hfin,
                    mdebut :y.mdebut,
                    mfin :y.mfin,
                    
                    nomMedecin:this.rendezvous[i].nomMedecin,
                   prenomMedecin :this.rendezvous[i].prenomMedecin,
                   type_medecin :this.rendezvous[i].typeMedecin,
                   nom_patient :this.rendezvous[i].nomPatient,
                   prenom_patient :this.rendezvous[i].prenomPatient,
                    
                
            
        
    };
     
    
  
      rows.push( x ); 
                       
}
 var displayDate = new Date().toLocaleDateString();
    doc.text(200, 25, 'Liste des RDV le : '+displayDate);
   doc.autoTable(columns, rows);
    doc.save("Liste des utilisateurs ("+displayDate+").pdf");
   


}






allrendezvous(){

this.gestionrendezvousservice.getrendezvous()
.subscribe( rendezvous => {  this.rendezvous=  rendezvous  ;
                            console.log(this.rendezvous);
  }         );


}



effacer(){

if(this.selected==null)
{console.log("rien");}
else {
this.chargerrendez_vousservice.effacerrendez_vous(this.selected.idRdv)
.subscribe( resultat => {  if(resultat) 
                              {
                                 this.allrendezvous();
                               this.selected=null;  

                              }
    }   )


}

}




getpatient(){

this.userService.getpatients()
.subscribe(  patients =>  {
               this.patients = patients;
               
            } );


}
 
 
    
    filterCountrySingle(event : any )  {
       // let query = event.query;        
        //this.countryService.getCountries().then(countries => {
      //      this.filteredCountriesSingle = this.filterCountry(query, countries);
    //    });
      let query = event.query;        
        
            this.filteredPatient = this.filterCountry(query, this.patients);
console.log(this.nomPatient);
 console.log(event);
    }
    

    
      filterCountry(query:any, patients: Patient[]):Patient[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < patients.length; i++) {
            let patient = patients[i];
            if(patient.nom_patient.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(patient);
            }
        }
        return filtered;
    }
   
        
  
    
    rendez(){
let x=typeof this.nomPatient
console.log(typeof this.nomPatient);
if ( x=="object" )
{this.displayDialog=true;

  this.userService.getMedecins()
           .subscribe(medecins => {
               this.medecins = medecins;});

}
else{
this.displayDialog=false;

}
console.log(this.nomPatient);
console.log(this.medecins);
console.log(this.model);

    }
  model1: NgbDateStruct;
  date: {year: number, month: number};
   idcreneaux : number;
   
   
ajoutRendezVous(id : number){
//let x = this.model.year+"-"+this.model.month+"-"+this.model.day;
//console.log(x);
      //  this.ajoutrendez_vous.ajoutrendez_vous(this.id_creneaux,this.id_patient,x)
           // .subscribe(result => {
           //     if (result === true) {

let x;
if( this.model1.day<10 ) {
 x = this.model1.year+"-"+this.model1.month+"-0" +this.model1.day;
//x=JSON.stringify(x);}
}
else 
{ 
  x = this.model1.year+"-"+this.model1.month+"-" +this.model1.day;   
}


this.ajoutrendez_vousservice.ajoutrendez_vous(this.idcreneaux,id,x )
 .subscribe(result => {   
if (result == true)
{
    this.allrendezvous();

}
        });

}
    prendreRendezVous(){

console.log(this.model);
console.log(this.idcreneaux);
console.log(this.nomPatient);
let id =  this.nomPatient.id_patient;
console.log(id); 
this.ajoutRendezVous(id);

this.displayDialog = false;
this.creneaux=[];
this.medecins=[];
this.model={};

  }

GetCreneaux(){

console.log("eeeaa");
console.log(this.model);
let x;
if( this.model1.day<10 ) {
 x = this.model1.year+"-"+this.model1.month+"-0" +this.model1.day;
//x=JSON.stringify(x);}
}
else 
{ 
  x = this.model1.year+"-"+this.model1.month+"-" +this.model1.day;   
}


//x=JSON.stringify(x);
console.log(x);
 this.userService.getcreneaux(this.model.id_medecin,x)
           .subscribe(creneaux => {
               this.creneaux = creneaux;
               console.log(this.creneaux);
       }
          
           ); 



}



}