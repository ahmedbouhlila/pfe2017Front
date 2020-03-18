import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Patient } from "../../_models/patient";
import { OrdonnancePharmacien } from "../../_models/ordonnancePharmacien";
import { OrdonnancePharmacien1 } from "app/_models/OrdonnancePharmacien1";

@Injectable()
export class ValiderFactureService {
    

    constructor(private http: Http) {
       


    }




   validation( montant : number, id : number , details :  OrdonnancePharmacien1[]): Observable<Boolean> {
        

 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 

        let headers = new Headers();
 
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );




//console.log(role);

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

let body = details;
console.log(body);



return this.http.post('http://localhost:8089/savefacture/'+montant+'/'+id,body ,options)
           .map((response: Response) => {return true});
  }





   
}