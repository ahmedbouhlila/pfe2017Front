import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Patient } from "../../_models/patient";
import { Facture } from "app/_models";

@Injectable()
export class IdentifierCaisseService {
    

    constructor(private http: Http) {
       


    }




  identifiercaisse( date1: string , date2:string ): Observable<any[]> {
        

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
headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 

let body = "date1="+date1+"&date2="+date2;
console.log(body);



return this.http.put('http://localhost:8089/caisse',body ,options)
           .map((response: Response) => response.json())
  }





   
}
