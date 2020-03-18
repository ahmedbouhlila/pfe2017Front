import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layoutSecretaire.component.html'
})
export class FullLayoutSecretaireComponent implements OnInit {

  constructor(private router: Router) { }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

nom : string ; 
prenom : string ; 
 now = new Date();
role : string;
jour: any;
mois: any;
year : any;
  ngOnInit() {

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
this.nom=currentUser.nom;
this.prenom=currentUser.prenom;

this.year=this.now.getFullYear();
this.mois=this.now.getMonth() + 1;
this.jour=this.now.getDate();
let x =currentUser.role;
switch(x){
case 1 :
    this.role="Secretaire";
    break;
  case 2 :
   this.role="Admin";
    break;
case 3 :
   this.role="Medecin";
    break;
    case 4 :
   this.role="Pharmacien";
    break;
}

     this.router.navigate(['/homeSecretaire/acceuil']);
  }
}
