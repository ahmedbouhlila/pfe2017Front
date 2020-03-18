import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Prescription1 } from "../../_models/prescription1";



@Injectable()
export class ChargerPrescriptionService {
  constructor(private http: Http) {
       


    }



chargerprescription(idOrdonnance: number) : Observable<Prescription1[]> {




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


headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });






let body ="idOrdonnance="+idOrdonnance; 
console.log("aaaa");
console.log(idOrdonnance);
return this.http.put('http://localhost:8089/chargerordonnancetype',body ,options)
           .map((response: Response) => response.json())





}




chargerprescriptionglobale(idOrdonnance: number) : Observable<Prescription1[]> {




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


headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });






let body ="idOrdonnanceglobale="+idOrdonnance; 
console.log("aaaa");
console.log(idOrdonnance);

return this.http.put('http://localhost:8089/chargerprescriptionglobale',body ,options)
           .map((response: Response) => response.json())





}



}