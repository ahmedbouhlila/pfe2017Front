import { Component, OnInit , Input} from '@angular/core';

import { Medecin, Creneaux, Rendez_vous } from '../_models/index';
import { UserService } from '../_services/index';
import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
 import {Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';

import { ChargerRendez_VousService } from '../_services/secretaire/charger_rendez_vous.service';

const now = new Date();
@Component({
    moduleId: module.id,
    templateUrl: 'rendezVous.component.html',
   
  
})

export class RendezVousComponent implements OnInit {
    //users: User[] = [];
 modelmedecin: any = {};
 medecins: Medecin[] = [];
 creneaux: Creneaux[]=[];
id_patient : any;
modelcreneaux: any = {};
id_creneaux: number;
//
idcreneaux : any;
dateselectioner : any;
//
rendez_vous: Rendez_vous[]=[];

id_rendez_vous : any;
visible : boolean;
visible1 : boolean;
    constructor(private chargerrendez_vousservice: ChargerRendez_VousService,   private userService: UserService,private activatedRoute: ActivatedRoute, private ajoutrendez_vous: AjoutRendez_VousService,private router: Router ) {
 //this.id = params.get('id');
    activatedRoute.queryParams.subscribe(
      data => this.id_patient=data['id']);

      console.log(this.id_patient);
     }

    ngOnInit() {
        // get medecins from secure api end point
       this.userService.getMedecins()
           .subscribe(medecins => {
               this.medecins = medecins;
console.log(this.medecins);
console.log(medecins);
console.log("zzzzzzzzzzzzzzzzzzz");
console.log(this.id_patient);
this.visible=false;
        }
            );

this.chargerRendezVous();



}

chargerRendezVous(){

console.log("eeeeee")
    this.chargerrendez_vousservice.chargerrendez_vous(this.id_patient)
    .subscribe(  rendezvous1 => {

this.rendez_vous=rendezvous1;
 console.log(this.rendez_vous);
    } )



}




  model: any;
  date: {year: number, month: number};

  selectToday() {
   this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
console.log(this.model);



//
/*


let x = this.model.year+"-"+this.model.month+"-" +this.model.day;
//x=JSON.stringify(x);
console.log(x);
 this.userService.getcreneaux(this.modelmedecin.id_medecin,x)
           .subscribe(creneaux => {
               this.creneaux = creneaux;
      }
          
           ); 
 console.log("aaaa");
console.log(this.modelmedecin.id_medecin);
console.log(this.creneaux);
 console.log(this.model);
 console.log(this.date);
console.log("aaaa");
*/



}

GetCreneaux(){
let x;
this.creneaux=[];
this.visible=true;


console.log("aaaaaaaaaaaa");
this.dateselectioner=this.model;
x=this.model;
console.log(this.model)
console.log(x);
 this.userService.getcreneaux(this.modelmedecin.id_medecin,x)
           .subscribe(creneaux => {
               this.creneaux = creneaux;
console.log(creneaux);
if(creneaux.length>0 )
               {this.visible1=true;}
               else{
                   this.visible1=false;
               }
      }
          
           ); 
 console.log("aaaa");
console.log(this.modelmedecin.id_medecin);
console.log(this.creneaux);
 console.log(this.model);
 console.log(this.date);
console.log("aaaa");


}

prendreRendezvous(){

console.log("rrrrrrr");
//console.log(this.modelcreneaux);


 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.id_patient },
      fragment: 'anchor'
    };
//

let x = this.model;
console.log(x);
        this.ajoutrendez_vous.ajoutrendez_vous(this.id_creneaux,this.id_patient,x)
            .subscribe(result => {
                if (result === true) {
     console.log("rendez_vous pris");
//     this.router.navigate(['/rendezvous'], navigationExtras);
 //     this.router.navigateByUrl('/rendezvous', navigationExtras);
this.ngOnInit();
this.GetCreneaux()

  //this.router.navigate(['/homeAdmin']);

               } else {
                    
                }
                
            }
            
            
            );



}



  effacerRendezVous(){

 this.chargerrendez_vousservice.effacerrendez_vous(this.id_rendez_vous)
     .subscribe( resultat =>{
         console.log("bien");
         console.log(resultat);
if(resultat){
this.ngOnInit();
this.GetCreneaux()
console.log("ert")

}

     } )



  }   



}