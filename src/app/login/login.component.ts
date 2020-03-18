import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';
import {Message} from 'primeng/primeng';

@Component({
    moduleId: module.id, 
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
msgs: Message[] = [];


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result1 => {
                if (result1 >0) {
     console.log("gggggggggggggggggggg");
     
this.msgs = [];
        
this.msgs.push({severity:'success', summary:'Autorisation', detail:'Authentification  reussie'});
     
     switch (result1)
  {
      
  case 1 :
    
    this.router.navigate(['/homeSecretaire']);
    
    break;
  case 2 :
   this.router.navigate(['/homeAdmin']);
    break;
case 3 :
   this.router.navigate(['/homeMedecin']);
    break;
    case 4 :
   this.router.navigate(['/homePharmacien']);
    break;

default : 
 this.router.navigate(['']);


;



}              
 
  //this.router.navigate(['/homeAdmin']);

               } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                   
                }
                
            },
            error => {
                    this.error = 'Username or password is incorrect';
                //    console.log(error); //gives an object at this point
                 this.msgs = [];
        this.msgs.push({severity:'error', summary:'Message erreur', detail:'Authentification non reussie'});
                console.log("errorrrr");
                this.loading = false;
                    this.model.username='';
                    this.model.password='';
                    this.router.navigate(['']);
                
            
        }
            
            
            );
    }






}
