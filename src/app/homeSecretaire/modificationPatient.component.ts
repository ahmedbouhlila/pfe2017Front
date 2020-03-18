import { Component, OnInit , Input} from '@angular/core';


import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';


import { AjoutPatientService } from '../_services/secretaire/ajoutpatient.service';
import { Patient } from "../_models/patient";
@Component({
    moduleId: module.id,
    templateUrl: 'modificationPatient.component.html',
   
  
})

export class ModificationPatientComponent implements OnInit {
age1=78;

cin:number;
patients: Patient[]=[];
model: any = {};
 title="enter your role"
    value='admin'; 

nomPatient="nom";
prenomPatient="";
sex="";
age=0;
emailPatient="";
situationFam="";
professionPatient="";
cin1=0;
groupe='';
date_naiss="";
id_patient=0;
public situationFams =  [
    { value: 'Célibataire'  },
    { value:  'Marié(e)' },
    { value:  'Divorcé(e)' },
    { value:  'Veuf(ve)' },
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

public sexs = [
    { value: 'Masculin'  },
    { value:  'Feminin' }
];

     constructor( private ajoutpatientservice: AjoutPatientService,private identifierpatienttservice: IdentifierPatienttService,private activatedRoute: ActivatedRoute,private router: Router ) {
 //this.id = params.get('id');
    activatedRoute.queryParams.subscribe(
      data => this.cin=data['cin']);
console.log("gogo");
      console.log(this.cin);
      
     }


    
    

  


    ngOnInit() {

   this.patients=[];
   this.identifierpatienttservice.identifierpatient(this.cin)
    .subscribe(patients => {

this.patients=patients;
console.log("aaaaabbbbbb");
 console.log(patients);
 console.log("bbbbb");
 console.log(this.patients);
this.id_patient=this.patients[0].id_patient;
 console.log(this.patients[0].nom_patient);
this.nomPatient=this.patients[0].nom_patient;
console.log("eeeeeee");

this.value=this.patients[0].nom_patient;
this.prenomPatient=this.patients[0].prenom_patient;
this.sex=this.patients[0].sex;
this.age=this.patients[0].age;
console.log("age");
console.log(this.age);
this.emailPatient=this.patients[0].email_patient;
this.situationFam=this.patients[0].situation_fam;
this.professionPatient=this.patients[0].profession_patient;
this.cin1=this.patients[0].cin;
this.groupe=this.patients[0].grp_SANGIN;
this.date_naiss=this.patients[0].date_naiss;
console.log(this.cin1);
console.log(this.date_naiss);
console.log("eeee");




 }
   
      ); 

           }
        
    
 modifier(){

console.log("ahmed");

if(!this.model.nom_patient)
{
  this.model.nom_patient=this.nomPatient  ;
}

if(!this.model.prenom_patient)
{
  this.model.prenom_patient=this.prenomPatient;  
}
if(!this.model.cin)
{
  this.model.cin=this.cin1  ;
}
if(!this.model.date_naiss)
{
  this.model.date_naiss=this.date_naiss;  
}
if(!this.model.groupe)
{
  this.model.groupe=this.groupe; 
}
if(!this.model.sex)
{
  this.model.sex=this.sex  ;
}
if(!this.model.situation_fam)
{
  this.model.situation_fam=this.situationFam ; 
}
if(!this.model.email_patient)
{
  this.model.email_patient=this.emailPatient; 
}
if(!this.model.profession_patient)
{
  this.model.profession_patient=this.professionPatient; 
}
if(!this.model.age)
{
  this.model.age=this.age; 
}



this.model.id_patient=this.id_patient;

this.ajoutpatientservice.modifierpatient( this.model.id_patient, this.model.nom_patient, this.model.prenom_patient, this.model.sex, this.model.age, this.model.email_patient, this.model.situation_fam, this.model.profession_patient, this.model.cin, this.model.groupe, this.model.date_naiss )
     .subscribe(result => {
                if (result === true) {
     console.log("gggggggggggggggggggg");
    
   // this.router.navigate(['homeSecretaire/identification']);  
          this.router.navigateByUrl ('/homeSecretaire/identifier'); 
               }});

console.log(this.model);



 }


}