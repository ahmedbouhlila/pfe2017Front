import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Rendez_vousMedecin } from "../../_models/rendez_vousmedecin";

@Injectable()
export class ChargerRendez_VousService {



    constructor(private http: Http) {
       


    }


chargerrendez_vous() : Observable <Rendez_vousMedecin[]>
{


let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password ;
let id=currentUser.id_user;
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

let body = "id_medecin="+id;
console.log("azertyuio");
console.log(localStorage.getItem('currentUser'));
return this.http.put('http://localhost:8089/rendez_vousmedecin',body ,options)
           .map((response: Response) => response.json())








    
}




chargerrendez_vous1() : Observable <Rendez_vousMedecin[]>
{


let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password ;
let id=currentUser.id_user;
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

let body = "id_medecin="+id;
console.log("azertyuio");
console.log(localStorage.getItem('currentUser'));
return this.http.put('http://localhost:8089/rendez_vousmedecin1',body ,options)
           .map((response: Response) => response.json())








    
}





}