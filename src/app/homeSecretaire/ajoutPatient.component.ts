import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AjoutPatientService } from '../_services/secretaire/ajoutpatient.service';
import { DatePipe } from '@angular/common';
@Component({
    moduleId: module.id, 
    templateUrl: 'ajoutPatient.component.html'
})

export class AjoutPatientComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

public situationFam =  [
    { value: 'Célibataire'  },
    { value:  'Marié(e)' },
    { value:  'Divorcé(e)' },
    { value:  'Veuf(ve)' },
];
 



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



    constructor(
        private router: Router,
        private ajoutpatientservice: AjoutPatientService) { }

    ngOnInit() {
        // reset login status
     //   this.authenticationService.logout();
    }



    ajout() {
        console.log("voila");
        console.log(this.model.date_naiss);
        this.loading = true;
        this.ajoutpatientservice.ajoutpatient(this.model.nom_patient, this.model.prenom_patient, this.model.sex,this.model.age,this.model.email_patient,this.model.situation_fam,this.model.profession_patient,this.model.cin,this.model.groupe,this.model.date_naiss)
            .subscribe(result => {
                if (result === true) {
     console.log("gggggggggggggggggggg");
    
    this.router.navigate(['/homeSecretaire/acceuil']);
   



              
 
  //this.router.navigate(['/homeAdmin']);

               } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
                
            },
            error => {
                    this.error = 'Username or password is incorrect';
                //    console.log(error); //gives an object at this point
                console.log("errorrrr");
                this.loading = false;
                   this.model.nom_patient='';
                    this.model.prenom_patient='';
                    this.model.sex='';
                   this.model.age=0;
                   this.model.email_patient='';
                   this.model.situation_fam='';
                   this.model.profession_patient='';
                   this.model.cin=0;
                    this.router.navigate(['/homeSecretaire/ajoutpatient']);
                
            
        }
            
            
            );
    }
}
