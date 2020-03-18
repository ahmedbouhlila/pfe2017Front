import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Creneaux } from "../../_models/creneaux";

@Injectable()
export class ChargerCreneauxService {



    constructor(private http: Http) {
       


    }


chargercreneaux() : Observable <Creneaux[]>
{

let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 
let id_user =currentUser.id_user;
        let headers = new Headers();
 
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );
headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");


headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });

let body = "id_medecin="+id_user;

return this.http.put('http://localhost:8089/chargercreneaux',body ,options)
           .map((response: Response) => response.json())




}






}








