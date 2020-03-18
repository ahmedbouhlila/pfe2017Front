import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id, 
    templateUrl: 'motdepassoublier.component.html',
    styleUrls: ['login.component.scss'],
})

export class MotDePassOublierComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';



    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

confirmer()
{
this.authenticationService.oublier(this.model.login,this.model.email)
.subscribe(   result=> {  
    console.log(result);
if ( result )
{   this.router.navigate(['']);      }
else{
console.log("erreur");

}

           }             )

}


}