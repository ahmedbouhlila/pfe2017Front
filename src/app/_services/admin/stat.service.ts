import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Acteur } from "../../_models/acteur";
import { RendezVousAdmin } from "../../_models/rendezVousAdmin";

@Injectable()
export class StatService {
   
    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }


  getvisite(): Observable<number[]> {
        
       
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


headers.append("contentType","application/json");

        let options = new RequestOptions({ headers: headers });

        
        return this.http.get('http://localhost:8089/statvisites', options)
            .map((response: Response) => response.json());
    }
getfacture(): Observable<number[]> {
        
       
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


headers.append("contentType","application/json");

        let options = new RequestOptions({ headers: headers });

        
        return this.http.get('http://localhost:8089/statsfacture', options)
            .map((response: Response) => response.json());
    }


}