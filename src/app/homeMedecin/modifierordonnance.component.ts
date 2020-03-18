import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjoutCreneauxService } from "app/_services/medecin/ajoutcreneaux.service";
import { Rendez_vousMedecin, Prescription1, Medicament, Ordonnance } from "app/_models";
import { Conger } from "app/_models/conger";
import { UserService } from "app/_services";
import { AjoutOrdonnanceService } from "app/_services/medecin/ajoutOrdonnance.service";
import { ChargerOrdonnanceService } from "app/_services/medecin/chargerOrdonnance.service";
import { ChargerPrescriptionService } from "app/_services/medecin/chargerPrescription.service";

@Component({
  templateUrl: 'modifierordonnance.component.html'
})
export class ModifierOrdonnanceComponent implements OnInit {
  
   

  public formes =  [
    { value: 'Avant le repas'  },
    { value:  'Aprés le repas' },
    { value:  'Avant de dormir' },
    
];

prescription1: Prescription1[]=[];

    constructor(  private activatedRoute: ActivatedRoute,private chargerprescriptionservice:ChargerPrescriptionService,private chargerordonnanceservice: ChargerOrdonnanceService,private userservice: UserService , private router: Router,private ajoutordonnanceservice :AjoutOrdonnanceService) {


console.log("hoho");
    activatedRoute.queryParams.subscribe(
      data =>{ this.id=data['idordonnance'],
      this.ordonnance=data['nom']
    
  
});
this.chargerprescriptionservice.chargerprescription(this.id)
  .subscribe(
    prescription1=>{
        
        this.prescription1=prescription1;

    });


    }
 //this.id = params.get('id');




    
model: any = {};

medicaments: Medicament[]=[];
id: number;
ordonnance : string;
   displayDialog: boolean=false;
   prescription: Prescription1=new Prescription1();
   num: any;
  
 


   ngOnInit() {


this.userservice.getmedicament()
.subscribe(      
medicaments =>{

this.medicaments=medicaments;
console.log(this.medicaments);

}
);


        }



ajout(){
console.log(this.model);

let newprescription1 : any;



newprescription1={ nbrFoisMed : this.model.nbrFoisMed,

formMed : this.model.formMed,

quantMed : this.model.quantMed,
nom:  this.model.medicament,

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


ajoutordonnance() {
/*
if(this.prescription1.length!=0){

   this.prescription1[0].ordonnance=this.ordonnance;
this.ajoutordonnanceservice.ajoutOrdonnance(this.prescription1)
.subscribe(      
result =>{
    if(result)
{    console.log("c bonnnnnnnn");
    this.prescription1=[];
this.router.navigate(['/homeMedecin/ajoutordonnance']);
}
}
);



}
*/
this.ajoutordonnanceservice.modifierOrdonnance(this.prescription1,this.id,this.ordonnance)
.subscribe(

result =>{
    if(result)
{    console.log("c bonnnnnnnn");
    this.prescription1=[];
this.router.navigate(['/homeMedecin/ajoutordonnance']);
}
}

)

console.log(this.prescription1);
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





}