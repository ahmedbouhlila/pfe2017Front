import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { ChargerRendez_VousService } from '../_services/medecin/chargerrendez_vous.service';
import { Router, NavigationExtras } from '@angular/router';
import { AjoutCreneauxService } from "../_services/medecin/ajoutcreneaux.service";
import { Creneaux } from "../_models/creneaux";
import { ChargerCreneauxService } from "../_services/medecin/creneaux.service";
import { Rendez_vousMedecin } from "../_models/rendez_vousmedecin";



@Component({
    moduleId: module.id,
    templateUrl: 'homeMedecin.component.html'
})

export class HomeMedecinComponent implements OnInit {
    rendez_vous: Rendez_vousMedecin[] = [];
 creneauxsemaine: Creneaux[]= [];
  creneauxsamedi: Creneaux[]= [];
 creneaux: Creneaux[]= [];
selected : Rendez_vousMedecin;
id_patient : number;
 model: any={};
  periodes = [
    { value: 'Lundi au Vendredi' , valeur : 1 },
    { value:  'Samedi', valeur : 0 }
];  
model1: any={};
displayDialog: boolean;
rendezVousConger: Rendez_vousMedecin[] = [];

events: any[]=[];
header:any;

rendezvousrecu : any []=[];   
   dialogVisible: boolean = false;
event1: any={};
visible: boolean=false;
    constructor(   private ajoutcreneauxservice:AjoutCreneauxService,private chargercreneauxservice:ChargerCreneauxService ,private chargerrendez_vousservice: ChargerRendez_VousService,private router :Router) { }

    ngOnInit() {
this.events=[];
 this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
      


this.creneauxsemaine= [];
  this.creneauxsamedi= [];
 this.creneaux= [];


this.chargercreneauxservice.chargercreneaux().subscribe(creneaux=>{
   this.creneaux=creneaux;
    for(let i = 0; i < this.creneaux.length; i++) {
    if(this.creneaux[i].periode==1)
      { 
         this.creneauxsemaine.push(this.creneaux[i]);}
         else{
              this.creneauxsamedi.push(this.creneaux[i]);
         }
 


    
    }

})



this.chargerrendez_vousservice.chargerrendez_vous1()
.subscribe(  rendez_vous=> {
this.rendez_vous=rendez_vous;
this.rendezvousrecu=rendez_vous;
console.log("init");
console.log(localStorage.getItem('currentUser'));
console.log(this.rendez_vous)
for(let i = 0; i < this.rendezvousrecu.length; i++) {


let x:any={}

if(this.rendezvousrecu[i].hdebut<10 )
{x.hdebut='0'+this.rendezvousrecu[i].hdebut;}
else{ x.hdebut=this.rendezvousrecu[i].hdebut;  }


if(this.rendezvousrecu[i].mdebut<10)
{
    if(this.rendezvousrecu[i].mdebut==0)
    {x.mdebut='00';}
    else{  x.mdebut='0'+this.rendezvousrecu[i].mdebut    }


}
else{      x.mdebut=this.rendezvousrecu[i].mdebut      }


if(this.rendezvousrecu[i].hfin<10 )
{x.hfin='0'+this.rendezvousrecu[i].hfin;}
else{ x.hfin=this.rendezvousrecu[i].hfin;  }


if(this.rendezvousrecu[i].mfin<10)
{
    if(this.rendezvousrecu[i].mfin==0)
    {x.mfin='00';}
    else{  x.mfin='0'+this.rendezvousrecu[i].mfin    }


}
else{      x.mfin=this.rendezvousrecu[i].mfin      }






let event= {
                "title": this.rendezvousrecu[i].nom_patient+" "+this.rendezvousrecu[i].prenom_patient,
                 "start":  this.rendezvousrecu[i].jour+"T"+x.hdebut+":"+x.mdebut+":00",  
                "end": this.rendezvousrecu[i].jour+"T"+x.hfin+":"+x.mfin+":00",
                 "idpatient":  this.rendezvousrecu[i].id_patient,
                 "idrdv": this.rendezvousrecu[i].idRdv,
        };

this.events.push(event);
console.log(String(this.rendez_vous[i].Hdebut));
console.log("aaaa");
console.log(this.rendez_vous[i].Hdebut);
console.log("bbbbb");
console.log(event);


}




}   )

        // get users from secure api end point
    //    this.userService.getUsers()
      //      .subscribe(users => {
        //        this.users = users;
           // }
          //  );
    }

//




 handleDayClick(event) {
     console.log("aaaaaaaaaaaaaaaaa");
       console.log(event);
        this.dialogVisible= false;
     this.event1={};    
}
    
    handleEventClick(e) {
let date:Date=new Date();

     
if( (date.getDay()==e.calEvent.start._d.getDay())&&(date.getMonth()==e.calEvent.start._d.getMonth() )&&( date.getFullYear()==e.calEvent.start._d.getFullYear() )  )
{

console.log("ahmedbouhlila");
this.dialogVisible=true;
this.event1.nom= e.calEvent.title;
this.event1.idpatient=e.calEvent.idpatient;
this.event1.idrdv=e.calEvent.idrdv;

}

 
console.log(this.event1);
console.log(e.calEvent.idpatient);
console.log(e.calEvent.idrdv);
console.log(e.calEvent.title);


    }
    






//
visite()
{

 let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.event1.idpatient,
'idrdv': this.event1.idrdv    
 },
      
      fragment: 'anchor'
    };
console.log("yyyyyy");
console.log(this.id_patient);
console.log(localStorage.getItem('currentUser'));

    // Navigate to the login page with extras
    this.router.navigate(['/homeMedecin/visite'], navigationExtras);


}





ajoutcreneaux() {
    console.log("voila");

this.ajoutcreneauxservice.ajoutcreneaux(this.model.hdebut,this.model.hfin,this.model.mdebut,this.model.mfin,this.model.periode)
 .subscribe(result => {
                if (result === true) {
     console.log("gggggggggggggggggggg");
  //  this.router.navigate(['/homeMedecin/homeMedecin']);
this.visible=false; 
this.ngOnInit();
this.model={}; 
              
 }});

}

add(){

this.visible=true;

}





}