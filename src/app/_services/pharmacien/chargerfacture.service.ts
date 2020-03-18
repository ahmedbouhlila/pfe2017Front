import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Dossier_patient } from "../../_models/index";
import { Details } from "../../_models/details";
import { OrdonnancePharmacien } from "../../_models/ordonnancePharmacien";


@Injectable()
export class ChargerFactureService {



    constructor(private http: Http) {
       


    }


chargerfacture(id_visite : number) : Observable <OrdonnancePharmacien[]>
{

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
headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });

let body = "id_visite="+id_visite;
console.log(body)
console.log("aaaa");
console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
return this.http.put('http://localhost:8089/validationOrdonnance',body ,options)
           .map((response: Response) => response.json())




}
}