import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Visite } from "../../_models/visite";



@Injectable()
export class AjoutVisiteService {
    

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }




  ajoutOrdonnance(  visite: Visite[]   ): Observable<boolean>{
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let username=  currentUser.username;
 let password= currentUser.password 
        let headers = new Headers();
 
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );

headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");

//
headers.append("contentType","application/json");

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body = visite; 

return this.http.post('http://localhost:8089//ajoutervisite', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  




  }



}