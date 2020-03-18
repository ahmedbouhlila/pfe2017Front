import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from "@angular/router";
import { Acteur } from "../_models/acteur";
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
declare var jsPDF: any;

@Component({
    moduleId: module.id,
    templateUrl: 'gestionUser.component.html'
})

export class GestionUserComponent implements OnInit {
    //users: User[] = [];
emptymessage : string ="Aucun resultat";

acteurs: Acteur[]=[];

 displayDialog: boolean;

//    car: Car = new PrimeCar();
  acteur : Acteur = new Acteur();  
   // selectedCar: Car;
    selectedActeur : Acteur;
   // newCar: boolean;
newActeur : boolean;
typeMedecin : any;
public sexs = [
    { value: 'Masculin'  },
    { value:  'Feminin' }
];

public professions = [
    { nom: 'Secretaire'},
    { nom:  'Medecin' },
    { nom: 'Pharmacien'  },
    { nom:  'Administrateur' },
    
];

public situationFam =  [
    { value: 'Célibataire'  },
    { value:  'Marié(e)' },
    { value:  'Divorcé(e)' },
    { value:  'Veuf(ve)' },
];


disabled: boolean = true;

displayDialog1: boolean=false;
    constructor(private userService: UserService,private router :Router,private ajoutuserservice: AjoutUserService) { }

    ngOnInit() {
        // get users from secure api end point
    //    this.userService.getUsers()
      //      .subscribe(users => {
        //        this.users = users;
           // }
          //  );

   this.getuser();

//this.acteur.type_medecin="";
    }

getuser(){

 this.userService.getActeurs()
       .subscribe(  acteurs =>  {
               
               for(let i = 0; i < acteurs.length; i++)
               {

                   let x : Acteur=new Acteur();
                  x.login = btoa(acteurs[i].login);
                  x.pass   = btoa (acteurs[i].pass );
                  x.id_user = acteurs[i].id_user;
                  x.activer=   acteurs[i].activer;
                    x.age=  acteurs[i].age;
                     x.cin=  acteurs[i].cin;
                     x.date_naiss=acteurs[i].date_naiss;
                      x.email=  btoa(acteurs[i].email);
                      x.etat_fam=acteurs[i].etat_fam;
                      x.nom = acteurs[i].nom;
                   x.prenom = acteurs[i].prenom;
                     x.profession=acteurs[i].profession;
                    x.sex=acteurs[i].sex;
                      x.tel=acteurs[i].tel;
                     x.type_medecin=acteurs[i].type_medecin;
                this.acteurs.push(x);      

               }
               
               
            } );

}



ajoutuser(){


this.router.navigate(['/ajoutuser']);


}
ajoutacteur(){
  this.ajoutuserservice.ajoutUser(this.acteur.nom,this.acteur.prenom,this.acteur.cin,this.acteur.age,this.acteur.date_naiss,this.acteur.sex,this.acteur.tel,this.acteur.profession,this.acteur.email,this.acteur.etat_fam,this.acteur.login,this.acteur.pass,this.acteur.type_medecin,this.acteur.activer)
           .subscribe(result => {
 this.acteurs=[];
     this.getuser();

           })

}


exportPDF() {
           let rows : Acteur[] = [];
            var doc = new jsPDF('p', 'pt');
            var columns = [
    {title: "Nom", dataKey: "nomUser"},
    {title: "Prenom", dataKey: "prenomUser"}, 
    {title: "cin", dataKey: "cin"}, 
    {title: "Date_naiss", dataKey: "date_naiss"},
    {title: "sexe", dataKey: "sexe"},
    {title: "tel", dataKey: "tel"},
    {title: "profession", dataKey: "profession"},
    {title: "etat_fam", dataKey: "etat_fam"},
    
    
];


for (var i = 0; i < this.acteurs.length; i++) { 
     
     let x :any= {nomUser:this.acteurs[i].nom,
                    prenomUser:this.acteurs[i].prenom,
                    cin:this.acteurs[i].cin,
                    date_naiss :this.acteurs[i].date_naiss,
                    sexe :this.acteurs[i].sex,
                    tel :this.acteurs[i].tel, 
                    profession :this.acteurs[i].profession,
                    etat_fam :this.acteurs[i].etat_fam,
                    
                
            
        
    };
      rows.push( x ); 
                       
}

console.log(rows)     
    var displayDate = new Date().toLocaleDateString();
    doc.text(200, 25, 'Liste des utilisateurs le : '+displayDate);
   doc.autoTable(columns, rows);
    doc.save("Liste des utilisateurs ("+displayDate+").pdf");
   
        }







modifier(){
    
   this.ajoutuserservice.modifierUser(this.acteur)
    .subscribe(result => {

 this.acteurs=[];
     this.getuser();

    })

}

effaceracteur(id_user:number)
{
this.ajoutuserservice.effacerUser(id_user)
.subscribe(result => {

 this.acteurs=[];
     this.getuser();

    })


}


 showDialogToAdd() {
        this.newActeur = true;
        this.acteur = new Acteur();
        this.displayDialog1 = true;


        


   }
    
    save() {
if(this.acteur.profession!="Medecin")
this.acteur.type_medecin="";


        if(this.newActeur)
            
                this.ajoutacteur();

        else
            
       this.modifier();     
   
        
        this.acteur = null;
        this.displayDialog = false;
       this.displayDialog1 = false;
       // this.ngOnInit();
      // this.acteurs=[];
    //this.getuser();
 
    }
    
    delete() {
       // console.log(this.findSelectedActeurIndex());
        this.effaceracteur(this.acteurs[this.findSelectedActeurIndex()].id_user);
      //  this.acteurs.splice(this.findSelectedActeurIndex(), 1);
        this.acteur = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event: any) {
        this.newActeur = false;
        this.acteur = this.cloneActeur(event.data);
        //
        this.acteur.login=  atob(this.acteur.login); 
         this.acteur.pass=  atob(this.acteur.pass);
          this.acteur.email=  atob(this.acteur.email); 
      


        //
        this.displayDialog = true;

    }
    
    cloneActeur(c: Acteur): Acteur {
        let acteur = new Acteur();
        for(let prop in c) {
            acteur[prop] = c[prop];
        }
        return acteur;
    }
    
    findSelectedActeurIndex(): number {
        return this.acteurs.indexOf(this.selectedActeur);
    }



toggleDisabled()
{

    if(this.acteur.profession=="Medecin")
    {this.disabled = !this.disabled;}
    else {

this.disabled=true;
this.acteur.type_medecin="";
    }

}






}