import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from "@angular/router";
import { Acteur } from "../_models/acteur";
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { Patient } from "../_models/patient";
import { AjoutPatientService } from "../_services/secretaire/ajoutpatient.service";

declare var jsPDF: any;
@Component({
    moduleId: module.id,
    templateUrl: 'gestionPatient.component.html'
})

export class GestionPatientComponent implements OnInit {
    //users: User[] = [];
emptymessage : string ="Aucun resultat";
patients: Patient[]=[];

 displayDialog: boolean;

//    car: Car = new PrimeCar();
  patient : Patient = new Patient();  
   // selectedCar: Car;
    selectedPatient : Patient;
   // newCar: boolean;
newPatient : boolean;

public sexs = [
    { value: 'Masculin'  },
    { value:  'Feminin' }
];

public groupes = [
    { value: 'A+'  },
    { value:  'A-' },
    { value: 'O+'  },
    { value:  'O-' },
    { value: 'AB+'  },
    { value:  'AB-' },
    { value: 'B+'  },
    { value:  'B-' },
    { value:  '' },
];



disabled: boolean = true;


    constructor(private ajoutpatientservice:AjoutPatientService,   private userService: UserService,private router :Router,private ajoutuserservice: AjoutUserService) { }

    ngOnInit() {
        // get users from secure api end point
    //    this.userService.getUsers()
      //      .subscribe(users => {
        //        this.users = users;
           // }
          //  );

   this.getpatient();

//this.acteur.type_medecin="";
    }

getpatient(){

this.userService.getpatients()
.subscribe(  patients =>  {
               this.patients = patients;
               
            } );

 

}




ajoutpatient(){
 this.ajoutpatientservice.ajoutpatient(this.patient.nom_patient, this.patient.prenom_patient, this.patient.sex,this.patient.age,this.patient.email_patient,this.patient.situation_fam,this.patient.profession_patient,this.patient.cin,this.patient.grp_SANGIN,this.patient.date_naiss)
.subscribe(result => {
 this.patients=[];
     this.getpatient();

           })
  

}

modifier(){
this.ajoutpatientservice.modifierpatient( this.patient.id_patient, this.patient.nom_patient, this.patient.prenom_patient, this.patient.sex, this.patient.age, this.patient.email_patient, this.patient.situation_fam, this.patient.profession_patient, this.patient.cin, this.patient.grp_SANGIN, this.patient.date_naiss )
     .subscribe(result => {

 this.patients=[];
     this.getpatient();

    })



}

effacerpatient(id_patient:number)
{

this.ajoutpatientservice.effacerPatient(id_patient)
.subscribe(result => {

 this.patients=[];
     this.getpatient();

    })




}

exportPDF() {
           let rows : Patient[] = [];
            var doc = new jsPDF('p', 'pt');
            var columns = [
    {title: "Nom Patient", dataKey: "nom_patient"},
    {title: "Prenom Patient", dataKey: "prenom_patient"}, 
    {title: "cin", dataKey: "cin"}, 
    {title: "Date_naiss", dataKey: "date_naiss"},
    {title: "sexe", dataKey: "sexe"},
    {title: "profession Patient", dataKey: "profession_patient"},
    {title: "Situation Familiale", dataKey: "situation_fam"},
    {title: "Email Patient ", dataKey: "email_patient"},
    {title: "GRP Sangin ", dataKey: "grp_SANGIN"},
    
    
];

console.log("aaa");
for (var i = 0; i < this.patients.length; i++) { 
     
     let x :any= {nom_patient:this.patients[i].nom_patient,
                    prenom_patient:this.patients[i].prenom_patient,
                    cin:this.patients[i].cin,
                    date_naiss :this.patients[i].date_naiss,
                    sexe :this.patients[i].sex,
                    
                    profession_patient :this.patients[i].profession_patient,
                   situation_fam :this.patients[i].situation_fam,
                   email_patient :this.patients[i].email_patient,
                   grp_SANGIN :this.patients[i].grp_SANGIN,
                    
                
            
        
    };
      rows.push( x ); 
                       
}
 var displayDate = new Date().toLocaleDateString();
    doc.text(200, 25, 'Liste des Patients le : '+displayDate);
   doc.autoTable(columns, rows);
    doc.save("Liste des utilisateurs ("+displayDate+").pdf");
   
        }



 showDialogToAdd() {
        this.newPatient = true;
        this.patient = new Patient();
        this.displayDialog = true;
   }
    
    save() {


        if(this.newPatient)
            
                this.ajoutpatient();

        else
            
       this.modifier();     
   
        
        this.patient = null;
        this.displayDialog = false;
       // this.ngOnInit();
      // this.acteurs=[];
    //this.getuser();
 
    }
    
    delete() {
        
       // console.log(this.findSelectedActeurIndex());
        this.effacerpatient(this.patients[this.findSelectedPatientIndex()].id_patient);
      //  this.acteurs.splice(this.findSelectedActeurIndex(), 1);
        this.patient = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event: any) {
        this.newPatient = false;
        this.patient = this.clonePatient(event.data);
        this.displayDialog = true;
    }
    
    clonePatient(c: Patient): Patient {
        let patient = new Patient();
        for(let prop in c) {
            patient[prop] = c[prop];
        }
        return patient;
    }
    
    findSelectedPatientIndex(): number {
        return this.patients.indexOf(this.selectedPatient);
    }









}